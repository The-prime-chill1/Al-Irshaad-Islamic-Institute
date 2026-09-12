import React from 'react';

export default function StepCard({ step, title, description }) {
  return (
    <div className="card-premium" style={{ padding: '2rem 1.75rem', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
      
      {/* Step Badge */}
      <div style={{ marginBottom: '1.25rem' }}>
        <span 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            background: 'var(--primary)',
            color: 'var(--accent-gold-light)',
            fontWeight: 800,
            fontSize: '1.1rem',
            fontFamily: 'var(--font-heading)',
            boxShadow: '0 4px 12px rgba(13, 59, 46, 0.25)'
          }}
        >
          {step}
        </span>
      </div>

      <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '0.65rem' }}>
        {title}
      </h3>

      <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.6', margin: 0 }}>
        {description}
      </p>

    </div>
  );
}
