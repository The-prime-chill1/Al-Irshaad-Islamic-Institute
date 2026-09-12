import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';
import CtaBannerSection from '../components/sections/CtaBannerSection';
import HadithRibbon from '../components/common/HadithRibbon';
import { contactData } from '../data/contactData';
import { images } from '../data/imageAssets';

export default function ArabicAdhkaarPage() {
  return (
    <div>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '5.5rem 0 4.5rem 0', textAlign: 'center', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            ✦ Language & Remembrance ✦
          </span>
          <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2.2rem', color: 'var(--accent-gold-light)', marginBottom: '0.5rem', direction: 'rtl' }}>
            إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ
          </div>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            Arabic Language & Adhkaar Memorization
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '780px', margin: '0 auto 2rem auto', fontSize: '1.15rem', lineHeight: '1.7' }}>
            Unlock direct comprehension of the Holy Qur'an and fortify your daily spiritual life with authentic prophetic supplications.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/enroll" className="btn btn-gold btn-lg">
              Enroll in Arabic & Adhkaar
            </Link>
            <a 
              href={contactData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Sacred Hadith Ribbon */}
      <HadithRibbon variant="compact" />

      {/* Two Programs Cards */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div className="container">
          <div className="grid-2">
            
            {/* Program 1: Arabic for English Speakers */}
            <div className="card-premium" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '180px', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={images.arabicLanguage} 
                  alt="Arabic Language Learning"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(3,17,34,0.2) 0%, rgba(3,17,34,0.75) 100%)' }} />
                <span className="badge-emerald" style={{ position: 'absolute', top: '14px', left: '14px' }}>Language Track</span>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h2 style={{ fontSize: '1.65rem', color: 'var(--primary-dark)', marginBottom: '0.4rem', fontWeight: 700 }}>
                  Arabic Language for English Speakers
                </h2>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-gold-dark)', marginBottom: '1.25rem' }}>
                  Grammar, Vocabulary & Qur'anic Comprehension
                </div>
                
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.75rem', flexGrow: 1 }}>
                  Specially designed for diaspora learners and international English-speaking Muslims to understand Qur'anic vocabulary, sentence structures, and classical Arabic expressions.
                </p>

                <div style={{ padding: '1rem', background: 'var(--bg-cream)', borderRadius: '10px', marginBottom: '1.75rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Class Format:</span>
                    <strong style={{ color: 'var(--primary-dark)' }}>1-on-1 & Small Group</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Prerequisite:</span>
                    <strong style={{ color: 'var(--primary-dark)' }}>Arabic Reading Ability</strong>
                  </div>
                </div>

                <Link to="/enroll" className="btn btn-primary btn-sm" style={{ width: '100%', textAlign: 'center' }}>
                  Enroll in Arabic Track
                </Link>
              </div>
            </div>

            {/* Program 2: Adhkaar Memorization */}
            <div className="card-premium" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '180px', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={images.calligraphyGold} 
                  alt="Adhkaar and Duas"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(3,17,34,0.2) 0%, rgba(3,17,34,0.75) 100%)' }} />
                <span className="badge-gold" style={{ position: 'absolute', top: '14px', left: '14px' }}>Spiritual Fortification</span>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h2 style={{ fontSize: '1.65rem', color: 'var(--primary-dark)', marginBottom: '0.4rem', fontWeight: 700 }}>
                  Adhkaar Memorization
                </h2>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-gold-dark)', marginBottom: '1.25rem' }}>
                  Daily Prophetic Remembrances & Duas
                </div>
                
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.75rem', flexGrow: 1 }}>
                  Learn and memorize the authentic morning and evening remembrances, prayers for protection, supplications before sleep, and fortress of the Muslim with accurate pronunciation and meaning.
                </p>

                <div style={{ padding: '1rem', background: 'var(--bg-cream)', borderRadius: '10px', marginBottom: '1.75rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Target:</span>
                    <strong style={{ color: 'var(--primary-dark)' }}>Children, Teens & Adults</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Prerequisite:</span>
                    <strong style={{ color: 'var(--primary-dark)' }}>None</strong>
                  </div>
                </div>

                <Link to="/enroll" className="btn btn-primary btn-sm" style={{ width: '100%', textAlign: 'center' }}>
                  Enroll in Adhkaar Track
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBannerSection 
        badge="Connect with Allah"
        title="Transform Your Daily Routine with Sacred Words"
        subtitle="Begin learning authentic Arabic and daily Adhkaar under certified mentors today."
      />
    </div>
  );
}
