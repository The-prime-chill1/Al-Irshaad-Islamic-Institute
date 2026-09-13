import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { contactData } from '../../data/contactData';
import { images } from '../../data/imageAssets';

export default function HeroSection() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate subtle ambient floating golden dust particles
    const generated = Array.from({ length: 16 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2
    }));
    setParticles(generated);
  }, []);

  return (
    <section className="hero-cinema-wrapper">
      {/* 1. Mosque Background with Majestic Slow Breathing Motion */}
      <div 
        className="hero-cinema-bg"
        style={{
          backgroundImage: `url(${images.heroMosque}), url(${images.heroMosqueFallback})`
        }}
        aria-hidden="true"
      />

      {/* 2. Cinematic Gradient Overlay (Darkens edges & text area while keeping domes visible) */}
      <div className="hero-cinema-overlay" aria-hidden="true" />

      {/* 3. Subtle Ambient Golden Light Particles */}
      <div className="hero-particles-container" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="hero-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: p.opacity
            }}
          />
        ))}
      </div>

      {/* 4. Main Hero Centered Content */}
      <div className="container hero-content-container">
        
        {/* Subtle Eyebrow Badge */}
        <div className="hero-badge animate-hero-fadeup-1">
          <span className="hero-badge-dot"></span>
          <span className="hero-badge-sparkle">✦</span>
          <span>Online International Islamic School • Norwalk, CT • Worldwide Classrooms</span>
        </div>

        {/* Bismillah Calligraphy in Radiant Gold */}
        <div className="hero-bismillah animate-hero-fadeup-2" dir="rtl">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </div>

        {/* Grand Headline matching the reference style */}
        <h1 className="hero-title animate-hero-fadeup-3">
          Online International <span className="hero-title-accent">Islamic School</span>
        </h1>

        {/* Hadith Quote: Clean, Elegant, High-Legibility Typography (No Bulky Box) */}
        <div className="hero-hadith-wrapper animate-hero-fadeup-4">
          <p className="hero-hadith-text">
            The Messenger of Allah <span className="sallallahu-symbol">ﷺ</span> said,{' '}
            <span className="hadith-quote-content">
              "When Allah wishes good for someone, He bestows upon him the understanding of Deen."
            </span>
          </p>
          <span className="hero-hadith-ref">— Sahih al-Bukhari 71</span>
        </div>

        {/* Supportive subtitle narrative */}
        <p className="hero-subtext animate-hero-fadeup-5">
          Authentic Qur'anic recitation, Tajweed, and Islamic studies with certified Huffaz and scholars — tailored 1-on-1 for children, youth, and adults worldwide.
        </p>

        {/* Action CTAs: High-End Gold Button + Secondary Outline */}
        <div className="hero-actions animate-hero-fadeup-6">
          <Link to="/enroll" className="hero-btn-gold">
            <span>Enroll Now</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>

          <Link to="/programs" className="hero-btn-outline">
            <span>Explore Programs</span>
          </Link>

          <a 
            href={contactData.whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-btn-whatsapp"
            title="Chat directly on WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span>WhatsApp Desk</span>
          </a>
        </div>

        {/* 5. Sleek Semi-Transparent Trust Pillars Strip */}
        <div className="hero-trust-bar animate-hero-fadeup-7">
          <div className="trust-item">
            <div className="trust-icon-wrap">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="trust-info">
              <strong>1-on-1 Guidance</strong>
              <span>Dedicated teacher focus</span>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon-wrap">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className="trust-info">
              <strong>Flexible Scheduling</strong>
              <span>All global timezones</span>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon-wrap">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div className="trust-info">
              <strong>Authentic Tarbiyah</strong>
              <span>Character & daily practice</span>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon-wrap">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="trust-info">
              <strong>Qualified Faculty</strong>
              <span>Huffaz & scholars</span>
            </div>
          </div>
        </div>

      </div>

      {/* Scoped CSS Styles for Perfected Hero Section */}
      <style>{`
        .hero-cinema-wrapper {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: clamp(4rem, 7vw, 6.5rem);
          padding-bottom: clamp(3.5rem, 6vw, 5.5rem);
          overflow: hidden;
          contain: paint;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          background: #031122;
          color: #FFFFFF;
        }

        /* 1. Solid Majestic Mosque Background (Static & Completely Stable) */
        .hero-cinema-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center 36%;
          background-repeat: no-repeat;
          filter: contrast(105%) saturate(110%) brightness(0.95);
          pointer-events: none;
          z-index: 1;
        }

        /* 2. Luxury Dark Cinematic Vignette */
        .hero-cinema-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg, 
            rgba(3, 17, 34, 0.82) 0%, 
            rgba(3, 17, 34, 0.52) 32%, 
            rgba(3, 17, 34, 0.65) 68%, 
            rgba(3, 17, 34, 0.94) 100%
          );
          pointer-events: none;
          z-index: 2;
        }

        /* 3. Static Golden Stars/Dust (No moving drift) */
        .hero-particles-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 3;
        }

        .hero-particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, #FFE49E 20%, #C5A869 80%, transparent 100%);
          box-shadow: 0 0 8px rgba(224, 199, 136, 0.7);
        }


        /* 4. Content Layout */
        /* 4. Content Layout */
        .hero-content-container {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 1020px;
          width: 100%;
          margin: 0 auto;
          padding: 0 clamp(0.75rem, 3vw, 1.25rem);
          box-sizing: border-box;
        }

        /* Eyebrow Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          padding: 0.35rem clamp(0.65rem, 2vw, 1.1rem);
          border-radius: 9999px;
          background: rgba(3, 17, 34, 0.65);
          border: 1px solid rgba(197, 168, 105, 0.45);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          font-size: clamp(0.72rem, 2.2vw, 0.825rem);
          font-weight: 600;
          color: var(--accent-gold-light);
          margin-bottom: 1.1rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
          max-width: 100%;
          box-sizing: border-box;
          line-height: 1.35;
          text-align: center;
        }

        .hero-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #25D366;
          box-shadow: 0 0 8px #25D366;
          display: inline-block;
          flex-shrink: 0;
        }

        .hero-badge-sparkle {
          color: var(--accent-gold);
          font-size: 0.85rem;
          flex-shrink: 0;
        }

        /* Arabic Bismillah */
        .hero-bismillah {
          font-family: var(--font-arabic);
          font-size: clamp(1.45rem, 3.2vw, 2.5rem);
          color: var(--accent-gold-light);
          margin-bottom: 0.5rem;
          text-shadow: 0 2px 16px rgba(197, 168, 105, 0.5), 0 4px 20px rgba(0,0,0,0.8);
          letter-spacing: 0.03em;
        }

        /* Headline */
        .hero-title {
          font-family: var(--font-serif);
          font-size: clamp(1.85rem, 5.5vw, 4.4rem);
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: -0.01em;
          color: #FFFFFF;
          margin-bottom: 1.15rem;
          text-shadow: 0 4px 25px rgba(0, 0, 0, 0.85), 0 2px 6px rgba(0,0,0,0.6);
          word-break: normal;
          overflow-wrap: break-word;
          max-width: 100%;
        }

        .hero-title-accent {
          color: var(--accent-gold-light);
          font-family: var(--font-serif);
          font-style: italic;
          text-shadow: 0 2px 18px rgba(224, 199, 136, 0.45);
        }

        /* Hadith Clean Typography Layout (No heavy card box) */
        .hero-hadith-wrapper {
          max-width: 820px;
          margin: 0 auto 1.35rem auto;
          text-align: center;
        }

        .hero-hadith-text {
          font-family: var(--font-sans);
          font-size: clamp(1.05rem, 1.8vw, 1.25rem);
          line-height: 1.6;
          color: #FFFFFF;
          margin-bottom: 0.4rem;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.85);
        }

        .hadith-quote-content {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.12em;
          color: #FFEFC2;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.9);
        }

        .sallallahu-symbol {
          font-family: var(--font-arabic);
          color: var(--accent-gold-light);
          font-size: 1.15em;
          padding: 0 0.2rem;
        }

        .hero-hadith-ref {
          display: inline-block;
          font-size: 0.85rem;
          color: var(--accent-gold-light);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
        }

        /* Subtext */
        .hero-subtext {
          max-width: 720px;
          font-size: clamp(0.925rem, 1.4vw, 1.075rem);
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.88);
          margin-bottom: 2rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.85);
        }

        /* CTAs */
        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3.25rem;
        }

        .hero-btn-gold {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.85rem 2.25rem;
          font-size: 1rem;
          font-weight: 700;
          color: #031122 !important;
          background: linear-gradient(135deg, #FFE8AA 0%, #D4A347 50%, #B8892D 100%);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 6px 24px rgba(212, 163, 71, 0.45);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .hero-btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(212, 163, 71, 0.65);
          color: #000000 !important;
        }

        .hero-btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 1.85rem;
          font-size: 1rem;
          font-weight: 600;
          color: #FFFFFF !important;
          background: rgba(3, 17, 34, 0.45);
          border: 1.5px solid rgba(197, 168, 105, 0.5);
          border-radius: 10px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .hero-btn-outline:hover {
          background: rgba(197, 168, 105, 0.2);
          border-color: var(--accent-gold-light);
          transform: translateY(-2px);
        }

        .hero-btn-whatsapp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.85rem 1.45rem;
          font-size: 0.925rem;
          font-weight: 600;
          color: #25D366 !important;
          background: rgba(3, 17, 34, 0.45);
          border: 1px solid rgba(37, 211, 102, 0.45);
          border-radius: 10px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .hero-btn-whatsapp:hover {
          background: rgba(37, 211, 102, 0.2);
          border-color: #25D366;
          transform: translateY(-2px);
        }

        /* 5. Trust Bar (Airy & Glassmorphic) */
        .hero-trust-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          width: 100%;
          max-width: 980px;
          padding: 1.25rem 1.5rem;
          background: rgba(3, 17, 34, 0.55);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 16px;
          border: 1px solid rgba(197, 168, 105, 0.3);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-align: left;
        }

        .trust-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(0, 93, 184, 0.28);
          border: 1px solid rgba(197, 168, 105, 0.35);
          color: var(--accent-gold-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .trust-info strong {
          display: block;
          font-size: 0.88rem;
          color: #FFFFFF;
          line-height: 1.25;
        }

        .trust-info span {
          display: block;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.25;
        }

        /* Animations */
        .animate-hero-fadeup-1 { animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both; }
        .animate-hero-fadeup-2 { animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both; }
        .animate-hero-fadeup-3 { animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both; }
        .animate-hero-fadeup-4 { animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.38s both; }
        .animate-hero-fadeup-5 { animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both; }
        .animate-hero-fadeup-6 { animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both; }
        .animate-hero-fadeup-7 { animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both; }

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 960px) {
          .hero-trust-bar {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }

        @media (max-width: 640px) {
          .hero-cinema-wrapper {
            padding-top: 3.25rem;
            padding-bottom: 3.25rem;
          }
          .hero-badge {
            font-size: 0.74rem;
            padding: 0.32rem 0.8rem;
            line-height: 1.35;
            margin-bottom: 0.85rem;
          }
          .hero-trust-bar {
            grid-template-columns: 1fr;
            gap: 0.85rem;
            padding: 1rem;
          }
          .hero-actions {
            width: 100%;
            max-width: 380px;
            gap: 0.75rem;
            margin-bottom: 2.5rem;
          }
          .hero-btn-gold, .hero-btn-outline, .hero-btn-whatsapp {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .hero-cinema-wrapper {
            padding-top: 2.75rem;
            padding-bottom: 2.75rem;
          }
          .hero-title {
            font-size: clamp(1.75rem, 8vw, 2.35rem);
            margin-bottom: 0.85rem;
          }
          .hero-bismillah {
            font-size: 1.35rem;
          }
          .hero-hadith-text {
            font-size: 0.96rem;
          }
          .hero-subtext {
            font-size: 0.88rem;
            margin-bottom: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
}

