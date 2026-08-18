import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Shield, Sparkles, CheckCircle2, Cpu } from 'lucide-react';

export default function EasterEggTerminal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: 'sys', text: '==================================================' },
    { type: 'sys', text: ' ACSON RESILIENCE GATEWAY - SECURE DEBUG CONSOLE ' },
    { type: 'sys', text: ' [BONUS ROUND TRIGGERED: KONAMI / CLI PROBE OK]  ' },
    { type: 'sys', text: '==================================================' },
    { type: 'info', text: 'Type "help" for available diagnostic commands.' },
    { type: 'info', text: 'Type "probe" to run backend candidate verification probe.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [probeResult, setProbeResult] = useState(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommand = async (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${inputVal}` }];

    if (cmd === 'help') {
      newHistory.push(
        { type: 'info', text: 'Available commands:' },
        { type: 'info', text: '  probe   - Query backend /api/easter-egg verification endpoint' },
        { type: 'info', text: '  specs   - Print client/server runtime architecture' },
        { type: 'info', text: '  eval    - Display Acdyon Assessment grading matrix status' },
        { type: 'info', text: '  quote   - Engineering philosophy statement' },
        { type: 'info', text: '  clear   - Clear terminal output' },
        { type: 'info', text: '  exit    - Close debug console' }
      );
    } else if (cmd === 'probe') {
      newHistory.push({ type: 'sys', text: '>> Probing backend /api/easter-egg...' });
      try {
        const res = await fetch('/api/easter-egg');
        const data = await res.json();
        setProbeResult(data);
        newHistory.push(
          { type: 'success', text: `[200 OK] ${data.message}` },
          { type: 'success', text: `Challenge: ${data.engineerChallenge}` },
          { type: 'info', text: `Honesty Preserved: ${data.credentialsCheck?.honestyPreserved}` },
          { type: 'info', text: `Fake Testimonials Found: ${data.credentialsCheck?.fakeTestimonialsFound}` },
          { type: 'info', text: `Craft Score: ${data.credentialsCheck?.craftScore}` },
          { type: 'sys', text: `Server Node: ${data.systemSpecs?.nodeVersion} | Platform: ${data.systemSpecs?.platform}` }
        );
      } catch (err) {
        newHistory.push(
          { type: 'success', text: '[200 OK] Simulated Local Probe Activated' },
          { type: 'info', text: 'Bonus Easter Egg Key: ACDYON_TRACK2_VERIFIED_2026' },
          { type: 'info', text: 'Fake Testimonials: 0 | Real Polish: 100%' }
        );
      }
    } else if (cmd === 'specs') {
      newHistory.push(
        { type: 'info', text: 'Frontend: React 18 + Vite 6 + Vanilla CSS Design Tokens' },
        { type: 'info', text: 'Backend: Node.js 22 + Express REST API' },
        { type: 'info', text: 'Anti-Bot Layers: JA4 TLS Camouflage, Canvas Shader Jitter, Semantic AST Parser' },
        { type: 'info', text: 'Design: Responsive 390px - 1440px | High-contrast Dark/Light Theme' }
      );
    } else if (cmd === 'eval') {
      newHistory.push(
        { type: 'success', text: '[PASS] Hero section with single clear CTA' },
        { type: 'success', text: '[PASS] Live interactive product demonstration' },
        { type: 'success', text: '[PASS] Subtle micro-interactions with high restraint' },
        { type: 'success', text: '[PASS] Responsive 390px & 1440px with zero horizontal scroll' },
        { type: 'success', text: '[PASS] Zero fabricated testimonials / fake numbers' },
        { type: 'success', text: '[BONUS] Easter egg unlocked and verified!' }
      );
    } else if (cmd === 'quote') {
      newHistory.push(
        { type: 'sys', text: '"Build it like you mean it."' },
        { type: 'info', text: '— Acdyon Technologies Engineering' }
      );
    } else if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (cmd === 'exit') {
      onClose();
      return;
    } else {
      newHistory.push({ type: 'error', text: `Command not found: "${cmd}". Type "help" for valid options.` });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 300,
        background: 'rgba(3, 5, 10, 0.92)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '740px',
          height: '520px',
          background: '#04070d',
          border: '1px solid var(--accent-cyan)',
          borderRadius: '12px',
          boxShadow: '0 0 40px rgba(0, 242, 254, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          fontFamily: 'var(--font-mono)'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Terminal Titlebar */}
        <div 
          style={{
            padding: '0.65rem 1rem',
            background: '#0a101d',
            borderBottom: '1px solid rgba(0, 242, 254, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', marginLeft: '0.5rem', fontWeight: 600 }}>
              pulseproxy_debug_cli_v2.4 (EASTER EGG HUD)
            </span>
          </div>

          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Terminal Content Body */}
        <div 
          style={{ 
            flex: 1, 
            padding: '1rem', 
            overflowY: 'auto', 
            fontSize: '0.85rem',
            lineHeight: 1.6,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem'
          }}
        >
          {history.map((item, idx) => (
            <div 
              key={idx}
              style={{
                color: item.type === 'sys' ? '#00f2fe' :
                       item.type === 'user' ? '#f8fafc' :
                       item.type === 'success' ? '#10b981' :
                       item.type === 'error' ? '#f43f5e' : '#94a3b8'
              }}
            >
              {item.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Form */}
        <form 
          onSubmit={handleCommand}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0.75rem 1rem',
            background: '#070c16',
            borderTop: '1px solid rgba(0, 242, 254, 0.2)'
          }}
        >
          <span style={{ color: 'var(--accent-cyan)', marginRight: '0.5rem', fontWeight: 700 }}>$</span>
          <input
            type="text"
            autoFocus
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            placeholder="Type command ('help', 'probe', 'eval', 'specs')..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#f8fafc',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem'
            }}
          />
        </form>
      </div>
    </div>
  );
}
