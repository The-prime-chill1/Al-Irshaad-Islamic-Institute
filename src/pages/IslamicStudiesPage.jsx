import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';
import IslamicStudiesCurriculumSection from '../components/sections/IslamicStudiesCurriculumSection';
import CtaBannerSection from '../components/sections/CtaBannerSection';
import HadithRibbon from '../components/common/HadithRibbon';
import { programsData } from '../data/programsData';
import { contactData } from '../data/contactData';
import { IconCheck } from '../components/common/Icons';

export default function IslamicStudiesPage() {
  const data = programsData.islamicStudiesDetails;

  return (
    <div>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '5.5rem 0 4.5rem 0', textAlign: 'center', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            ✦ Comprehensive Islamic Education ✦
          </span>
          <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2.2rem', color: 'var(--accent-gold-light)', marginBottom: '0.5rem', direction: 'rtl' }}>
            طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَىٰ كُلِّ مُسْلِم
          </div>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            {data.title}
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '780px', margin: '0 auto 2rem auto', fontSize: '1.15rem', lineHeight: '1.7' }}>
            {data.description}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/enroll" className="btn btn-gold btn-lg">
              Enroll in Islamic Studies
            </Link>
            <a 
              href={contactData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              Consult an Advisor
            </a>
          </div>
        </div>
      </section>

      {/* Sacred Hadith Ribbon */}
      <HadithRibbon variant="compact" />

      {/* Program Details Bar */}
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
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>Session Length:</span>
              <strong style={{ fontSize: '1.15rem', color: 'var(--primary-dark)' }}>{data.details.session}</strong>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>Prerequisite:</span>
              <strong style={{ fontSize: '1.05rem', color: 'var(--primary-dark)' }}>{data.details.prerequisite}</strong>
            </div>
          </div>

          {/* Program Features */}
          <div style={{ background: 'var(--bg-card)', borderRadius: '24px', border: '1px solid var(--border-medium)', padding: 'clamp(2rem, 4vw, 3rem)', boxShadow: 'var(--shadow-sm)' }}>
            <SectionHeader 
              badge="Pedagogy & Tarbiyah"
              title="Interactive Teaching Methodology"
              description="Our teachers don't just lecture; they engage, inspire, and nurture Islamic character in every lesson."
            />

            <div className="grid-3">
              {(data.features || []).map((feat, idx) => (
                <div key={idx} className="card-premium" style={{ padding: '1.75rem', background: 'var(--bg-cream)', borderRadius: '14px', border: '1px solid var(--border-light)' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--primary-dark)', color: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <IconCheck size={18} color="var(--accent-gold-light)" />
                  </div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                    {feat.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Curriculum Levels Breakdown (Level 1, Level 2, Level 3) */}
      <IslamicStudiesCurriculumSection />

      {/* CTA */}
      <CtaBannerSection 
        badge="Nurture Islamic Identity"
        title="Give Your Family the Gift of Authentic Deen"
        subtitle="Enroll today and experience structured, age-tailored Islamic studies under qualified, caring instructors."
      />
    </div>
  );
}
