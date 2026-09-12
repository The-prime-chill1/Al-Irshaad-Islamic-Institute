import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { programsData } from '../../data/programsData';
import { IconCheck } from '../common/Icons';

export default function HifdhMethodSection() {
  const methodCycles = programsData.hifdhDetails.threeCycleMethod;

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)', position: 'relative' }}>
      <div className="container">
        
        <SectionHeader 
          badge="Proprietary Retention Framework"
          arabicTitle="مَنْهَجُ الْحِفْظِ الثُّلَاثِيّ"
          title="The 3-Cycle Hifdh Method"
          description="Our proven three-stage memorization methodology ensures students don't just memorize fast, but retain the Holy Qur'an with unwavering accuracy for life."
        />

        {/* 3-Cycle Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          {methodCycles.map((cycle, idx) => (
            <div 
              key={idx}
              className="card-premium"
              style={{
                padding: '2.5rem 2rem',
                borderTop: idx === 0 ? '4px solid var(--accent-gold)' : idx === 1 ? '4px solid var(--primary)' : '4px solid var(--primary-light)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span 
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--primary)',
                    background: 'var(--primary-ultralight)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '8px'
                  }}
                >
                  CYCLE {cycle.cycle}
                </span>

                <span style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.6rem', color: 'var(--accent-gold-dark)' }}>
                  {cycle.arabic}
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>
                {cycle.name}
              </h3>

              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-gold-dark)', marginBottom: '1rem' }}>
                {cycle.title}
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                {cycle.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting Hifdh Framework Box */}
        <div 
          style={{
            background: 'var(--bg-cream)',
            borderRadius: '20px',
            border: '1px solid var(--border-medium)',
            padding: 'clamp(1.75rem, 3vw, 2.5rem)'
          }}
        >
          <h4 style={{ color: 'var(--primary)', fontSize: '1.25rem', marginBottom: '1rem', textAlign: 'center' }}>
            Why the 3-Cycle System Succeeds
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', fontSize: '0.925rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <IconCheck size={18} color="var(--accent-gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Flawless Input:</strong> New verses are recited to the teacher before memorizing, preventing ingrained mistakes.</span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <IconCheck size={18} color="var(--accent-gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Short-Term Consolidation:</strong> 7-day rolling revision solidifies neural pathways for recent verses.</span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <IconCheck size={18} color="var(--accent-gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Long-Term Preservation:</strong> Cumulative Juz' revision turns active memory into lifelong retention.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
