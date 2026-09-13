import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';
import HifdhMethodSection from '../components/sections/HifdhMethodSection';
import CtaBannerSection from '../components/sections/CtaBannerSection';
import HadithRibbon from '../components/common/HadithRibbon';
import { IconAward } from '../components/common/Icons';
import { programsData } from '../data/programsData';
import { contactData } from '../data/contactData';
import { images } from '../data/imageAssets';

export default function HifdhPage() {
  const data = programsData.hifdhDetails;

  return (
    <div>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '5.5rem 0 4.5rem 0', textAlign: 'center', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            ✦ Sacred Memorization Pathway ✦
          </span>
          <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2.2rem', color: 'var(--accent-gold-light)', marginBottom: '0.5rem', direction: 'rtl' }}>
            بَلْ هُوَ آيَاتٌ بَيِّنَاتٌ فِي صُدُورِ الَّذِينَ أُوتُوا الْعِلْمَ
          </div>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            {data.title}
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '780px', margin: '0 auto 2rem auto', fontSize: '1.15rem', lineHeight: '1.7' }}>
            A structured, personalized pathway to commit the 30 Juz' of the Holy Qur'an to heart with applied Tajweed, rigorous daily revision, and lifelong retention under certified Haafidh mentors.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/enroll" className="btn btn-gold btn-lg">
              Start Your Hifdh Journey
            </Link>
            <a 
              href={contactData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              Consult a Hifdh Mentor
            </a>
          </div>
        </div>
      </section>

      {/* Sacred Hadith Ribbon */}
      <HadithRibbon variant="compact" />

      {/* Program Quick Specs */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div className="container">
          
          <div 
            style={{
              background: 'var(--bg-card)',
              borderRadius: '20px',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-md)',
              padding: '2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
              gap: '1.5rem',
              marginBottom: '4.5rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>Duration:</span>
              <strong style={{ fontSize: '1.15rem', color: 'var(--primary-dark)' }}>{data.details.duration}</strong>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>Daily Target Pace:</span>
              <strong style={{ fontSize: '1.15rem', color: 'var(--primary-dark)' }}>{data.details.pace}</strong>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>Classes Recommended:</span>
              <strong style={{ fontSize: '1.15rem', color: 'var(--primary-dark)' }}>{data.details.classes}</strong>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>Prerequisite:</span>
              <strong style={{ fontSize: '1.05rem', color: 'var(--primary-dark)' }}>{data.details.prerequisite}</strong>
            </div>
          </div>

          {/* Overview & Goal with Visual Card */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(2rem, 4vw, 3.5rem)', alignItems: 'center', marginBottom: '5rem' }}>
            <div>
              <span className="badge-emerald" style={{ marginBottom: '1rem' }}>Sacred Pursuit</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'var(--primary-dark)', marginBottom: '1.25rem', fontWeight: 700 }}>
                A Life-Changing Journey of Divine Preservation
              </h2>
              
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                {data.description}
              </p>

              <div style={{ padding: '1.5rem', background: 'var(--bg-cream)', borderRadius: '14px', borderLeft: '4px solid var(--accent-gold)', marginBottom: '1.5rem' }}>
                <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-dark)', fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                  <IconAward size={20} color="var(--accent-gold-dark)" /> The Hifdh Goal:
                </strong>
                <p style={{ color: 'var(--text-secondary)', margin: 0, fontStyle: 'italic' }}>
                  "{data.details.goal}"
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/enroll" className="btn btn-primary btn-sm">
                  Apply for Hifdh Admission
                </Link>
                <Link to="/teachers" className="btn btn-outline btn-sm">
                  Meet Our Haafidh Faculty
                </Link>
              </div>
            </div>

            {/* Visual Image Showcase */}
            <div 
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-medium)',
                position: 'relative'
              }}
            >
              <img 
                src={images.hifdh} 
                alt="Holy Quran Memorization"
                style={{ width: '100%', height: '360px', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(3,17,34,0.1) 0%, rgba(3,17,34,0.85) 100%)' }} />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', color: '#FFFFFF' }}>
                <div style={{ color: 'var(--accent-gold-light)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  Continuous Scholarly Supervision
                </div>
                <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                  "Whoever memorizes the Qur’an and acts upon it, Allah will crown their parents with light on the Day of Resurrection."
                </div>
              </div>
            </div>
          </div>

          {/* Program Pillars */}
          <div style={{ marginBottom: '5rem' }}>
            <SectionHeader 
              badge="Educational Standards"
              title="Four Pillars of Al-Irshaad Hifdh"
              description="How our systematic approach ensures students do not just memorize quickly, but retain permanently with beautiful Tajweed."
            />

            <div className="grid-2">
              {(data.features || []).map((feat, idx) => (
                <div key={idx} className="card-premium" style={{ padding: '2.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--primary-dark)', color: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                      0{idx + 1}
                    </span>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', margin: 0 }}>
                      {feat.title}
                    </h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', margin: 0, fontSize: '0.95rem' }}>
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3-Cycle Retention Method Detailed Breakdown */}
      <HifdhMethodSection />

      {/* CTA */}
      <CtaBannerSection 
        badge="Start Today"
        title="Embark on the Sacred Path of Hifdh"
        subtitle="Schedule an assessment with our lead Haafidh instructors and receive your personalized memorization roadmap."
      />
    </div>
  );
}
