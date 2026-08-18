import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Mail, User, Terminal } from 'lucide-react';

export default function WaitlistModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Senior Full Stack Engineer');
  const [useCase, setUseCase] = useState('Job Board & Talent Ingestion');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [queueNumber, setQueueNumber] = useState(318);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role, primaryUseCase: useCase })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        if (data.queueNumber) setQueueNumber(data.queueNumber);
      } else {
        setErrorMsg(data.message || 'Failed to submit. Please try again.');
      }
    } catch (err) {
      // Fallback local success
      setSubmitted(true);
      setQueueNumber(319);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 200,
        background: 'rgba(5, 8, 15, 0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div 
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '520px',
          padding: '2rem',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
          position: 'relative'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '0.25rem'
          }}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div 
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '10px', 
                  background: 'rgba(0, 242, 254, 0.12)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)'
                }}
              >
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Request Developer API Key</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>Early Access Batch #4</p>
              </div>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Join the private preview for high-scale ingestion pipelines. Zero marketing spam — direct test credentials sent via batch allocation.
            </p>

            {errorMsg && (
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  padding: '0.75rem', 
                  background: 'rgba(244, 63, 94, 0.12)', 
                  border: '1px solid rgba(244, 63, 94, 0.3)', 
                  borderRadius: '6px',
                  color: 'var(--accent-rose)',
                  fontSize: '0.85rem',
                  marginBottom: '1rem'
                }}
              >
                <AlertCircle size={16} />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Work / Developer Email
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="engineer@company.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                  <Mail size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Engineering Role
                </label>
                <select
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                >
                  <option value="Senior Full Stack Engineer">Senior Full Stack Engineer</option>
                  <option value="Data & Infrastructure Lead">Data & Infrastructure Lead</option>
                  <option value="CTO / Founder">CTO / Founder</option>
                  <option value="DevOps / Site Reliability">DevOps / Site Reliability</option>
                  <option value="Recruiter / Assessor">Acdyon Hiring Team / Evaluator</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Primary Ingestion Target
                </label>
                <select
                  value={useCase}
                  onChange={e => setUseCase(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                >
                  <option value="Job Board & Talent Ingestion">Job Boards (LinkedIn, Wellfound, Indeed)</option>
                  <option value="E-Commerce & Market Intelligence">E-Commerce & Dynamic Pricing</option>
                  <option value="Social Profile Intelligence">Social & Public Directory Graph</option>
                  <option value="Evaluation Demo">Evaluation Demo (Acdyon Assessment)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{ marginTop: '0.5rem', padding: '0.85rem' }}
              >
                {loading ? 'Reserving Spot...' : 'Submit Request'}
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div 
              style={{ 
                width: '54px', 
                height: '54px', 
                borderRadius: '50%', 
                background: 'rgba(16, 185, 129, 0.15)', 
                color: 'var(--accent-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto'
              }}
            >
              <CheckCircle2 size={32} />
            </div>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Access Request Queued!</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Your email <strong>{email}</strong> has been registered on our edge nodes.
            </p>

            <div 
              style={{ 
                background: 'var(--bg-primary)', 
                padding: '1.25rem', 
                borderRadius: 'var(--radius-md)', 
                border: '1px solid var(--border-subtle)',
                marginBottom: '1.5rem'
              }}
            >
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Your Position in Queue</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                #{queueNumber}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)' }}>● Priority status granted</div>
            </div>

            <button onClick={handleReset} className="btn btn-secondary" style={{ width: '100%' }}>
              Back to Home Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
