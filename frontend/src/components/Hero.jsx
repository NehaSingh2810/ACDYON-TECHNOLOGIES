import React from 'react';
import { ArrowRight, Play, ShieldAlert, Cpu, CheckCircle2, Lock, Zap, RefreshCw } from 'lucide-react';

export default function Hero({ onOpenWaitlist, telemetryData }) {
  return (
    <section 
      style={{
        paddingTop: '8rem',
        paddingBottom: '4.5rem',
        position: 'relative',
        textAlign: 'center'
      }}
    >
      <div className="app-container">
        
        {/* Top Product Pill */}
        <div style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>
          <div className="badge badge-cyan" style={{ gap: '0.6rem', padding: '0.4rem 1rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
              <Zap size={14} /> NEW
            </span>
            <span style={{ color: 'var(--text-primary)' }}>JA4 TLS Camouflage & Dynamic AST Fallback</span>
            <ArrowRight size={13} color="var(--accent-cyan)" />
          </div>
        </div>

        {/* Hero Headline */}
        <h1 style={{ maxWidth: '980px', margin: '0 auto 1.5rem auto' }}>
          Web Ingestion for Platforms That <br />
          <span className="gradient-text">Actively Don’t Want You To.</span>
        </h1>

        {/* Subheading focusing on genuine developer pain */}
        <p 
          style={{ 
            maxWidth: '720px', 
            margin: '0 auto 2.5rem auto', 
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6
          }}
        >
          No more headless fingerprints, IP burnouts by Tuesday, or broken scrapers when platforms change their markup overnight. A resilient, intelligent ingestion gateway built for engineers with high data stakes.
        </p>

        {/* Main CTAs */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '1rem', 
            flexWrap: 'wrap',
            marginBottom: '3.5rem'
          }}
        >
          <a 
            href="#sandbox" 
            className="btn btn-primary btn-lg"
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
          >
            <Play size={18} fill="#050b14" />
            <span>Launch Live Sandbox</span>
          </a>

          <button 
            onClick={onOpenWaitlist}
            className="btn btn-secondary btn-lg"
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
          >
            <span>Request Developer Access</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Real Technical Highlights (No fake reviews) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            maxWidth: '1100px',
            margin: '0 auto',
            textAlign: 'left'
          }}
        >
          {/* Card 1 */}
          <div className="glass-card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{ background: 'rgba(0, 242, 254, 0.12)', padding: '0.5rem', borderRadius: '8px', color: 'var(--accent-cyan)' }}>
                <Lock size={18} />
              </div>
              <h3 style={{ fontSize: '1rem', margin: 0 }}>JA3/JA4 TLS Camouflage</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
              Spoofs exact OpenSSL & browser cipher suite ordering to bypass Cloudflare Turnstile & Akamai at packet-level.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.12)', padding: '0.5rem', borderRadius: '8px', color: 'var(--accent-emerald)' }}>
                <Cpu size={18} />
              </div>
              <h3 style={{ fontSize: '1rem', margin: 0 }}>WebGL & Canvas Noise</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
              Headless Chromium instances inject subtle GPU jitter to prevent hardware fingerprint clustering.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{ background: 'rgba(139, 92, 246, 0.12)', padding: '0.5rem', borderRadius: '8px', color: 'var(--accent-violet)' }}>
                <RefreshCw size={18} />
              </div>
              <h3 style={{ fontSize: '1rem', margin: 0 }}>Dynamic AST Fallback</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
              When CSS selectors break, our semantic AST parser identifies target fields using tree-distance heuristics.
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass-card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{ background: 'rgba(245, 158, 11, 0.12)', padding: '0.5rem', borderRadius: '8px', color: 'var(--accent-amber)' }}>
                <Activity size={18} />
              </div>
              <h3 style={{ fontSize: '1rem', margin: 0 }}>Pacing & Circuit Breaker</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
              Behavioral Poisson distribution delays prevent rate-limit trips before they can burn residential proxy pools.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
