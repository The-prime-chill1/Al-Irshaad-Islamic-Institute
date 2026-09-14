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
    { name: "United States (Connecticut Base)", x: "28%", y: "38%" },
    { name: "Nigeria & West Africa", x: "51%", y: "58%" },
    { name: "United Kingdom", x: "48%", y: "30%" },
    { name: "United States (West / Central)", x: "18%", y: "36%" },
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.5rem', marginBottom: '4.5rem' }}>
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
            padding: 'clamp(1.75rem, 4vw, 3.5rem) clamp(1rem, 3vw, 2rem)',
            textAlign: 'center',
            marginBottom: '4.5rem',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
            overflow: 'hidden',
            boxSizing: 'border-box',
            width: '100%'
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
            OUR GLOBAL IMPACT & EDUCATIONAL MILESTONES (100% RESPONSIVE REDESIGN)
           ========================================================================= */}
        <div className="global-impact-card">
          {/* Subtle Golden Glow Accents in Corners */}
          <div 
            style={{
              position: 'absolute',
              top: '-120px',
              right: '-120px',
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(197, 168, 105, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} 
          />
          <div 
            style={{
              position: 'absolute',
              bottom: '-120px',
              left: '-120px',
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 93, 184, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} 
          />

          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem auto', position: 'relative', zIndex: 1 }}>
            <span className="badge-gold" style={{ marginBottom: '0.65rem' }}>
              ✦ Educational Milestones & Retention ✦
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'var(--primary-dark)', margin: 0, fontFamily: 'var(--font-serif)' }}>
              Our Global Impact
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.65rem', fontSize: 'clamp(0.9rem, 1.8vw, 1rem)', lineHeight: '1.6' }}>
              Structured, measurable learning pathways designed for continuous student motivation, Tajweed fluency, and lifelong Islamic grounding.
            </p>
          </div>

          <div className="global-impact-grid">
            
            {/* Left: Luminous Multi-Ring Concentric Radial Dial */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <div className="radial-dial-wrapper">
                
                {/* SVG Radial Multi-Orbit Chart */}
                <svg viewBox="0 0 240 240" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                  <defs>
                    <linearGradient id="gradRing1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4A347" />
                      <stop offset="100%" stopColor="#BA8E35" />
                    </linearGradient>
                    <linearGradient id="gradRing2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#005DB8" />
                      <stop offset="100%" stopColor="#071C34" />
                    </linearGradient>
                    <linearGradient id="gradRing3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                    <linearGradient id="gradRing4" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C5A869" />
                      <stop offset="100%" stopColor="#E5C988" />
                    </linearGradient>
                  </defs>

                  {/* Ring 1 (Outer - Active Students) */}
                  <circle cx="120" cy="120" r="102" fill="none" stroke="#F1EDE4" strokeWidth="11" />
                  <circle cx="120" cy="120" r="102" fill="none" stroke="url(#gradRing1)" strokeWidth="11" strokeDasharray="640" strokeDashoffset="75" strokeLinecap="round" />

                  {/* Ring 2 (Core Programs) */}
                  <circle cx="120" cy="120" r="82" fill="none" stroke="#F1EDE4" strokeWidth="11" />
                  <circle cx="120" cy="120" r="82" fill="none" stroke="url(#gradRing2)" strokeWidth="11" strokeDasharray="515" strokeDashoffset="50" strokeLinecap="round" />

                  {/* Ring 3 (Global Nations) */}
                  <circle cx="120" cy="120" r="62" fill="none" stroke="#F1EDE4" strokeWidth="11" />
                  <circle cx="120" cy="120" r="62" fill="none" stroke="url(#gradRing3)" strokeWidth="11" strokeDasharray="390" strokeDashoffset="65" strokeLinecap="round" />

                  {/* Ring 4 (Innermost - Faculty Retention) */}
                  <circle cx="120" cy="120" r="42" fill="none" stroke="#F1EDE4" strokeWidth="11" />
                  <circle cx="120" cy="120" r="42" fill="none" stroke="url(#gradRing4)" strokeWidth="11" strokeDasharray="264" strokeDashoffset="25" strokeLinecap="round" />
                </svg>

                {/* Center High-Prestige Seal */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0.75rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #FAF7F2, #F3EFEA)', border: '1px solid rgba(197, 168, 105, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <IconSparkle size={16} color="var(--accent-gold-dark)" />
                  </div>
                  <strong style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.1 }}>
                    98.4%
                  </strong>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.04em', textTransform: 'uppercase', marginTop: '2px' }}>
                    Retention Rate
                  </span>
                </div>
              </div>

              {/* Ring Quick Legend */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem 1rem', marginTop: '1.5rem', width: '100%', maxWidth: '300px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D4A347', flexShrink: 0 }} />
                  <span>500+ Students</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#005DB8', flexShrink: 0 }} />
                  <span>6 Curricula</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
                  <span>15+ Countries</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#C5A869', flexShrink: 0 }} />
                  <span>100% Huffaz</span>
                </div>
              </div>
            </div>

            {/* Right: 4 High-Impact Metric Cards with Fully Responsive Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', minWidth: 0 }}>
              
              {/* Metric Card 1 */}
              <div className="impact-stat-card">
                <div className="impact-stat-header">
                  <div className="impact-stat-text">
                    <h4 className="impact-stat-title">
                      Live Interactive Students
                    </h4>
                    <span className="impact-stat-desc">
                      Personalized 1-on-1 virtual classrooms
                    </span>
                  </div>
                  <span className="impact-stat-badge badge-gold-fill">
                    500+ Active
                  </span>
                </div>
                <div className="impact-stat-track">
                  <div style={{ width: '88%', height: '100%', background: 'linear-gradient(90deg, #D4A347, #BA8E35)', borderRadius: '9999px' }} />
                </div>
              </div>

              {/* Metric Card 2 */}
              <div className="impact-stat-card">
                <div className="impact-stat-header">
                  <div className="impact-stat-text">
                    <h4 className="impact-stat-title">
                      Structured Courses & Tracks
                    </h4>
                    <span className="impact-stat-desc">
                      Nuurul Bayaan to Hifdh & Classical Arabic
                    </span>
                  </div>
                  <span className="impact-stat-badge badge-blue-fill">
                    6 Tracks
                  </span>
                </div>
                <div className="impact-stat-track">
                  <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #005DB8, #071C34)', borderRadius: '9999px' }} />
                </div>
              </div>

              {/* Metric Card 3 */}
              <div className="impact-stat-card">
                <div className="impact-stat-header">
                  <div className="impact-stat-text">
                    <h4 className="impact-stat-title">
                      Countries & Diaspora Communities
                    </h4>
                    <span className="impact-stat-desc">
                      USA, UK, Canada, South Africa, UAE & Nigeria
                    </span>
                  </div>
                  <span className="impact-stat-badge badge-green-fill">
                    15+ Nations
                  </span>
                </div>
                <div className="impact-stat-track">
                  <div style={{ width: '82%', height: '100%', background: 'linear-gradient(90deg, #10B981, #059669)', borderRadius: '9999px' }} />
                </div>
              </div>

              {/* Metric Card 4 */}
              <div className="impact-stat-card">
                <div className="impact-stat-header">
                  <div className="impact-stat-text">
                    <h4 className="impact-stat-title">
                      Certified Instructors & Huffaz
                    </h4>
                    <span className="impact-stat-desc">
                      Rigorous Sanad vetting & pedagogical coaching
                    </span>
                  </div>
                  <span className="impact-stat-badge badge-gold-fill">
                    100% Certified
                  </span>
                </div>
                <div className="impact-stat-track">
                  <div style={{ width: '95%', height: '100%', background: 'linear-gradient(90deg, #C5A869, #BA8E35)', borderRadius: '9999px' }} />
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Scoped CSS for 100% Mobile Responsiveness */}
        <style>{`
          .global-impact-card {
            background: #FFFFFF;
            border-radius: 24px;
            border: 1.5px solid rgba(197, 168, 105, 0.3);
            padding: clamp(1.25rem, 4vw, 3.5rem);
            box-shadow: 0 12px 36px rgba(7, 28, 52, 0.08);
            margin-bottom: 3.5rem;
            position: relative;
            overflow: hidden;
            width: 100%;
            box-sizing: border-box;
          }

          .global-impact-grid {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1.35fr);
            align-items: center;
            gap: 2.5rem;
            position: relative;
            z-index: 1;
            width: 100%;
          }

          @media (max-width: 860px) {
            .global-impact-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
          }

          .radial-dial-wrapper {
            position: relative;
            width: 260px;
            height: 260px;
            max-width: 100%;
          }

          @media (max-width: 480px) {
            .radial-dial-wrapper {
              width: 220px;
              height: 220px;
            }
          }

          .impact-stat-card {
            background: var(--bg-ivory);
            border-radius: 14px;
            border: 1px solid var(--border-medium);
            padding: 1rem 1.15rem;
            width: 100%;
            box-sizing: border-box;
          }

          .impact-stat-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 0.65rem;
            margin-bottom: 0.65rem;
            flex-wrap: wrap;
          }

          .impact-stat-text {
            min-width: 0;
            flex: 1 1 180px;
          }

          .impact-stat-title {
            font-size: clamp(0.92rem, 2vw, 1.02rem);
            color: var(--primary-dark);
            margin: 0;
            font-weight: 700;
            line-height: 1.3;
          }

          .impact-stat-desc {
            font-size: 0.78rem;
            color: var(--text-muted);
            display: block;
            margin-top: 2px;
            line-height: 1.3;
          }

          .impact-stat-badge {
            border-radius: 8px;
            padding: 0.22rem 0.6rem;
            font-weight: 800;
            font-size: 0.8rem;
            white-space: nowrap;
            flex-shrink: 0;
          }

          .badge-gold-fill {
            background: rgba(197, 168, 105, 0.15);
            color: var(--accent-gold-dark);
            border: 1px solid rgba(197, 168, 105, 0.4);
          }

          .badge-blue-fill {
            background: rgba(0, 93, 184, 0.1);
            color: var(--primary);
            border: 1px solid rgba(0, 93, 184, 0.25);
          }

          .badge-green-fill {
            background: rgba(16, 185, 129, 0.1);
            color: #059669;
            border: 1px solid rgba(16, 185, 129, 0.25);
          }

          .impact-stat-track {
            height: 7px;
            background: #EAE5DB;
            border-radius: 9999px;
            overflow: hidden;
            width: 100%;
          }
        `}</style>



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
