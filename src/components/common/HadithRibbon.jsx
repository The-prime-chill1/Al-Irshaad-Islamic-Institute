import React, { useState, useEffect } from 'react';
import { IconBookOpen } from './Icons';

const hadiths = [
  {
    arabic: "« خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ »",
    translation: "“The best among you are those who learn the Qur’an and teach it.”",
    source: "Sahih al-Bukhari 5027"
  },
  {
    arabic: "« مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ »",
    translation: "“When Allah wishes good for someone, He bestows upon him understanding of the Deen.”",
    source: "Sahih al-Bukhari 71"
  },
  {
    arabic: "« طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ »",
    translation: "“Seeking sacred knowledge is an obligation upon every Muslim.”",
    source: "Sunan Ibn Majah 224"
  },
  {
    arabic: "« اقْرَأْ وَارْتَقِ وَرَتِّلْ كَمَا كُنْتَ تُرَتِّلُ فِي الدُّنْيَا »",
    translation: "“Read, ascend, and recite as you used to recite in the world, for your status is at the last verse you recite.”",
    source: "Sunan Abi Dawud 1464"
  }
];

export default function HadithRibbon({ variant = "default" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hadiths.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const activeHadith = hadiths[currentIndex];

  if (variant === "compact") {
    return (
      <div 
        style={{
          background: 'linear-gradient(90deg, #031122 0%, #005DB8 50%, #031122 100%)',
          borderTop: '1px solid rgba(197, 168, 105, 0.4)',
          borderBottom: '1px solid rgba(197, 168, 105, 0.4)',
          color: '#FFFFFF',
          padding: '0.85rem 1rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <span 
            style={{ 
              fontFamily: 'var(--font-arabic)', 
              fontSize: '1.35rem', 
              color: 'var(--accent-gold-light)',
              fontWeight: 600,
              direction: 'rtl'
            }}
          >
            {activeHadith.arabic}
          </span>
          <span style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>
            {activeHadith.translation}
          </span>
          <span 
            style={{ 
              fontSize: '0.75rem', 
              background: 'rgba(197, 168, 105, 0.2)', 
              color: 'var(--accent-gold-light)', 
              padding: '0.2rem 0.6rem', 
              borderRadius: '9999px',
              border: '1px solid rgba(197, 168, 105, 0.3)'
            }}
          >
            {activeHadith.source}
          </span>
        </div>
      </div>
    );
  }

  return (
    <section 
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #031122 0%, #071C34 60%, #0A2B52 100%)',
        padding: '3.5rem 1.5rem',
        borderTop: '2px solid rgba(197, 168, 105, 0.3)',
        borderBottom: '2px solid rgba(197, 168, 105, 0.3)',
        overflow: 'hidden',
        textAlign: 'center'
      }}
    >
      {/* Background Arch Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '250px',
          background: 'radial-gradient(ellipse, rgba(0, 93, 184, 0.35) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
        
        {/* Animated Arabic Calligraphy */}
        <div 
          key={`ar-${currentIndex}`}
          className="fade-in-up"
          style={{
            fontFamily: 'var(--font-arabic)',
            fontSize: 'clamp(1.6rem, 3.2vw, 2.5rem)',
            color: 'var(--accent-gold-light)',
            fontWeight: 700,
            marginBottom: '1rem',
            lineHeight: 1.6,
            direction: 'rtl',
            textShadow: '0 2px 15px rgba(224, 199, 136, 0.3)'
          }}
        >
          {activeHadith.arabic}
        </div>

        {/* English Translation */}
        <p 
          key={`tr-${currentIndex}`}
          className="fade-in-up"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
            color: '#FFFFFF',
            fontStyle: 'italic',
            lineHeight: 1.6,
            marginBottom: '1rem'
          }}
        >
          {activeHadith.translation}
        </p>

        {/* Source Citation & Dots */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(197, 168, 105, 0.4)',
              fontSize: '0.85rem',
              color: 'var(--accent-gold-light)',
              fontWeight: 600
            }}
          >
            <IconBookOpen size={14} color="var(--accent-gold-light)" />
            <span>{activeHadith.source}</span>
          </span>

          {/* Dots Indicator */}
          <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
            {hadiths.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: idx === currentIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: idx === currentIndex ? 'var(--accent-gold-light)' : 'rgba(255, 255, 255, 0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`Go to hadith ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
