import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = "normal", variant = "default", showText = true, className = "" }) {
  // size options: "small" (36px), "normal" (48px), "large" (64px), "xlarge" (80px)
  const sizeMap = {
    small: { imgSize: 40, titleClass: "text-base", subClass: "text-xs" },
    normal: { imgSize: 52, titleClass: "text-lg", subClass: "text-xs" },
    large: { imgSize: 64, titleClass: "text-xl", subClass: "text-sm" },
    xlarge: { imgSize: 84, titleClass: "text-2xl", subClass: "text-sm" }
  };

  const currentSize = sizeMap[size] || sizeMap.normal;
  const isLight = variant === "light";

  return (
    <Link to="/" className={`logo-brand-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
      <div 
        style={{
          width: currentSize.imgSize,
          height: currentSize.imgSize,
          minWidth: currentSize.imgSize,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ffffff',
          boxShadow: '0 4px 12px rgba(0, 102, 214, 0.15)',
          padding: '2px',
          border: '1.5px solid #0066d6',
          overflow: 'hidden'
        }}
      >
        <img 
          src="/logo.jpg" 
          onError={(e) => { e.target.src = '/logo.svg'; }}
          alt="Al-Irshaad Islamic Institute Official Seal" 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span 
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: size === 'small' ? '0.95rem' : size === 'large' ? '1.35rem' : '1.125rem',
              letterSpacing: '0.04em',
              lineHeight: 1.15,
              color: isLight ? '#FFFFFF' : 'var(--primary)'
            }}
          >
            AL-IRSHAAD
          </span>
          <span 
            style={{ 
              fontFamily: 'var(--font-sans)', 
              fontWeight: 600, 
              fontSize: size === 'small' ? '0.68rem' : '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: isLight ? 'var(--accent-gold-light)' : 'var(--accent-gold-dark)',
              lineHeight: 1.2
            }}
          >
            ISLAMIC INSTITUTE
          </span>
          <span 
            style={{ 
              fontFamily: 'var(--font-arabic)', 
              fontSize: size === 'small' ? '0.8rem' : '0.95rem',
              color: isLight ? 'rgba(255,255,255,0.75)' : '#0066d6',
              direction: 'rtl',
              lineHeight: 1,
              marginTop: '1px'
            }}
          >
            مَعْهَدُ الإِرْشَادِ الإِسْلَامِي
          </span>
        </div>
      )}
    </Link>
  );
}
