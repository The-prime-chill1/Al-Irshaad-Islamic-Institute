import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';
import CtaBannerSection from '../components/sections/CtaBannerSection';
import { contactData } from '../data/contactData';

export default function AdvancedStudiesPage() {
  return (
    <div>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '5rem 0 4rem 0', textAlign: 'center', position: 'relative' }}>
        <div className="container">
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            ✦ Higher Islamic Sciences ✦
          </span>
          <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2.2rem', color: 'var(--accent-gold-light)', marginBottom: '0.5rem', direction: 'rtl' }}>
            يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ
          </div>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            Advanced Islamic Studies
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '780px', margin: '0 auto 2rem auto', fontSize: '1.15rem', lineHeight: '1.7' }}>
            A deeper journey into Islamic knowledge for students ready to progress beyond the fundamentals.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/enroll" className="btn btn-gold btn-lg">
              Apply for Advanced Studies
            </Link>
            <a 
              href={contactData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              Consult with Faculty
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div className="card-premium" style={{ padding: '3rem 2.5rem', marginBottom: '3rem' }}>
            <span className="badge-emerald" style={{ marginBottom: '1rem' }}>Scholarly Progression</span>
            <h2 style={{ fontSize: '1.85rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
              Deepen Your Classical Understanding
            </h2>
            
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              The <strong>Advanced Islamic Studies</strong> track is designed for committed seekers of knowledge, educators, and graduates of foundational programs who wish to pursue structured classical Islamic learning with qualified instructors.
            </p>

            <div style={{ padding: '1.5rem', background: 'var(--bg-cream)', borderRadius: '12px', borderLeft: '4px solid var(--accent-gold)', marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Program Structure & Inquiries</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', margin: 0 }}>
                Curriculum modules and text selections are tailored following an initial assessment with our faculty. Contact our admissions desk to discuss your background and study goals.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/enroll" className="btn btn-primary btn-sm">
                Submit Enrollment Application
              </Link>
              <Link to="/contact" className="btn btn-outline btn-sm">
                Contact Admissions Office
              </Link>
            </div>
          </div>

        </div>
      </section>

      <CtaBannerSection />
    </div>
  );
}
