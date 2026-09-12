import React from 'react';
import { IconQuote, IconStar } from '../common/Icons';

export default function TestimonialCard({ testimonial }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      
      {/* Testimonial White Box */}
      <div 
        style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid rgba(197, 168, 105, 0.4)',
          boxShadow: '0 8px 30px rgba(7, 28, 52, 0.05)',
          padding: '2.5rem 2rem 2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          flexGrow: 1,
          position: 'relative'
        }}
      >
        {/* Golden Double Quote Icon at Top */}
        <div style={{ marginBottom: '1.25rem', color: 'var(--accent-gold)' }}>
          <IconQuote size={38} color="#C5A869" />
        </div>

        {/* Review Text */}
        <p 
          style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '0.95rem', 
            lineHeight: '1.75', 
            marginBottom: '1.75rem', 
            flexGrow: 1 
          }}
        >
          "{testimonial.content}"
        </p>

        {/* 5 Golden Stars */}
        <div style={{ display: 'flex', gap: '0.35rem', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
          {[...Array(5)].map((_, i) => (
            <IconStar key={i} size={18} color="#C5A869" filled={true} />
          ))}
        </div>
      </div>

      {/* Student / Parent Location Label Below Card */}
      <div 
        style={{ 
          textAlign: 'center', 
          marginTop: '1rem', 
          color: 'var(--accent-gold-dark)', 
          fontWeight: 700, 
          fontSize: '0.9rem' 
        }}
      >
        {testimonial.role || testimonial.name}
      </div>

    </div>
  );
}
