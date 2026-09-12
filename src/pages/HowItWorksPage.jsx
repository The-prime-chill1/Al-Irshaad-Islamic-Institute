import React from 'react';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import CtaBannerSection from '../components/sections/CtaBannerSection';
import FaqAccordionSection from '../components/sections/FaqAccordionSection';
import HadithRibbon from '../components/common/HadithRibbon';

export default function HowItWorksPage() {
  return (
    <div>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '5.5rem 0 4.5rem 0', textAlign: 'center', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            ✦ Student Experience ✦
          </span>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            How Online Learning Works at Al-Irshaad
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '1.15rem' }}>
            From simple online registration to your personalized live classroom, here is how we deliver a seamless, high-touch Islamic educational experience.
          </p>
        </div>
      </section>

      {/* Sacred Hadith Ribbon */}
      <HadithRibbon variant="compact" />

      {/* How it works with full classroom details */}
      <HowItWorksSection showFullDetails={true} />

      {/* FAQs */}
      <FaqAccordionSection limit={6} />

      {/* CTA */}
      <CtaBannerSection />
    </div>
  );
}
