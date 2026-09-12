import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { Link } from 'react-router-dom';

export default function TrustIntroSection() {
  const pillars = [
    { title: "Qur'an Reading", desc: "From foundational alphabet to confident, independent recitation." },
    { title: "Tajweed Mastery", desc: "Precision in articulation points (Makharij) and recitation rules." },
    { title: "Memorization (Hifdh)", desc: "Structured long-term retention through our 3-Cycle method." },
    { title: "Islamic Understanding", desc: "Age-tailored Aqeedah, practical Fiqh, and inspiring Seerah." },
    { title: "Arabic Language Skills", desc: "Comprehending Qur'anic vocabulary and conversational grammar." },
    { title: "Daily Islamic Practice", desc: "Applying Salah, Wudu, and authentic Adhkaar with love." },
    { title: "Good Character (Akhlaaq)", desc: "Nurturing prophetic manners, humility, and moral integrity." }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)', position: 'relative' }}>
      <div className="container">
        
        <SectionHeader 
          badge="Welcome to Al-Irshaad"
          arabicTitle="مَعْرِفَةٌ أَصِيلَةٌ • تَوْجِيهٌ شَخْصِيٌّ • نَمَاءٌ ذُو مَغْزَى"
          title="Authentic Knowledge. Personal Guidance. Meaningful Growth."
          description="Al-Irshaad Islamic Institute provides structured, compassionate online learning designed to help students of all ages build a direct, profound connection with the Holy Qur'an and authentic Islamic traditions."
        />

        {/* Narrative & Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Narrative Box */}
          <div>
            <div 
              style={{
                padding: '2.5rem',
                background: 'var(--bg-card)',
                borderRadius: '20px',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-md)',
                position: 'relative'
              }}
            >
              <div 
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold-dark)',
                  fontWeight: 800,
                  marginBottom: '1rem'
                }}
              >
                Our Core Philosophy
              </div>

              <h3 style={{ fontSize: '1.65rem', marginBottom: '1.25rem', color: 'var(--primary)', lineHeight: 1.3 }}>
                We believe true Islamic education reaches the heart, guides the intellect, and transforms daily conduct.
              </h3>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                Whether you are a parent seeking safe, authentic religious instruction for your child in the diaspora, a teenager forming your worldview, or an adult refining your Tajweed, Al-Irshaad provides a dignified, patient, and personalized sanctuary of learning.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.75rem' }}>
                <Link to="/about" className="btn btn-primary btn-sm">
                  Learn About Our Institute
                </Link>
                <Link to="/how-it-works" className="btn btn-outline btn-sm">
                  How Online Classes Work
                </Link>
              </div>
            </div>
          </div>

          {/* Right Core Pillars */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.15rem',
                    padding: '1.1rem 1.4rem',
                    background: 'var(--bg-card)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'transform var(--transition-fast)'
                  }}
                >
                  <div 
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'var(--primary-ultralight)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '0.2rem' }}>
                      {pillar.title}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
