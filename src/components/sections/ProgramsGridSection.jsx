import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import ProgramCard from '../cards/ProgramCard';
import { programsData } from '../../data/programsData';
import { IconArrowRight, IconSparkles } from '../common/Icons';

export default function ProgramsGridSection({ initialCategoryCount = 2 }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showAllCategories, setShowAllCategories] = useState(false);

  const filterTabs = [
    { id: 'all', label: 'All Curricula' },
    { id: 'quran-tajweed', label: "Qur'an & Tajweed" },
    { id: 'islamic-studies-fundamentals', label: "Fundamentals of Islamic Studies" },
    { id: 'advanced-islamic-studies', label: "Advance Islamic Studies" },
    { id: 'adhkaar-memorization', label: "Adhkaar Memorization" },
    { id: 'arabic-language', label: "Arabic for English Speakers" }
  ];

  // If a specific filter is clicked, show that category directly.
  // If 'all', show the first 2-3 categories initially, or all 5 when expanded.
  const allCategories = programsData.categories;
  const isFiltered = selectedFilter !== 'all';
  
  const displayedCategories = isFiltered
    ? allCategories.filter(c => c.id === selectedFilter)
    : showAllCategories
      ? allCategories
      : allCategories.slice(0, initialCategoryCount);

  const remainingCategoryCount = allCategories.length - initialCategoryCount;

  const handleTabClick = (tabId) => {
    setSelectedFilter(tabId);
    if (tabId !== 'all') {
      setShowAllCategories(true);
    }
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)', position: 'relative' }}>
      <div className="container">
        
        <SectionHeader 
          badge="Structured Curricula"
          arabicTitle="بَرَامِجُنَا التَّعْلِيمِيَّة"
          title="Our Learning Programs"
          description="Structured learning for every stage of your Islamic journey — from foundational Arabic letters to fluent recitation, complete memorization, and classical Islamic sciences."
        />

        {/* Category Tabs Filter */}
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
                onClick={() => handleTabClick(tab.id)}
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

        {/* Categories Loop (Showing 2-3 Categories initially or all when expanded) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {displayedCategories.map((cat) => (
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
                    <IconArrowRight size={14} color="var(--primary)" />
                  </Link>
                </div>
              </div>

              {/* Individual Programs in this Category */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(auto-fit, minmax(${cat.programs.length === 1 ? '100%' : 'min(100%, 300px)'}, 1fr))`,
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

        {/* Discover More Remaining Categories CTA Box */}
        {!isFiltered && !showAllCategories && remainingCategoryCount > 0 && (
          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <div 
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                background: '#FFFFFF',
                padding: 'clamp(1.75rem, 3.5vw, 2.5rem) clamp(1.5rem, 4vw, 3rem)',
                borderRadius: '24px',
                border: '1.5px solid var(--border-gold)',
                boxShadow: 'var(--shadow-md)',
                maxWidth: '680px',
                width: '100%'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold-dark)', fontWeight: 700, fontSize: '0.9rem' }}>
                <IconSparkles size={18} color="var(--accent-gold)" />
                <span>{remainingCategoryCount} MORE LEARNING CATEGORIES AVAILABLE</span>
              </div>

              <h4 style={{ fontSize: '1.35rem', color: 'var(--primary-dark)', fontWeight: 700, margin: 0 }}>
                Looking for Advance Islamic Studies, Adhkaar or Arabic?
              </h4>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
                Discover our specialized tracks in <strong>Higher Classical Islamic Sciences</strong>, <strong>Daily Adhkaar Memorization</strong>, and <strong>Arabic for English Speakers</strong>.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem' }}>
                <button 
                  onClick={() => setShowAllCategories(true)}
                  className="btn btn-gold btn-md"
                  style={{
                    padding: '0.85rem 2.25rem',
                    fontSize: '0.98rem',
                    fontWeight: 700,
                    boxShadow: '0 6px 20px rgba(197, 168, 105, 0.4)',
                    cursor: 'pointer'
                  }}
                >
                  <span>Discover More Categories ({remainingCategoryCount})</span>
                  <IconArrowRight size={16} color="#031122" />
                </button>

                <Link 
                  to="/enroll" 
                  className="btn btn-outline btn-md"
                  style={{
                    padding: '0.85rem 1.75rem',
                    fontSize: '0.98rem'
                  }}
                >
                  <span>Book Free Trial Session</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* If all categories are currently expanded, provide a collapse button */}
        {!isFiltered && showAllCategories && (
          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <button 
              onClick={() => {
                setShowAllCategories(false);
                setSelectedFilter('all');
              }}
              className="btn btn-outline btn-sm"
              style={{ padding: '0.75rem 1.5rem', cursor: 'pointer' }}
            >
              <span>Show Fewer Categories ↑</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
