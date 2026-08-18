import React, { useState, useEffect } from 'react';
import { Terminal, ShieldCheck, Sun, Moon, Sparkles, Activity, Github } from 'lucide-react';

export default function Navbar({ theme, setTheme, onOpenWaitlist, onOpenTerminal, serverOnline }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        transition: 'all 0.3s ease',
        background: scrolled 
          ? (theme === 'dark' ? 'rgba(10, 13, 20, 0.85)' : 'rgba(255, 255, 255, 0.85)')
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : 'none',
      }}
    >
      <div className="app-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <a 
          href="#" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            textDecoration: 'none',
            color: 'inherit' 
          }}
        >
          <div 
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#050b14',
              boxShadow: '0 0 16px rgba(0, 242, 254, 0.4)'
            }}
          >
            <ShieldCheck size={22} strokeWidth={2.5} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>PulseProxy</span>
              <span 
                style={{ 
                  fontSize: '0.65rem', 
                  fontWeight: 700, 
                  background: 'rgba(0, 242, 254, 0.15)', 
                  color: 'var(--accent-cyan)',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(0, 242, 254, 0.3)'
                }}
              >
                v2.4
              </span>
            </div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0 }}>Web Resilience Gateway</p>
          </div>
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav 
          style={{ 
            display: 'none', 
            alignItems: 'center', 
            gap: '2rem' 
          }}
          className="desktop-nav"
        >
          <a href="#sandbox" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            Interactive Sandbox
          </a>
          <a href="#architecture" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            Resilience Architecture
          </a>
          <a href="#code" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            SDK & Code
          </a>
          <a href="#comparison" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            Specs & Honesty
          </a>
          <a href="#faq" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            FAQ
          </a>
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          
          {/* Server telemetry pill */}
          <div 
            className="badge badge-live"
            style={{ 
              display: 'none', 
              fontSize: '0.75rem',
              padding: '0.25rem 0.65rem'
            }}
            id="nav-telemetry-badge"
          >
            <div className="pulse-dot" style={{ background: serverOnline ? 'var(--accent-emerald)' : 'var(--accent-amber)' }}></div>
            <span>{serverOnline ? 'Edge 18ms' : 'Offline'}</span>
          </div>

          {/* Easter Egg Terminal Trigger Button */}
          <button
            onClick={onOpenTerminal}
            className="btn btn-secondary btn-sm"
            title="Secret CLI Diagnostics (Press Ctrl+K or Konami Code)"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.45rem 0.75rem', fontSize: '0.8rem' }}
          >
            <Terminal size={14} color="var(--accent-cyan)" />
            <span style={{ fontFamily: 'var(--font-mono)' }}>CLI HUD</span>
          </button>

          {/* Dark/Light Switcher */}
          <button
            onClick={toggleTheme}
            className="btn btn-secondary btn-sm"
            style={{ padding: '0.45rem 0.65rem' }}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={16} color="#f59e0b" /> : <Moon size={16} color="#8b5cf6" />}
          </button>

          {/* CTA Button */}
          <button 
            onClick={onOpenWaitlist}
            className="btn btn-primary btn-sm"
          >
            Get API Key
          </button>
        </div>

      </div>

      <style>{`
        @media (min-width: 840px) {
          .desktop-nav {
            display: flex !important;
          }
          #nav-telemetry-badge {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
