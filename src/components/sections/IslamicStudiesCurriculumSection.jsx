import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { programsData } from '../../data/programsData';

export default function IslamicStudiesCurriculumSection() {
  const { ageTracks, curriculumSections } = programsData.islamicStudiesDetails;

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-cream)', position: 'relative' }}>
      <div className="container">
        
        <SectionHeader 
          badge="Age-Wise Islamic Studies"
          arabicTitle="مَسَارَاتُ الدِّرَاسَاتِ الإِسْلَامِيَّة"
          title="3 Distinct Learning Tracks"
          description="Designed to deliver the right depth of Islamic knowledge at the right developmental age."
        />

        {/* 3 Age Tracks Grid */}
        <div className="grid-3" style={{ marginBottom: '4.5rem' }}>
          {ageTracks.map((track, idx) => (
            <div 
              key={idx}
              className="card-premium"
              style={{
                padding: '2.25rem 2rem',
                borderTop: idx === 0 ? '4px solid #165342' : idx === 1 ? '4px solid var(--accent-gold)' : '4px solid var(--primary-dark)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span className="badge-emerald">{track.level}</span>
                <span style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--accent-gold-dark)' }}>{track.ageGroup}</span>
              </div>

              <h3 style={{ fontSize: '1.35rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
                {track.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', flexGrow: 1 }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 700 }}>Key Focus Areas:</span>
                {track.focus.map((item, fIdx) => (
                  <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-gold-dark)', fontWeight: 700 }}>•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Curriculum Breakdown Section */}
        <div style={{ background: 'var(--bg-card)', borderRadius: '24px', border: '1px solid var(--border-medium)', padding: 'clamp(2rem, 4vw, 3.5rem)', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <span className="badge-gold">Comprehensive Core Curriculum</span>
            <h3 style={{ fontSize: '1.85rem', color: 'var(--primary)', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
              Core Subjects Covered Across Levels
            </h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              Rooted in authentic classical texts and taught with interactive modern teaching methods.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
            {curriculumSections.map((sec, idx) => (
              <div key={idx} style={{ padding: '1.75rem', background: 'var(--bg-cream)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-gold-dark)' }}>✦</span>
                  <span>{sec.title}</span>
                </h4>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {sec.topics.map((topic, tIdx) => (
                    <li key={tIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent-gold-dark)', fontWeight: 700, marginTop: '1px' }}>✓</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
