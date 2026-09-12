import React from 'react';
import { Link } from 'react-router-dom';
import { contactData } from '../../data/contactData';
import StarBorder from '../effects/StarBorder';

export default function CtaBannerSection({ 
  title = "Begin Your Sacred Learning Journey Today", 
  subtitle = "Take the first step toward beautiful Qur'anic recitation, authentic Islamic knowledge, and character transformation with Al-Irshaad.",
  badge = "Admissions Open"
}) {
  return (
    <section 
      style={{
        background: 'linear-gradient(135deg, #031122 0%, #071C34 50%, #005DB8 100%)',
        color: '#FFFFFF',
        padding: 'clamp(4rem, 6vw, 5.5rem) 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Pattern overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(197, 168, 105, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.8
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '820px' }}>
        
        <span 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 1rem',
            borderRadius: '9999px',
            background: 'rgba(197, 168, 105, 0.2)',
            border: '1px solid rgba(197, 168, 105, 0.4)',
            color: 'var(--accent-gold-light)',
            fontSize: '0.825rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '1.5rem'
          }}
        >
          ✦ {badge} ✦
        </span>

        <h2 
          style={{
            color: '#FFFFFF',
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '1.25rem'
          }}
        >
          {title}
        </h2>

        <p 
          style={{
            color: 'var(--text-on-dark-muted)',
            fontSize: '1.1rem',
            lineHeight: '1.7',
            marginBottom: '2.5rem',
            maxWidth: '700px',
            margin: '0 auto 2.5rem auto'
          }}
        >
          {subtitle}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
          <Link to="/enroll" style={{ textDecoration: 'none' }}>
            <StarBorder
              as="div"
              color="#DFBA73"
              speed="3.5s"
              backgroundColor="#07221A"
              textColor="#FFFFFF"
              borderColor="rgba(197, 168, 105, 0.6)"
            >
              <span>Enroll Now</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </StarBorder>
          </Link>

          <a 
            href={contactData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-lg"
            style={{ minWidth: '200px', borderColor: 'rgba(197, 168, 105, 0.5)' }}
          >
            <span>Ask a Question</span>
          </a>
        </div>

        {/* Quick Phone Call Tag */}
        <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-on-dark-muted)' }}>
          Direct Line: <a href={`tel:${contactData.phone}`} style={{ color: 'var(--accent-gold-light)', fontWeight: 700 }}>{contactData.phone}</a>
        </div>

      </div>
    </section>
  );
}
