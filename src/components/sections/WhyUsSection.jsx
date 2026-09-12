import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { IconWifi, IconPlay, IconHeart, IconUsers, IconBookOpen, IconGraduationCap } from '../common/Icons';

export default function WhyUsSection() {
  const reasons = [
    {
      icon: <IconWifi size={32} color="#005DB8" />,
      title: "Live Interaction",
      description: "All our classes are conducted live online one-on-one and in small groups by our qualified, patient teachers."
    },
    {
      icon: <IconPlay size={32} color="#005DB8" />,
      title: "Recordings & Revisions",
      description: "Session recaps and structured notes are maintained to support revision and accommodate students in any time zone."
    },
    {
      icon: <IconHeart size={32} color="#005DB8" />,
      title: "Emphasis on Tarbiyah",
      description: "Our curriculum highlights the importance of emulating the Sunnah, refining manners (Akhlaaq), and beautifying daily life."
    },
    {
      icon: <IconUsers size={32} color="#005DB8" />,
      title: "Personalized Study",
      description: "Every student learns at their comfortable pace with focused teacher attention and personalized milestones."
    },
    {
      icon: <IconBookOpen size={32} color="#005DB8" />,
      title: "Flexible Scheduling",
      description: "Easily schedule classes around school, work, and family routines across Nigerian, UK, US, and global timezones."
    },
    {
      icon: <IconGraduationCap size={32} color="#005DB8" />,
      title: "Access to Mentors",
      description: "Our instructors possess verified Sanad in Tajweed and are dedicated to guiding students through every stage."
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#FBFBFB', position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading matching Maryam Institute style */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--primary-dark)', fontFamily: 'var(--font-serif)', fontWeight: 700, margin: 0 }}>
            Reasons To Join Us
          </h2>
          <div style={{ width: '45px', height: '3px', background: 'var(--accent-gold)', margin: '0.85rem auto 0 auto', borderRadius: '2px' }} />
        </div>

        {/* 6 Clean White Floating Cards */}
        <div className="grid-3" style={{ gap: '2rem' }}>
          {reasons.map((r, idx) => (
            <div 
              key={idx}
              className="card-premium"
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(0, 93, 184, 0.08)',
                boxShadow: '0 8px 25px rgba(7, 28, 52, 0.05)',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 18px 40px rgba(0, 93, 184, 0.12)';
                e.currentTarget.style.borderColor = 'var(--accent-gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(7, 28, 52, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(0, 93, 184, 0.08)';
              }}
            >
              <div 
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--primary-ultralight)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(0, 93, 184, 0.12)'
                }}
              >
                {r.icon}
              </div>

              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', marginBottom: '0.75rem', fontWeight: 700 }}>
                {r.title}
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.65', margin: 0 }}>
                {r.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
