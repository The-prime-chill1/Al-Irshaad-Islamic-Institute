import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';
import CtaBannerSection from '../components/sections/CtaBannerSection';
import HadithRibbon from '../components/common/HadithRibbon';
import { IconAward } from '../components/common/Icons';
import { programsData } from '../data/programsData';
import { contactData } from '../data/contactData';
import { images } from '../data/imageAssets';

export default function QuranRecitationPage() {
  const data = programsData.quranRecitationDetails;

  return (
    <div>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '5.5rem 0 4.5rem 0', textAlign: 'center', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            ✦ Qur'an Recitation Track ✦
          </span>
          <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2.2rem', color: 'var(--accent-gold-light)', marginBottom: '0.5rem', direction: 'rtl' }}>
            وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
          </div>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            {data.title}
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '780px', margin: '0 auto 2rem auto', fontSize: '1.15rem', lineHeight: '1.7' }}>
            Master applied Tajweed rules, correct articulation points (Makharij), and melodic fluency across all 30 Juz' through verse-by-verse 1-on-1 live mentorship.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/enroll" className="btn btn-gold btn-lg">
              Begin Your Recitation Journey
            </Link>
            <a 
              href={contactData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              Consult an Instructor
            </a>
          </div>
        </div>
      </section>

      {/* Sacred Hadith Ribbon */}
      <HadithRibbon variant="compact" />

      {/* Program Details & Specifications */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div className="container">
          
          {/* Specs Bar */}
          <div 
            style={{
              background: 'var(--bg-card)',
              borderRadius: '20px',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-md)',
              padding: '2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '4.5rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>Duration:</span>
              <strong style={{ fontSize: '1.15rem', color: 'var(--primary-dark)' }}>{data.details.duration}</strong>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>Class Frequency:</span>
              <strong style={{ fontSize: '1.15rem', color: 'var(--primary-dark)' }}>{data.details.classes}</strong>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>Prerequisite:</span>
              <strong style={{ fontSize: '1.05rem', color: 'var(--primary-dark)' }}>{data.details.prerequisite}</strong>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>Class Format:</span>
              <strong style={{ fontSize: '1.15rem', color: 'var(--primary-dark)' }}>1-on-1 Live Correction</strong>
            </div>
          </div>

          {/* Description with Image Preview */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center', marginBottom: '5rem' }}>
            <div>
              <span className="badge-emerald" style={{ marginBottom: '1rem' }}>Recitation Mastery</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'var(--primary-dark)', marginBottom: '1.25rem', fontWeight: 700 }}>
                Verse-by-Verse Patient Listening & Correction
              </h2>
              
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                This program is for students who have completed Nuurul Bayaan or can already read Arabic and want to recite the Holy Qur'an fluently with correct Tajweed.
              </p>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.75rem' }}>
                Our teachers listen to students verse-by-verse, correcting pronunciation, articulation points (<em>Makharij</em>), characteristics of letters (<em>Sifaat</em>), and practical Tajweed rules in a patient, dignified, and encouraging environment.
              </p>

              <div style={{ padding: '1.5rem', background: 'var(--bg-cream)', borderRadius: '14px', borderLeft: '4px solid var(--accent-gold)' }}>
                <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-dark)', fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                  <IconAward size={20} color="var(--accent-gold-dark)" /> Recitation Goal:
                </strong>
                <p style={{ color: 'var(--text-secondary)', margin: 0, fontStyle: 'italic' }}>
                  "{data.details.goal}"
                </p>
              </div>
            </div>

            {/* Visual Showcase */}
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
                src={images.quranOpen} 
                alt="Holy Quran Tajweed Recitation"
                style={{ width: '100%', height: '360px', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(3,17,34,0.1) 0%, rgba(3,17,34,0.85) 100%)' }} />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', color: '#FFFFFF' }}>
                <div style={{ color: 'var(--accent-gold-light)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  Applied Tajweed & Melodic Fluency
                </div>
                <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                  "The one who is proficient in the Qur’an will be with the noble, obedient scribes (angels)."
                </div>
              </div>
            </div>
          </div>

          {/* Key Topics & Coverage */}
          <div>
            <SectionHeader 
              badge="Course Curriculum"
              title="What You Will Master"
              description="A thorough, applied Tajweed syllabus covering every aspect of Qur'anic recitation."
            />

            <div className="grid-3">
              {data.topics.map((top, idx) => (
                <div key={idx} className="card-premium" style={{ padding: '2rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--primary-dark)', color: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: '1.25rem' }}>
                    0{idx + 1}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-dark)', marginBottom: '0.65rem' }}>
                    {top.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>
                    {top.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CtaBannerSection 
        badge="Fluency Awaits"
        title="Elevate Your Qur'an Recitation Today"
        subtitle="Book an assessment lesson to determine your current recitation level and begin your Tajweed mastery."
      />
    </div>
  );
}
