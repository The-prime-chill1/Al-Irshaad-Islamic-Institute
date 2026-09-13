import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import { quranJourneySteps } from '../../data/journeyData';

export default function QuranJourneySection() {
  return (
    <section 
      className="section-padding" 
      style={{ 
        background: 'linear-gradient(180deg, #071C34 0%, #0A2B52 100%)', 
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Pattern overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(197, 168, 105, 0.12) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
          opacity: 0.8
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <SectionHeader 
          badge="Structured Roadmap"
          arabicTitle="رِحْلَتُكَ مَعَ الْقُرْآنِ الْكَرِيم"
          title="Your Qur'anic Journey"
          description="A clear, progressive pathway designed to take a student from zero Arabic reading knowledge to melodious Tajweed recitation and complete Qur'anic memorization."
          theme="light"
        />

        {/* Pathway / Timeline Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem', marginTop: '3.5rem', position: 'relative' }}>
          
          {quranJourneySteps.map((step, idx) => (
            <div 
              key={idx}
              className="card-glass-dark"
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform var(--transition-normal), border-color var(--transition-normal)'
              }}
            >
              {/* Step Number Top Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span 
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: 'var(--accent-gold-light)',
                    background: 'rgba(197, 168, 105, 0.15)',
                    padding: '0.35rem 0.9rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(197, 168, 105, 0.3)'
                  }}
                >
                  STEP {step.stepNumber}
                </span>

                <span style={{ fontSize: '0.8rem', color: 'var(--text-on-dark-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {step.phase}
                </span>
              </div>

              {/* Arabic Title */}
              <div 
                style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: '1.75rem',
                  color: 'var(--accent-gold-light)',
                  marginBottom: '0.5rem',
                  direction: 'rtl'
                }}
              >
                {step.arabic}
              </div>

              {/* Step Title */}
              <h3 style={{ fontSize: '1.45rem', color: '#FFFFFF', marginBottom: '0.35rem', lineHeight: 1.25 }}>
                {step.title}
              </h3>

              <div style={{ fontSize: '0.875rem', color: 'var(--accent-gold-light)', fontWeight: 600, marginBottom: '1.25rem' }}>
                {step.subtitle}
              </div>

              {/* Description */}
              <p style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.75rem', flexGrow: 1 }}>
                {step.description}
              </p>

              {/* Details Tag */}
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.75rem', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{ color: 'var(--text-on-dark-muted)' }}>Estimated Duration:</span>
                  <strong style={{ color: 'var(--accent-gold-light)' }}>{step.duration}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-on-dark-muted)' }}>Key Outcome:</span>
                  <strong style={{ color: '#FFFFFF' }}>{step.outcome}</strong>
                </div>
              </div>

              {/* Link */}
              <div style={{ marginTop: 'auto' }}>
                <Link 
                  to={idx === 0 ? "/programs/nuurul-bayaan" : idx === 1 ? "/programs/quran-recitation" : "/programs/hifdh"}
                  className="btn btn-gold btn-sm"
                  style={{ width: '100%' }}
                >
                  <span>Explore {step.phase} Track</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
