import React from 'react';
import { Link } from 'react-router-dom';
import { 
  IconGraduationCap, 
  IconBookOpen, 
  IconAward, 
  IconCheckCircle, 
  IconClock, 
  IconShield, 
  IconArrowRight,
  IconSparkle
} from '../common/Icons';

export default function TeacherCard({ teacher }) {
  return (
    <div 
      className="card-premium" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        overflow: 'hidden', 
        padding: 0,
        borderRadius: '20px',
        border: '1.5px solid rgba(197, 168, 105, 0.35)',
        boxShadow: '0 12px 35px rgba(3, 17, 34, 0.08)',
        background: '#FFFFFF',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 22px 48px rgba(0, 93, 184, 0.16)';
        e.currentTarget.style.borderColor = 'var(--accent-gold)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 12px 35px rgba(3, 17, 34, 0.08)';
        e.currentTarget.style.borderColor = 'rgba(197, 168, 105, 0.35)';
      }}
    >
      
      {/* 1. Royal Scholarly Emblem & Crest Header (No Face Photos) */}
      <div 
        style={{
          position: 'relative',
          padding: '2.5rem 1.5rem 2rem 1.5rem',
          background: 'linear-gradient(135deg, #031122 0%, #071C34 50%, #005DB8 100%)',
          textAlign: 'center',
          color: '#FFFFFF',
          overflow: 'hidden'
        }}
      >
        {/* Subtle Background Geometric Ornament */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(197, 168, 105, 0.15) 1.5px, transparent 1.5px)',
            backgroundSize: '20px 20px',
            opacity: 0.8,
            pointerEvents: 'none'
          }}
        />

        {/* Central Golden Scholarly Seal Icon */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div 
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #031122 0%, #0E2A4A 100%)',
              border: '2.5px solid #C5A869',
              boxShadow: '0 0 24px rgba(197, 168, 105, 0.45), inset 0 0 12px rgba(197, 168, 105, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              color: '#E5C988'
            }}
          >
            <IconGraduationCap size={40} color="#E5C988" />
          </div>

          {/* Arabic Calligraphy Title */}
          <div 
            style={{ 
              fontFamily: 'var(--font-arabic)', 
              fontSize: '1.6rem', 
              color: 'var(--accent-gold-light)', 
              marginBottom: '0.2rem',
              letterSpacing: '0.02em',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }} 
            dir="rtl"
          >
            أُسْتَاذ نَاصِر
          </div>

          <h3 style={{ fontSize: '1.45rem', color: '#FFFFFF', margin: '0 0 0.35rem 0', fontWeight: 700, fontFamily: 'var(--font-serif)' }}>
            {teacher.name}
          </h3>

          <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent-gold-light)', letterSpacing: '0.03em' }}>
            {teacher.role}
          </div>

          {/* Status Badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '1.15rem', flexWrap: 'wrap' }}>
            <span 
              style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#E5C988',
                background: 'rgba(3, 17, 34, 0.75)',
                padding: '0.25rem 0.8rem',
                borderRadius: '9999px',
                border: '1px solid rgba(197, 168, 105, 0.5)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <IconShield size={12} color="#E5C988" />
              <span>Verified Lead Faculty</span>
            </span>

            <span 
              style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#FFFFFF',
                background: 'rgba(0, 93, 184, 0.85)',
                padding: '0.25rem 0.8rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <IconClock size={12} color="#FFFFFF" />
              <span>1-on-1 Schedule Coordinator</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Teacher Credentials & Academic Profile */}
      <div style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        
        {/* Personal Bio Narrative */}
        {teacher.bio && (
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '1.5rem', fontStyle: 'normal' }}>
            {teacher.bio}
          </p>
        )}

        {/* Credentials Grid */}
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.85rem', 
            background: 'var(--bg-cream)', 
            padding: '1.25rem 1.35rem', 
            borderRadius: '14px', 
            border: '1px solid var(--border-medium)',
            marginBottom: '1.5rem'
          }}
        >
          <div>
            <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
              Specialization:
            </span>
            <strong style={{ color: 'var(--primary-dark)', fontSize: '0.92rem' }}>
              {teacher.specialization}
            </strong>
          </div>

          <div>
            <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
              Qualifications:
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              {teacher.qualifications}
            </span>
          </div>

          <div>
            <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
              Teaching Experience:
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              {teacher.experience}
            </span>
          </div>
        </div>

        {/* Programs Taught Chips */}
        <div style={{ marginBottom: '1.75rem' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Programs Personally Taught:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {teacher.programsTaught.map((prog, idx) => (
              <span 
                key={idx} 
                style={{ 
                  fontSize: '0.8rem', 
                  padding: '0.3rem 0.75rem', 
                  background: 'var(--primary-ultralight)', 
                  color: 'var(--primary)', 
                  borderRadius: '6px', 
                  fontWeight: 600, 
                  border: '1px solid rgba(0, 93, 184, 0.15)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                <IconCheckCircle size={12} color="var(--primary)" />
                <span>{prog}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Schedule Assignment Guarantee Box */}
        <div 
          style={{ 
            marginTop: 'auto', 
            padding: '1rem 1.15rem', 
            borderRadius: '12px', 
            background: 'rgba(197, 168, 105, 0.12)', 
            border: '1px solid rgba(197, 168, 105, 0.35)',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.65rem'
          }}
        >
          <IconSparkle size={18} color="var(--accent-gold-dark)" style={{ marginTop: '2px', flexShrink: 0 }} />
          <div style={{ fontSize: '0.84rem', color: '#1E293B', lineHeight: 1.5 }}>
            <strong style={{ color: 'var(--accent-gold-dark)', display: 'block', marginBottom: '0.15rem' }}>Personalized Schedule Coordination:</strong>
            Upon enrollment, Ustadh Nasir directly coordinates your class days and recurring timings matched to your timezone.
          </div>
        </div>

        {/* Action Button */}
        <Link 
          to="/enroll" 
          className="btn btn-gold btn-md" 
          style={{ width: '100%', textAlign: 'center', justifyContent: 'center', padding: '0.85rem', fontWeight: 700 }}
        >
          <span>Enroll with Ustadh Nasir</span>
          <IconArrowRight size={16} color="#031122" />
        </Link>

      </div>

    </div>
  );
}
