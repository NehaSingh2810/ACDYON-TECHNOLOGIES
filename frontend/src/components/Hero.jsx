import React from 'react';
import { ArrowRight, Play, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '3.5rem',
        position: 'relative',
        textAlign: 'center'
      }}
    >
      <div className="app-container">
        
        {/* Top Product Badge */}
        <div style={{ display: 'inline-flex', marginBottom: '1.75rem' }}>
          <div className="badge badge-cyan" style={{ gap: '0.6rem', padding: '0.45rem 1.1rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
              <ShieldCheck size={14} /> PRODUCT PREVIEW
            </span>
            <span style={{ color: 'var(--text-primary)' }}>Resilient Web Ingestion Gateway</span>
            <ArrowRight size={13} color="var(--accent-cyan)" />
          </div>
        </div>

        {/* Hero Headline */}
        <h1 style={{ maxWidth: '920px', margin: '0 auto 1.5rem auto', fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', lineHeight: 1.15 }}>
          Build resilient web data pipelines. <br />
          <span className="gradient-text">Even when the web changes underneath you.</span>
        </h1>

        {/* Subheading focusing on genuine developer value */}
        <p 
          style={{ 
            maxWidth: '720px', 
            margin: '0 auto 2.5rem auto', 
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6
          }}
        >
          Explore a working prototype for resilient ingestion workflows, fallback strategies, and pipeline observability — without needing an account.
        </p>

        {/* Main CTAs */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '1rem', 
            flexWrap: 'wrap',
            marginBottom: '1rem'
          }}
        >
          <a 
            href="#sandbox" 
            className="btn btn-primary btn-lg"
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
          >
            <Play size={18} fill="#050b14" />
            <span>Try the Live Sandbox</span>
            <ArrowRight size={16} />
          </a>

          <a 
            href="#how-it-works"
            className="btn btn-secondary btn-lg"
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
          >
            <span>See how it works</span>
          </a>
        </div>

      </div>
    </section>
  );
}
