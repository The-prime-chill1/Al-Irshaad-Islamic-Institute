import React from 'react';
import SectionHeader from '../common/SectionHeader';
import StepCard from '../cards/StepCard';
import { howOnlineLearningWorksData } from '../../data/whyUsData';
import { Link } from 'react-router-dom';
import { IconWifi, IconBookOpen, IconAward } from '../common/Icons';

export default function HowItWorksSection({ showFullDetails = false }) {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-cream)', position: 'relative' }}>
      <div className="container">
        
        <SectionHeader 
          badge="Simple 6-Step Process"
          arabicTitle="كَيْفَ يَعْمَلُ التَّعْلِيمُ عَبْرَ الإِنْتِرْنِت"
          title="How Online Learning Works"
          description="Joining Al-Irshaad is seamless and straightforward. Here is what happens from your first application to your daily classes."
        />

        {/* 6 Steps Grid */}
        <div className="grid-3" style={{ marginBottom: '3.5rem' }}>
          {howOnlineLearningWorksData.map((item, idx) => (
            <StepCard 
              key={idx}
              step={item.step}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Classroom Experience Overview if showFullDetails */}
        {showFullDetails && (
          <div 
            style={{
              background: 'var(--bg-card)',
              borderRadius: '20px',
              border: '1px solid var(--border-medium)',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              marginBottom: '3.5rem'
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
              <span className="badge-gold">Live Interactive Classroom</span>
              <h3 style={{ fontSize: '1.85rem', color: 'var(--primary)', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
                The Al-Irshaad Virtual Learning Experience
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Our digital learning environment is designed to be intuitive, secure, and focused on deep educational engagement.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              <div style={{ padding: '1.5rem', background: 'var(--bg-cream)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <IconWifi size={20} color="var(--accent-gold-dark)" /> HD Live Video & Audio
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                  Crystal-clear 1-on-1 video sessions via Zoom/Google Meet so the teacher can observe student mouth articulation (Makharij).
                </p>
              </div>

              <div style={{ padding: '1.5rem', background: 'var(--bg-cream)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <IconBookOpen size={20} color="var(--accent-gold-dark)" /> Interactive Digital Mushaf
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                  Shared on-screen Qur'an with color-coded Tajweed indicators and real-time pointer highlight for young readers.
                </p>
              </div>

              <div style={{ padding: '1.5rem', background: 'var(--bg-cream)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <IconAward size={20} color="var(--accent-gold-dark)" /> Monthly Progress Tracking
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                  Regular reports sent to parents and adult learners detailing verses mastered, revision scores, and next milestones.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Next Step CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/enroll" className="btn btn-gold btn-lg">
            <span>Begin Step 1 — Start Enrollment</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
