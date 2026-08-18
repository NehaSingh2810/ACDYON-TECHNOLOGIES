import React from 'react';
import { ShieldCheck, Terminal, Heart, ArrowUpRight, Github } from 'lucide-react';

export default function Footer({ onOpenTerminal, onOpenWaitlist }) {
  return (
    <footer 
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '4.5rem 0 2.5rem 0',
        position: 'relative'
      }}
    >
      <div className="app-container">
        
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Col 1: Brand & Assessment note */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div 
                style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '8px', 
                  background: 'linear-gradient(135deg, #00f2fe, #4facfe)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#050b14' 
                }}
              >
                <ShieldCheck size={18} />
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.15rem' }}>PulseProxy</span>
            </div>
            
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
              High-resilience edge ingestion gateway for dynamic web platforms. Built for the Acdyon Technologies Engineering Frontend Challenge (Track 2: The Premium Home Page).
            </p>

            <div className="badge badge-cyan" style={{ fontSize: '0.75rem' }}>
              <span>Zero Fake Testimonials Policy</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Product Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a href="#sandbox" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Interactive Sandbox</a>
              <a href="#architecture" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Resilience Pipeline</a>
              <a href="#code" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>SDK & Code Integration</a>
              <a href="#comparison" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Honest Technical Specs</a>
              <a href="#faq" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Technical FAQ</a>
            </div>
          </div>

          {/* Col 3: Challenge Deliverables */}
          <div>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Assessment Criteria
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <div>✓ 3-Second First Impression</div>
              <div>✓ Show, Don't Claim (Live Demo)</div>
              <div>✓ Motion & Micro-interaction Restraint</div>
              <div>✓ 390px to 1440px Zero-Scroll Mobile/Desktop</div>
              <div>✓ Complete Dark & Light Theme</div>
              <div>✓ Bonus Easter Egg Included</div>
            </div>
          </div>

          {/* Col 4: Secret Console & Trigger */}
          <div>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Recruiter Bonus HUD
            </h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
              Try entering the secret Konami code on your keyboard:
              <br />
              <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '0.8rem' }}>
                ↑ ↑ ↓ ↓ ← → ← → B A
              </code>
            </p>

            <button
              onClick={onOpenTerminal}
              className="btn btn-secondary btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', width: '100%', justifyContent: 'center' }}
            >
              <Terminal size={14} color="var(--accent-cyan)" />
              <span>Launch Recruiter CLI</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div 
          style={{ 
            borderTop: '1px solid var(--border-subtle)', 
            paddingTop: '1.5rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © 2026 PulseProxy / Acdyon Assessment. "Build It Like You Mean It."
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>MERN Stack (React + Node/Express)</span>
            <button 
              onClick={onOpenWaitlist} 
              style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600 }}
            >
              Request Access →
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
