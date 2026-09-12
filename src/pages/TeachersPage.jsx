import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import TeacherCard from '../components/cards/TeacherCard';
import CtaBannerSection from '../components/sections/CtaBannerSection';
import { teachersData } from '../data/teachersData';

export default function TeachersPage() {
  return (
    <div>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '5rem 0 4rem 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            ✦ Academic Faculty ✦
          </span>
          <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2.2rem', color: 'var(--accent-gold-light)', marginBottom: '0.5rem', direction: 'rtl' }}>
            عُلَمَاءُ أُمَّتِي كَأَنْبِيَاءِ بَنِي إِسْرَائِيل
          </div>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            Meet Our Dedicated Teachers
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '780px', margin: '0 auto', fontSize: '1.15rem' }}>
            Our faculty combines verified Sanad (chains of recitation), university degrees in Shari'ah and Islamic Studies, and a passionate dedication to student Tarbiyah.
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div className="container">
          
          <SectionHeader 
            badge="Instructional Excellence"
            title="Knowledgeable, Patient, & Certified Mentors"
            description="Every teacher at Al-Irshaad is selected for mastery in Tajweed, authentic methodology, and gentle communication suited for both young children and adult professionals."
          />

          {/* Institutional Note */}
          <div style={{ padding: '1rem 1.5rem', background: 'var(--bg-cream)', borderRadius: '10px', border: '1px solid var(--border-medium)', marginBottom: '3rem', fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            <span style={{ color: 'var(--accent-gold-dark)', fontWeight: 700 }}>Institutional Notice: </span>
            {teachersData.note}
          </div>

          <div className="grid-3" style={{ marginBottom: '4rem' }}>
            {teachersData.teachers.map((t) => (
              <TeacherCard key={t.id} teacher={t} />
            ))}
          </div>

          {/* Teacher Standards Box */}
          <div 
            style={{
              background: 'var(--bg-card)',
              borderRadius: '20px',
              border: '1px solid var(--border-medium)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1.5rem', textAlign: 'center' }}>
              Our Rigorous Faculty Standards
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
              <div style={{ padding: '1.25rem', background: 'var(--bg-cream)', borderRadius: '12px' }}>
                <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.35rem' }}>1. Sanad & Ijazah</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                  Recitation teachers possess verified continuous chains of transmission traced to the Prophet Muhammad ﷺ.
                </p>
              </div>

              <div style={{ padding: '1.25rem', background: 'var(--bg-cream)', borderRadius: '12px' }}>
                <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.35rem' }}>2. Child Psychology & Patience</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                  Trained in gentle encouragement and interactive engagement to ensure children look forward to every session.
                </p>
              </div>

              <div style={{ padding: '1.25rem', background: 'var(--bg-cream)', borderRadius: '12px' }}>
                <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.35rem' }}>3. Punctuality & Dedication</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                  High standards of professional commitment, consistent session attendance, and comprehensive parent feedback.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CtaBannerSection 
        badge="Start Today"
        title="Get Paired with Your Dedicated Teacher"
        subtitle="Complete our online enrollment application and begin 1-on-1 classes matching your preferred schedule."
      />
    </div>
  );
}
