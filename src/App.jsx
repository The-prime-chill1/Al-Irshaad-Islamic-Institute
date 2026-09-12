import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import NuurulBayaanPage from './pages/NuurulBayaanPage';
import QuranRecitationPage from './pages/QuranRecitationPage';
import HifdhPage from './pages/HifdhPage';
import IslamicStudiesPage from './pages/IslamicStudiesPage';
import AdvancedStudiesPage from './pages/AdvancedStudiesPage';
import ArabicAdhkaarPage from './pages/ArabicAdhkaarPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ForParentsPage from './pages/ForParentsPage';
import TeachersPage from './pages/TeachersPage';
import EnrollPage from './pages/EnrollPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

import ClickSpark from './components/effects/ClickSpark';

export default function App() {
  return (
    <ClickSpark sparkColor="#C5A869" sparkRadius={20} sparkCount={8} duration={450}>
      <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <ScrollToTop />
        <Navbar />

        <main style={{ flexGrow: 1 }}>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/programs/nuurul-bayaan" element={<NuurulBayaanPage />} />
          <Route path="/programs/quran-recitation" element={<QuranRecitationPage />} />
          <Route path="/programs/hifdh" element={<HifdhPage />} />
          <Route path="/programs/islamic-studies" element={<IslamicStudiesPage />} />
          <Route path="/programs/advanced-islamic-studies" element={<AdvancedStudiesPage />} />
          <Route path="/programs/arabic-adhkaar" element={<ArabicAdhkaarPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/for-parents" element={<ForParentsPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/enroll" element={<EnrollPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
      </div>
    </ClickSpark>
  );
}
