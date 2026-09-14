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

      {/* 4. Leadership Spotlight */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-medium)', borderBottom: '1px solid var(--border-medium)' }}>
        <div className="container">
          <SectionHeader 
            badge="Scholarly Leadership"
            arabicTitle="مُؤَسِّسُ وَمُدِيرُ الْمَعْهَدِ"
            title="Director & Founder"
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
                  الأستاذ ناصر أكنبولنلي جامع
                </div>

                <h3 style={{ fontSize: '1.75rem', color: 'var(--primary-dark)', fontWeight: 700, marginBottom: '0.35rem', fontFamily: 'var(--font-serif)' }}>
                  Ustaadh Naasir Akinbolanle Jamiu
                </h3>

                <p style={{ color: 'var(--accent-gold-dark)', fontWeight: 700, fontSize: '0.98rem', marginBottom: '1.35rem', letterSpacing: '0.02em' }}>
                  Director, Al-Irshaad Islamic Institute
                </p>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.15rem' }}>
                  <strong>Ustaadh Naasir Akinbolanle Jamiu</strong> is a Haafidh of the Qur'an, Islamic scholar, and educator dedicated to spreading authentic Qur'anic and Islamic knowledge worldwide.
                </p>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.15rem' }}>
                  He is a graduate of the <strong>Arabic Institute of Nigeria (المعهد العربي النيجيري)</strong> and studied at <strong>Imam Malik College of Shariah</strong>. He holds a Bachelor's degree in <strong>Islamic Law (Shariah)</strong> and a Master's degree in <strong>Islamic Studies (Comparative Jurisprudence)</strong> from <strong>King Faisal University of Chad</strong>.
                </p>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.15rem' }}>
                  With years of teaching experience, Ustaadh Naasir founded Al-Irshaad Islamic Institute with a vision to make quality Qur'an memorization, Tajweed, and Islamic Studies accessible to every Muslim home through personalized online learning.
                </p>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.75rem' }}>
                  He currently lives and teaches in <strong>Connecticut, USA</strong>, where he leads a team of qualified male and female teachers serving students globally.
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
                      "M.A. in Islamic Studies (Comparative Jurisprudence) – King Faisal University, Chad."
                    ].map((q, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                        <IconCheckCircle size={16} color="var(--accent-gold-dark)" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          </div>

    {/* Full Official Message from the Founder Box */}
    <div 
      className="director-message-box card-dark"
      style={{ 
        maxWidth: '1100px',
        margin: '2.5rem auto 0',
        background: 'linear-gradient(145deg, #031122 0%, #071C34 50%, #004085 100%)', 
        color: '#FFFFFF', 
        borderRadius: '24px', 
        padding: 'clamp(2.25rem, 5vw, 3.75rem)', 
        border: '2px solid rgba(197, 168, 105, 0.75)',
        boxShadow: '0 25px 60px rgba(3, 17, 34, 0.4), 0 0 30px rgba(197, 168, 105, 0.15)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Geometric Overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(197, 168, 105, 0.22) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          opacity: 0.9,
          pointerEvents: 'none'
        }}
      />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Header Ribbon & Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.75rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', background: 'rgba(197, 168, 105, 0.2)', border: '1px solid rgba(197, 168, 105, 0.6)', padding: '0.45rem 1.15rem', borderRadius: '9999px', color: '#E5C988', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            <IconQuote size={18} color="#E5C988" />
            <span>A Message from the Director</span>
          </div>

          <span style={{ fontSize: '0.85rem', color: '#CBD5E1', fontWeight: 600, background: 'rgba(255,255,255,0.08)', padding: '0.35rem 0.85rem', borderRadius: '8px' }}>
            Al-Irshaad Islamic Institute • Connecticut, USA
          </span>
        </div>

        {/* Arabic Basmalah Calligraphy */}
        <div style={{ fontFamily: 'var(--font-arabic)', fontSize: 'clamp(2rem, 3.8vw, 2.6rem)', color: '#E5C988', marginBottom: '1.25rem', direction: 'rtl', textShadow: '0 2px 12px rgba(0,0,0,0.6)', textAlign: 'center' }}>
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </div>

        {/* Traditional Greeting */}
        <div style={{ fontSize: '1.2rem', color: '#FFFFFF', fontWeight: 700, fontStyle: 'italic', marginBottom: '1.5rem', textAlign: 'center', letterSpacing: '0.01em', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
          Assalamu Alaikum wa Rahmatullahi wa Barakatuh,
        </div>

        {/* Letter Body - High-Contrast Pure Crisp White */}
        <div style={{ fontSize: '1.05rem', lineHeight: '1.95', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <p className="director-letter-text" style={{ margin: 0, color: '#F8FAFC', fontSize: '1.05rem', lineHeight: '1.95' }}>
            All praise is due to Allah, Lord of the worlds, and may peace and blessings be upon our Prophet Muhammad ﷺ.
          </p>

          <p style={{ margin: 0, color: '#E5C988', fontWeight: 700, fontSize: '1.25rem', fontFamily: 'var(--font-serif)', letterSpacing: '0.01em' }}>
            Welcome to Al-Irshaad Islamic Institute.
          </p>

          <p className="director-letter-text" style={{ margin: 0, color: '#F8FAFC', fontSize: '1.05rem', lineHeight: '1.95' }}>
            Al-Irshaad Islamic Institute was founded with sincere intention to make the light of the Qur'an reach every Muslim home, no matter where they live. As a Haafidh of the Qur'an and a student of Shariah, I have seen firsthand how transformative authentic Islamic knowledge can be not just for recitation, but for our Iman, our character, and our families.
          </p>

          <p className="director-letter-text" style={{ margin: 0, color: '#F8FAFC', fontSize: '1.05rem', lineHeight: '1.95' }}>
            Today, many of our children are growing up far from traditional centers of learning. Many adults and new Muslims long to connect with the Qur'an but don't know where to start. This is why we exist.
          </p>

          <p className="director-letter-text" style={{ margin: 0, color: '#F8FAFC', fontSize: '1.05rem', lineHeight: '1.95' }}>
            At Al-Irshaad, we don't just teach letters and rules. We nurture love for Allah and His Book. Through our Nuurul Bayaan foundation, Tajweed, Hifz, and Islamic Studies programs, we combine traditional scholarship with caring, personalized online teaching, so every student, young or old, can learn with excellence and confidence.
          </p>

          <p className="director-letter-text" style={{ margin: 0, color: '#F8FAFC', fontSize: '1.05rem', lineHeight: '1.95' }}>
            I personally oversee our curriculum and teachers to ensure we uphold <strong style={{ color: '#E5C988' }}>Ikhlas (sincerity)</strong>, <strong style={{ color: '#E5C988' }}>Itqan (excellence)</strong>, and <strong style={{ color: '#E5C988' }}>Amanah (trust)</strong> in everything we do.
          </p>

          {/* Highlighted Invitation Callout */}
          <div style={{ background: 'rgba(197, 168, 105, 0.18)', borderLeft: '4px solid #E5C988', borderRadius: '12px', padding: '1.25rem 1.5rem', margin: '0.75rem 0', border: '1px solid rgba(197, 168, 105, 0.3)', borderLeftWidth: '4px' }}>
            <p style={{ margin: 0, color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem', lineHeight: '1.75' }}>
              I invite you to join our family and take the first step. Book a free trial class, meet our teachers, and experience the difference.
            </p>
          </div>

          <p style={{ margin: 0, fontStyle: 'italic', color: '#E5C988', fontWeight: 600, fontSize: '1.08rem' }}>
            May Allah bless your journey to the Qur'an and make it a light for you in this life and the next.
          </p>
        </div>

        {/* Executive Signature Block */}
        <div style={{ marginTop: '2.5rem', paddingTop: '1.75rem', borderTop: '1.5px solid rgba(197, 168, 105, 0.4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.4rem', color: '#E5C988', marginBottom: '0.25rem', direction: 'rtl' }}>
              الأستاذ ناصر أكنبولنلي جامع
            </div>
            <strong style={{ display: 'block', color: '#FFFFFF', fontSize: '1.25rem', fontFamily: 'var(--font-serif)', letterSpacing: '0.01em' }}>
              Ustaadh Naasir Akinbolanle Jamiu
            </strong>
            <span style={{ fontSize: '0.9rem', color: '#CBD5E1', fontWeight: 500 }}>
              Director & Founder, Al-Irshaad Islamic Institute (Connecticut, USA)
            </span>
          </div>

          <Link 
            to="/enroll" 
            className="btn btn-gold btn-md" 
            style={{ 
              padding: '0.85rem 1.85rem', 
              fontWeight: 700, 
              fontSize: '0.96rem',
              boxShadow: '0 6px 22px rgba(197, 168, 105, 0.45)'
            }}
          >
            <span>Book a Free Trial Session</span>
            <IconArrowRight size={16} color="#031122" />
          </Link>
        </div>
      </div>
    </div>
        </div>
      </section>

      {/* 5. Meet Our Distinguished Faculty & Scholarly Team */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
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
