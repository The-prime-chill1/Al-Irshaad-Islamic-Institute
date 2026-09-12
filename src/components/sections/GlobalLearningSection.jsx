import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { Link } from 'react-router-dom';
import { IconGlobe, IconSparkle } from '../common/Icons';

export default function GlobalLearningSection() {
  const globalPillars = [
    {
      title: "Nigerian Muslim Diaspora",
      desc: "Helping families residing across the UK, USA, Canada, Europe, the Middle East, and beyond stay grounded in authentic Qur'anic recitation, Tajweed, and Islamic identity."
    },
    {
      title: "Students Across Nigeria",
      desc: "Delivering world-class structured Islamic instruction directly to homes in Abuja, Lagos, Kano, Ibadan, Kaduna, Port Harcourt, and every state."
    },
    {
      title: "International Learners",
      desc: "Open to English-speaking Muslims globally seeking patient 1-on-1 teachers in Nuurul Bayaan, Hifdh, and Classical Islamic Studies."
    },
    {
      title: "Timezone Friendly Scheduling",
      desc: "Classes designed to match morning, afternoon, evening, and weekend routines in GMT, WAT, EST, CST, PST, and European timezones."
    }
  ];

  const mapPins = [
    { name: "Nigeria (Base)", x: "51%", y: "58%" },
    { name: "United Kingdom", x: "48%", y: "30%" },
    { name: "United States (East)", x: "28%", y: "38%" },
    { name: "United States (West)", x: "18%", y: "36%" },
    { name: "Canada", x: "24%", y: "26%" },
    { name: "South Africa", x: "55%", y: "78%" },
    { name: "United Arab Emirates", x: "62%", y: "45%" },
    { name: "Europe (Germany/Ireland)", x: "51%", y: "32%" }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)', position: 'relative' }}>
      <div className="container">
        
        <SectionHeader 
          badge="Borderless Online Education"
          arabicTitle="تَعَلَّمْ مِنْ أَيِّ مَكَانٍ فِي الْعَالَم"
          title="Learn From Wherever You Are"
          description="Al-Irshaad's online model bridges oceans and continents, connecting dedicated students directly with qualified Islamic instructors from the comfort and privacy of home."
        />

        {/* 4 Regional & Scheduling Feature Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '4.5rem' }}>
          {globalPillars.map((item, idx) => (
            <div 
              key={idx}
              className="card-premium"
              style={{
                padding: '2rem 1.75rem',
                borderTop: '3px solid var(--accent-gold)'
              }}
            >
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'var(--primary-ultralight)',
                  color: 'var(--primary)',
                  marginBottom: '1.25rem'
                }}
              >
                <IconGlobe size={22} color="var(--primary)" />
              </div>

              <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '0.65rem' }}>
                {item.title}
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* =========================================================================
            OUR GLOBAL PRESENCE (WORLD DOT MAP - SCREENSHOT DESIGN)
           ========================================================================= */}
        <div 
          style={{
            background: 'var(--bg-card)',
            borderRadius: '24px',
            border: '1px solid var(--border-medium)',
            padding: 'clamp(2.5rem, 5vw, 4rem) 2rem',
            textAlign: 'center',
            marginBottom: '4.5rem',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Watermark subtle Islamic geometry */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(197, 168, 105, 0.12) 1.5px, transparent 1.5px)',
              backgroundSize: '24px 24px',
              opacity: 0.8,
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
            <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>International Reach</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--primary-dark)', margin: 0 }}>
              Our Global Presence
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.6rem', fontSize: '0.975rem' }}>
              Illuminating homes across Nigeria and empowering Muslim families in the diaspora.
            </p>
          </div>

          {/* Dotted World Map with Golden Pins */}
          <div 
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              position: 'relative',
              background: 'radial-gradient(ellipse at center, rgba(0, 93, 184, 0.03) 0%, transparent 70%)',
              padding: '2rem 1rem',
              borderRadius: '20px'
            }}
          >
            {/* World Map SVG representation */}
            <svg viewBox="0 0 1000 500" style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.85 }}>
              {/* Subtle world continents outline/dots grid */}
              <defs>
                <pattern id="dotPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#9FB5D6" opacity="0.45" />
                </pattern>
              </defs>
              {/* North America */}
              <path d="M150,80 Q250,70 300,120 Q320,180 260,240 Q180,220 140,150 Z" fill="url(#dotPattern)" />
              {/* South America */}
              <path d="M260,250 Q330,270 300,380 Q250,440 230,340 Z" fill="url(#dotPattern)" />
              {/* Europe */}
              <path d="M460,90 Q540,80 560,150 Q500,180 450,140 Z" fill="url(#dotPattern)" />
              {/* Africa */}
              <path d="M450,190 Q560,190 550,330 Q490,420 440,300 Z" fill="url(#dotPattern)" />
              {/* Asia */}
              <path d="M570,80 Q780,70 820,200 Q720,260 600,180 Z" fill="url(#dotPattern)" />
              {/* Australia */}
              <path d="M750,320 Q840,310 830,400 Q760,420 730,360 Z" fill="url(#dotPattern)" />

              {/* Glowing Golden Map Pins */}
              {/* Nigeria */}
              <g transform="translate(480, 270)">
                <circle cx="0" cy="0" r="14" fill="rgba(197, 168, 105, 0.25)" className="pulse-circle" />
                <circle cx="0" cy="0" r="6" fill="#C5A869" stroke="#FFFFFF" strokeWidth="1.5" />
              </g>
              {/* UK */}
              <g transform="translate(470, 130)">
                <circle cx="0" cy="0" r="12" fill="rgba(197, 168, 105, 0.2)" />
                <circle cx="0" cy="0" r="5" fill="#C5A869" stroke="#FFFFFF" strokeWidth="1.5" />
              </g>
              {/* US East */}
              <g transform="translate(260, 160)">
                <circle cx="0" cy="0" r="12" fill="rgba(197, 168, 105, 0.2)" />
                <circle cx="0" cy="0" r="5" fill="#C5A869" stroke="#FFFFFF" strokeWidth="1.5" />
              </g>
              {/* US West */}
              <g transform="translate(180, 150)">
                <circle cx="0" cy="0" r="10" fill="rgba(197, 168, 105, 0.2)" />
                <circle cx="0" cy="0" r="4.5" fill="#C5A869" stroke="#FFFFFF" strokeWidth="1.5" />
              </g>
              {/* Canada */}
              <g transform="translate(230, 110)">
                <circle cx="0" cy="0" r="10" fill="rgba(197, 168, 105, 0.2)" />
                <circle cx="0" cy="0" r="4.5" fill="#C5A869" stroke="#FFFFFF" strokeWidth="1.5" />
              </g>
              {/* South Africa */}
              <g transform="translate(530, 390)">
                <circle cx="0" cy="0" r="12" fill="rgba(197, 168, 105, 0.2)" />
                <circle cx="0" cy="0" r="5" fill="#C5A869" stroke="#FFFFFF" strokeWidth="1.5" />
              </g>
              {/* Middle East / UAE */}
              <g transform="translate(600, 210)">
                <circle cx="0" cy="0" r="12" fill="rgba(197, 168, 105, 0.2)" />
                <circle cx="0" cy="0" r="5" fill="#C5A869" stroke="#FFFFFF" strokeWidth="1.5" />
              </g>
            </svg>

            {/* Diaspora Country Labels Strip */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)' }} />
                Nigeria (HQ)
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)' }} />
                United Kingdom
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)' }} />
                United States
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)' }} />
                Canada
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)' }} />
                South Africa
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)' }} />
                Middle East & Diaspora
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            OUR GLOBAL IMPACT (CIRCULAR MULTI-RING RADIAL CHART - SCREENSHOT DESIGN)
           ========================================================================= */}
        <div 
          style={{
            background: 'var(--bg-card)',
            borderRadius: '24px',
            border: '1px solid var(--border-medium)',
            padding: 'clamp(2.5rem, 5vw, 3.5rem)',
            boxShadow: 'var(--shadow-md)',
            marginBottom: '3.5rem'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
            <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>Educational Milestones</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--primary-dark)', margin: 0 }}>
              Our Global Impact
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.95rem' }}>
              Structured learning pathways designed for measurable student progress and authentic retention.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center', gap: '3.5rem' }}>
            
            {/* Left: Multi-Ring Concentric Golden Radial Chart */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '260px', height: '260px' }}>
                <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                  {/* Background Track 1 */}
                  <circle cx="100" cy="100" r="85" fill="none" stroke="#EAE4D7" strokeWidth="12" />
                  {/* Foreground Ring 1: Students */}
                  <circle cx="100" cy="100" r="85" fill="none" stroke="#D4A347" strokeWidth="12" strokeDasharray="534" strokeDashoffset="120" strokeLinecap="round" />

                  {/* Background Track 2 */}
                  <circle cx="100" cy="100" r="68" fill="none" stroke="#EAE4D7" strokeWidth="12" />
                  {/* Foreground Ring 2: Programs */}
                  <circle cx="100" cy="100" r="68" fill="none" stroke="#C5A869" strokeWidth="12" strokeDasharray="427" strokeDashoffset="110" strokeLinecap="round" />

                  {/* Background Track 3 */}
                  <circle cx="100" cy="100" r="51" fill="none" stroke="#EAE4D7" strokeWidth="12" />
                  {/* Foreground Ring 3: Countries */}
                  <circle cx="100" cy="100" r="51" fill="none" stroke="#B88A2E" strokeWidth="12" strokeDasharray="320" strokeDashoffset="90" strokeLinecap="round" />

                  {/* Background Track 4 */}
                  <circle cx="100" cy="100" r="34" fill="none" stroke="#EAE4D7" strokeWidth="12" />
                  {/* Foreground Ring 4: Mentors */}
                  <circle cx="100" cy="100" r="34" fill="none" stroke="#9A7220" strokeWidth="12" strokeDasharray="213" strokeDashoffset="60" strokeLinecap="round" />
                </svg>

                {/* Center Seal */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                  <IconSparkle size={20} color="var(--accent-gold-dark)" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '0.2rem' }}>
                    Al-Irshaad
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Golden Progress Metric Bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Metric 1 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.95rem' }}>
                  <strong style={{ color: 'var(--primary-dark)' }}>Live Interactive Students</strong>
                  <span style={{ color: 'var(--accent-gold-dark)', fontWeight: 700 }}>Active Learners</span>
                </div>
                <div style={{ height: '12px', background: '#EFEBE2', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, #D4A347, #C5A869)', borderRadius: '9999px' }} />
                </div>
              </div>

              {/* Metric 2 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.95rem' }}>
                  <strong style={{ color: 'var(--primary-dark)' }}>Structured Courses & Tracks</strong>
                  <span style={{ color: 'var(--accent-gold-dark)', fontWeight: 700 }}>6 Core Programs</span>
                </div>
                <div style={{ height: '12px', background: '#EFEBE2', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ width: '75%', height: '100%', background: 'linear-gradient(90deg, #C5A869, #B88A2E)', borderRadius: '9999px' }} />
                </div>
              </div>

              {/* Metric 3 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.95rem' }}>
                  <strong style={{ color: 'var(--primary-dark)' }}>Countries & Diaspora Communities</strong>
                  <span style={{ color: 'var(--accent-gold-dark)', fontWeight: 700 }}>Global Timezones</span>
                </div>
                <div style={{ height: '12px', background: '#EFEBE2', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ width: '70%', height: '100%', background: 'linear-gradient(90deg, #B88A2E, #9A7220)', borderRadius: '9999px' }} />
                </div>
              </div>

              {/* Metric 4 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.95rem' }}>
                  <strong style={{ color: 'var(--primary-dark)' }}>Certified Instructors & Huffaz</strong>
                  <span style={{ color: 'var(--accent-gold-dark)', fontWeight: 700 }}>Dedicated Faculty</span>
                </div>
                <div style={{ height: '12px', background: '#EFEBE2', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ width: '80%', height: '100%', background: 'linear-gradient(90deg, #9A7220, #7D5C18)', borderRadius: '9999px' }} />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Global Banner Box */}
        <div 
          style={{
            background: 'var(--bg-cream)',
            borderRadius: '20px',
            border: '1px solid var(--border-medium)',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <div>
            <span className="badge-emerald" style={{ marginBottom: '0.5rem' }}>Ready To Connect?</span>
            <h4 style={{ fontSize: '1.35rem', color: 'var(--primary)', margin: 0 }}>
              Join students and families progressing with Al-Irshaad today.
            </h4>
          </div>

          <Link to="/enroll" className="btn btn-gold btn-sm" style={{ color: '#FFFFFF', background: 'linear-gradient(135deg, #D4A347, #BA8E35)' }}>
            Apply For Global Online Admission
          </Link>
        </div>

      </div>
    </section>
  );
}
