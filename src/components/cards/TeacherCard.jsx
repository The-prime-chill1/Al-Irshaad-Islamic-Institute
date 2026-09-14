import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  IconGraduationCap, 
  IconAward, 
  IconCheckCircle, 
  IconShield, 
  IconArrowRight, 
  IconSparkle, 
  IconMapPin, 
  IconHeart,
  IconInfo,
  IconX,
  IconBookOpen,
  IconClock
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

  // Accent theme variables based on gender/faculty specialization
  const theme = isFemale ? {
    headerGradient: 'linear-gradient(145deg, #022C22 0%, #064E3B 55%, #059669 100%)',
    sealBg: 'linear-gradient(135deg, #022C22 0%, #064E3B 100%)',
    sealBorder: '#34D399',
    sealGlow: '0 0 20px rgba(52, 211, 153, 0.45)',
    arabicColor: '#A7F3D0',
    accentLight: '#6EE7B7',
    badgeBg: 'rgba(5, 150, 105, 0.95)',
    cardBorder: 'rgba(16, 185, 129, 0.45)',
    cardBorderHover: '#10B981',
    cardShadowHover: '0 20px 45px rgba(6, 78, 59, 0.22)',
    tagBg: 'rgba(16, 185, 129, 0.1)',
    tagColor: '#047857',
    tagBorder: 'rgba(16, 185, 129, 0.25)',
    credBg: 'rgba(16, 185, 129, 0.08)',
    credBorder: 'rgba(16, 185, 129, 0.25)',
    credIconColor: '#059669',
    btnPrimaryClass: 'btn btn-primary btn-sm',
    btnOutlineBorder: '#10B981',
    btnOutlineColor: '#047857'
  } : {
    headerGradient: 'linear-gradient(145deg, #031122 0%, #071C34 55%, #005DB8 100%)',
    sealBg: 'linear-gradient(135deg, #031122 0%, #0E2A4A 100%)',
    sealBorder: '#C5A869',
    sealGlow: '0 0 20px rgba(197, 168, 105, 0.45)',
    arabicColor: 'var(--accent-gold-light, #E5C988)',
    accentLight: '#F3E3B6',
    badgeBg: 'rgba(3, 17, 34, 0.9)',
    cardBorder: 'rgba(197, 168, 105, 0.4)',
    cardBorderHover: 'var(--accent-gold, #C5A869)',
    cardShadowHover: '0 20px 45px rgba(0, 93, 184, 0.2)',
    tagBg: 'var(--primary-ultralight, #EFF5FC)',
    tagColor: 'var(--primary, #005DB8)',
    tagBorder: 'rgba(0, 93, 184, 0.18)',
    credBg: 'rgba(197, 168, 105, 0.1)',
    credBorder: 'rgba(197, 168, 105, 0.3)',
    credIconColor: 'var(--accent-gold-dark, #9E7B28)',
    btnPrimaryClass: 'btn btn-gold btn-sm',
    btnOutlineBorder: 'var(--primary, #005DB8)',
    btnOutlineColor: 'var(--primary, #005DB8)'
  };

  return (
    <>
      {/* =========================================================================
          1. ELEVATED FACULTY CARD
          ========================================================================= */}
      <div 
        className="card-premium teacher-card-elevated" 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          height: '100%', 
          overflow: 'hidden', 
          padding: 0,
          borderRadius: '22px',
          border: `1.5px solid ${theme.cardBorder}`,
          boxShadow: '0 10px 30px rgba(3, 17, 34, 0.07)',
          background: '#FFFFFF',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease',
          position: 'relative'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-7px)';
          e.currentTarget.style.boxShadow = theme.cardShadowHover;
          e.currentTarget.style.borderColor = theme.cardBorderHover;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(3, 17, 34, 0.07)';
          e.currentTarget.style.borderColor = theme.cardBorder;
        }}
      >
        
        {/* Card Header with Islamic Crest & Visual Depth */}
        <div 
          style={{
            position: 'relative',
            padding: '2.2rem 1.35rem 1.6rem 1.35rem',
            background: theme.headerGradient,
            textAlign: 'center',
            color: '#FFFFFF',
            overflow: 'hidden',
            flexShrink: 0
          }}
        >
          {/* Subtle Islamic Motif Background Overlay */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)',
              backgroundSize: '20px 20px',
              opacity: 0.75,
              pointerEvents: 'none'
            }}
          />
          <div 
            style={{
              position: 'absolute',
              top: '-40%',
              right: '-20%',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: isFemale ? 'radial-gradient(circle, rgba(52,211,153,0.2) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(229,201,136,0.2) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Crest Seal Icon */}
            <div 
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                background: theme.sealBg,
                border: `2.5px solid ${theme.sealBorder}`,
                boxShadow: theme.sealGlow,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.85rem',
                color: theme.arabicColor,
                transition: 'transform 0.3s ease'
              }}
            >
              <IconGraduationCap size={32} color={theme.arabicColor} />
            </div>

            {/* Arabic Name Calligraphy */}
            {teacher.arabicName && (
              <div 
                style={{ 
                  fontFamily: 'var(--font-arabic)', 
                  fontSize: '1.45rem', 
                  color: theme.arabicColor, 
                  marginBottom: '0.35rem',
                  letterSpacing: '0.02em',
                  lineHeight: 1.3,
                  textShadow: '0 2px 8px rgba(0,0,0,0.4)'
                }} 
                dir="rtl"
              >
                {teacher.arabicName}
              </div>
            )}

            {/* Teacher Name */}
            <h3 style={{ 
              fontSize: '1.25rem', 
              color: '#FFFFFF', 
              margin: '0 0 0.35rem 0', 
              fontWeight: 700, 
              fontFamily: 'var(--font-serif)', 
              lineHeight: 1.3,
              letterSpacing: '0.01em'
            }}>
              {teacher.name}
            </h3>

            {/* Teacher Role Subtitle */}
            <div style={{ 
              fontSize: '0.84rem', 
              fontWeight: 600, 
              color: theme.accentLight, 
              lineHeight: 1.4, 
              minHeight: '36px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              {teacher.role}
            </div>

            {/* Feature Badges */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.45rem', marginTop: '0.95rem', flexWrap: 'wrap' }}>
              {isFemale && (
                <span 
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: '#FFFFFF',
                    background: 'rgba(5, 150, 105, 0.95)',
                    padding: '0.22rem 0.75rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}
                >
                  <IconHeart size={12} color="#FFFFFF" />
                  <span>Dedicated Sisters & Kids</span>
                </span>
              )}

              {teacher.titleBadge && (
                <span 
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: isFemale ? '#A7F3D0' : '#E5C988',
                    background: isFemale ? 'rgba(2, 44, 34, 0.9)' : 'rgba(3, 17, 34, 0.9)',
                    padding: '0.22rem 0.75rem',
                    borderRadius: '9999px',
                    border: isFemale ? '1px solid rgba(52, 211, 153, 0.55)' : '1px solid rgba(197, 168, 105, 0.55)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <IconAward size={12} color={isFemale ? "#A7F3D0" : "#E5C988"} />
                  <span>{teacher.titleBadge}</span>
                </span>
              )}

              {teacher.location && (
                <span 
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.92)',
                    background: 'rgba(255, 255, 255, 0.16)',
                    padding: '0.22rem 0.7rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <IconMapPin size={11} color="#FFFFFF" />
                  <span>{teacher.location.split('(')[0].trim()}</span>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card Body Information */}
        <div style={{ padding: '1.4rem 1.35rem 1.35rem 1.35rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          
          {/* Key Academic / Scholarly Lineage Highlight Box */}
          <div 
            style={{ 
              background: theme.credBg, 
              border: `1px solid ${theme.credBorder}`, 
              borderRadius: '12px', 
              padding: '0.75rem 0.9rem', 
              marginBottom: '1.1rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.6rem'
            }}
          >
            <IconGraduationCap size={18} color={theme.credIconColor} style={{ marginTop: '2px', flexShrink: 0 }} />
            <div style={{ fontSize: '0.82rem', color: '#1E293B', lineHeight: 1.45, fontWeight: 500 }}>
              <strong style={{ color: 'var(--primary-dark)', display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.1rem' }}>
                Key Scholarly Lineage:
              </strong>
              {teacher.qualificationsList && teacher.qualificationsList[0] 
                ? (teacher.qualificationsList[0].length > 60 ? teacher.qualificationsList[0].slice(0, 60) + '...' : teacher.qualificationsList[0])
                : (teacher.qualifications ? teacher.qualifications.split(',')[0] : 'Certified Islamic Scholar')}
            </div>
          </div>

          {/* Specialization Focus */}
          <div style={{ marginBottom: '1.1rem' }}>
            <span style={{ 
              fontSize: '0.72rem', 
              color: 'var(--text-muted)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.06em', 
              fontWeight: 700, 
              display: 'block', 
              marginBottom: '0.3rem' 
            }}>
              Specialization Focus:
            </span>
            <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--primary-dark)', fontWeight: 600, lineHeight: 1.5 }}>
              {teacher.specialization}
            </p>
          </div>

          {/* Programs Taught Chips */}
          <div style={{ marginBottom: '1.35rem' }}>
            <span style={{ 
              fontSize: '0.72rem', 
              color: 'var(--text-muted)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.06em', 
              fontWeight: 700, 
              display: 'block', 
              marginBottom: '0.4rem' 
            }}>
              Curriculum Tracks:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {(teacher.programsTaught || []).slice(0, 3).map((prog, idx) => (
                <span 
                  key={idx} 
                  style={{ 
                    fontSize: '0.76rem', 
                    padding: '0.25rem 0.6rem', 
                    background: theme.tagBg, 
                    color: theme.tagColor, 
                    border: `1px solid ${theme.tagBorder}`,
                    borderRadius: '6px', 
                    fontWeight: 600,
                    lineHeight: 1.3
                  }}
                >
                  {prog}
                </span>
              ))}
              {(teacher.programsTaught || []).length > 3 && (
                <span 
                  style={{ 
                    fontSize: '0.74rem', 
                    padding: '0.25rem 0.5rem', 
                    color: 'var(--text-muted)', 
                    fontWeight: 600,
                    background: '#F1F5F9',
                    borderRadius: '6px'
                  }}
                >
                  +{teacher.programsTaught.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Dual Action CTA Buttons */}
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="btn btn-outline btn-sm"
              style={{ 
                width: '100%', 
                justifyContent: 'center', 
                fontSize: '0.86rem', 
                fontWeight: 700, 
                padding: '0.7rem 0.9rem',
                borderColor: theme.btnOutlineBorder,
                color: theme.btnOutlineColor,
                borderRadius: '10px'
              }}
            >
              <IconInfo size={16} color="currentColor" />
              <span>About {shortName} & Bio</span>
            </button>

            <Link 
              to="/enroll" 
              className={theme.btnPrimaryClass} 
              style={{ 
                width: '100%', 
                textAlign: 'center', 
                justifyContent: 'center', 
                padding: '0.7rem 0.9rem', 
                fontWeight: 700, 
                fontSize: '0.86rem',
                borderRadius: '10px'
              }}
            >
              <span>Enroll with {shortName}</span>
              <IconArrowRight size={15} color={isFemale ? "#FFFFFF" : "#031122"} />
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
            background: 'rgba(3, 17, 34, 0.8)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
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
              maxWidth: '720px',
              width: '100%',
              maxHeight: '92vh',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 30px 70px rgba(0, 0, 0, 0.4)',
              border: `2px solid ${isFemale ? '#34D399' : '#C5A869'}`,
              overflow: 'hidden',
              position: 'relative',
              animation: 'scaleUpModal 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              aria-label="Close profile modal"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.55)',
                border: '1.5px solid rgba(255, 255, 255, 0.4)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'background 0.2s ease, transform 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0, 0, 0, 0.85)'; e.currentTarget.style.transform = 'scale(1.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0, 0, 0, 0.55)'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <IconX size={20} color="#FFFFFF" />
            </button>

            {/* Modal Header */}
            <div 
              style={{
                padding: '2.2rem 2rem 1.6rem 2rem',
                background: theme.headerGradient,
                color: '#FFFFFF',
                textAlign: 'center',
                position: 'relative',
                flexShrink: 0
              }}
            >
              <div 
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: theme.sealBg,
                  border: `2.5px solid ${theme.sealBorder}`,
                  boxShadow: '0 0 25px rgba(0, 0, 0, 0.35)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.85rem',
                  color: theme.arabicColor
                }}
              >
                <IconGraduationCap size={36} color={theme.arabicColor} />
              </div>

              {teacher.arabicName && (
                <div 
                  style={{ 
                    fontFamily: 'var(--font-arabic)', 
                    fontSize: '1.75rem', 
                    color: theme.arabicColor, 
                    marginBottom: '0.35rem',
                    lineHeight: 1.3,
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                  }} 
                  dir="rtl"
                >
                  {teacher.arabicName}
                </div>
              )}

              <h2 style={{ fontSize: '1.55rem', color: '#FFFFFF', margin: '0 0 0.35rem 0', fontWeight: 700, fontFamily: 'var(--font-serif)' }}>
                {teacher.name}
              </h2>

              <div style={{ fontSize: '0.94rem', color: theme.accentLight, fontWeight: 600 }}>
                {teacher.role}
              </div>

              {/* Badges in Modal */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '0.95rem', flexWrap: 'wrap' }}>
                {isFemale && (
                  <span style={{ fontSize: '0.74rem', fontWeight: 700, background: 'rgba(5, 150, 105, 0.95)', color: '#FFFFFF', padding: '0.28rem 0.85rem', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.4)' }}>
                    🌿 Dedicated Sisters & Kids Faculty
                  </span>
                )}
                {teacher.location && (
                  <span style={{ fontSize: '0.74rem', fontWeight: 600, background: 'rgba(255, 255, 255, 0.18)', color: '#FFFFFF', padding: '0.28rem 0.85rem', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                    📍 {teacher.location}
                  </span>
                )}
                {teacher.titleBadge && (
                  <span style={{ fontSize: '0.74rem', fontWeight: 700, background: isFemale ? 'rgba(2, 44, 34, 0.95)' : 'rgba(3, 17, 34, 0.95)', color: isFemale ? '#A7F3D0' : '#E5C988', padding: '0.28rem 0.85rem', borderRadius: '9999px', border: isFemale ? '1px solid #34D399' : '1px solid #C5A869' }}>
                    ✦ {teacher.titleBadge}
                  </span>
                )}
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div style={{ padding: '2rem', overflowY: 'auto', WebkitOverflowScrolling: 'touch', display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
              
              {/* Full Bio */}
              <div>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-dark)', marginBottom: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <IconInfo size={19} color={isFemale ? "#059669" : "var(--accent-gold-dark)"} />
                  <span>About {shortName} & Pedagogical Approach</span>
                </h4>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.85', whiteSpace: 'pre-line' }}>
                  {teacher.bio}
                </div>
              </div>

              {/* Qualifications & Degrees */}
              {teacher.qualificationsList && teacher.qualificationsList.length > 0 && (
                <div 
                  style={{ 
                    background: 'var(--bg-cream, #F3EFEA)', 
                    padding: '1.45rem', 
                    borderRadius: '16px', 
                    border: '1px solid var(--border-medium)'
                  }}
                >
                  <h4 style={{ fontSize: '1rem', color: 'var(--primary-dark)', marginBottom: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <IconAward size={20} color={isFemale ? "#059669" : "var(--accent-gold-dark)"} />
                    <span>Academic Qualifications & Scholarly Lineage</span>
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {teacher.qualificationsList.map((q, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', color: '#1E293B', lineHeight: 1.55 }}>
                        <IconCheckCircle size={17} color={isFemale ? "#059669" : "var(--accent-gold-dark)"} style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Disciplines Taught */}
              {teacher.programsTaught && (
                <div>
                  <h4 style={{ fontSize: '0.92rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <IconBookOpen size={16} color="currentColor" />
                    <span>Courses & Disciplines Taught:</span>
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {teacher.programsTaught.map((prog, idx) => (
                      <span 
                        key={idx} 
                        style={{ 
                          fontSize: '0.84rem', 
                          padding: '0.35rem 0.85rem', 
                          background: theme.tagBg, 
                          color: theme.tagColor, 
                          borderRadius: '8px', 
                          fontWeight: 600, 
                          border: `1px solid ${theme.tagBorder}`
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
                  padding: '1.15rem 1.25rem', 
                  borderRadius: '14px', 
                  background: isFemale ? 'rgba(16, 185, 129, 0.08)' : 'rgba(197, 168, 105, 0.12)', 
                  border: isFemale ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(197, 168, 105, 0.38)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}
              >
                <IconClock size={20} color={isFemale ? "#059669" : "var(--accent-gold-dark)"} style={{ marginTop: '2px', flexShrink: 0 }} />
                <div style={{ fontSize: '0.88rem', color: '#1E293B', lineHeight: 1.55 }}>
                  <strong style={{ color: isFemale ? '#047857' : 'var(--accent-gold-dark)', display: 'block', marginBottom: '0.2rem' }}>Personalized 1-on-1 Timetable & Timezone Matching:</strong>
                  Your recurring weekly class schedule and private lesson timings are directly assigned and customized to your timezone (EST, CST, PST, GMT, WAT) upon enrollment.
                </div>
              </div>

            </div>

            {/* Modal Footer CTA */}
            <div 
              style={{
                padding: '1.35rem 2rem',
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
                style={{ fontSize: '0.9rem', borderRadius: '10px' }}
              >
                Close Window
              </button>

              <Link 
                to="/enroll" 
                className={isFemale ? "btn btn-primary btn-md" : "btn btn-gold btn-md"} 
                style={{ fontWeight: 700, padding: '0.8rem 1.6rem', borderRadius: '10px' }}
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
