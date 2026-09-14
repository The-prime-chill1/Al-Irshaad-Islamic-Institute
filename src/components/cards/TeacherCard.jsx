import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  IconGraduationCap, 
  IconAward, 
  IconCheckCircle, 
  IconClock, 
  IconShield, 
  IconArrowRight, 
  IconSparkle, 
  IconMapPin, 
  IconHeart,
  IconInfo,
  IconX
} from '../common/Icons';

export default function TeacherCard({ teacher }) {
  const [modalOpen, setModalOpen] = useState(false);
  const shortName = teacher.shortName || teacher.name;
  const isFemale = teacher.gender === 'Female' || teacher.forFemaleAndKids;

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  return (
    <>
      {/* =========================================================================
          1. COMPACT PREMIUM CARD
          ========================================================================= */}
      <div 
        className="card-premium teacher-compact-card" 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          height: '100%', 
          overflow: 'hidden', 
          padding: 0,
          borderRadius: '20px',
          border: isFemale ? '1.5px solid rgba(16, 185, 129, 0.4)' : '1.5px solid rgba(197, 168, 105, 0.35)',
          boxShadow: '0 8px 25px rgba(3, 17, 34, 0.06)',
          background: '#FFFFFF',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = isFemale 
            ? '0 18px 40px rgba(16, 185, 129, 0.16)' 
            : '0 18px 40px rgba(0, 93, 184, 0.14)';
          e.currentTarget.style.borderColor = isFemale ? 'var(--emerald, #10B981)' : 'var(--accent-gold)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(3, 17, 34, 0.06)';
          e.currentTarget.style.borderColor = isFemale ? 'rgba(16, 185, 129, 0.4)' : 'rgba(197, 168, 105, 0.35)';
        }}
      >
        
        {/* Card Header with Crest */}
        <div 
          style={{
            position: 'relative',
            padding: '2rem 1.25rem 1.5rem 1.25rem',
            background: isFemale 
              ? 'linear-gradient(135deg, #031D1A 0%, #064E3B 50%, #047857 100%)' 
              : 'linear-gradient(135deg, #031122 0%, #071C34 50%, #005DB8 100%)',
            textAlign: 'center',
            color: '#FFFFFF',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Geometric Background */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(197, 168, 105, 0.15) 1.5px, transparent 1.5px)',
              backgroundSize: '18px 18px',
              opacity: 0.8,
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Seal Icon */}
            <div 
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: isFemale 
                  ? 'linear-gradient(135deg, #031D1A 0%, #064E3B 100%)' 
                  : 'linear-gradient(135deg, #031122 0%, #0E2A4A 100%)',
                border: isFemale ? '2px solid #34D399' : '2px solid #C5A869',
                boxShadow: isFemale 
                  ? '0 0 18px rgba(52, 211, 153, 0.4)' 
                  : '0 0 18px rgba(197, 168, 105, 0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.75rem',
                color: isFemale ? '#A7F3D0' : '#E5C988'
              }}
            >
              <IconGraduationCap size={30} color={isFemale ? "#A7F3D0" : "#E5C988"} />
            </div>

            {/* Arabic Name */}
            {teacher.arabicName && (
              <div 
                style={{ 
                  fontFamily: 'var(--font-arabic)', 
                  fontSize: '1.35rem', 
                  color: isFemale ? '#A7F3D0' : 'var(--accent-gold-light)', 
                  marginBottom: '0.25rem',
                  letterSpacing: '0.02em',
                  lineHeight: 1.3
                }} 
                dir="rtl"
              >
                {teacher.arabicName}
              </div>
            )}

            <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', margin: '0 0 0.25rem 0', fontWeight: 700, fontFamily: 'var(--font-serif)', lineHeight: 1.3 }}>
              {teacher.name}
            </h3>

            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: isFemale ? '#A7F3D0' : 'var(--accent-gold-light)', lineHeight: 1.35, minHeight: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {teacher.role}
            </div>

            {/* Badges */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', marginTop: '0.85rem', flexWrap: 'wrap' }}>
              {isFemale && (
                <span 
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    background: 'rgba(5, 150, 105, 0.9)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                >
                  <IconHeart size={11} color="#FFFFFF" />
                  <span>Female Students & Kids</span>
                </span>
              )}

              {teacher.location && (
                <span 
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    background: isFemale ? 'rgba(3, 29, 26, 0.85)' : 'rgba(0, 93, 184, 0.85)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                >
                  <IconMapPin size={11} color="#FFFFFF" />
                  <span>{teacher.location.split('(')[0].trim()}</span>
                </span>
              )}

              {teacher.titleBadge && (
                <span 
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: isFemale ? '#A7F3D0' : '#E5C988',
                    background: isFemale ? 'rgba(6, 78, 59, 0.85)' : 'rgba(3, 17, 34, 0.85)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '9999px',
                    border: isFemale ? '1px solid rgba(52, 211, 153, 0.5)' : '1px solid rgba(197, 168, 105, 0.5)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                >
                  <IconAward size={11} color={isFemale ? "#A7F3D0" : "#E5C988"} />
                  <span>{teacher.titleBadge}</span>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Compact Card Body */}
        <div style={{ padding: '1.35rem 1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          
          {/* Quick Specialization Summary */}
          <div style={{ marginBottom: '1rem', minHeight: '48px' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, display: 'block', marginBottom: '0.2rem' }}>
              Specialization Focus:
            </span>
            <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--primary-dark)', fontWeight: 600, lineHeight: 1.45 }}>
              {teacher.specialization}
            </p>
          </div>

          {/* Quick Discipline Pills (First 3) */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
            {(teacher.programsTaught || []).slice(0, 3).map((prog, idx) => (
              <span 
                key={idx} 
                style={{ 
                  fontSize: '0.74rem', 
                  padding: '0.2rem 0.55rem', 
                  background: isFemale ? 'rgba(16, 185, 129, 0.08)' : 'var(--primary-ultralight)', 
                  color: isFemale ? '#047857' : 'var(--primary)', 
                  borderRadius: '5px', 
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
                }}
              >
                {prog}
              </span>
            ))}
            {(teacher.programsTaught || []).length > 3 && (
              <span style={{ fontSize: '0.74rem', padding: '0.2rem 0.45rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                +{teacher.programsTaught.length - 3} more
              </span>
            )}
          </div>

          {/* Card Action Buttons: 1. About Teacher Modal Trigger, 2. Enroll Button */}
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="btn btn-outline btn-sm"
              style={{ 
                width: '100%', 
                justifyContent: 'center', 
                fontSize: '0.84rem', 
                fontWeight: 700, 
                padding: '0.65rem 0.85rem',
                borderColor: isFemale ? '#10B981' : 'var(--primary)',
                color: isFemale ? '#047857' : 'var(--primary)'
              }}
            >
              <IconInfo size={15} color="currentColor" />
              <span>About {shortName} & Bio</span>
            </button>

            <Link 
              to="/enroll" 
              className={isFemale ? "btn btn-primary btn-sm" : "btn btn-gold btn-sm"} 
              style={{ width: '100%', textAlign: 'center', justifyContent: 'center', padding: '0.65rem 0.85rem', fontWeight: 700, fontSize: '0.84rem' }}
            >
              <span>Enroll with {shortName}</span>
              <IconArrowRight size={14} color={isFemale ? "#FFFFFF" : "#031122"} />
            </Link>
          </div>

        </div>

      </div>

      {/* =========================================================================
          2. INTERACTIVE FULL SCHOLARLY PROFILE MODAL POPUP
          ========================================================================= */}
      {modalOpen && (
        <div 
          role="dialog" 
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1rem, 3vw, 2rem)',
            background: 'rgba(3, 17, 34, 0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            animation: 'fadeInModal 0.25s ease forwards'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div 
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
              border: isFemale ? '2px solid #34D399' : '2px solid #C5A869',
              overflow: 'hidden',
              position: 'relative',
              animation: 'scaleUpModal 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.45)',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'background 0.2s ease, transform 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0, 0, 0, 0.75)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0, 0, 0, 0.45)'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <IconX size={20} color="#FFFFFF" />
            </button>

            {/* Modal Header */}
            <div 
              style={{
                padding: '2rem 2rem 1.5rem 2rem',
                background: isFemale 
                  ? 'linear-gradient(135deg, #031D1A 0%, #064E3B 50%, #047857 100%)' 
                  : 'linear-gradient(135deg, #031122 0%, #071C34 50%, #005DB8 100%)',
                color: '#FFFFFF',
                textAlign: 'center',
                position: 'relative',
                flexShrink: 0
              }}
            >
              <div 
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  background: isFemale 
                    ? 'linear-gradient(135deg, #031D1A 0%, #064E3B 100%)' 
                    : 'linear-gradient(135deg, #031122 0%, #0E2A4A 100%)',
                  border: isFemale ? '2.5px solid #34D399' : '2.5px solid #C5A869',
                  boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.75rem',
                  color: isFemale ? '#A7F3D0' : '#E5C988'
                }}
              >
                <IconGraduationCap size={34} color={isFemale ? "#A7F3D0" : "#E5C988"} />
              </div>

              {teacher.arabicName && (
                <div 
                  style={{ 
                    fontFamily: 'var(--font-arabic)', 
                    fontSize: '1.6rem', 
                    color: isFemale ? '#A7F3D0' : 'var(--accent-gold-light)', 
                    marginBottom: '0.25rem',
                    lineHeight: 1.3
                  }} 
                  dir="rtl"
                >
                  {teacher.arabicName}
                </div>
              )}

              <h2 style={{ fontSize: '1.45rem', color: '#FFFFFF', margin: '0 0 0.35rem 0', fontWeight: 700, fontFamily: 'var(--font-serif)' }}>
                {teacher.name}
              </h2>

              <div style={{ fontSize: '0.9rem', color: isFemale ? '#A7F3D0' : 'var(--accent-gold-light)', fontWeight: 600 }}>
                {teacher.role}
              </div>

              {/* Badges in Modal */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '0.85rem', flexWrap: 'wrap' }}>
                {isFemale && (
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, background: 'rgba(5, 150, 105, 0.9)', color: '#FFFFFF', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.35)' }}>
                    Female Students & Kids
                  </span>
                )}
                {teacher.location && (
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, background: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                    📍 {teacher.location}
                  </span>
                )}
                {teacher.titleBadge && (
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, background: isFemale ? 'rgba(6, 78, 59, 0.9)' : 'rgba(3, 17, 34, 0.9)', color: isFemale ? '#A7F3D0' : '#E5C988', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: isFemale ? '1px solid #34D399' : '1px solid #C5A869' }}>
                    ✦ {teacher.titleBadge}
                  </span>
                )}
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div style={{ padding: '2rem', overflowY: 'auto', WebkitOverflowScrolling: 'touch', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Full Bio */}
              <div>
                <h4 style={{ fontSize: '1rem', color: 'var(--primary-dark)', marginBottom: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <IconInfo size={17} color={isFemale ? "#059669" : "var(--accent-gold-dark)"} />
                  <span>About {shortName}</span>
                </h4>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
                  {teacher.bio}
                </div>
              </div>

              {/* Qualifications & Degrees */}
              {teacher.qualificationsList && teacher.qualificationsList.length > 0 && (
                <div 
                  style={{ 
                    background: 'var(--bg-cream)', 
                    padding: '1.35rem', 
                    borderRadius: '16px', 
                    border: '1px solid var(--border-medium)'
                  }}
                >
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-dark)', marginBottom: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <IconAward size={18} color={isFemale ? "#059669" : "var(--accent-gold-dark)"} />
                    <span>Academic Qualifications & Scholarly Lineage</span>
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    {teacher.qualificationsList.map((q, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: '#1E293B', lineHeight: 1.5 }}>
                        <IconCheckCircle size={15} color={isFemale ? "#059669" : "var(--accent-gold-dark)"} style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Disciplines Taught */}
              {teacher.programsTaught && (
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.6rem', fontWeight: 700 }}>
                    Courses Taught:
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {teacher.programsTaught.map((prog, idx) => (
                      <span 
                        key={idx} 
                        style={{ 
                          fontSize: '0.82rem', 
                          padding: '0.3rem 0.75rem', 
                          background: isFemale ? 'rgba(16, 185, 129, 0.1)' : 'var(--primary-ultralight)', 
                          color: isFemale ? '#047857' : 'var(--primary)', 
                          borderRadius: '8px', 
                          fontWeight: 600, 
                          border: isFemale ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid rgba(0, 93, 184, 0.15)'
                        }}
                      >
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Personalized 1-on-1 Notice */}
              <div 
                style={{ 
                  padding: '1rem 1.15rem', 
                  borderRadius: '12px', 
                  background: 'rgba(197, 168, 105, 0.12)', 
                  border: '1px solid rgba(197, 168, 105, 0.35)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem'
                }}
              >
                <IconSparkle size={18} color="var(--accent-gold-dark)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div style={{ fontSize: '0.86rem', color: '#1E293B', lineHeight: 1.5 }}>
                  <strong style={{ color: 'var(--accent-gold-dark)', display: 'block', marginBottom: '0.15rem' }}>Personalized 1-on-1 Timetable:</strong>
                  Your recurring class schedule and private timings are directly assigned and customized to your timezone upon enrollment.
                </div>
              </div>

            </div>

            {/* Modal Footer CTA */}
            <div 
              style={{
                padding: '1.25rem 2rem',
                background: '#F8FAFC',
                borderTop: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexShrink: 0,
                flexWrap: 'wrap'
              }}
            >
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="btn btn-outline btn-sm"
                style={{ fontSize: '0.88rem' }}
              >
                Close
              </button>

              <Link 
                to="/enroll" 
                className={isFemale ? "btn btn-primary btn-md" : "btn btn-gold btn-md"} 
                style={{ fontWeight: 700, padding: '0.75rem 1.5rem' }}
                onClick={() => setModalOpen(false)}
              >
                <span>Enroll with {shortName}</span>
                <IconArrowRight size={16} color={isFemale ? "#FFFFFF" : "#031122"} />
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInModal {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUpModal {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  );
}
