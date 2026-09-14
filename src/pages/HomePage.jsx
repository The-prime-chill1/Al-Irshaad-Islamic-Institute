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
import { teachersData } from '../data/teachersData';
import TeacherCard from '../components/cards/TeacherCard';
import SectionHeader from '../components/common/SectionHeader';
import { Link } from 'react-router-dom';

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

      {/* 11. Meet Our Scholarly Leadership & Faculty Preview */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div className="container">
          <SectionHeader 
            badge="Scholarly Leadership"
            arabicTitle="مُعَلِّمُونَا الأَفَاضِل"
            title="Learn Under Dedicated Mentorship"
            description="Guided by Founder & Director Ustaadh Naasir Akinbolanle Jamiu (Connecticut, USA), our faculty brings verified degrees from premier Islamic institutions to every 1-on-1 personalized lesson."
          />

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
              gap: '1.75rem', 
              alignItems: 'stretch',
              marginBottom: '3rem' 
            }}
          >
            {teachersData.teachers.map((t) => (
              <TeacherCard key={t.id} teacher={t} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/teachers" className="btn btn-primary btn-md">
              View All Faculty Credentials & Scheduling Details →
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Vision & Mission */}
      <VisionMissionSection />

      {/* 13. Global Learning & Diaspora */}
      <GlobalLearningSection />

      {/* 14. What Our Students & Parents Say (Testimonials) */}
      <TestimonialsSection />

      {/* 15. Frequently Asked Questions */}
      <FaqAccordionSection limit={6} />

      {/* 16. Final CTA Banner */}
      <CtaBannerSection />
    </div>
  );
}
