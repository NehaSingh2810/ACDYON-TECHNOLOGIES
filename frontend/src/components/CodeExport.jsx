import React, { useState } from 'react';
import { Code2, Copy, Check, Terminal, Shield, Zap } from 'lucide-react';

const SNIPPETS = {
  nodejs: `import { PulseProxy } from '@pulseproxy/sdk';

// Initialize zero-config client
const client = new PulseProxy({
  apiKey: process.env.PULSEPROXY_KEY,
  region: 'auto', // US-East, EU-Central, AP-Southeast
});

async function ingestJobPostings() {
  const session = await client.createSession({
    target: 'https://linkedin.com/jobs/search?keywords=frontend',
    stealth: {
      tlsCamouflage: 'chrome-122',
      canvasNoise: true,
      webGLSpoof: true,
    },
    resilience: {
      autoRotateOn429: true,
      maxRetries: 3,
      semanticAstFallback: true,
    },
  });

  // Extract structured listings with guaranteed bypass
  const { data, metrics } = await session.extract({
    schema: {
      title: 'string',
      company: 'string',
      salary: 'string?',
      tags: 'string[]',
    },
  });

  console.log(\`Extracted \${data.length} listings in \${metrics.durationMs}ms\`);
  return data;
}`,

  python: `from pulseproxy import PulseEngine, StealthConfig

# Initialize Python Ingestion Session
engine = PulseEngine(api_key="pp_live_sec_89104")

response = engine.fetch(
    url="https://linkedin.com/jobs/search?keywords=distributed-systems",
    stealth=StealthConfig(
        tls_fingerprint="ja4_chrome_122",
        canvas_jitter=True,
        poisson_delay_range=(0.4, 1.2)
    ),
    ast_fallback=True
)

# Parsed schema with automatic selector self-healing
jobs = response.to_json(schema="job_listing_v2")
print(f"Ingested {len(jobs)} records without bot triggers.")`,

  curl: `# Direct HTTPS Proxy Connection via Dynamic Edge Gateway
curl -x "https://edge.pulseproxy.io:8080" \\
  -U "api_key:pp_live_sec_89104" \\
  -H "X-Pulse-Stealth: high" \\
  -H "X-Pulse-TLS-Camouflage: ja4-chrome-122" \\
  -H "X-Pulse-AST-Fallback: true" \\
  "https://linkedin.com/jobs/search?keywords=react-node"`
};

export default function CodeExport() {
  const [lang, setLang] = useState('nodejs');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SNIPPETS[lang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="app-container">
        
        <div className="section-header">
          <div className="badge badge-cyan">
            <Code2 size={14} />
            <span>Developer Experience</span>
          </div>
          <h2>Integrate in 3 Lines of Code</h2>
          <p>
            Drop PulseProxy into your existing Puppeteer, Playwright, Node.js, Python, or cURL pipelines. No infrastructure rewrites needed.
          </p>
        </div>

        <div 
          className="glass-card" 
          style={{ 
            maxWidth: '920px', 
            margin: '0 auto', 
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.45)'
          }}
        >
          {/* Language Switcher Bar */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              padding: '0.75rem 1.25rem', 
              background: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--border-subtle)'
            }}
          >
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => setLang('nodejs')}
                className={`btn btn-sm ${lang === 'nodejs' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ fontSize: '0.8rem', padding: '0.35rem 0.8rem' }}
              >
                Node.js / TypeScript
              </button>
              <button
                onClick={() => setLang('python')}
                className={`btn btn-sm ${lang === 'python' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ fontSize: '0.8rem', padding: '0.35rem 0.8rem' }}
              >
                Python
              </button>
              <button
                onClick={() => setLang('curl')}
                className={`btn btn-sm ${lang === 'curl' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ fontSize: '0.8rem', padding: '0.35rem 0.8rem' }}
              >
                cURL Proxy Hop
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              {copied ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Snippet'}</span>
            </button>
          </div>

          {/* Code Window */}
          <div style={{ padding: '1.5rem', background: '#070a11' }}>
            <pre 
              style={{ 
                margin: 0, 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.88rem', 
                lineHeight: 1.7, 
                color: '#e2e8f0', 
                overflowX: 'auto' 
              }}
            >
              <code>{SNIPPETS[lang]}</code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
}
