import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';

const FAQS = [
  {
    q: 'How does JA4 TLS camouflage differ from standard proxy rotation?',
    a: 'Standard proxy rotators only change the source IP address. However, modern bot detection (Cloudflare, Akamai, PerimeterX) inspects the initial TLS Client Hello packet. Standard Node.js / Python HTTP clients send distinct cipher suite orders and extensions (JA3/JA4 fingerprints) that scream "bot" before headers are even read. PulseProxy terminates TLS at our edge nodes and reconstructs exact browser-identical handshakes.'
  },
  {
    q: 'What happens when target platforms change their HTML markup overnight?',
    a: 'Traditional scrapers crash with null pointer errors on broken CSS selectors (`.job-title-v2`). PulseProxy features a semantic AST (Abstract Syntax Tree) fallback engine. If a target selector fails, the engine analyzes element hierarchy, semantic proximity, and microdata/JSON-LD schemas to locate the target fields with 99.6% field extraction resilience.'
  },
  {
    q: 'How does PulseProxy handle rate-limiting and HTTP 429s?',
    a: 'Rather than firing bursts of requests, PulseProxy shapes traffic using Poisson probability distributions and stochastic micro-delays (300ms–1400ms). If a domain returns HTTP 429 or 403, our circuit breaker instantly isolates the affected IP subnet, triggers exponential backoff, and transparently routes the request through a fresh residential peer.'
  },
  {
    q: 'Where is your personal and technical line regarding terms of service (ToS)?',
    a: 'PulseProxy is strictly intended for publicly accessible, unauthenticated web data. We do not support breaking through user login paywalls, accessing private user databases, or executing malicious volumetric scraping. We enforce per-domain concurrency limits to ensure target servers are never subjected to undue load.'
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
            <span>Technical FAQ</span>
          </div>
          <h2>Frequently Asked Questions</h2>
          <p>
            Real technical answers to the hard questions about web scraping resilience and architecture.
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
                    fontSize: '1.05rem',
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
                      fontSize: '0.95rem',
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
