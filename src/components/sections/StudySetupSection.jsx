import React from 'react';
import { Link } from 'react-router-dom';
import { IconCheckCircle } from '../common/Icons';
import { images } from '../../data/imageAssets';

export default function StudySetupSection() {
  const computerSetupImage = images.studySetup;

  return (
    <section 
      className="section-padding" 
      style={{ 
        backgroundColor: '#FFFFFF', 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Geometric Wallpaper Overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(0, 93, 184, 0.05) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          opacity: 0.8,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '3.5rem', 
            alignItems: 'center' 
          }}
        >
          
          {/* Left Column: Classroom & Headset Image */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div 
              style={{
                width: '100%',
                maxWidth: '480px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(7, 28, 52, 0.12)',
                border: '1px solid rgba(0, 93, 184, 0.1)',
                position: 'relative'
              }}
            >
              <img 
                src={computerSetupImage} 
                alt="Study Online With Al-Irshaad"
                style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                loading="lazy"
              />
              <div 
                style={{ 
                  position: 'absolute', 
                  bottom: '16px', 
                  left: '16px', 
                  right: '16px', 
                  background: 'rgba(3, 17, 34, 0.85)', 
                  backdropFilter: 'blur(8px)', 
                  borderRadius: '12px', 
                  padding: '0.75rem 1rem', 
                  border: '1px solid rgba(197, 168, 105, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#25D366', display: 'inline-block' }} />
                  <span style={{ color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 600 }}>1-on-1 Live Mentorship</span>
                </div>
                <span style={{ color: 'var(--accent-gold-light)', fontSize: '0.8rem', fontWeight: 700 }}>Zoom & Google Meet</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Setup Requirements */}
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            
            <div 
              style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', 
                color: 'var(--accent-gold-dark)', 
                fontWeight: 700, 
                marginBottom: '0.5rem' 
              }}
            >
              Study With Al-Irshaad Institute
            </div>

            <div 
              style={{ 
                fontSize: '1.05rem', 
                color: 'var(--primary)', 
                fontWeight: 600, 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em', 
                marginBottom: '1.25rem' 
              }}
            >
              Live Online
            </div>

            <p 
              style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1.15rem', 
                lineHeight: '1.8', 
                maxWidth: '480px', 
                margin: '0 auto 2rem auto' 
              }}
            >
              All you need is a computer, tablet or smartphone, a headset, and a reliable internet connection.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link 
                to="/programs" 
                className="btn btn-gold btn-md" 
                style={{ minWidth: '180px', padding: '0.85rem 1.75rem' }}
              >
                View Our Programs
              </Link>
              <Link 
                to="/enroll" 
                className="btn btn-outline btn-md" 
                style={{ minWidth: '180px', padding: '0.85rem 1.75rem' }}
              >
                Enroll Now
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
