import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { firebaseAuthService } from '../services/firebaseAuthService';
import HadithRibbon from '../components/common/HadithRibbon';
import { 
  IconShield, 
  IconLock, 
  IconArrowRight, 
  IconAlertCircle,
  IconCheckCircle,
  IconMail,
  IconEye, 
  IconEyeOff
} from '../components/common/Icons';

export default function AdminAuthPage() {
  const navigate = useNavigate();
  
  // Remembered email preference if admin enabled "Remember me"
  const rememberedEmail = localStorage.getItem('alirshaad_remembered_admin_email') || '';
  
  // Login State - User types email & password
  const [loginIdentifier, setLoginIdentifier] = useState(rememberedEmail);
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(!!rememberedEmail);

  // Password Reset State
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetStatus, setResetStatus] = useState({ loading: false, message: '', error: '' });

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const session = firebaseAuthService.getAdminSession();
    if (session) {
      navigate('/admin/dashboard');
      return;
    }

    if (rememberedEmail) {
      setTimeout(() => {
        passwordInputRef.current?.focus();
      }, 100);
    } else {
      setTimeout(() => {
        emailInputRef.current?.focus();
      }, 100);
    }
  }, [navigate, rememberedEmail]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await firebaseAuthService.adminLogin(loginIdentifier, loginPassword);

      if (rememberMe && loginIdentifier.trim()) {
        localStorage.setItem('alirshaad_remembered_admin_email', loginIdentifier.trim());
      } else {
        localStorage.removeItem('alirshaad_remembered_admin_email');
      }

      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message || 'Invalid administrator credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setResetStatus({ loading: true, message: '', error: '' });

    if (!resetEmail.trim()) {
      setResetStatus({ loading: false, message: '', error: 'Please enter your admin email address.' });
      return;
    }

    try {
      const res = await firebaseAuthService.sendAdminPasswordReset(resetEmail.trim());
      setResetStatus({
        loading: false,
        message: res.message || `Password reset instructions have been sent to ${resetEmail}.`,
        error: ''
      });
    } catch (err) {
      setResetStatus({
        loading: false,
        message: '',
        error: err.message || 'Failed to send password reset.'
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '88vh', paddingBottom: '4rem' }}>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: 'clamp(2.25rem, 5vw, 3.5rem) 0 clamp(1.5rem, 3.5vw, 2.5rem) 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-subtitle-badge light" style={{ marginBottom: '0.75rem' }}>
            Official Administration Gateway
          </span>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3.5vw, 2.8rem)', marginBottom: '0.75rem' }}>
            Administrator Control Panel
          </h1>
          <p style={{ color: '#CBD5E1', maxWidth: '620px', margin: '0 auto', fontSize: '0.98rem', lineHeight: 1.6 }}>
            Secure portal for Al-Irshaad admissions coordination and student database management.
          </p>
        </div>
      </section>

      <HadithRibbon variant="compact" />

      <div className="container" style={{ maxWidth: '480px', marginTop: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: 'clamp(1.75rem, 4vw, 2.5rem) clamp(1.25rem, 3.5vw, 2.25rem)',
          boxShadow: '0 12px 35px rgba(3, 17, 34, 0.09)',
          border: '1px solid rgba(197, 168, 105, 0.35)',
          boxSizing: 'border-box'
        }}>
          
          {/* Header Icon */}
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <div style={{
              width: '58px',
              height: '58px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #031122 0%, #005DB8 100%)',
              color: '#C5A869',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem auto',
              boxShadow: '0 4px 14px rgba(0, 93, 184, 0.25)'
            }}>
              <IconShield size={28} color="#C5A869" />
            </div>
            <h2 style={{ fontSize: '1.4rem', color: '#031122', fontWeight: '700', margin: 0 }}>
              Administrator Sign In
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.84rem', marginTop: '0.35rem' }}>
              Authorized Staff Only • Al-Irshaad Islamic Institute
            </p>
          </div>

          {error && (
            <div style={{
              background: '#FEF2F2',
              border: '1px solid #F87171',
              color: '#991B1B',
              padding: '0.85rem 1rem',
              borderRadius: '10px',
              fontSize: '0.88rem',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}>
              <IconAlertCircle size={18} color="#991B1B" />
              <span>{error}</span>
            </div>
          )}

          {/* ADMIN LOGIN FORM */}
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontWeight: '600', color: '#1E293B', marginBottom: '0.45rem', fontSize: '0.88rem' }}>
                Admin Email Address *
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  ref={emailInputRef}
                  type="email"
                  placeholder="e.g. admin@example.com"
                  value={loginIdentifier}
                  onChange={(e) => setLoginIdentifier(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.92rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                <label style={{ fontWeight: '600', color: '#1E293B', fontSize: '0.88rem' }}>
                  Admin Password *
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setResetEmail(loginIdentifier && loginIdentifier.includes('@') ? loginIdentifier : '');
                    setResetStatus({ loading: false, message: '', error: '' });
                    setIsResetModalOpen(true);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#005DB8',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    fontWeight: '600',
                    textDecoration: 'underline'
                  }}
                >
                  Forgot Password?
                </button>
              </div>

              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <input
                  ref={passwordInputRef}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter administrator password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 2.75rem 0.85rem 1rem',
                    borderRadius: '10px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.92rem',
                    boxSizing: 'border-box'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    padding: '6px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    color: showPassword ? '#005DB8' : '#64748B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {showPassword ? <IconEyeOff size={18} /> : <IconEye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Login Checkbox */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                cursor: 'pointer',
                fontSize: '0.86rem',
                color: '#334155',
                userSelect: 'none',
                fontWeight: '500'
              }}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{
                    width: '17px',
                    height: '17px',
                    accentColor: '#005DB8',
                    cursor: 'pointer',
                    borderRadius: '4px'
                  }}
                />
                <span>Remember my login on this device</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '0.95rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #031122 0%, #005DB8 100%)',
                color: '#FFFFFF',
                fontWeight: '700',
                fontSize: '0.98rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0, 93, 184, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease'
              }}
            >
              <span>{isLoading ? 'Verifying Admin...' : 'Sign In as Administrator'}</span>
              <IconArrowRight size={16} color="#FFFFFF" />
            </button>
          </form>

        </div>
      </div>

      {/* PASSWORD RESET MODAL */}
      {isResetModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(3, 17, 34, 0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem',
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '2rem',
            maxWidth: '460px',
            width: '100%',
            boxShadow: '0 20px 45px rgba(0,0,0,0.2)',
            border: '1px solid rgba(197, 168, 105, 0.35)',
            boxSizing: 'border-box'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <IconMail size={22} color="#005DB8" />
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#031122', fontWeight: '800' }}>
                  Admin Password Reset
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsResetModalOpen(false)}
                style={{ background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: '#64748B' }}
              >
                ×
              </button>
            </div>

            <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              Enter your authorized administrator email address to receive secure password reset instructions:
            </p>

            {resetStatus.message && (
              <div style={{ background: '#DCFCE7', border: '1px solid #86EFAC', color: '#166534', padding: '0.75rem', borderRadius: '10px', fontSize: '0.86rem', marginBottom: '1rem' }}>
                ✓ {resetStatus.message}
              </div>
            )}

            {resetStatus.error && (
              <div style={{ background: '#FEF2F2', border: '1px solid #F87171', color: '#991B1B', padding: '0.75rem', borderRadius: '10px', fontSize: '0.86rem', marginBottom: '1rem' }}>
                ⚠ {resetStatus.error}
              </div>
            )}

            <form onSubmit={handlePasswordReset}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontWeight: '600', color: '#1E293B', fontSize: '0.86rem', marginBottom: '0.4rem' }}>
                  Admin Email Address:
                </label>
                <input
                  type="email"
                  placeholder="Enter your registered admin email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '10px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.9rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => setIsResetModalOpen(false)}
                  style={{
                    padding: '0.65rem 1.1rem',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    background: '#F1F5F9',
                    color: '#475569',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={resetStatus.loading}
                  style={{
                    padding: '0.65rem 1.3rem',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #005DB8 0%, #071C34 100%)',
                    color: '#FFFFFF',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  {resetStatus.loading ? 'Dispatching...' : 'Send Reset Link'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
