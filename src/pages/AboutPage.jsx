import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import VisionMissionSection from '../components/sections/VisionMissionSection';
import GlobalLearningSection from '../components/sections/GlobalLearningSection';
import CtaBannerSection from '../components/sections/CtaBannerSection';
import HadithRibbon from '../components/common/HadithRibbon';
import { images } from '../data/imageAssets';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const steps = [
    { title: "Believe (Iman)", desc: "Planting pure conviction and love for Allah and His Messenger ﷺ." },
    { title: "Learn ('Ilm)", desc: "Acquiring structured, authentic knowledge with proper Makharij and understanding." },
    { title: "Practice ('Amal)", desc: "Translating knowledge into daily Salah, Adhkaar, and prophetic character." },
    { title: "Grow (Tazkiyah)", desc: "Purifying intentions, strengthening moral resilience, and elevating manners." },
    { title: "Live by the Qur'an", desc: "Embodying the Qur'an as a comprehensive guide in family, school, and society." }
  ];

  return (
    <div>
      {/* Page Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '5.5rem 0 4.5rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            ✦ About Al-Irshaad ✦
          </span>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            Illuminating Hearts & Homes with the Light of the Qur'an
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '1.15rem' }}>
            An international online Islamic educational institute providing authentic Qur'anic, Islamic, and Arabic learning with personal guidance and scholarly excellence.
          </p>
        </div>
      </section>

      {/* Sacred Hadith Ribbon */}
      <HadithRibbon variant="compact" />

      {/* Main Narrative Overview with Image */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            <div>
              <span className="badge-emerald" style={{ marginBottom: '1rem' }}>Authentic Islamic Education</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--primary-dark)', marginBottom: '1.25rem', lineHeight: 1.25, fontWeight: 700 }}>
                A Sanctuary for Genuine Islamic Scholarship & Personal Growth
              </h2>
              
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                <strong>Al-Irshaad Islamic Institute</strong> is a premier <strong>online international Islamic school</strong> established to bridge the gap between traditional Islamic scholarly education and the busy modern lives of Muslims globally. We provide rigorous, patient, and personalized 1-on-1 virtual instruction in Qur'an reading, Tajweed, Hifdh, Arabic language, and classical Islamic studies.
              </p>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.75rem' }}>
                Headquartered in Norwalk, Connecticut with certified international faculty, we proudly serve students, children, youth, and diaspora families worldwide — offering 24/7 flexible timezone-matched classes so every learner can excel in authentic Islamic knowledge from anywhere in the world.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/programs" className="btn btn-primary btn-sm">
                  Explore Learning Tracks
                </Link>
                <Link to="/teachers" className="btn btn-outline btn-sm">
                  Meet Our Instructors
                </Link>
              </div>
            </div>

            {/* Right Card Highlight with Image Banner */}
            <div 
              style={{
                background: 'var(--bg-card)',
                borderRadius: '24px',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-md)',
                overflow: 'hidden'
              }}
            >
              <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={images.mosqueInterior} 
                  alt="Islamic Sanctuary and Learning"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(3,17,34,0.3) 0%, rgba(3,17,34,0.85) 100%)' }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '20px', color: 'var(--accent-gold-light)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                  OUR 5-STAGE EDUCATIONAL PARADIGM
                </div>
              </div>

              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {steps.map((s, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <span 
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          background: 'var(--primary-dark)',
                          color: 'var(--accent-gold-light)',
                          border: '1px solid var(--accent-gold)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          flexShrink: 0
                        }}
                      >
                        {idx + 1}
                      </span>
                      <div>
                        <strong style={{ display: 'block', color: 'var(--primary-dark)', fontSize: '0.95rem' }}>{s.title}</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{s.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <VisionMissionSection />

      {/* Global Learning & Diaspora */}
      <GlobalLearningSection />

      {/* Final CTA Banner */}
      <CtaBannerSection />
    </div>
  );
}
