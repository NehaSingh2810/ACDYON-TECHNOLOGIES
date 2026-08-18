import React from 'react';
import { Shield, Check, X, Scale } from 'lucide-react';

const COMPARISON_ROWS = [
  {
    feature: 'TLS Fingerprint Simulation',
    puppeteer: 'Standard Node/Chromium ciphers',
    cheapProxies: 'None (Raw IP proxy only)',
    pulseProxy: 'Dynamic JA4 cipher ordering matching browser profiles',
    isWin: true
  },
  {
    feature: 'Headless Environment Hardening',
    puppeteer: 'Exposes navigator.webdriver = true',
    cheapProxies: 'Not included (Raw HTTP proxy)',
    pulseProxy: 'WebGL & Canvas dynamic noise simulation',
    isWin: true
  },
  {
    feature: 'DOM Markup Drift Handling',
    puppeteer: 'Fails on selector change',
    cheapProxies: 'No DOM layer inspection',
    pulseProxy: 'Semantic AST distance heuristics & schema recovery',
    isWin: true
  },
  {
    feature: 'Traffic Pacing & Rate Limit Avoidance',
    puppeteer: 'Manual fixed sleep() intervals',
    cheapProxies: 'Random round-robin rotation',
    pulseProxy: 'Stochastic Poisson distribution jitter & host concurrency caps',
    isWin: true
  },
  {
    feature: 'Pipeline Observability',
    puppeteer: 'Opaque black-box errors',
    cheapProxies: 'Only logs HTTP status codes',
    pulseProxy: 'Granular 5-stage waterfall telemetry',
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
            <span>QUALITATIVE COMPARISON</span>
          </div>
          <h2>Architectural Differences</h2>
          <p>
            An objective comparison between traditional scraping scripts, raw proxy rotators, and the PulseProxy prototype approach.
          </p>
        </div>

        {/* Comparison Table */}
        <div 
          className="glass-card" 
          style={{ 
            maxWidth: '1100px', 
            margin: '0 auto 2rem auto', 
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
                <th style={{ padding: '1.2rem 1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', width: '24%' }}>RAW SCRIPT / PUPPETEER</th>
                <th style={{ padding: '1.2rem 1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', width: '24%' }}>RAW PROXY ROTATORS</th>
                <th style={{ padding: '1.2rem 1.5rem', fontSize: '0.95rem', color: 'var(--accent-cyan)', fontWeight: 700, width: '24%' }}>PULSEPROXY PROTOTYPE</th>
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
                      <X size={16} color="var(--accent-rose)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{row.cheapProxies}</span>
                    </div>
                  </td>

                  <td style={{ padding: '1.1rem 1.5rem', fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <Check size={16} color="var(--accent-emerald)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{row.pulseProxy}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Honest Prototype Note */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <em>Prototype note: PulseProxy is an interactive assessment prototype; production-scale infrastructure is outside this submission's scope.</em>
        </div>

      </div>
    </section>
  );
}
