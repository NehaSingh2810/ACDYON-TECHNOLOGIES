import React from 'react';
import { Shield, Check, X, AlertTriangle, Cpu, Terminal, Scale, HelpCircle } from 'lucide-react';

const COMPARISON_ROWS = [
  {
    feature: 'TLS / JA4 Fingerprint Camouflage',
    puppeteer: 'Standard Node/Chromium ciphers (Flagged immediately by Cloudflare)',
    cheapProxies: 'None (Only hides IP, TLS signature is untouched)',
    pulseProxy: 'Dynamic JA4 cipher ordering matching real desktop browsers',
    isWin: true
  },
  {
    feature: 'Headless Browser Virtualization',
    puppeteer: 'Exposes navigator.webdriver = true unless patched manually',
    cheapProxies: 'Not included (Raw HTTP proxy only)',
    pulseProxy: 'WebGL, Canvas & AudioContext dynamic noise injection',
    isWin: true
  },
  {
    feature: 'DOM Markup Drift Handling',
    puppeteer: 'Crashes on selector change (.css-x1892 changed overnight)',
    cheapProxies: 'No DOM layer inspection',
    pulseProxy: 'Semantic AST distance heuristics & schema recovery',
    isWin: true
  },
  {
    feature: 'Traffic Pacing & Rate Limit Avoidance',
    puppeteer: 'Manual sleep() intervals (Easily clustered by bot engines)',
    cheapProxies: 'Random round-robin rotation (Burns subnets)',
    pulseProxy: 'Poisson distribution jitter + automatic per-host concurrency caps',
    isWin: true
  },
  {
    feature: 'Transparent Engineering Line (Where We Stop)',
    puppeteer: 'No built-in rate controls or circuit breakers',
    cheapProxies: 'Encourages aggressive scraping until IP range ban',
    pulseProxy: 'Strict robots.txt respect mode, ethical backoff & circuit breakers',
    isWin: true
  }
];

export default function HonestComparison() {
  return (
    <section id="comparison" style={{ padding: '5.5rem 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="app-container">
        
        <div className="section-header">
          <div className="badge badge-cyan">
            <Scale size={14} />
            <span>Honest Technical Comparison</span>
          </div>
          <h2>Why Existing Scrapers Break on Tuesday</h2>
          <p>
            No fake 5-star testimonials or fabricated enterprise logos. Just real architectural distinctions between standard tooling and resilient edge ingestion.
          </p>
        </div>

        {/* Comparison Table */}
        <div 
          className="glass-card" 
          style={{ 
            maxWidth: '1100px', 
            margin: '0 auto 3.5rem auto', 
            overflowX: 'auto',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <table 
            style={{ 
              width: '100%', 
              borderCollapse: 'collapse', 
              textAlign: 'left',
              minWidth: '680px'
            }}
          >
            <thead>
              <tr style={{ background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-subtle)' }}>
                <th style={{ padding: '1.2rem 1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', width: '28%' }}>ARCHITECTURAL DIMENSION</th>
                <th style={{ padding: '1.2rem 1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', width: '24%' }}>RAW PUPPETEER / PLAYWRIGHT</th>
                <th style={{ padding: '1.2rem 1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', width: '24%' }}>CHEAP PROXY ROTATORS</th>
                <th style={{ padding: '1.2rem 1.5rem', fontSize: '0.95rem', color: 'var(--accent-cyan)', fontWeight: 700, width: '24%' }}>PULSEPROXY GATEWAY</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, idx) => (
                <tr 
                  key={idx} 
                  style={{ 
                    borderBottom: '1px solid var(--border-subtle)',
                    background: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.01)' : 'transparent',
                    transition: 'background 0.2s ease'
                  }}
                >
                  <td style={{ padding: '1.1rem 1.5rem', fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                    {row.feature}
                  </td>
                  
                  <td style={{ padding: '1.1rem 1.5rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <X size={16} color="var(--accent-rose)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{row.puppeteer}</span>
                    </div>
                  </td>

                  <td style={{ padding: '1.1rem 1.5rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <AlertTriangle size={16} color="var(--accent-amber)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{row.cheapProxies}</span>
                    </div>
                  </td>

                  <td style={{ padding: '1.1rem 1.5rem', fontSize: '0.88rem', color: 'var(--text-primary)', background: 'rgba(0, 242, 254, 0.04)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <Check size={16} color="var(--accent-emerald)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ fontWeight: 600 }}>{row.pulseProxy}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* The Engineering Line & Principles */}
        <div 
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          <div className="glass-card" style={{ padding: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--accent-cyan)' }}>
              <Shield size={20} />
              Where We Draw the Line
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              We do not bypass user authentication barriers, access private user records, or facilitate DDoS attacks. PulseProxy is strictly an ingestion resilience layer designed to extract publicly indexable data without brittle bot-blocking false positives.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--accent-emerald)' }}>
              <Cpu size={20} />
              Zero-Noise Engineering
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              No marketing buzzwords like "superhuman AI scraper". Our stack is deterministic: JA4 TLS normalization, isolated Chromium memory profiles, and AST tree-diffing algorithms that any systems engineer can verify and audit.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
