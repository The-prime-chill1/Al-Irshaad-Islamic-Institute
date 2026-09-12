import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { studentDatabase } from '../services/studentDatabase';
import HadithRibbon from '../components/common/HadithRibbon';
import { 
  IconShield, 
  IconLock, 
  IconArrowRight, 
  IconAlertCircle,
  IconCheckCircle,
  IconMail
} from '../components/common/Icons';

export default function AdminAuthPage() {
  const navigate = useNavigate();
  
  // Remembered email from previous session
  const initialRememberedEmail = localStorage.getItem('alirshaad_remembered_admin_email') || '';
  
  // Login State
  const [loginIdentifier, setLoginIdentifier] = useState(initialRememberedEmail);
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(!!initialRememberedEmail);

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const session = studentDatabase.getAdminSession();
    if (session) {
      navigate('/admin/dashboard');
      return;
    }

    // If email is remembered, directly focus on password input
    if (initialRememberedEmail) {
      setTimeout(() => {
        passwordInputRef.current?.focus();
      }, 100);
    } else {
      setTimeout(() => {
        emailInputRef.current?.focus();
      }, 100);
    }
  }, [navigate, initialRememberedEmail]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      studentDatabase.adminLogin(loginIdentifier, loginPassword);

      // Handle Remember Login preference
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

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '88vh', paddingBottom: '4rem' }}>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '3.5rem 0 2.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-subtitle-badge light" style={{ marginBottom: '0.75rem' }}>
            Official Administration Gateway
          </span>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '0.75rem' }}>
            Administrative Control Panel
          </h1>
          <p style={{ color: '#CBD5E1', maxWidth: '620px', margin: '0 auto', fontSize: '1.02rem', lineHeight: 1.6 }}>
            Secure portal for Al-Irshaad admissions coordination and student database management.
          </p>
        </div>
      </section>

      <HadithRibbon variant="compact" />

      <div className="container" style={{ maxWidth: '480px', marginTop: '2.5rem' }}>
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '2.5rem 2.25rem',
          boxShadow: '0 12px 35px rgba(3, 17, 34, 0.09)',
          border: '1px solid rgba(197, 168, 105, 0.35)'
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
            <p style={{ color: '#64748B', fontSize: '0.86rem', marginTop: '0.35rem' }}>
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
            <div style={{ marginBottom: '1.15rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <label style={{ fontWeight: '600', color: '#1E293B', fontSize: '0.88rem' }}>
                  Admin Email / Username *
                </label>
                {loginIdentifier && (
                  <button
                    type="button"
                    onClick={() => {
                      setLoginIdentifier('');
                      setRememberMe(false);
                      localStorage.removeItem('alirshaad_remembered_admin_email');
                      setTimeout(() => emailInputRef.current?.focus(), 50);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#005DB8',
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                      fontWeight: '600',
                      textDecoration: 'underline'
                    }}
                  >
                    Clear / Switch Account
                  </button>
                )}
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  ref={emailInputRef}
                  type="text"
                  placeholder="Enter official admin email or username"
                  value={loginIdentifier}
                  onChange={(e) => setLoginIdentifier(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '10px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.92rem',
                    boxSizing: 'border-box',
                    backgroundColor: initialRememberedEmail && loginIdentifier === initialRememberedEmail ? '#F8FAFC' : '#FFFFFF'
                  }}
                />
              </div>
              {initialRememberedEmail && loginIdentifier === initialRememberedEmail && (
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#005DB8', marginTop: '0.3rem', fontWeight: '500' }}>
                  ✓ Remembered Admin Account • Just enter password below
                </span>
              )}
            </div>

            <div style={{ marginBottom: '1.15rem' }}>
              <label style={{ display: 'block', fontWeight: '600', color: '#1E293B', marginBottom: '0.4rem', fontSize: '0.88rem' }}>
                Admin Password *
              </label>
              <input
                ref={passwordInputRef}
                type="password"
                placeholder="Enter administrator password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  border: '1.5px solid #CBD5E1',
                  fontSize: '0.92rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Remember Login Checkbox */}
            <div style={{ marginBottom: '1.4rem' }}>
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
                <span>Remember my login email (only enter password next time)</span>
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
    </div>
  );
}
