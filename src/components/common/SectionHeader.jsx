import React from 'react';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  description,
  centered = true,
  theme = "dark", // "dark" for ivory backgrounds (dark text), "light" for dark green backgrounds
  arabicTitle = null,
  className = ""
}) {
  const isLight = theme === "light";

  return (
    <div className={`section-header ${centered ? '' : 'left-aligned'} ${className}`}>
      {badge && (
        <span className={`section-subtitle-badge ${isLight ? 'light' : ''}`}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          {badge}
        </span>
      )}

      {arabicTitle && (
        <div 
          style={{ 
            fontFamily: 'var(--font-arabic)', 
            fontSize: '1.6rem', 
            color: isLight ? 'var(--accent-gold-light)' : 'var(--accent-gold-dark)', 
            marginBottom: '0.4rem',
            direction: 'rtl'
          }}
        >
          {arabicTitle}
        </div>
      )}

      <h2 className={`section-title ${isLight ? 'light' : ''}`}>
        {title}
      </h2>

      {/* Decorative Gold Divider */}
      <div className="gold-divider">
        <div className="gold-divider-line"></div>
        <div className="gold-divider-icon">✦</div>
        <div className="gold-divider-line"></div>
      </div>

      {description && (
        <p className={`section-description ${isLight ? 'light' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
