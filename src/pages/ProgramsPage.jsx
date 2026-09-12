import React from 'react';
import ProgramsGridSection from '../components/sections/ProgramsGridSection';
import QuranJourneySection from '../components/sections/QuranJourneySection';
import CtaBannerSection from '../components/sections/CtaBannerSection';
import FaqAccordionSection from '../components/sections/FaqAccordionSection';
import HadithRibbon from '../components/common/HadithRibbon';

export default function ProgramsPage() {
  return (
    <div>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '5.5rem 0 4.5rem 0', textAlign: 'center', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            ✦ Academic Directory ✦
          </span>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            Our Structured Learning Programs
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '1.15rem' }}>
            Explore our comprehensive curriculum tracks in Qur'anic reading, applied Tajweed, complete memorization (Hifdh), age-based Islamic studies, and Arabic language.
          </p>
        </div>
      </section>

      {/* Sacred Hadith Ribbon */}
      <HadithRibbon variant="compact" />

      {/* Main Programs Grid with Interactive Category Tabs */}
      <ProgramsGridSection />

      {/* Qur'anic Journey Roadmap */}
      <QuranJourneySection />

      {/* Relevant FAQs */}
      <FaqAccordionSection limit={4} />

      {/* CTA */}
      <CtaBannerSection />
    </div>
  );
}
