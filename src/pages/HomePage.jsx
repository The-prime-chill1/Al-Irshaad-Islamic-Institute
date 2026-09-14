import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import HadithRibbon from '../components/common/HadithRibbon';
import TrustIntroSection from '../components/sections/TrustIntroSection';
import WhatWeDoSection from '../components/sections/WhatWeDoSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import StudySetupSection from '../components/sections/StudySetupSection';
import ProgramsGridSection from '../components/sections/ProgramsGridSection';
import QuranJourneySection from '../components/sections/QuranJourneySection';
import WhoWeServeSection from '../components/sections/WhoWeServeSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import VisionMissionSection from '../components/sections/VisionMissionSection';
import GlobalLearningSection from '../components/sections/GlobalLearningSection';
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

      {/* 3. Introduction & Trust Pillars */}
      <TrustIntroSection />

      {/* 4. What We Do (3 Core Educational Pathways) */}
      <WhatWeDoSection />

      {/* 5. Reasons To Join Us (6 Cards with React SVG Icons) */}
      <WhyUsSection />

      {/* 6. Study With Al-Irshaad (Live Online Setup Showcase) */}
      <StudySetupSection />

      {/* 7. Detailed Learning Programs Grid with Filter Tabs */}
      <ProgramsGridSection />

      {/* 8. Your Qur'anic Journey Pathway */}
      <QuranJourneySection />

      {/* 9. Who We Serve (Children, Teens, Adults, Diaspora) */}
      <WhoWeServeSection />

      {/* 10. How Online Learning Works (6 Steps) */}
      <HowItWorksSection />

      {/* 11. Vision & Mission */}
      <VisionMissionSection />

      {/* 12. Global Learning & Diaspora */}
      <GlobalLearningSection />

      {/* 13. What Our Students & Parents Say (Testimonials) */}
      <TestimonialsSection />

      {/* 14. Frequently Asked Questions */}
      <FaqAccordionSection limit={6} />

      {/* 15. Final CTA Banner */}
      <CtaBannerSection />
    </div>
  );
}
