import React from 'react';
import { AlertCircle, RefreshCcw, Eye, ShieldCheck } from 'lucide-react';

export default function WhyPulseProxy() {
  const problems = [
    {
      problem: 'Brittle Markup Selectors',
      issue: 'Frontend teams rename CSS classes and change DOM trees overnight, breaking static scraper scripts.',
      solution: 'PulseProxy uses semantic tree-distance heuristics to locate target data nodes even after DOM mutations.',
      icon: <RefreshCcw size={22} color="var(--accent-cyan)" />
    },
    {
      problem: 'Silent Pipeline Failures',
      issue: 'Traditional HTTP clients return HTTP 200 OK with CAPTCHA HTML or empty payloads, going unnoticed for hours.',
      solution: 'Built-in payload schema validation and confidence scoring ensure bad extractions flag alerts instantly.',
      icon: <AlertCircle size={22} color="var(--accent-amber)" />
    },
    {
      problem: 'Black-Box Ingestion Debugging',
      issue: 'When requests fail, developers struggle to diagnose whether IP subnet blocking, TLS fingerprinting, or DOM drift occurred.',
      solution: 'Granular 5-stage waterfall telemetry breaks down latency and status at every hop in real-time.',
      icon: <Eye size={22} color="var(--accent-violet)" />
    }
  ];

  return (
    <section id="why" style={{ padding: '5rem 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="app-container">
        
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
            ENGINEERED FOR RESILIENCE
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>
            Built for developers who can't afford brittle pipelines
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: 0 }}>
            Addressing the three root causes of web ingestion failure before they impact production.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          {problems.map((item, index) => (
            <div key={index} className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ background: 'var(--bg-glass-card)', border: '1px solid var(--border-subtle)', padding: '0.5rem', borderRadius: '8px' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', margin: 0 }}>{item.problem}</h3>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-amber)', marginBottom: '0.25rem' }}>
                  The Challenge
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {item.issue}
                </p>
              </div>

              <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                <p style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-emerald)', marginBottom: '0.25rem' }}>
                  PulseProxy Solution
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5, margin: 0 }}>
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
