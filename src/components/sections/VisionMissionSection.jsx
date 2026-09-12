import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { visionMissionData } from '../../data/journeyData';
import { IconCheckCircle } from '../common/Icons';

export default function VisionMissionSection() {
  return (
    <section 
      className="section-padding" 
      style={{ 
        background: 'linear-gradient(180deg, #071C34 0%, #031122 100%)', 
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Pattern overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(197, 168, 105, 0.12) 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
          opacity: 0.7
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <SectionHeader 
          badge="Our Guiding Purpose"
          arabicTitle="الرُّؤْيَةُ وَالرِّسَالَةُ"
          title="Vision & Mission"
          description="Dedicated to raising a generation anchored in divine guidance, moral beauty, and authentic Islamic knowledge."
          theme="light"
        />

        {/* Vision & Mission Split Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '3.5rem' }}>
          
          {/* Vision Card */}
          <div 
            className="card-glass-dark" 
            style={{
              padding: '3rem 2.5rem',
              borderTop: '4px solid var(--accent-gold)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.5rem', color: 'var(--accent-gold)' }}>✦</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--accent-gold-light)', letterSpacing: '0.1em', margin: 0 }}>
                {visionMissionData.vision.title}
              </h3>
            </div>

            <p style={{ color: '#FFFFFF', fontSize: '1.15rem', lineHeight: '1.8', fontStyle: 'italic', fontFamily: 'var(--font-serif)', margin: 0 }}>
              "{visionMissionData.vision.text}"
            </p>
          </div>

          {/* Mission Card */}
          <div 
            className="card-glass-dark" 
            style={{
              padding: '3rem 2.5rem',
              borderTop: '4px solid var(--accent-gold)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.5rem', color: 'var(--accent-gold)' }}>✦</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--accent-gold-light)', letterSpacing: '0.1em', margin: 0 }}>
                {visionMissionData.mission.title}
              </h3>
            </div>

            <p style={{ color: '#FFFFFF', fontSize: '1.15rem', lineHeight: '1.8', fontStyle: 'italic', fontFamily: 'var(--font-serif)', margin: 0 }}>
              "{visionMissionData.mission.text}"
            </p>
          </div>

        </div>

        {/* 5 Mission Commitments */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="section-subtitle-badge light" style={{ marginBottom: '0.5rem' }}>
            ✦ Strategic Commitments ✦
          </span>
          <h3 style={{ color: 'var(--accent-gold-light)', fontFamily: 'var(--font-serif)', fontSize: '1.8rem', margin: 0 }}>
            What We Are Committed To
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {visionMissionData.commitments.map((val, idx) => (
            <div 
              key={idx}
              style={{
                padding: '1.75rem',
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '14px',
                border: '1px solid rgba(197, 168, 105, 0.25)',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <IconCheckCircle size={18} color="var(--accent-gold)" />
                <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', margin: 0, fontWeight: 700 }}>
                  {val.title}
                </h4>
              </div>
              <p style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.88rem', margin: 0, lineHeight: '1.6' }}>
                {val.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
