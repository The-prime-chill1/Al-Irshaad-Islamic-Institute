import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { Link } from 'react-router-dom';
import { IconCheckCircle } from '../common/Icons';

export default function TrustIntroSection() {
  const pillars = [
    { title: "Qur'an Reading (Nuurul Bayaan)", desc: "From foundational alphabet to confident, independent recitation." },
    { title: "Tajweed Mastery", desc: "Precision in articulation points (Makharij) and recitation rules." },
    { title: "Memorization (Hifdh)", desc: "Structured long-term retention through our proven 3-Cycle method." },
    { title: "Fundamentals of Islamic Studies", desc: "Age-tailored Aqeedah, practical Fiqh, and inspiring Seerah." },
    { title: "Arabic Language Skills", desc: "Comprehending Qur'anic vocabulary and conversational expressions." },
    { title: "Adhkaar Memorization", desc: "Authentic daily prophetic remembrances and spiritual fortification." },
    { title: "Good Character (Tarbiyah)", desc: "Nurturing prophetic manners, humility, and moral integrity." }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)', position: 'relative' }}>
      <div className="container">
        
        <SectionHeader 
          badge="Welcome to Al-Irshaad"
          arabicTitle="مَعْرِفَةٌ أَصِيلَةٌ • تَوْجِيهٌ شَخْصِيٌّ • نَمَاءٌ ذُو مَغْزَى"
          title="Learn Qur'an & Islamic Studies Online from Anywhere in the World"
          description="Welcome to AL-IRSHAAD ISLAMIC INSTITUTE, your trusted online academy for Qur'an and authentic Islamic and Arabic education for all ages. Learn with experienced tutors at your own pace from the comfort of your home."
        />

        {/* Narrative & Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Narrative Box */}
          <div>
            <div 
              style={{
                padding: '2.5rem',
                background: 'var(--bg-card)',
                borderRadius: '20px',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-md)',
                position: 'relative'
              }}
            >
              <div 
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold-dark)',
                  fontWeight: 800,
                  marginBottom: '1rem'
                }}
              >
                Authentic Online Qur'an Classes
              </div>

              <h3 style={{ fontSize: '1.65rem', marginBottom: '1.25rem', color: 'var(--primary)', lineHeight: 1.3 }}>
                Personalized 1-on-1 and Group Classes in Qur'an, Tajweed, and Islamic Education
              </h3>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                Join <strong>AL-IRSHAAD INSTITUTE</strong> for interactive one-on-one and group Qur'an recitation and Memorization with Tajweed, Islamic and Arabic education for kids and adults. Learn from experienced tutors at your own pace from the comfort of your home.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                <Link to="/enroll" className="btn btn-gold btn-sm">
                  Start Your Journey Today
                </Link>
                <Link to="/about" className="btn btn-outline btn-sm">
                  Learn About Our Institute
                </Link>
              </div>
            </div>
          </div>

          {/* Right Core Pillars */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    background: 'var(--bg-card)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'transform var(--transition-fast)'
                  }}
                >
                  <IconCheckCircle size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />

                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--primary)', marginBottom: '0.15rem' }}>
                      {pillar.title}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
