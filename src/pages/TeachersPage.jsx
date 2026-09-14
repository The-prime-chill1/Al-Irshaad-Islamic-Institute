import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import TeacherCard from '../components/cards/TeacherCard';
import CtaBannerSection from '../components/sections/CtaBannerSection';
import { teachersData } from '../data/teachersData';
import { 
  IconShield, 
  IconMapPin, 
  IconSparkle, 
  IconGraduationCap, 
  IconCheckCircle,
  IconHeart,
  IconBookOpen,
  IconUsers
} from '../components/common/Icons';

export default function TeachersPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Faculty', count: teachersData.teachers.length },
    { 
      id: 'female', 
      label: 'Sisters & Kids Faculty', 
      count: teachersData.teachers.filter(t => t.gender === 'Female' || t.forFemaleAndKids).length 
    },
    { 
      id: 'quran', 
      label: 'Qur\'an & Hifz Scholars', 
      count: teachersData.teachers.filter(t => 
        (t.specialization && (t.specialization.includes('Qur\'an') || t.specialization.includes('Hifz') || t.specialization.includes('Nuurul Bayaan')))
      ).length 
    },
    { 
      id: 'islamic-studies', 
      label: 'Islamic Studies & Shariah', 
      count: teachersData.teachers.filter(t => 
        (t.specialization && (t.specialization.includes('Islamic Studies') || t.specialization.includes('Shariah') || t.specialization.includes('Fiqh')))
      ).length 
    }
  ];

  const filteredTeachers = teachersData.teachers.filter(teacher => {
    if (activeFilter === 'female') {
      return teacher.gender === 'Female' || teacher.forFemaleAndKids;
    }
    if (activeFilter === 'quran') {
      return teacher.specialization && (
        teacher.specialization.includes('Qur\'an') || 
        teacher.specialization.includes('Hifz') || 
        teacher.specialization.includes('Nuurul Bayaan')
      );
    }
    if (activeFilter === 'islamic-studies') {
      return teacher.specialization && (
        teacher.specialization.includes('Islamic Studies') || 
        teacher.specialization.includes('Shariah') || 
        teacher.specialization.includes('Fiqh')
      );
    }
    return true;
  });

  return (
    <div>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '5.5rem 0 4.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            ✦ Scholarly Leadership & Verified Faculty ✦
          </span>
          <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2.2rem', color: 'var(--accent-gold-light)', marginBottom: '0.5rem', direction: 'rtl' }}>
            عُلَمَاءُ أُمَّتِي كَأَنْبِيَاءِ بَنِي إِسْرَائِيل
          </div>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            Meet Our Distinguished Faculty
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '820px', margin: '0 auto', fontSize: '1.15rem', lineHeight: 1.6 }}>
            Guided by Founder & Director Ustaadh Naasir Akinbolanle Jamiu from Connecticut, USA, our faculty of certified Huffaz, Islamic Law scholars, and experienced educators provides authentic 1-on-1 Qur'anic and Islamic education worldwide.
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
              padding: '1.35rem 1.85rem', 
              background: '#FFFFFF', 
              borderRadius: '18px', 
              border: '1.5px solid var(--accent-gold)', 
              boxShadow: '0 6px 24px rgba(0, 93, 184, 0.07)',
              marginBottom: '2.5rem', 
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
              textAlign: 'center',
              maxWidth: '920px',
              margin: '0 auto 2.5rem auto'
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--primary-dark)', fontWeight: 700, fontSize: '1rem' }}>
              <IconMapPin size={20} color="var(--accent-gold-dark)" />
              <span>{teachersData.baseLocationNotice}</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', margin: 0, lineHeight: 1.6 }}>
              {teachersData.facultyCountText}
            </p>
          </div>

          {/* Interactive Faculty Category Filter Bar */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '0.65rem', 
              flexWrap: 'wrap', 
              marginBottom: '3rem' 
            }}
          >
            {filterOptions.map((opt) => {
              const isActive = activeFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setActiveFilter(opt.id)}
                  style={{
                    padding: '0.6rem 1.25rem',
                    borderRadius: '9999px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    border: isActive 
                      ? '1.5px solid var(--primary)' 
                      : '1.5px solid var(--border-medium)',
                    background: isActive 
                      ? 'var(--primary)' 
                      : '#FFFFFF',
                    color: isActive 
                      ? '#FFFFFF' 
                      : 'var(--text-secondary)',
                    boxShadow: isActive 
                      ? '0 6px 18px rgba(0, 93, 184, 0.25)' 
                      : '0 2px 8px rgba(0, 0, 0, 0.04)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span>{opt.label}</span>
                  <span 
                    style={{
                      fontSize: '0.74rem',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '9999px',
                      background: isActive ? 'rgba(255, 255, 255, 0.25)' : 'var(--primary-ultralight)',
                      color: isActive ? '#FFFFFF' : 'var(--primary)',
                      fontWeight: 800
                    }}
                  >
                    {opt.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Teachers Cards Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
              gap: '1.75rem', 
              alignItems: 'stretch',
              marginBottom: '4.5rem' 
            }}
          >
            {filteredTeachers.map((t) => (
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
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <IconGraduationCap size={22} color="#FFFFFF" />
                </div>
                <strong style={{ color: 'var(--primary-dark)', display: 'block', fontSize: '1.05rem', marginBottom: '0.4rem' }}>1. Authentic Scholarly Lineage</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
                  Instructors are certified Huffaz, Islamic scholars, and graduates of prestigious Islamic institutes with authentic chains of recitation.
                </p>
              </div>

              <div style={{ padding: '1.5rem', background: 'var(--bg-cream)', borderRadius: '16px', border: '1px solid var(--border-medium)' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#059669', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <IconHeart size={22} color="#FFFFFF" />
                </div>
                <strong style={{ color: 'var(--primary-dark)', display: 'block', fontSize: '1.05rem', marginBottom: '0.4rem' }}>2. Dedicated Female Ustadhat</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
                  Sisters and young daughters learn in complete comfort and privacy under certified female teachers trained in Quranic pedagogy.
                </p>
              </div>

              <div style={{ padding: '1.5rem', background: 'var(--bg-cream)', borderRadius: '16px', border: '1px solid var(--border-medium)' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <IconSparkle size={22} color="#FFFFFF" />
                </div>
                <strong style={{ color: 'var(--primary-dark)', display: 'block', fontSize: '1.05rem', marginBottom: '0.4rem' }}>3. Child-Centered Patience & Tarbiyah</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
                  Trained in gentle positive reinforcement, engaging visuals, and joyful pacing designed specifically for diaspora children and young minds.
                </p>
              </div>

              <div style={{ padding: '1.5rem', background: 'var(--bg-cream)', borderRadius: '16px', border: '1px solid var(--border-medium)' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
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
