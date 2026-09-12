import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import ProgramCard from '../cards/ProgramCard';
import { programsData } from '../../data/programsData';

export default function ProgramsGridSection() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Curricula' },
    { id: 'quran-tajweed', label: "Qur'an & Tajweed" },
    { id: 'islamic-studies-fundamentals', label: "Fundamentals of Islamic Studies" },
    { id: 'advanced-islamic-studies', label: "Advance Islamic Studies" },
    { id: 'adhkaar-memorization', label: "Adhkaar Memorization" },
    { id: 'arabic-language', label: "Arabic for English Speakers" }
  ];

  const filteredCategories = selectedFilter === 'all'
    ? programsData.categories
    : programsData.categories.filter(c => c.id === selectedFilter);

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)', position: 'relative' }}>
      <div className="container">
        
        <SectionHeader 
          badge="Structured Curricula"
          arabicTitle="بَرَامِجُنَا التَّعْلِيمِيَّة"
          title="Our Learning Programs"
          description="Structured learning for every stage of your Islamic journey — from foundational Arabic letters to fluent recitation, complete memorization, and classical Islamic sciences."
        />

        {/* Maryam Institute Style Category Tabs Filter */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                style={{
                  padding: '0.65rem 1.35rem',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  border: isActive ? '1px solid var(--accent-gold)' : '1px solid var(--border-medium)',
                  backgroundColor: isActive ? 'var(--primary-dark)' : 'var(--bg-card)',
                  color: isActive ? 'var(--accent-gold-light)' : 'var(--text-secondary)',
                  boxShadow: isActive ? '0 4px 15px rgba(3, 17, 34, 0.2)' : 'none'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Categories Loop */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {filteredCategories.map((cat) => (
            <div 
              key={cat.id} 
              className="fade-in-up"
              style={{
                background: 'var(--bg-card)',
                borderRadius: '24px',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-sm)',
                padding: 'clamp(1.75rem, 4vw, 3rem)'
              }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.75rem' }}>
                <div style={{ maxWidth: '720px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.65rem' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        fontSize: '0.85rem',
                        color: 'var(--accent-gold-dark)',
                        background: 'var(--accent-gold-soft)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '6px'
                      }}
                    >
                      CATEGORY {cat.number}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      {cat.shortTitle}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: 'var(--primary-dark)', marginBottom: '0.5rem', fontWeight: 700 }}>
                    {cat.title}
                  </h3>

                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '1rem' }}>
                    {cat.description}
                  </p>
                </div>

                <div>
                  <Link 
                    to={cat.route || (cat.programs && cat.programs[0]?.route) || "/programs"}
                    className="btn btn-outline btn-sm"
                  >
                    <span>{cat.ctaText}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Individual Programs in this Category */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(auto-fit, minmax(${cat.programs.length === 1 ? '100%' : '300px'}, 1fr))`,
                  gap: '1.75rem'
                }}
              >
                {cat.programs.map((prog) => (
                  <ProgramCard key={prog.id} program={prog} categoryNumber={cat.number} />
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Global Programs Directory CTA */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1.25rem',
              padding: '1.5rem 2.5rem',
              background: 'linear-gradient(135deg, #031122 0%, #071C34 100%)',
              color: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid rgba(197, 168, 105, 0.4)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >
            <span style={{ fontSize: '1.05rem', fontWeight: 600 }}>
              Ready to calculate tuition for your selected course?
            </span>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a 
                href="#course-pricing-calculator" 
                className="btn btn-gold btn-sm" 
                style={{ padding: '0.75rem 1.5rem', fontWeight: 700 }}
              >
                Calculate Course Tuition ↓
              </a>
              <Link to="/contact" className="btn btn-outline btn-sm" style={{ padding: '0.75rem 1.5rem', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.35)' }}>
                Speak with Admissions
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
