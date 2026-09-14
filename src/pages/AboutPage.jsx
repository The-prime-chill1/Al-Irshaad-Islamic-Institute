import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import VisionMissionSection from '../components/sections/VisionMissionSection';
import GlobalLearningSection from '../components/sections/GlobalLearningSection';
import CtaBannerSection from '../components/sections/CtaBannerSection';
import HadithRibbon from '../components/common/HadithRibbon';
import { images } from '../data/imageAssets';
import { teachersData } from '../data/teachersData';
import TeacherCard from '../components/cards/TeacherCard';
import { Link } from 'react-router-dom';
import { 
  IconGraduationCap, 
  IconMapPin, 
  IconArrowRight,
  IconShield
} from '../components/common/Icons';

export default function AboutPage() {
  const steps = [
    { title: "Believe (Iman)", desc: "Planting pure conviction and love for Allah and His Messenger ﷺ." },
    { title: "Learn ('Ilm)", desc: "Acquiring structured, authentic knowledge with proper Makharij and understanding." },
    { title: "Practice ('Amal)", desc: "Translating knowledge into daily Salah, Adhkaar, and prophetic character." },
    { title: "Grow (Tazkiyah)", desc: "Purifying intentions, strengthening moral resilience, and elevating manners." },
    { title: "Live by the Qur'an", desc: "Embodying the Qur'an as a comprehensive guide in family, school, and society." }
  ];

  const coreValues = [
    {
      title: "Ikhlaas (Sincerity)",
      arabic: "الإِخْلَاص",
      desc: "Every lesson is anchored in seeking the pleasure of Allah, nurturing sincere devotion and spiritual purity in our students."
    },
    {
      title: "Itqan (Scholarly Excellence)",
      arabic: "الإِتْقَان",
      desc: "We adhere strictly to verified chains of transmission (Sanad), precise Tajweed Makharij, and authentic classical Islamic curricula."
    },
    {
      title: "Rifq & Sabr (Gentleness & Patience)",
      arabic: "الرِّفْقُ وَالصَّبْر",
      desc: "Following the prophetic method of teaching with immense patience, encouraging positive reinforcement, and individual pacing."
    },
    {
      title: "Dignified Tarbiyah & Privacy",
      arabic: "التَّرْبِيَةُ الإِسْلَامِيَّة",
      desc: "Offering dedicated male Ustadhs and female Ustadhat so sisters, youth, and children learn in total comfort and Islamic propriety."
    }
  ];

  return (
    <div>
      {/* 1. Page Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '5.5rem 0 4.5rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            ✦ About Al-Irshaad Islamic Institute ✦
          </span>
          <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2.2rem', color: 'var(--accent-gold-light)', marginBottom: '0.5rem', direction: 'rtl' }}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            Illuminating Hearts & Homes with the Light of the Qur'an
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '820px', margin: '0 auto 2rem auto', fontSize: '1.15rem', lineHeight: 1.6 }}>
            Founded by <strong>Ustaadh Naasir Akinbolanle Jamiu</strong> in Connecticut, USA, Al-Irshaad bridges traditional Islamic scholarly foundations with personalized 1-on-1 virtual learning for students and families worldwide.
          </p>

          {/* Quick Badges Ribbon */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', color: '#E5C988', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <IconMapPin size={14} color="#E5C988" />
              <span>Connecticut, USA Base</span>
            </span>
            <span style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <IconGraduationCap size={14} color="#FFFFFF" />
              <span>Certified Huffaz & Shariah Scholars</span>
            </span>
            <span style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <IconShield size={14} color="#FFFFFF" />
              <span>1-on-1 Tarbiyah & Male/Female Faculty</span>
            </span>
          </div>
        </div>
      </section>

      {/* Sacred Hadith Ribbon */}
      <HadithRibbon variant="compact" />

      {/* 2. Vision & Mission Section (Elevated to the top) */}
      <VisionMissionSection />

      {/* 3. Main Narrative & Founding Vision */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 'clamp(2rem, 4vw, 3.5rem)', alignItems: 'center' }}>
            
            <div>
              <span className="badge-emerald" style={{ marginBottom: '1rem' }}>Authentic Islamic Education</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--primary-dark)', marginBottom: '1.25rem', lineHeight: 1.25, fontWeight: 700 }}>
                A Sanctuary for Genuine Islamic Scholarship & Spiritual Tarbiyah
              </h2>
              
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                <strong>Al-Irshaad Islamic Institute</strong> is a premier <strong>international online Islamic educational academy</strong> established to bridge the gap between rigorous traditional scholarly education and the busy modern lives of Muslim families worldwide.
              </p>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                For Muslim parents living in North America, the UK, Europe, and across the globe, finding authentic, vetted, and patient Islamic tutors who understand diaspora upbringing can be a formidable challenge. Al-Irshaad provides the solution: a structured, reliable, 1-on-1 virtual sanctuary where children, youth, and adults learn directly from credentialed Huffaz and scholars.
              </p>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.75rem' }}>
                Headquartered in <strong>Connecticut, USA</strong>, our institute provides timezone-matched private instruction in Nuurul Bayaan (Arabic Reading Foundations), Qur'an Recitation with Tajweed, Hifdh (Memorization), Classical Arabic, and Islamic Studies (Aqeedah, Fiqh, Seerah, Hadith, and Akhlaaq).
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/programs" className="btn btn-primary btn-sm">
                  Explore Learning Tracks
                </Link>
                <Link to="/teachers" className="btn btn-outline btn-sm">
                  Meet Our Faculty
                </Link>
              </div>
            </div>

            {/* Right Card Highlight: 5-Stage Paradigm */}
            <div 
              style={{
                background: 'var(--bg-card)',
                borderRadius: '24px',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-md)',
                overflow: 'hidden'
              }}
            >
              <div style={{ height: '180px', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={images.mosqueInterior} 
                  alt="Islamic Sanctuary and Learning"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(3,17,34,0.3) 0%, rgba(3,17,34,0.85) 100%)' }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '20px', color: 'var(--accent-gold-light)', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.05em' }}>
                  OUR 5-STAGE EDUCATIONAL PARADIGM
                </div>
              </div>

              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                  {steps.map((s, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <span 
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          background: 'var(--primary-dark)',
                          color: 'var(--accent-gold-light)',
                          border: '1px solid var(--accent-gold)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          flexShrink: 0
                        }}
                      >
                        {idx + 1}
                      </span>
                      <div>
                        <strong style={{ display: 'block', color: 'var(--primary-dark)', fontSize: '0.94rem' }}>{s.title}</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.45 }}>{s.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Meet Our Distinguished Faculty & Scholarly Team */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-medium)' }}>
        <div className="container">
          <SectionHeader 
            badge="Faculty & Scholarly Team"
            arabicTitle="مُعَلِّمُونَا الأَفَاضِل"
            title="Meet Our Distinguished Faculty"
            description="Our instructors bring authentic academic degrees from prestigious institutions in Chad, Saudi Arabia, and Nigeria, combined with years of dedicated virtual Tarbiyah."
          />

          {/* Location & Timezone notice banner */}
          <div 
            style={{ 
              padding: '1.2rem 1.6rem', 
              background: '#FFFFFF', 
              borderRadius: '16px', 
              border: '1.5px solid var(--accent-gold)', 
              boxShadow: '0 4px 20px rgba(0, 93, 184, 0.06)',
              marginBottom: '3rem', 
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              textAlign: 'center',
              maxWidth: '900px',
              margin: '0 auto 3rem auto'
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--primary-dark)', fontWeight: 700, fontSize: '0.96rem' }}>
              <IconMapPin size={18} color="var(--accent-gold-dark)" />
              <span>{teachersData.baseLocationNotice}</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
              {teachersData.facultyCountText}
            </p>
          </div>

          {/* Teachers Cards Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
              gap: '1.75rem', 
              alignItems: 'stretch',
              marginBottom: '3rem' 
            }}
          >
            {teachersData.teachers.map((t) => (
              <TeacherCard key={t.id} teacher={t} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/teachers" className="btn btn-primary btn-md">
              <span>View Full Scholarly Profiles & Filter By Specialty</span>
              <IconArrowRight size={16} color="#FFFFFF" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Our Core Values */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-medium)' }}>
        <div className="container">
          <SectionHeader 
            badge="Institutional Identity"
            arabicTitle="قِيَمُنَا وَمَبَادِئُنَا"
            title="The 4 Core Values Guiding Al-Irshaad"
            description="Our educational philosophy is rooted in prophetic principles of scholarship, sincerity, and personalized mentorship."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.75rem' }}>
            {coreValues.map((v, idx) => (
              <div 
                key={idx}
                className="card-premium"
                style={{
                  padding: '2.25rem 1.75rem',
                  borderTop: '3.5px solid var(--accent-gold)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.6rem', color: 'var(--accent-gold-dark)', marginBottom: '0.5rem', direction: 'rtl' }}>
                  {v.arabic}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', marginBottom: '0.75rem', fontWeight: 700 }}>
                  {v.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Global Learning & Diaspora Reach */}
      <GlobalLearningSection />

      {/* 7. Final CTA Banner */}
      <CtaBannerSection 
        badge="Join Al-Irshaad Today"
        title="Experience Authentic Islamic Education from Home"
        subtitle="Schedule your personalized 1-on-1 placement assessment and start your Qur'anic journey with our dedicated faculty."
      />
    </div>
  );
}
