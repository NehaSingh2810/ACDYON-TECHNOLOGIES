import React, { useState } from 'react';
import { Play, RotateCcw, Copy, Check, ShieldCheck, AlertTriangle, Terminal, Code2, Globe, Clock, Layers, Zap, SlidersHorizontal, CheckCircle2 } from 'lucide-react';

const PRESETS = [
  {
    id: 'job_board',
    label: 'Public Job Feed Demo',
    url: 'https://demo.sandbox.internal/jobs/public-feed.json',
    protection: 'Cloudflare Turnstile + JA3 Fingerprint'
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce Catalog Demo',
    url: 'https://demo.sandbox.internal/catalog/products.json',
    protection: 'Akamai Bot Manager + Canvas Trap'
  },
  {
    id: 'custom',
    label: 'Client-Rendered SPA Demo',
    url: 'https://demo.sandbox.internal/spa/analytics-board',
    protection: 'PerimeterX Behavioral Jitter'
  }
];

export default function LiveSandbox() {
  const [selectedPreset, setSelectedPreset] = useState('job_board');
  const [targetUrl, setTargetUrl] = useState(PRESETS[0].url);
  const [tlsCamouflage, setTlsCamouflage] = useState(true);
  const [stealthMode, setStealthMode] = useState(true);
  const [smartFallback, setSmartFallback] = useState(true);
  
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('payload'); // 'payload' | 'telemetry' | 'waterfall'
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState(null);
  const [stepIndex, setStepIndex] = useState(-1);

  const handleSelectPreset = (preset) => {
    setSelectedPreset(preset.id);
    setTargetUrl(preset.url);
    setResult(null);
    setStepIndex(-1);
  };

  const handleRunSimulation = async () => {
    setLoading(true);
    setResult(null);
    setStepIndex(0);

    // Visual step sequence
    const interval = setInterval(() => {
      setStepIndex(prev => {
        if (prev < 4) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 180);

    try {
      const response = await fetch('/api/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: targetUrl,
          targetType: selectedPreset,
          stealthMode,
          tlsCamouflage,
          smartFallback
        })
      });

      if (!response.ok) throw new Error('Simulation failed');
      const data = await response.json();
      
      clearInterval(interval);
      setStepIndex(5);
      setResult(data);
    } catch (err) {
      // Fallback local simulation in case backend is not reached
      clearInterval(interval);
      setStepIndex(5);
      const fallbackData = {
        success: true,
        metrics: {
          totalDurationMs: stealthMode ? 342 : 145,
          bypassProbability: stealthMode && tlsCamouflage ? "99.4%" : "41.2%",
          proxyIp: "198.51.100.84",
          ja4Fingerprint: `t13d090100_d14_${Math.random().toString(36).substring(2, 8)}`,
          headersCaptured: {
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            "sec-ch-ua": "\"Chromium\";v=\"122\", \"Google Chrome\";v=\"122\""
          }
        },
        pipelineSteps: [
          { name: "DNS Resolution & Edge Routing", durationMs: 18, status: "ok", detail: "Routed to US-East edge sandbox node" },
          { name: "Residential Proxy Allocation", durationMs: 42, status: "ok", detail: "Assigned peer IP 198.51.100.84" },
          { name: "TLS / JA4 Handshake Camouflage", durationMs: 65, status: tlsCamouflage ? "ok" : "warning", detail: tlsCamouflage ? "JA4 client hello matches real Chrome 122" : "Unmasked TLS cipher signature" },
          { name: "Headless Browser Profile Emulation", durationMs: 95, status: stealthMode ? "ok" : "failed", detail: stealthMode ? "WebGL & AudioContext noise applied" : "navigator.webdriver = true exposed" },
          { name: "DOM Extraction & Semantic AST Parser", durationMs: 60, status: "ok", detail: smartFallback ? "Selectors parsed with fallback resilience" : "Raw CSS query evaluated" }
        ],
        scrapedPayload: {
          target: "Public Job Board Demo Feed",
          detectedSecurityLayer: "Cloudflare Turnstile + TLS Fingerprinting",
          extractedItemsCount: 2,
          items: [
            {
              id: "job-89104",
              title: "Senior Full Stack Engineer (Distributed Systems)",
              company: "Acdyon Technologies",
              location: "Remote / Hybrid",
              salaryRange: "$140,000 - $185,000 + Equity",
              tags: ["React", "Node.js", "Distributed Systems"],
              fingerprintStatus: "Bypassed via JA4 TLS Camouflage",
              domConfidenceScore: 0.99
            },
            {
              id: "job-89105",
              title: "Systems Infrastructure Lead",
              company: "Apex Data Labs",
              location: "San Francisco, CA",
              salaryRange: "$165,000 - $210,000",
              tags: ["Rust", "Proxies", "Puppeteer/Playwright"],
              fingerprintStatus: "Bypassed via Chrome 122 Header Profile",
              domConfidenceScore: 0.98
            }
          ]
        }
      };
      setResult(fallbackData);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    navigator.clipboard.writeText(JSON.stringify(result.scrapedPayload, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sandbox" style={{ padding: '3rem 0 5rem 0', position: 'relative' }}>
      <div className="app-container">
        
        {/* Header Badge */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
            <SlidersHorizontal size={14} />
            <span>LIVE PRODUCT PREVIEW</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginBottom: '0.75rem' }}>
            Explore the pipeline yourself — no signup required
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '1rem' }}>
            Test our resilient ingestion pipeline against simulated anti-bot conditions. Toggle strategy layers and observe step-by-step telemetry in real-time.
          </p>
        </div>

        {/* The Sandbox Card */}
        <div 
          className="glass-card" 
          style={{ 
            maxWidth: '1140px', 
            margin: '0 auto', 
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)'
          }}
        >
          {/* Top Bar / Presets */}
          <div 
            style={{ 
              padding: '1.25rem 1.5rem', 
              background: 'var(--bg-secondary)', 
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Demo Targets:
              </span>
              {PRESETS.map(p => (
                <button
                  key={p.id}
                  onClick={() => handleSelectPreset(p)}
                  className={`btn btn-sm ${selectedPreset === p.id ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ fontSize: '0.82rem', padding: '0.35rem 0.75rem' }}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Target Security:</span>
              <span className="badge" style={{ fontSize: '0.75rem', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-violet)', borderColor: 'rgba(139, 92, 246, 0.3)' }}>
                {PRESETS.find(p => p.id === selectedPreset)?.protection}
              </span>
            </div>
          </div>

          {/* Interactive URL Input & Switch Controls */}
          <div style={{ padding: '1.5rem', background: 'var(--bg-card)' }}>
            
            {/* URL Input Bar */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              <div 
                style={{ 
                  flex: '1 1 300px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem',
                  background: 'var(--bg-primary)',
                  padding: '0.7rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <Globe size={18} color="var(--accent-cyan)" />
                <input 
                  type="text" 
                  value={targetUrl} 
                  onChange={e => setTargetUrl(e.target.value)}
                  placeholder="https://example.com/target-data"
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <button 
                onClick={handleRunSimulation}
                disabled={loading}
                className="btn btn-primary"
                style={{ padding: '0.75rem 1.5rem', minWidth: '170px' }}
              >
                {loading ? (
                  <>
                    <RotateCcw size={16} className="spin-animation" />
                    <span>Executing Pipeline...</span>
                  </>
                ) : (
                  <>
                    <Play size={16} fill="#050b14" />
                    <span>Run Pipeline</span>
                  </>
                )}
              </button>
            </div>

            {/* Strategy Toggles */}
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
                gap: '1rem',
                padding: '1rem',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {/* Toggle 1 */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>JA4 TLS Camouflage</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Spoof cipher suites & extension order</div>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" checked={tlsCamouflage} onChange={e => setTlsCamouflage(e.target.checked)} />
                  <span className="slider"></span>
                </label>
              </div>

              {/* Toggle 2 */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Stealth Headless Mask</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>WebGL/Canvas GPU noise injection</div>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" checked={stealthMode} onChange={e => setStealthMode(e.target.checked)} />
                  <span className="slider"></span>
                </label>
              </div>

              {/* Toggle 3 */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Semantic AST Fallback</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Resilient heuristic parser on markup drift</div>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" checked={smartFallback} onChange={e => setSmartFallback(e.target.checked)} />
                  <span className="slider"></span>
                </label>
              </div>
            </div>

          </div>

          {/* Pipeline Step Progress Animation */}
          {(loading || stepIndex >= 0) && (
            <div style={{ padding: '1rem 1.5rem', background: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  {loading ? 'Pipeline in flight...' : 'Execution completed'}
                </span>
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                  {result ? `${result.metrics.totalDurationMs}ms total` : 'Processing...'}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', height: '6px', borderRadius: '3px', overflow: 'hidden', background: 'var(--bg-tertiary)' }}>
                {[0, 1, 2, 3, 4].map(idx => (
                  <div 
                    key={idx}
                    style={{
                      flex: 1,
                      background: stepIndex >= idx 
                        ? 'linear-gradient(90deg, #00f2fe, #4facfe)' 
                        : 'transparent',
                      transition: 'background 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Results Output Section */}
          <div style={{ background: '#070a10', minHeight: '320px', display: 'flex', flexDirection: 'column' }}>
            
            {/* Output Tab Header */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '0.75rem 1.25rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(10, 14, 22, 0.95)',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}
            >
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => setActiveTab('payload')}
                  style={{
                    background: activeTab === 'payload' ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                    color: activeTab === 'payload' ? 'var(--accent-cyan)' : 'var(--text-muted)',
                    border: 'none',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '4px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Code2 size={14} />
                  <span>Extracted JSON Payload</span>
                </button>

                <button
                  onClick={() => setActiveTab('telemetry')}
                  style={{
                    background: activeTab === 'telemetry' ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                    color: activeTab === 'telemetry' ? 'var(--accent-cyan)' : 'var(--text-muted)',
                    border: 'none',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '4px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <ShieldCheck size={14} />
                  <span>Evasion & JA4 Telemetry</span>
                </button>

                <button
                  onClick={() => setActiveTab('waterfall')}
                  style={{
                    background: activeTab === 'waterfall' ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                    color: activeTab === 'waterfall' ? 'var(--accent-cyan)' : 'var(--text-muted)',
                    border: 'none',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '4px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Clock size={14} />
                  <span>Pipeline Waterfall</span>
                </button>
              </div>

              {result && activeTab === 'payload' && (
                <button
                  onClick={copyToClipboard}
                  className="btn btn-ghost btn-sm"
                  style={{ fontSize: '0.78rem', padding: '0.25rem 0.6rem', color: 'var(--text-secondary)' }}
                >
                  {copied ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied JSON' : 'Copy JSON'}</span>
                </button>
              )}
            </div>

            {/* Output Body Content */}
            <div style={{ padding: '1.25rem', flex: 1 }}>
              {!result && !loading && (
                <div style={{ textAlign: 'center', padding: '3.5rem 1rem', color: 'var(--text-muted)' }}>
                  <Terminal size={36} style={{ margin: '0 auto 1rem auto', opacity: 0.4 }} />
                  <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>Pipeline idle. Click <strong>"Run Pipeline"</strong> above to launch the simulation.</p>
                  <p style={{ fontSize: '0.8rem' }}>Interactive Demo — Runs against simulated edge endpoints for low-risk evaluation.</p>
                </div>
              )}

              {loading && !result && (
                <div style={{ textAlign: 'center', padding: '3.5rem 1rem', color: 'var(--accent-cyan)' }}>
                  <RotateCcw size={32} className="spin-animation" style={{ margin: '0 auto 1rem auto' }} />
                  <p style={{ fontSize: '0.95rem', fontFamily: 'var(--font-mono)' }}>Bypassing anti-bot perimeter & negotiating TLS cipher suite...</p>
                </div>
              )}

              {result && activeTab === 'payload' && (
                <pre 
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.84rem', 
                    color: '#38bdf8', 
                    margin: 0, 
                    overflowX: 'auto',
                    lineHeight: 1.6
                  }}
                >
                  {JSON.stringify(result.scrapedPayload, null, 2)}
                </pre>
              )}

              {result && activeTab === 'telemetry' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Bypass Confidence</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-emerald)', marginTop: '0.25rem' }}>
                      {result.metrics.bypassProbability}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                      {stealthMode && tlsCamouflage ? 'Zero CAPTCHAs triggered' : 'High detection probability'}
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Generated JA4 TLS Fingerprint</div>
                    <div style={{ fontSize: '0.92rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', marginTop: '0.35rem', wordBreak: 'break-all' }}>
                      {result.metrics.ja4Fingerprint}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                      Cipher suite spoofing Chrome 122
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Allocated Residential Proxy</div>
                    <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-mono)', color: '#f8fafc', marginTop: '0.25rem' }}>
                      {result.metrics.proxyIp}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                      Autonomous IP rotation on rate-limit trigger
                    </div>
                  </div>
                </div>
              )}

              {result && activeTab === 'waterfall' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {result.pipelineSteps.map((step, idx) => (
                    <div 
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.65rem 0.9rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '6px',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        fontSize: '0.84rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ color: step.status === 'ok' ? 'var(--accent-emerald)' : 'var(--accent-amber)' }}>
                          {step.status === 'ok' ? <CheckCircle2 size={15} /> : <AlertTriangle size={15} />}
                        </span>
                        <span style={{ fontWeight: 600, color: '#f8fafc' }}>{step.name}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>— {step.detail}</span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '0.8rem' }}>
                        {step.durationMs}ms
                      </span>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spin-animation {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </section>
  );
}
