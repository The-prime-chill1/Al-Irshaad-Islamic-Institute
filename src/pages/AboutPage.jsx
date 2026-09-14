import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import VisionMissionSection from '../components/sections/VisionMissionSection';
import GlobalLearningSection from '../components/sections/GlobalLearningSection';
import CtaBannerSection from '../components/sections/CtaBannerSection';
import HadithRibbon from '../components/common/HadithRibbon';
import { images } from '../data/imageAssets';
import { Link } from 'react-router-dom';
import { 
  IconGraduationCap, 
  IconAward, 
  IconCheckCircle, 
  IconMapPin, 
  IconSparkle,
  IconArrowRight,
  IconQuote,
  IconBookOpen,
  IconShield,
  IconUsers,
  IconHeart
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

      {/* 2. Main Narrative & Founding Vision */}
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

      {/* 3. Founder, Director & CEO Spotlight */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-medium)', borderBottom: '1px solid var(--border-medium)' }}>
        <div className="container">
          <SectionHeader 
            badge="Scholarly Leadership"
            arabicTitle="مُؤَسِّسُ الْمَعْهَدِ وَمُدِيرُهُ"
            title="Founder, Director & CEO"
            description="Dedicated Islamic scholar, Haafidh of the Holy Qur'an, and visionary educator leading Al-Irshaad from Connecticut, USA."
          />

          <div 
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              background: 'linear-gradient(135deg, rgba(3, 17, 34, 0.02) 0%, rgba(0, 93, 184, 0.05) 100%)',
              borderRadius: '24px',
              border: '1.5px solid rgba(197, 168, 105, 0.4)',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 12px 35px rgba(0, 93, 184, 0.07)'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '3rem', alignItems: 'center' }}>
              
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--primary-dark)', color: 'var(--accent-gold-light)', padding: '0.35rem 0.95rem', borderRadius: '9999px', fontSize: '0.82rem', fontWeight: 700, marginBottom: '1.25rem', border: '1px solid var(--accent-gold)' }}>
                  <IconMapPin size={14} color="var(--accent-gold)" />
                  <span>Connecticut, USA (Headquarters)</span>
                </div>

                <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.9rem', color: 'var(--primary-dark)', marginBottom: '0.35rem', direction: 'rtl' }}>
                  أُسْتَاذ نَاصِر أَكِينْبُولَانْلِي جَامِع
                </div>

                <h3 style={{ fontSize: '1.75rem', color: 'var(--primary-dark)', fontWeight: 700, marginBottom: '0.35rem', fontFamily: 'var(--font-serif)' }}>
                  Ustaadh Naasir Akinbolanle Jamiu
                </h3>

                <p style={{ color: 'var(--accent-gold-dark)', fontWeight: 700, fontSize: '0.98rem', marginBottom: '1.35rem', letterSpacing: '0.02em' }}>
                  Founder, Director & CEO, Al-Irshaad Islamic Institute
                </p>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                  <strong>Ustaadh Naasir Akinbolanle Jamiu</strong> is a Haafidh of the Holy Qur'an, Islamic scholar, and educator dedicated to spreading authentic Qur'anic and Islamic knowledge worldwide.
                </p>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                  He is an esteemed graduate of the <strong>Arabic Institute of Nigeria (المعهد العربي النيجيري)</strong> and completed his studies at <strong>Imam Malik College of Shariah</strong>. He earned both his <strong>Bachelor's degree in Islamic Law (Shariah)</strong> and his <strong>Master's degree in Islamic Studies (Comparative Jurisprudence)</strong> from <strong>King Faisal University of Chad</strong>.
                </p>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.75rem' }}>
                  With years of specialized teaching experience, Ustaadh Naasir founded Al-Irshaad Islamic Institute with a vision to make quality Qur'an memorization, Tajweed, and authentic Islamic Studies accessible to every Muslim home through personalized online learning. He currently lives and teaches in <strong>Connecticut, USA</strong>, where he leads an elite team of qualified male and female teachers serving students globally.
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link to="/teachers" className="btn btn-gold btn-sm">
                    <span>View All Faculty Profiles</span>
                    <IconArrowRight size={14} color="#031122" />
                  </Link>
                  <Link to="/enroll" className="btn btn-outline btn-sm">
                    <span>Enroll with Our Faculty</span>
                  </Link>
                </div>
              </div>

              {/* Credentials & Message Card */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                {/* Qualifications at a glance */}
                <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '2rem', border: '1px solid var(--border-medium)', boxShadow: '0 8px 25px rgba(0, 0, 0, 0.04)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: 'var(--primary-dark)', fontWeight: 700, fontSize: '1.05rem' }}>
                    <IconGraduationCap size={24} color="var(--primary)" />
                    <span>Qualifications at a Glance:</span>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {[
                      "Haafidh of the Holy Qur'an",
                      "Graduate, Arabic Institute of Nigeria (المعهد العربي النيجيري)",
                      "Studied at Imam Malik College of Shariah",
                      "B.A. in Islamic Law (Shariah) – King Faisal University, Chad",
                      "M.A. in Islamic Studies (Comparative Jurisprudence) – King Faisal University, Chad",
                      "Founder, Director & CEO, Al-Irshaad Islamic Institute (Connecticut, USA)"
                    ].map((q, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                        <IconCheckCircle size={16} color="var(--accent-gold-dark)" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Director's Personal Note */}
                <div 
                  style={{ 
                    background: 'linear-gradient(135deg, #031122 0%, #071C34 100%)', 
                    color: '#FFFFFF', 
                    borderRadius: '20px', 
                    padding: '1.75rem', 
                    border: '1.5px solid rgba(197, 168, 105, 0.4)',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold-light)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                    <IconQuote size={18} color="var(--accent-gold)" />
                    <span>Message from the Founder:</span>
                  </div>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-on-dark-muted)', fontStyle: 'italic', margin: 0 }}>
                    "Our mission at Al-Irshaad is not merely to teach letters and rules, but to cultivate a genuine, lasting love for Allah's Book in every heart. We combine classical scholarly rigor with the patience, empathy, and gentleness every child and adult deserves to flourish."
                  </p>
                  <div style={{ marginTop: '0.85rem', fontSize: '0.85rem', color: 'var(--accent-gold-light)', fontWeight: 600, textAlign: 'right' }}>
                    — Ustaadh Naasir Akinbolanle Jamiu
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Core Values */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
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

      {/* 5. Vision & Mission Section */}
      <VisionMissionSection />

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
