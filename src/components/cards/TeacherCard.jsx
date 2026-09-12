import React from 'react';
import { images } from '../../data/imageAssets';

export default function TeacherCard({ teacher }) {
  const isFemale = teacher.gender === 'Female';
  const photoUrl = isFemale ? images.teacherUstadha : images.teacherUstadh;

  return (
    <div 
      className="card-premium" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        overflow: 'hidden', 
        padding: 0,
        borderRadius: '16px',
        border: '1px solid var(--border-medium)',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 93, 184, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
    >
      
      {/* Teacher Avatar / Image Header */}
      <div 
        style={{
          position: 'relative',
          height: '240px',
          background: 'linear-gradient(135deg, #031122 0%, #005DB8 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <img 
          src={photoUrl} 
          alt={teacher.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(3,17,34,0.1) 0%, rgba(3,17,34,0.85) 100%)' }} />

        {/* Teacher Title / Status Pill */}
        <div style={{ position: 'absolute', bottom: '14px', left: '16px', right: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span 
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--accent-gold-light)',
              background: 'rgba(3, 17, 34, 0.85)',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              border: '1px solid rgba(197, 168, 105, 0.4)',
              backdropFilter: 'blur(4px)'
            }}
          >
            Verified Faculty
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#FFFFFF', background: 'rgba(0, 93, 184, 0.85)', padding: '0.25rem 0.6rem', borderRadius: '6px' }}>
            1-on-1 Mentor
          </span>
        </div>
      </div>

      {/* Teacher Content */}
      <div style={{ padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        
        <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', marginBottom: '0.25rem', fontWeight: 700 }}>
          {teacher.name}
        </h3>

        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-gold-dark)', marginBottom: '1rem' }}>
          {teacher.role}
        </div>

        {/* Details Table */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
          <div>
            <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Specialization:</span>
            <strong style={{ color: 'var(--text-primary)' }}>{teacher.specialization}</strong>
          </div>
          <div>
            <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Qualifications:</span>
            <span style={{ color: 'var(--text-secondary)' }}>{teacher.qualifications}</span>
          </div>
          <div>
            <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Teaching Experience:</span>
            <span style={{ color: 'var(--text-secondary)' }}>{teacher.experience}</span>
          </div>
        </div>

        {/* Programs Taught Chips */}
        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>Programs Taught:</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {teacher.programsTaught.map((prog, idx) => (
              <span key={idx} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', background: 'var(--primary-ultralight)', color: 'var(--primary-dark)', borderRadius: '4px', fontWeight: 600, border: '1px solid rgba(0, 93, 184, 0.1)' }}>
                {prog}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
