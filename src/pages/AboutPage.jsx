import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import VisionMissionSection from '../components/sections/VisionMissionSection';
import GlobalLearningSection from '../components/sections/GlobalLearningSection';
import CtaBannerSection from '../components/sections/CtaBannerSection';
import HadithRibbon from '../components/common/HadithRibbon';
import { teachersData } from '../data/teachersData';
import TeacherCard from '../components/cards/TeacherCard';
import { Link } from 'react-router-dom';
import { 
  IconGraduationCap, 
  IconMapPin, 
  IconArrowRight,
  IconShield,
  IconHeart,
  IconBookOpen,
  IconCheckCircle,
  IconSparkle,
  IconAward
} from '../components/common/Icons';

export default function AboutPage() {
  const paradigmSteps = [
    { 
      number: "01",
      title: "Believe (Iman)", 
      arabic: "الإِيمَان",
      desc: "Planting pure conviction, sincere intention (Ikhlaas), and deep love for Allah and His Messenger ﷺ in the heart of every learner.",
      icon: IconHeart,
      badge: "Foundation"
    },
    { 
      number: "02",
      title: "Learn ('Ilm)", 
      arabic: "العِلْم",
      desc: "Acquiring structured, authentic knowledge with correct Makharij, foundational Tajweed rules, and accurate understanding.",
      icon: IconBookOpen,
      badge: "Instruction"
    },
    { 
      number: "03",
      title: "Practice ('Amal)", 
      arabic: "العَمَل",
      desc: "Translating sacred knowledge into daily prayer (Salah), authentic Adhkaar, ethical conduct, and prophetic character.",
      icon: IconCheckCircle,
      badge: "Application"
    },
    { 
      number: "04",
      title: "Grow (Tazkiyah)", 
      arabic: "التَّزْكِيَة",
      desc: "Purifying intentions, cultivating moral resilience, elevating Adab (manners), and strengthening spiritual discipline.",
      icon: IconSparkle,
      badge: "Purification"
    },
    { 
      number: "05",
      title: "Live by the Qur'an", 
      arabic: "الحَيَاةُ بِالقُرْآن",
      desc: "Embodying the Qur'an as a complete life compass, standing as a confident Muslim ambassador in family and society.",
      icon: IconAward,
      badge: "Mastery"
    }
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

      {/* 2. Vision & Mission Section */}
      <VisionMissionSection />

      {/* 3. Dedicated Full-Width Section: Our 5-Stage Educational Paradigm */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid var(--border-medium)', borderBottom: '1px solid var(--border-medium)' }}>
        <div className="container">
          <SectionHeader 
            badge="Our Educational Philosophy"
            arabicTitle="مَنْهَجُنَا التَّرْبَوِيُّ فِي خَمْسِ مَرَاحِلَ"
            title="Our 5-Stage Educational Paradigm"
            description="A holistic, structured pathway guiding students from foundational faith (Iman) to complete embodiment of the Holy Qur'an."
          />

          {/* 5 Milestone Cards Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', 
              gap: '1.25rem',
              alignItems: 'stretch'
            }}
          >
            {paradigmSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div 
                  key={idx}
                  className="card-premium"
                  style={{
                    padding: '1.75rem 1.35rem',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    borderTop: '4px solid var(--accent-gold)',
                    background: '#FFFFFF',
                    boxShadow: '0 8px 24px rgba(0, 93, 184, 0.05)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Top Step Pill & Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.15rem' }}>
                    <div 
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)',
                        color: 'var(--accent-gold-light)',
                        border: '1.5px solid var(--accent-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.9rem',
                        fontWeight: 800,
                        boxShadow: '0 4px 12px rgba(0, 93, 184, 0.18)'
                      }}
                    >
                      {step.number}
                    </div>

                    <span 
                      style={{ 
                        fontSize: '0.72rem', 
                        fontWeight: 700, 
                        color: 'var(--primary)', 
                        background: 'rgba(0, 93, 184, 0.08)', 
                        padding: '0.2rem 0.65rem', 
                        borderRadius: '9999px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}
                    >
                      {step.badge}
                    </span>
                  </div>

                  {/* Arabic Calligraphy Title */}
                  <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.5rem', color: 'var(--accent-gold-dark)', marginBottom: '0.35rem', direction: 'rtl' }}>
                    {step.arabic}
                  </div>

                  {/* Step Title */}
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-dark)', fontWeight: 700, marginBottom: '0.65rem', fontFamily: 'var(--font-serif)' }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, margin: '0 0 1.25rem 0', flexGrow: 1 }}>
                    {step.desc}
                  </p>

                  {/* Bottom Phase Indicator */}
                  <div style={{ paddingTop: '0.85rem', borderTop: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '0.82rem', fontWeight: 600 }}>
                    <IconComp size={16} color="var(--accent-gold-dark)" />
                    <span style={{ color: 'var(--text-muted)' }}>Stage {idx + 1} of 5</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Philosophy Callout Banner */}
          <div 
            style={{ 
              marginTop: '2.5rem', 
              background: 'linear-gradient(135deg, #031122 0%, #071C34 100%)', 
              borderRadius: '18px', 
              padding: '1.75rem 2.25rem', 
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.25rem',
              border: '1px solid rgba(197, 168, 105, 0.4)',
              boxShadow: '0 12px 35px rgba(3, 17, 34, 0.25)'
            }}
          >
            <div style={{ maxWidth: '720px' }}>
              <strong style={{ color: '#E5C988', fontSize: '1.1rem', display: 'block', marginBottom: '0.35rem', fontFamily: 'var(--font-serif)' }}>
                Pedagogy Rooted in Prophetic Wisdom & Sunnah
              </strong>
              <p style={{ color: '#CBD5E1', fontSize: '0.94rem', margin: 0, lineHeight: 1.6 }}>
                Every lesson plan across all curriculum tracks is calibrated against this 5-stage paradigm to ensure holistic character growth beyond mere rote recitation.
              </p>
            </div>

            <Link to="/enroll" className="btn btn-gold btn-sm">
              <span>Start Your Journey</span>
              <IconArrowRight size={14} color="#031122" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Meet Our Distinguished Faculty & Scholarly Team */}
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

      {/* 6. Our Core Values */}
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

      {/* 7. Global Learning & Diaspora Reach */}
      <GlobalLearningSection />

      {/* 8. Final CTA Banner */}
      <CtaBannerSection 
        badge="Join Al-Irshaad Today"
        title="Experience Authentic Islamic Education from Home"
        subtitle="Schedule your personalized 1-on-1 placement assessment and start your Qur'anic journey with our dedicated faculty."
      />
    </div>
  );
}
