import React from 'react';
import { Search, ShieldAlert, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Detect',
      subtitle: 'Understand the request & target environment',
      description: 'Analyze incoming request parameters, identify protection mechanisms, and select appropriate TLS and browser fingerprint profiles.',
      icon: <Search size={22} color="var(--accent-cyan)" />
    },
    {
      step: '02',
      title: 'Adapt',
      subtitle: 'Switch strategies when conditions change',
      description: 'When DOM structure changes or selectors become brittle, smart AST tree-diffing algorithms locate target data nodes automatically.',
      icon: <Cpu size={22} color="var(--accent-violet)" />
    },
    {
      step: '03',
      title: 'Extract',
      subtitle: 'Return predictable structured payloads',
      description: 'Transform raw response envelopes into clean, typed JSON schemas with confidence scores and execution telemetry.',
      icon: <CheckCircle2 size={22} color="var(--accent-emerald)" />
    }
  ];

  return (
    <section id="how-it-works" style={{ padding: '5rem 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="app-container">
        
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
            SIMPLIFIED PIPELINE
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>
            How PulseProxy handles a changing web
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: 0 }}>
            Three simple steps to transition from fragile one-off scrapers to reliable data pipelines.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          {steps.map((item, index) => (
            <div 
              key={index}
              className="glass-card"
              style={{
                padding: '2rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div 
                    style={{ 
                      background: 'var(--bg-glass-card)',
                      border: '1px solid var(--border-subtle)',
                      padding: '0.6rem', 
                      borderRadius: '10px' 
                    }}
                  >
                    {item.icon}
                  </div>
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-mono)', 
                      fontSize: '1.5rem', 
                      fontWeight: 800, 
                      color: 'var(--text-muted)',
                      opacity: 0.5
                    }}
                  >
                    {item.step}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '0.75rem' }}>
                  {item.subtitle}
                </p>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {item.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                  <span>Next stage</span>
                  <ArrowRight size={14} />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
