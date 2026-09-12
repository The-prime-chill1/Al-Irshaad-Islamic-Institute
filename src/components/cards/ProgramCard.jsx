import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../data/imageAssets';

export default function ProgramCard({ program, categoryNumber }) {
  // Map appropriate image based on program id
  const getImage = (id) => {
    switch(id) {
      case 'nuurul-bayaan':
        return images.nuurulBayaan;
      case 'quran-recitation':
        return images.quranRecitation;
      case 'hifdh':
        return images.hifdh;
      case 'fundamentals-level-1':
        return images.islamicStudiesLevel1;
      case 'fundamentals-level-2':
        return images.islamicStudiesLevel2;
      case 'fundamentals-level-3':
        return images.islamicStudiesLevel3;
      case 'intermediate-fiqh':
      case 'intermediate-hadith':
      case 'intermediate-seerah':
      case 'intermediate-aqeedah':
        return images.advancedIslamicStudies;
      case 'arabic-language':
      case 'adhkaar':
        return images.arabicLanguage;
      default:
        return images.quranOpen;
    }
  };

  const programImage = getImage(program.id);

  return (
    <div 
      className="card-premium" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        overflow: 'hidden',
        padding: 0,
        transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
        borderRadius: '16px',
        border: '1px solid var(--border-medium)',
        background: '#FFFFFF'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 93, 184, 0.15)';
        e.currentTarget.style.borderColor = 'var(--accent-gold)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.borderColor = 'var(--border-medium)';
      }}
    >
      {/* Visual Image Header */}
      <div style={{ position: 'relative', height: '180px', overflow: 'hidden', backgroundColor: 'var(--primary-dark)' }}>
        <img 
          src={programImage} 
          alt={program.title}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transition: 'transform 0.6s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          loading="lazy"
        />
        <div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(180deg, rgba(3, 17, 34, 0.2) 0%, rgba(3, 17, 34, 0.75) 100%)' 
          }} 
        />

        {/* Top Badges */}
        <div style={{ position: 'absolute', top: '12px', left: '12px', right: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="badge-emerald" style={{ backdropFilter: 'blur(6px)', fontSize: '0.75rem', padding: '0.3rem 0.75rem' }}>
            {program.badge || program.level || "Core Track"}
          </span>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(3, 17, 34, 0.75)', padding: '0.25rem 0.6rem', borderRadius: '9999px', border: '1px solid rgba(197, 168, 105, 0.4)', fontSize: '0.75rem', color: '#FFFFFF', fontWeight: 600 }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block', boxShadow: '0 0 8px #10B981' }} />
            <span>Online Live</span>
          </div>
        </div>

        {/* Duration / Schedule Pill */}
        {program.duration && (
          <div style={{ position: 'absolute', bottom: '12px', left: '12px', color: 'var(--accent-gold-light)', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem', textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{program.duration}</span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        
        {/* Title & Subtitle */}
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: 'var(--primary-dark)', lineHeight: 1.35, fontWeight: 700 }}>
          {program.title}
        </h3>

        {program.subtitle && (
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-gold-dark)', marginBottom: '0.85rem' }}>
            {program.subtitle}
          </div>
        )}

        {/* Short Description */}
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.25rem', flexGrow: 1 }}>
          {program.shortDesc || program.description}
        </p>

        {/* Key Attributes Meta */}
        <div style={{ padding: '0.85rem 1rem', background: 'var(--bg-cream)', borderRadius: '10px', marginBottom: '1.5rem', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', border: '1px solid rgba(0, 93, 184, 0.06)' }}>
          {program.ageGroup && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Target:</span>
              <strong style={{ color: 'var(--primary-dark)' }}>{program.ageGroup}</strong>
            </div>
          )}
          {program.classes && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Schedule:</span>
              <strong style={{ color: 'var(--primary-dark)' }}>{program.classes}</strong>
            </div>
          )}
          {program.prerequisite && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Prerequisite:</span>
              <strong style={{ color: 'var(--primary-dark)' }}>{program.prerequisite}</strong>
            </div>
          )}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: 'auto' }}>
          <Link 
            to={program.route || "/programs"} 
            className="btn btn-outline btn-sm" 
            style={{ flex: 1, padding: '0.65rem 0.5rem', textAlign: 'center', fontSize: '0.85rem' }}
          >
            Curriculum
          </Link>
          <Link 
            to="/enroll" 
            className="btn btn-primary btn-sm"
            style={{ flex: 1, padding: '0.65rem 0.5rem', textAlign: 'center', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}
          >
            <span>Enroll Now</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

      </div>

    </div>
  );
}
