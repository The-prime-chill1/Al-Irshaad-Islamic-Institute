import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { faqsData } from '../../data/faqsData';
import { Link } from 'react-router-dom';

export default function FaqAccordionSection({ limit = 6, showFilter = false }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(faqsData.map(f => f.category))];

  const filteredFaqs = selectedCategory === "All" 
    ? (limit ? faqsData.slice(0, limit) : faqsData)
    : faqsData.filter(f => f.category === selectedCategory);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        <SectionHeader 
          badge="Answers & Guidance"
          arabicTitle="الأَسْئِلَةُ الشَّائِعَة"
          title="Frequently Asked Questions"
          description="Find quick, clear answers to common questions about enrollment, class format, prerequisites, and schedules."
        />

        {/* Category Filters if enabled */}
        {showFilter && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.5rem 1.15rem',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  border: '1px solid',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: selectedCategory === cat ? 'var(--primary)' : 'var(--bg-card)',
                  color: selectedCategory === cat ? '#FFFFFF' : 'var(--text-secondary)',
                  borderColor: selectedCategory === cat ? 'var(--primary)' : 'var(--border-medium)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className="card-premium"
                style={{
                  border: isOpen ? '1px solid var(--accent-gold)' : '1px solid var(--border-light)',
                  boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  style={{
                    width: '100%',
                    padding: '1.4rem 1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: isOpen ? 'var(--primary)' : 'var(--text-primary)'
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, fontFamily: 'var(--font-sans)', lineHeight: 1.35 }}>
                    {faq.question}
                  </span>

                  <span 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--primary-ultralight)' : 'var(--bg-cream)',
                      color: isOpen ? 'var(--primary)' : 'var(--text-muted)',
                      flexShrink: 0,
                      transition: 'transform 0.25s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'none'
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div 
                    style={{
                      padding: '0 1.75rem 1.5rem 1.75rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.975rem',
                      lineHeight: '1.7',
                      borderTop: '1px solid var(--border-light)',
                      paddingTop: '1rem'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All FAQs Link if limited */}
        {limit && (
          <div style={{ textAlign: 'center' }}>
            <Link to="/faqs" className="btn btn-outline btn-sm">
              View All Frequently Asked Questions
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
