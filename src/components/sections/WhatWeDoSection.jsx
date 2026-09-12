import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../data/imageAssets';

export default function WhatWeDoSection() {
  const cards = [
    {
      title: "Qur'an & Tajweed Programs",
      image: images.quranRecitation,
      description: "From foundation Nuurul Bayaan for beginners (aged 4+) to fluent verse-by-verse recitation with practical Tajweed rules under patient teachers.",
      link: "/programs/nuurul-bayaan",
      cta: "Explore Qur'an Tracks"
    },
    {
      title: "Hifdh Memorization (3-Cycle)",
      image: images.hifdh,
      description: "A structured, personalized pathway to commit the Holy Qur'an to heart using our 3-Cycle Retention method (Talqeen, Muraajah, Manzil) with certified Haafidh mentors.",
      link: "/programs/hifdh",
      cta: "Explore Hifdh Track"
    },
    {
      title: "Islamic Studies & Arabic",
      image: images.islamicStudies,
      description: "Age-tailored curricula (Levels 1, 2 & 3) covering Aqeedah, Fiqh, Seerah, Arabic vocabulary, and daily Adhkaar to practice Islam with understanding and beautiful character.",
      link: "/programs/islamic-studies",
      cta: "Explore Islamic Studies"
    }
  ];

  return (
    <section 
      className="section-padding" 
      style={{ 
        backgroundColor: '#FAFAFA', 
        position: 'relative'
      }}
    >
      {/* Subtle Geometric Overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(197, 168, 105, 0.08) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          opacity: 0.7,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Heading matching Screenshot 2 */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--primary-dark)', fontFamily: 'var(--font-serif)', fontWeight: 700, margin: 0 }}>
            What We Do
          </h2>
          <div style={{ width: '45px', height: '3px', background: 'var(--accent-gold)', margin: '0.85rem auto 0 auto', borderRadius: '2px' }} />
        </div>

        {/* 3 Columns Cards Grid */}
        <div className="grid-3" style={{ gap: '2.5rem' }}>
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="card-premium"
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(0, 93, 184, 0.08)',
                boxShadow: '0 10px 30px rgba(7, 28, 52, 0.06)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 93, 184, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(7, 28, 52, 0.06)';
              }}
            >
              {/* Image Frame */}
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={c.image} 
                  alt={c.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, textAlign: 'center' }}>
                <h3 
                  style={{ 
                    fontSize: '1.35rem', 
                    color: 'var(--accent-gold-dark)', 
                    marginBottom: '1rem', 
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700 
                  }}
                >
                  {c.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.75rem', flexGrow: 1 }}>
                  {c.description}
                </p>

                <Link 
                  to={c.link}
                  className="btn btn-outline-gold btn-sm"
                  style={{ alignSelf: 'center', width: '100%', padding: '0.75rem 1.25rem', fontSize: '0.875rem' }}
                >
                  {c.cta} →
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
