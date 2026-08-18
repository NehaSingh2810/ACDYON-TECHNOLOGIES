import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'Is this interactive sandbox running live third-party requests?',
    a: 'The interactive demo uses deterministic simulated edge telemetry rather than live residential proxy tunneling on third-party sites. This keeps evaluation instantaneous (<350ms), resilient to zero-downtime recruitment reviews, and eliminates rate-limit lockouts.'
  },
  {
    q: 'What core problem does PulseProxy address?',
    a: 'PulseProxy protects data ingestion pipelines from three primary failure vectors: packet-level TLS fingerprinting (JA4), headless browser environment traps (WebGL/Canvas), and DOM markup drift when target platforms change selectors overnight.'
  },
  {
    q: 'What technology stack was chosen for this challenge?',
    a: 'Built with React 18 and Vite on the frontend, using a custom Vanilla CSS token system with full Light/Dark mode support. The backend runs Express.js with telemetry simulation and waitlist endpoints.'
  },
  {
    q: 'How do I test the resilience features myself?',
    a: 'You can test all resilience layers directly in the Live Product Sandbox near the top of this page. Toggle JA4 TLS Camouflage, Stealth Headless, and Semantic AST Fallback in real-time to observe the step-by-step telemetry waterfall.'
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="app-container">
        
        <div className="section-header">
          <div className="badge badge-cyan">
            <HelpCircle size={14} />
            <span>TECHNICAL FAQ</span>
          </div>
          <h2>Frequently Asked Questions</h2>
          <p>
            Clear, honest technical answers regarding the challenge submission and architecture.
          </p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="glass-card"
                style={{ 
                  overflow: 'hidden',
                  borderColor: isOpen ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    color: 'var(--text-primary)',
                    fontSize: '1.02rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    gap: '1rem'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    style={{ 
                      transform: isOpen ? 'rotate(180deg)' : 'none', 
                      transition: 'transform 0.25s ease',
                      color: isOpen ? 'var(--accent-cyan)' : 'var(--text-muted)',
                      flexShrink: 0
                    }} 
                  />
                </button>

                {isOpen && (
                  <div 
                    style={{ 
                      padding: '0 1.5rem 1.5rem 1.5rem', 
                      color: 'var(--text-secondary)',
                      fontSize: '0.92rem',
                      lineHeight: 1.7,
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '1rem'
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
