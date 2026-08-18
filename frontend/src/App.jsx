import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveSandbox from './components/LiveSandbox';
import ArchitectureVisualizer from './components/ArchitectureVisualizer';
import CodeExport from './components/CodeExport';
import HonestComparison from './components/HonestComparison';
import FAQ from './components/FAQ';
import WaitlistModal from './components/WaitlistModal';
import EasterEggTerminal from './components/EasterEggTerminal';
import Footer from './components/Footer';

// Konami Code Sequence: Up, Up, Down, Down, Left, Right, Left, Right, B, A
const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('pulseproxy-theme') || 'dark';
  });
  
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [serverOnline, setServerOnline] = useState(false);
  const [telemetryData, setTelemetryData] = useState(null);
  const [konamiProgress, setKonamiProgress] = useState(0);

  // Sync theme attribute to HTML root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pulseproxy-theme', theme);
  }, [theme]);

  // Ping backend status
  useEffect(() => {
    const checkServer = async () => {
      try {
        const res = await fetch('/api/status');
        if (res.ok) {
          const data = await res.json();
          setServerOnline(true);
          setTelemetryData(data);
        } else {
          setServerOnline(false);
        }
      } catch (err) {
        setServerOnline(false);
      }
    };

    checkServer();
    const interval = setInterval(checkServer, 15000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard Shortcuts: Konami Code & Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      // 1. Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen(prev => !prev);
        return;
      }

      // 2. Konami Code Sequence
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expectedKey = KONAMI_CODE[konamiProgress];

      if (key === expectedKey) {
        const nextProgress = konamiProgress + 1;
        if (nextProgress === KONAMI_CODE.length) {
          setTerminalOpen(true);
          setKonamiProgress(0);
        } else {
          setKonamiProgress(nextProgress);
        }
      } else {
        setKonamiProgress(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiProgress]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Ambient Visual Glow Background Mesh */}
      <div className="ambient-glow">
        <div className="ambient-glow-1"></div>
        <div className="ambient-glow-2"></div>
      </div>

      {/* Navigation Header */}
      <Navbar 
        theme={theme} 
        setTheme={setTheme} 
        onOpenWaitlist={() => setWaitlistOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        serverOnline={serverOnline}
      />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero 
          onOpenWaitlist={() => setWaitlistOpen(true)} 
          telemetryData={telemetryData}
        />

        <LiveSandbox />

        <ArchitectureVisualizer />

        <CodeExport />

        <HonestComparison />

        <FAQ />
      </main>

      {/* Footer */}
      <Footer 
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenWaitlist={() => setWaitlistOpen(true)}
      />

      {/* Interactive Modals */}
      <WaitlistModal 
        isOpen={waitlistOpen} 
        onClose={() => setWaitlistOpen(false)} 
      />

      <EasterEggTerminal 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)} 
      />

    </div>
  );
}
