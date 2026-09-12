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
            ✦ Institute Lead Tutor ✦
          </span>
          <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2.2rem', color: 'var(--accent-gold-light)', marginBottom: '0.5rem', direction: 'rtl' }}>
            عُلَمَاءُ أُمَّتِي كَأَنْبِيَاءِ بَنِي إِسْرَائِيل
          </div>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            Meet Your Lead Tutor: Ustadh Nasir
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '780px', margin: '0 auto', fontSize: '1.15rem' }}>
            Learn under Ustadh Nasir — certified Qur'an and Islamic studies instructor dedicated to patient, 1-on-1 personalized Tarbiyah and flexible schedule assignment.
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div className="container">
          
          <SectionHeader 
            badge="Instructional Excellence"
            title="Knowledgeable, Patient, & Dedicated Mentorship"
            description="Ustadh Nasir personally assesses every student, guides each lesson 1-on-1, and coordinates your recurring class timetable to match your exact availability."
          />

          {/* Institutional Note */}
          <div style={{ padding: '1rem 1.5rem', background: 'var(--bg-cream)', borderRadius: '10px', border: '1.5px solid var(--border-medium)', marginBottom: '3rem', fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
            <span style={{ color: 'var(--accent-gold-dark)', fontWeight: 700 }}>Schedule Notice: </span>
            {teachersData.note}
          </div>

          <div style={{ maxWidth: '640px', margin: '0 auto 4rem auto' }}>
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
