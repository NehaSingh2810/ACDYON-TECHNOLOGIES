import React, { useState } from 'react';
import { Layers, ShieldCheck, Cpu, RefreshCw, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const NODES = [
  {
    id: 'layer1',
    step: '01',
    title: 'Stochastic Traffic Pacing',
    subtitle: 'Behavioral Pacing & Circuit Breaker',
    icon: Zap,
    color: '#00f2fe',
    description: 'Human traffic is inherently non-deterministic. PulseProxy models request intervals using stochastic distribution functions and configurable micro-pauses (300ms–1400ms) to ensure domain target concurrency rules are strictly respected.',
    specs: [
      'Stochastic interval distribution modeling',
      'Per-domain concurrency quotas',
      'Automatic exponential backoff on HTTP 429',
      'Configurable circuit breaker triggers'
    ]
  },
  {
    id: 'layer2',
    step: '02',
    title: 'JA4 TLS Handshake Matching',
    subtitle: 'Packet-Level Handshake Masking',
    icon: ShieldCheck,
    color: '#4facfe',
    description: 'Standard HTTP clients transmit distinct OpenSSL cipher suites that bot-management layers flag before evaluation. PulseProxy edge nodes dynamically align JA4 TLS 1.3 handshake headers to match target client profiles.',
    specs: [
      'Dynamic JA3/JA4 cipher suite negotiation',
      'HTTP/2 frame settings synchronization',
      'Sec-CH-UA client hint headers',
      'Clean OpenSSL signature alignment'
    ]
  },
  {
    id: 'layer3',
    step: '03',
    title: 'Headless Profile Virtualization',
    subtitle: 'Browser Environment Hardening',
    icon: Cpu,
    color: '#8b5cf6',
    description: 'Modern web platforms inspect 2D/3D canvas rendering and WebGL renderer tags. PulseProxy configures isolated headless browser instances with environment noise that prevents clustering while maintaining rendering integrity.',
    specs: [
      'WebGL vendor/renderer spoofing',
      'AudioContext float32 noise injection',
      'navigator.webdriver virtualization',
      'Native OS font list emulation'
    ]
  },
  {
    id: 'layer4',
    step: '04',
    title: 'Semantic AST Fallback',
    subtitle: 'Markup Drift Self-Healing',
    icon: RefreshCw,
    color: '#10b981',
    description: 'When target platforms update class names or restructure DOM trees, rigid CSS selectors fail. Our AST fallback engine uses relative tree distance and text proximity heuristics to locate target data nodes.',
    specs: [
      'AST relative element proximity heuristics',
      'JSON-LD & microdata schema auto-extraction',
      'Selector drift detection telemetry',
      'Automatic tree fallback parsing'
    ]
  }
];

export default function ArchitectureVisualizer() {
  const [selectedNode, setSelectedNode] = useState(NODES[0]);

  return (
    <section id="architecture" style={{ padding: '5.5rem 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="app-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-cyan">
            <Layers size={14} />
            <span>UNDER THE HOOD</span>
          </div>
          <h2>Architecture & Engineering</h2>
          <p>
            Scrapers fail when architectures rely on fragile hacks. Here is how PulseProxy insulates your data pipeline from edge to DOM.
          </p>
        </div>

        {/* Interactive Architecture Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          
          {/* Node Selection List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {NODES.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNode.id === node.id;
              
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className="glass-card"
                  style={{
                    padding: '1.25rem 1.5rem',
                    cursor: 'pointer',
                    borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                    background: isSelected ? 'var(--bg-glass-card)' : 'transparent',
                    boxShadow: isSelected ? '0 0 20px rgba(0, 242, 254, 0.15)' : 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div 
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: `${node.color}15`,
                          border: `1px solid ${node.color}40`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: node.color
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                          STAGE {node.step}
                        </div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                          {node.title}
                        </div>
                      </div>
                    </div>

                    <ArrowRight 
                      size={18} 
                      color={isSelected ? 'var(--accent-cyan)' : 'var(--text-muted)'} 
                      style={{ transform: isSelected ? 'translateX(4px)' : 'none', transition: 'transform 0.2s' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Node Details Card */}
          <div 
            className="glass-card" 
            style={{ 
              padding: '2rem', 
              border: '1px solid var(--accent-cyan)',
              boxShadow: '0 10px 40px rgba(0, 242, 254, 0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span className="badge badge-cyan" style={{ fontSize: '0.78rem' }}>
                STAGE {selectedNode.step} ACTIVE
              </span>
              <h3 style={{ fontSize: '1.3rem', margin: 0 }}>{selectedNode.subtitle}</h3>
            </div>

            <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              {selectedNode.description}
            </p>

            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              TECHNICAL SPECIFICATIONS & GUARDRAILS
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {selectedNode.specs.map((spec, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{spec}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
