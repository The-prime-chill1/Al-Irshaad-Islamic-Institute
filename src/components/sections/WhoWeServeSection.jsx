import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { whoWeServeData } from '../../data/whyUsData';
import { images } from '../../data/imageAssets';
import { Link } from 'react-router-dom';

export default function WhoWeServeSection() {
  const getImageForIndex = (idx) => {
    switch (idx) {
      case 0: return images.boyOnlineStudent; // Children
      case 1: return images.girlOnlineStudent; // Teens & Youth
      case 2: return images.quranRecitation; // Adults
      case 3: return images.diasporaFamily; // Diaspora Families
      case 4: return images.nuurulBayaan; // Complete Beginners
      case 5: return images.hifdh; // Committed Hifdh Seekers
      default: return images.childReadingQuran;
    }
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)', position: 'relative' }}>
      <div className="container">
        
        <SectionHeader 
          badge="Inclusive Education"
          arabicTitle="لِكُلِّ مَرْحَلَةٍ مِنْ رِحْلَتِكَ الإِسْلَامِيَّة"
          title="Islamic Learning For Every Stage"
          description="We tailor our instruction, pacing, and approach to meet the unique emotional, cognitive, and spiritual needs of each learner."
        />

        {/* 6 Audience Cards with Visual Previews */}
        <div className="grid-3">
          {whoWeServeData.map((item, idx) => (
            <div 
              key={idx}
              className="card-premium"
              style={{
                padding: 0,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                borderRadius: '16px',
                border: '1px solid var(--border-medium)',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 93, 184, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              {/* Card Photo Header */}
              <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                <img 
                  src={getImageForIndex(idx)} 
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(3,17,34,0.15) 0%, rgba(3,17,34,0.75) 100%)' }} />
                <span className="badge-gold" style={{ position: 'absolute', top: '12px', right: '12px', fontSize: '0.75rem', backdropFilter: 'blur(4px)' }}>
                  {item.subtitle}
                </span>
              </div>

              <div style={{ padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', marginBottom: '0.65rem', fontWeight: 700 }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.65', margin: 0, flexGrow: 1 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Parent Callout Banner */}
        <div 
          style={{
            marginTop: '3.5rem',
            padding: '2.5rem',
            background: 'linear-gradient(135deg, var(--bg-cream), var(--bg-cream-alt))',
            borderRadius: '20px',
            border: '1px solid var(--border-medium)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <span className="badge-emerald" style={{ marginBottom: '0.75rem' }}>Special Section For Parents</span>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '0.5rem', fontWeight: 700 }}>
              Give Your Child a Stronger Islamic Foundation
            </h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>
              Discover how our safe online environment, vetted teachers, and monthly parent progress reports keep you fully involved in your child's spiritual growth.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/for-parents" className="btn btn-primary btn-sm">
              Read Parent Guide
            </Link>
            <Link to="/enroll" className="btn btn-gold btn-sm">
              Enroll Your Child
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
