import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '3.5rem 0 2rem 0',
        position: 'relative'
      }}
    >
      <div className="app-container">
        
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            alignItems: 'center', 
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '2.5rem'
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: '380px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
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
            
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Resilient web-ingestion workflows, demonstrated through an interactive prototype.
            </p>
          </div>

          {/* Navigation Links */}
          <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap', fontSize: '0.9rem' }}>
            <a href="#sandbox" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Sandbox</a>
            <a href="#how-it-works" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>How It Works</a>
            <a href="#architecture" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Architecture</a>
            <a href="#faq" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>FAQ</a>
            <a href="https://github.com/NehaSingh2810/ACDYON-TECHNOLOGIES" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontWeight: 600 }}>GitHub Repo</a>
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
            © 2026 PulseProxy Prototype.
          </div>

          <div>
            Built as an Acdyon Technologies Frontend Challenge submission — Track 2.
          </div>
        </div>

      </div>
    </footer>
  );
}
