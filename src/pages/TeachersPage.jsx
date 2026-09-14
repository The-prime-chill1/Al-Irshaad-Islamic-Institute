import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import TeacherCard from '../components/cards/TeacherCard';
import CtaBannerSection from '../components/sections/CtaBannerSection';
import { teachersData } from '../data/teachersData';
import { IconShield, IconMapPin, IconSparkle, IconGraduationCap, IconCheckCircle } from '../components/common/Icons';

export default function TeachersPage() {
  return (
    <div>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '5.5rem 0 4.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            ✦ Scholarly Leadership & Faculty ✦
          </span>
          <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2.2rem', color: 'var(--accent-gold-light)', marginBottom: '0.5rem', direction: 'rtl' }}>
            عُلَمَاءُ أُمَّتِي كَأَنْبِيَاءِ بَنِي إِسْرَائِيل
          </div>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            Meet Our Distinguished Faculty
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '820px', margin: '0 auto', fontSize: '1.15rem', lineHeight: 1.6 }}>
            Guided by Founder & Director Ustaadh Naasir Akinbolanle Jamiu from Connecticut, USA, our team of certified Huffaz, Islamic Law scholars, and experienced educators provides authentic 1-on-1 Qur'anic and Islamic education worldwide.
          </p>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div className="container">
          
          <SectionHeader 
            badge="Instructional Excellence"
            arabicTitle="مُعَلِّمُونَا الأَفَاضِل"
            title="Scholarly Credentials & Dedicated Mentorship"
            description="Our instructors bring authentic academic degrees from prestigious institutions in Chad, Saudi Arabia, and Nigeria, combined with years of dedicated virtual Tarbiyah."
          />

          {/* Institutional Headquarters & Faculty Notice */}
          <div 
            style={{ 
              padding: '1.25rem 1.75rem', 
              background: '#FFFFFF', 
              borderRadius: '16px', 
              border: '1.5px solid var(--accent-gold)', 
              boxShadow: '0 4px 20px rgba(0, 93, 184, 0.06)',
              marginBottom: '3.5rem', 
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
              textAlign: 'center',
              maxWidth: '900px',
              margin: '0 auto 3.5rem auto'
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--primary-dark)', fontWeight: 700, fontSize: '0.98rem' }}>
              <IconMapPin size={18} color="var(--accent-gold-dark)" />
              <span>{teachersData.baseLocationNotice}</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>
              {teachersData.facultyCountText}
            </p>
          </div>

          {/* Teachers Cards Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))', 
              gap: '1.5rem', 
              alignItems: 'stretch',
              marginBottom: '4.5rem' 
            }}
          >
            {teachersData.teachers.map((t) => (
              <TeacherCard key={t.id} teacher={t} />
            ))}
          </div>

          {/* Faculty Standards Box */}
          <div 
            style={{
              background: 'var(--bg-card)',
              borderRadius: '24px',
              border: '1px solid var(--border-medium)',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
              <span className="badge-emerald" style={{ marginBottom: '0.75rem' }}>Rigorous Vetting</span>
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--primary-dark)', margin: '0.5rem 0 0.75rem 0', fontWeight: 700 }}>
                Our 4 Pillars of Instructional Excellence
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Every instructor at Al-Irshaad meets rigorous theological, linguistic, and pedagogical benchmarks.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.75rem' }}>
              <div style={{ padding: '1.5rem', background: 'var(--bg-cream)', borderRadius: '16px', border: '1px solid var(--border-medium)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <IconGraduationCap size={22} color="#FFFFFF" />
                </div>
                <strong style={{ color: 'var(--primary-dark)', display: 'block', fontSize: '1.05rem', marginBottom: '0.4rem' }}>1. Authentic Scholarly Lineage</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
                  Instructors are certified Huffaz and graduates of renowned Islamic universities (King Faisal University, Islamic University of Madeenah, Arabic Institute of Nigeria).
                </p>
              </div>

              <div style={{ padding: '1.5rem', background: 'var(--bg-cream)', borderRadius: '16px', border: '1px solid var(--border-medium)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <IconShield size={22} color="#FFFFFF" />
                </div>
                <strong style={{ color: 'var(--primary-dark)', display: 'block', fontSize: '1.05rem', marginBottom: '0.4rem' }}>2. Dedicated Female Ustadhat</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
                  Sisters and young daughters learn in complete comfort and privacy under certified female teachers trained in Quranic pedagogy.
                </p>
              </div>

              <div style={{ padding: '1.5rem', background: 'var(--bg-cream)', borderRadius: '16px', border: '1px solid var(--border-medium)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <IconSparkle size={22} color="#FFFFFF" />
                </div>
                <strong style={{ color: 'var(--primary-dark)', display: 'block', fontSize: '1.05rem', marginBottom: '0.4rem' }}>3. Child-Centered Patience & Tarbiyah</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
                  Trained in gentle positive reinforcement, engaging visuals, and joyful pacing designed specifically for diaspora children and young minds.
                </p>
              </div>

              <div style={{ padding: '1.5rem', background: 'var(--bg-cream)', borderRadius: '16px', border: '1px solid var(--border-medium)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <IconCheckCircle size={22} color="#FFFFFF" />
                </div>
                <strong style={{ color: 'var(--primary-dark)', display: 'block', fontSize: '1.05rem', marginBottom: '0.4rem' }}>4. Punctuality & Global Timezone Matching</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
                  Strict commitment to session schedules, detailed parent progress reporting, and flexible slots matching EST, CST, PST, GMT, and WAT.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CtaBannerSection 
        badge="Start Today"
        title="Get Paired with Your Dedicated Teacher"
        subtitle="Complete our quick online enrollment and begin customized 1-on-1 sessions matching your timezone and availability."
      />
    </div>
  );
}
