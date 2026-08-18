import React, { useState } from 'react';
import { Layers, ShieldCheck, Cpu, GitBranch, RefreshCw, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const NODES = [
  {
    id: 'layer1',
    step: '01',
    title: 'Poisson Traffic Pacing',
    subtitle: 'Behavioral Jitter Engine',
    icon: Zap,
    color: '#00f2fe',
    description: 'Human users do not make requests at rigid 500ms intervals. PulseProxy models traffic intervals using Poisson probability distributions and randomized micro-pauses (300ms–1400ms) to evade Cloudflare behavioral anomaly scoring.',
    specs: [
      'Poisson stochastic interval distribution',
      'Dynamic mouse vector bezier curves',
      'Per-domain IP concurrency quotas',
      'Automatic exponential backoff on HTTP 429'
    ]
  },
  {
    id: 'layer2',
    step: '02',
    title: 'JA4 TLS Camouflage',
    subtitle: 'Packet-Level Handshake Masking',
    icon: ShieldCheck,
    color: '#4facfe',
    description: 'Standard Node.js or Python `requests` transmit distinct OpenSSL cipher suites and extension orders that bot-management WAFs flag before the HTTP body is even evaluated. Our edge nodes dynamically negotiate JA4-compliant TLS 1.3 handshakes that mirror genuine Chrome 122+ binaries.',
    specs: [
      'Dynamic JA3/JA4 cipher suite negotiation',
      'HTTP/2 SETTINGS & WINDOW_UPDATE frame replication',
      'Strict Sec-CH-UA client hint synchronization',
      'Zero OpenSSL fingerprint leakage'
    ]
  },
  {
    id: 'layer3',
    step: '03',
    title: 'GPU & Canvas Noise Injection',
    subtitle: 'Headless Chromium Hardening',
    icon: Cpu,
    color: '#8b5cf6',
    description: 'Modern bot detection scripts render invisible 2D/3D canvas geometry and measure subtle pixel hash differences. PulseProxy runs isolated headless instances with dynamic shader noise that creates non-identifiable, non-clustered browser fingerprints without breaking page rendering.',
    specs: [
      'WebGL ANGLE vendor/renderer spoofing',
      'AudioContext oscillator float32 noise perturbation',
      'navigator.webdriver / window.chrome property virtualization',
      'Native font list emulation per OS profile'
    ]
  },
  {
    id: 'layer4',
    step: '04',
    title: 'Semantic AST Fallback',
    subtitle: 'DOM Drift Self-Healing',
    icon: RefreshCw,
    color: '#10b981',
    description: 'When target platforms ship A/B tests or obfuscate class names (`.css-19v82j` -> `.css-x891k`), strict CSS queries fail silently. Our AST fallback engine uses semantic tree distance, text proximity heuristics, and schema-matching to locate target attributes reliably.',
    specs: [
      'AST-based relative element proximity heuristics',
      'JSON-LD / microdata schema auto-extraction fallback',
      'Drift alert webhooks sent to monitoring pipelines',
      '99.6% field extraction survival across UI changes'
    ]
  }
];

export default function ArchitectureVisualizer() {
  const [selectedNode, setSelectedNode] = useState(NODES[0]);

  return (
    <section id="architecture" style={{ padding: '5.5rem 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="app-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-cyan">
            <Layers size={14} />
            <span>Systems Thinking & Resilience</span>
          </div>
          <h2>Engineered for Continuous Ingestion</h2>
          <p>
            Scrapers fail when architectures rely on fragile hacks. Here is how PulseProxy insulates your extraction pipeline from edge to DOM.
          </p>
        </div>

        {/* Interactive Architecture Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          
          {/* Node Selection List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {NODES.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNode.id === node.id;
              
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className="glass-card"
                  style={{
                    padding: '1.25rem 1.5rem',
                    cursor: 'pointer',
                    borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                    background: isSelected ? 'var(--bg-tertiary)' : 'var(--bg-card)',
                    boxShadow: isSelected ? '0 0 25px rgba(0, 242, 254, 0.15)' : 'none',
                    transform: isSelected ? 'translateX(6px)' : 'none',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div 
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '10px', 
                        background: `${node.color}18`, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: node.color,
                        border: `1px solid ${node.color}35`
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{node.step}</span>
                        <h3 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 700 }}>{node.title}</h3>
                      </div>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>{node.subtitle}</p>
                    </div>
                  </div>

                  <ArrowRight size={16} color={isSelected ? 'var(--accent-cyan)' : 'var(--text-muted)'} />
                </div>
              );
            })}
          </div>

          {/* Deep-Dive Spec Card for Selected Node */}
          <div 
            className="glass-card" 
            style={{ 
              padding: '2rem', 
              border: '1px solid var(--border-subtle)',
              background: 'var(--bg-card)',
              position: 'sticky',
              top: '6rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div 
                style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '12px', 
                  background: `${selectedNode.color}20`, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: selectedNode.color,
                  border: `1px solid ${selectedNode.color}40`
                }}
              >
                {React.createElement(selectedNode.icon, { size: 24 })}
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                  STAGE {selectedNode.step} SPECIFICATION
                </span>
                <h3 style={{ fontSize: '1.4rem', margin: 0 }}>{selectedNode.title}</h3>
              </div>
            </div>

            <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              {selectedNode.description}
            </p>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Engineering Guardrails & Specifications:
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {selectedNode.specs.map((spec, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
