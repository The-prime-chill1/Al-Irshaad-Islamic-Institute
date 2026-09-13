import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { firebaseAuthService } from '../services/firebaseAuthService';
import { studentDatabase } from '../services/studentDatabase';
import HadithRibbon from '../components/common/HadithRibbon';
import { 
  IconKey, 
  IconUser, 
  IconMail, 
  IconPhone, 
  IconLock, 
  IconAlertCircle, 
  IconCheckCircle, 
  IconArrowRight 
} from '../components/common/Icons';

export default function StudentAuthPage() {
  const navigate = useNavigate();
  
  const [mode, setMode] = useState('login'); // 'login' | 'forgot_password'
  const [authMethod, setAuthMethod] = useState('email'); // 'email' | 'phone'
  
  // Loading & Feedback States
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Email Sign In State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Phone Sign In State
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneOtpCode, setPhoneOtpCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);

  // Password Reset with Email OTP State
  const [resetEmail, setResetEmail] = useState('');
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [emailOtpCode, setEmailOtpCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [receivedOtpNotice, setReceivedOtpNotice] = useState('');

  // Check active session on mount
  useEffect(() => {
    const current = studentDatabase.getCurrentStudent();
    if (current) {
      navigate('/student/dashboard');
    }
  }, [navigate]);

  // Handle Google Sign-in
  const handleGoogleSignIn = async () => {
    setErrorMessage('');
    setIsLoading(true);
    try {
      await firebaseAuthService.loginWithGoogle();
      navigate('/student/dashboard');
    } catch (err) {
      setErrorMessage(err.message || 'Google sign-in failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Email Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      if (!email.trim()) throw new Error('Please enter your email or Student ID.');
      if (!password.trim()) throw new Error('Please enter your password.');

      await firebaseAuthService.loginWithEmail(email, password);
      navigate('/student/dashboard');
    } catch (err) {
      setErrorMessage(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Phone Auth: Step 1 - Send OTP
  const handleSendPhoneOTP = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      if (!phoneNumber.trim()) throw new Error('Please enter your phone number with country code (e.g. +234 803 123 4567).');

      const conf = await firebaseAuthService.sendPhoneOTP(phoneNumber);
      setConfirmationResult(conf);
      setPhoneOtpSent(true);
      setSuccessMessage(`SMS verification code sent to ${phoneNumber}`);
    } catch (err) {
      setErrorMessage(err.message || 'Failed to send SMS OTP. Please check phone number format.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Phone Auth: Step 2 - Verify OTP & Sign In
  const handleVerifyPhoneOTP = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      if (!phoneOtpCode.trim()) throw new Error('Please enter the verification code received on your phone.');

      await firebaseAuthService.verifyPhoneOTP(confirmationResult, phoneOtpCode, {
        phone: phoneNumber,
        email: `${phoneNumber.replace(/[^0-9]/g, '')}@student.alirshaad.edu`
      });
      navigate('/student/dashboard');
    } catch (err) {
      setErrorMessage(err.message || 'Invalid SMS code. Please check and re-enter.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Password Reset: Step 1 - Request OTP via Email
  const handleRequestEmailOTP = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsLoading(true);

    try {
      if (!resetEmail.trim()) throw new Error('Please enter your registered email address.');

      const result = studentDatabase.requestPasswordResetOTP(resetEmail);
      setEmailOtpSent(true);
      setReceivedOtpNotice(result.otp);
      setSuccessMessage(`A 6-digit password reset verification code has been dispatched to ${result.email}.`);
    } catch (err) {
      setErrorMessage(err.message || 'Failed to request reset OTP. Please check email address.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Password Reset: Step 2 - Verify OTP and Update Password
  const handleVerifyAndResetPassword = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      if (!emailOtpCode.trim()) throw new Error('Please enter the 6-digit OTP code sent to your email.');
      if (!newPassword) throw new Error('Please enter a new password.');
      if (newPassword.length < 6) throw new Error('New password must be at least 6 characters long.');
      if (newPassword !== confirmNewPassword) throw new Error('Passwords do not match.');

      studentDatabase.verifyAndResetPassword(resetEmail, emailOtpCode, newPassword);
      setSuccessMessage('Password updated successfully! You can now sign in with your new password.');
      
      // Reset flow & return to login
      setMode('login');
      setEmail(resetEmail);
      setPassword('');
      setEmailOtpSent(false);
      setEmailOtpCode('');
      setNewPassword('');
      setConfirmNewPassword('');
      setReceivedOtpNotice('');
    } catch (err) {
      setErrorMessage(err.message || 'Failed to reset password.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-ivory)', minHeight: '90vh', paddingBottom: '5rem' }}>
      
      {/* Hidden Recaptcha container for Phone Auth */}
      <div id="recaptcha-container"></div>

      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '4rem 0 3rem 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-subtitle-badge light" style={{ marginBottom: '0.75rem' }}>
            Student Academic Portal
          </span>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '0.75rem' }}>
            {mode === 'login' ? 'Student Sign In' : 'Reset Account Password'}
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            {mode === 'forgot_password' 
              ? 'Request a 6-digit verification code sent to your registered email to update your password.'
              : 'Sign in to access your course timetable, virtual classroom, and faculty progress reports.'}
          </p>
        </div>
      </section>

      <HadithRibbon variant="compact" />

      <div className="container" style={{ maxWidth: '580px', marginTop: '2.5rem' }}>
        
        {/* Back Link if in Forgot Password Mode */}
        {mode === 'forgot_password' && (
          <div style={{ marginBottom: '1.25rem' }}>
            <button
              type="button"
              onClick={() => { setMode('login'); setErrorMessage(''); setSuccessMessage(''); }}
              style={{
                background: 'none',
                border: 'none',
                color: '#005DB8',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '0.92rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: 0
              }}
            >
              <span>← Back to Sign In</span>
            </button>
          </div>
        )}

        {/* Main Card */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: 'clamp(1.75rem, 4vw, 2.75rem)',
          boxShadow: '0 12px 35px rgba(3, 17, 34, 0.08)',
          border: '1px solid #E2E8F0'
        }}>
          
          {/* Notifications */}
          {errorMessage && (
            <div style={{
              background: '#FEF2F2',
              border: '1px solid #F87171',
              color: '#991B1B',
              padding: '0.9rem 1.2rem',
              borderRadius: '12px',
              fontSize: '0.95rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}>
              <IconAlertCircle size={18} color="#991B1B" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div style={{
              background: '#F0FDF4',
              border: '1px solid #86EFAC',
              color: '#166534',
              padding: '0.9rem 1.2rem',
              borderRadius: '12px',
              fontSize: '0.95rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}>
              <IconCheckCircle size={18} color="#166534" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* ===================== MODE: FORGOT PASSWORD (EMAIL OTP) ===================== */}
          {mode === 'forgot_password' && (
            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#031122', fontWeight: '700', marginBottom: '0.5rem' }}>
                Reset Password with Email OTP
              </h2>
              <p style={{ color: '#64748B', fontSize: '0.92rem', marginBottom: '1.75rem' }}>
                {!emailOtpSent 
                  ? 'Enter your registered email address to receive a 6-digit verification code.'
                  : 'Enter the 6-digit code received in your email inbox and choose your new password.'}
              </p>

              {!emailOtpSent ? (
                /* Step 1: Input Email */
                <form onSubmit={handleRequestEmailOTP}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontWeight: '600', color: '#1E293B', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                      Registered Student Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. lamidiabdulhameedolawale@gmail.com"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      required
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid #CBD5E1', fontSize: '0.95rem' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #005DB8 0%, #031122 100%)',
                      color: '#FFFFFF',
                      fontWeight: '700',
                      fontSize: '1rem',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      boxShadow: '0 4px 15px rgba(0,93,184,0.3)'
                    }}
                  >
                    <span>{isLoading ? 'Generating OTP...' : 'Send 6-Digit OTP Code to Email'}</span>
                    <IconArrowRight size={16} color="#FFFFFF" />
                  </button>
                </form>
              ) : (
                /* Step 2: Input OTP & New Password */
                <form onSubmit={handleVerifyAndResetPassword}>
                  
                  <div style={{
                    background: '#EFF6FF',
                    border: '1.5px solid #93C5FD',
                    borderRadius: '12px',
                    padding: '1rem 1.25rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                      <IconMail size={18} color="#1D4ED8" />
                      <strong style={{ color: '#1E40AF', fontSize: '0.9rem' }}>OTP Code Sent to {resetEmail}</strong>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#1E3A8A' }}>
                      Please check your inbox. (Verification code: <strong style={{ color: '#1D4ED8', letterSpacing: '1px', fontSize: '1.05rem' }}>{receivedOtpNotice}</strong>)
                    </p>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontWeight: '600', color: '#1E293B', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                      Enter 6-Digit Email OTP Code *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 123456"
                      value={emailOtpCode}
                      onChange={(e) => setEmailOtpCode(e.target.value)}
                      maxLength={6}
                      required
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        border: '2px solid #005DB8',
                        fontSize: '1.3rem',
                        letterSpacing: '4px',
                        textAlign: 'center',
                        fontWeight: '700'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: '600', color: '#1E293B', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                        New Password *
                      </label>
                      <input
                        type="password"
                        placeholder="At least 6 characters"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.95rem' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: '600', color: '#1E293B', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                        Confirm New Password *
                      </label>
                      <input
                        type="password"
                        placeholder="Repeat new password"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.95rem' }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #005DB8 0%, #031122 100%)',
                      color: '#FFFFFF',
                      fontWeight: '700',
                      fontSize: '1rem',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      boxShadow: '0 4px 15px rgba(0,93,184,0.3)'
                    }}
                  >
                    <span>{isLoading ? 'Verifying OTP & Updating...' : 'Verify OTP & Set New Password'}</span>
                    <IconArrowRight size={16} color="#FFFFFF" />
                  </button>
                </form>
              )}
            </div>
          )}

          {/* ===================== MODE: LOGIN (GOOGLE / EMAIL / PHONE) ===================== */}
          {mode === 'login' && (
            <div>
              {/* 1. CONTINUE WITH GOOGLE BUTTON */}
              <div style={{ marginBottom: '1.5rem' }}>
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.2rem',
                    borderRadius: '12px',
                    border: '1.5px solid #CBD5E1',
                    background: '#FFFFFF',
                    color: '#1E293B',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#005DB8'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#CBD5E1'}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span>Continue with Google</span>
                </button>

                {/* Divider */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '1.5rem 0 1.25rem 0',
                  color: '#94A3B8',
                  fontSize: '0.82rem',
                  fontWeight: '600'
                }}>
                  <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }}></div>
                  <span style={{ padding: '0 1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    or sign in with
                  </span>
                  <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }}></div>
                </div>

                {/* Method Pill (Email vs Phone) */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <button
                    type="button"
                    onClick={() => { setAuthMethod('email'); setErrorMessage(''); }}
                    style={{
                      padding: '0.45rem 1rem',
                      borderRadius: '20px',
                      border: '1px solid',
                      borderColor: authMethod === 'email' ? '#005DB8' : '#CBD5E1',
                      background: authMethod === 'email' ? 'rgba(0, 93, 184, 0.08)' : 'transparent',
                      color: authMethod === 'email' ? '#005DB8' : '#64748B',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <IconMail size={14} color="currentColor" />
                    <span>Email & Password</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => { setAuthMethod('phone'); setErrorMessage(''); }}
                    style={{
                      padding: '0.45rem 1rem',
                      borderRadius: '20px',
                      border: '1px solid',
                      borderColor: authMethod === 'phone' ? '#005DB8' : '#CBD5E1',
                      background: authMethod === 'phone' ? 'rgba(0, 93, 184, 0.08)' : 'transparent',
                      color: authMethod === 'phone' ? '#005DB8' : '#64748B',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <IconPhone size={14} color="currentColor" />
                    <span>Phone Number (OTP)</span>
                  </button>
                </div>
              </div>

              {/* Email Login Form */}
              {authMethod === 'email' && (
                <form onSubmit={handleEmailLogin}>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontWeight: '600', color: '#1E293B', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                      Email Address or Student ID *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. lamidiabdulhameedolawale@gmail.com or ALIR-2026-1001"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid #CBD5E1', fontSize: '0.95rem' }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <label style={{ fontWeight: '600', color: '#1E293B', fontSize: '0.9rem' }}>
                        Password *
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setMode('forgot_password');
                          setResetEmail(email);
                          setErrorMessage('');
                          setSuccessMessage('');
                        }}
                        style={{ background: 'none', border: 'none', fontSize: '0.82rem', color: '#005DB8', cursor: 'pointer', fontWeight: '600', textDecoration: 'underline' }}
                      >
                        Forgot Password? (Reset via OTP)
                      </button>
                    </div>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid #CBD5E1', fontSize: '0.95rem' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #005DB8 0%, #031122 100%)',
                      color: '#FFFFFF',
                      fontWeight: '700',
                      fontSize: '1.05rem',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(0,93,184,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>{isLoading ? 'Verifying Credentials...' : 'Sign In to Student Portal'}</span>
                    <IconArrowRight size={16} color="#FFFFFF" />
                  </button>
                </form>
              )}

              {/* Phone OTP Login Form */}
              {authMethod === 'phone' && (
                <div>
                  {!phoneOtpSent ? (
                    <form onSubmit={handleSendPhoneOTP}>
                      <div style={{ marginBottom: '1.25rem' }}>
                        <label style={{ display: 'block', fontWeight: '600', color: '#1E293B', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                          Phone / WhatsApp Number (with country code) *
                        </label>
                        <input
                          type="tel"
                          placeholder="+234 803 123 4567"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          required
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid #CBD5E1', fontSize: '0.95rem' }}
                        />
                        <span style={{ fontSize: '0.78rem', color: '#64748B', display: 'block', marginTop: '0.3rem' }}>
                          We will dispatch an SMS with a one-time verification code.
                        </span>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        style={{
                          width: '100%',
                          padding: '1rem',
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #005DB8 0%, #031122 100%)',
                          color: '#FFFFFF',
                          fontWeight: '700',
                          fontSize: '1.05rem',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          boxShadow: '0 4px 15px rgba(0,93,184,0.3)'
                        }}
                      >
                        <span>{isLoading ? 'Sending SMS Code...' : 'Send SMS Verification Code'}</span>
                        <IconArrowRight size={16} color="#FFFFFF" />
                      </button>
                    </form>
                  ) : (
                    <form onSubmit={handleVerifyPhoneOTP}>
                      <div style={{ marginBottom: '1.25rem' }}>
                        <label style={{ display: 'block', fontWeight: '600', color: '#1E293B', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                          Enter 6-Digit SMS Verification Code *
                        </label>
                        <input
                          type="text"
                          placeholder="123456"
                          value={phoneOtpCode}
                          onChange={(e) => setPhoneOtpCode(e.target.value)}
                          maxLength={6}
                          required
                          style={{
                            width: '100%',
                            padding: '0.85rem 1rem',
                            borderRadius: '10px',
                            border: '2px solid #005DB8',
                            fontSize: '1.3rem',
                            letterSpacing: '4px',
                            textAlign: 'center'
                          }}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        style={{
                          width: '100%',
                          padding: '1rem',
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #005DB8 0%, #031122 100%)',
                          color: '#FFFFFF',
                          fontWeight: '700',
                          fontSize: '1.05rem',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <span>{isLoading ? 'Verifying OTP...' : 'Confirm Code & Enter Portal'}</span>
                        <IconArrowRight size={16} color="#FFFFFF" />
                      </button>

                      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <button
                          type="button"
                          onClick={() => setPhoneOtpSent(false)}
                          style={{ background: 'none', border: 'none', color: '#64748B', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                          Change phone number
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}

              {/* Admissions Notice */}
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px dashed #E2E8F0', textAlign: 'center', fontSize: '0.88rem', color: '#64748B' }}>
                <p style={{ margin: '0 0 0.5rem 0' }}>
                  Need a student account? Official credentials are issued upon admission.
                </p>
                <Link to="/enroll" style={{ color: '#005DB8', fontWeight: '700', textDecoration: 'none' }}>
                  Submit Enrollment Application →
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
