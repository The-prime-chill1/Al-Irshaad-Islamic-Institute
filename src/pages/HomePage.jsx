import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import HadithRibbon from '../components/common/HadithRibbon';
import WhyUsSection from '../components/sections/WhyUsSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FaqAccordionSection from '../components/sections/FaqAccordionSection';
import CtaBannerSection from '../components/sections/CtaBannerSection';

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section with Mosque & Open Quran Theme */}
      <HeroSection />

      {/* 2. Sacred Hadith Ribbon */}
      <HadithRibbon />

      {/* 3. Key Advantages & Live Online Experience */}
      <WhyUsSection />

      {/* 4. How Online Learning Works (Simple 3-Step Process) */}
      <HowItWorksSection />

      {/* 5. What Our Students & Parents Say (Testimonials) */}
      <TestimonialsSection />

      {/* 6. Frequently Asked Questions */}
      <FaqAccordionSection limit={4} />

      {/* 7. Final Call to Action Banner */}
      <CtaBannerSection />
    </div>
  );
}
