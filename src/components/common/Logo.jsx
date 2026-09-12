import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = "normal", variant = "default", showText = true, className = "" }) {
  const isLight = variant === "light";

  return (
    <Link 
      to="/" 
      className={`logo-brand-container ${className}`} 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '0.65rem', 
        textDecoration: 'none',
        flexShrink: 0,
        whiteSpace: 'nowrap'
      }}
    >
      {/* Official Circular Seal */}
      <div className="logo-seal-wrapper">
        <img 
          src="/logo.jpg" 
          onError={(e) => { e.target.src = '/logo.svg'; }}
          alt="Al-Irshaad Islamic Institute Official Seal" 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {showText && (
        <div className="logo-text-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span className={`logo-main-title ${isLight ? 'text-light' : 'text-primary'}`}>
            AL-IRSHAAD
          </span>
          <span className={`logo-sub-title ${isLight ? 'text-gold-light' : 'text-gold-dark'}`}>
            ISLAMIC INSTITUTE
          </span>
          <span className={`logo-arabic-title ${isLight ? 'text-arabic-light' : 'text-arabic-dark'}`}>
            مَعْهَدُ الإِرْشَادِ الإِسْلَامِي
          </span>
        </div>
      )}

      <style>{`
        .logo-seal-wrapper {
          width: 44px;
          height: 44px;
          min-width: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          box-shadow: 0 2px 10px rgba(0, 93, 184, 0.18), 0 0 0 1px rgba(197, 168, 105, 0.4);
          padding: 2px;
          border: 1.5px solid #005DB8;
          overflow: hidden;
          flex-shrink: 0;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .logo-brand-container:hover .logo-seal-wrapper {
          transform: scale(1.04);
          box-shadow: 0 4px 14px rgba(0, 93, 184, 0.25), 0 0 0 2px rgba(197, 168, 105, 0.7);
        }

        .logo-main-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.05rem;
          letter-spacing: 0.04em;
          line-height: 1.1;
          white-space: nowrap;
          margin: 0;
        }

        .logo-sub-title {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 0.62rem;
          letter-spacing: 0.11em;
          text-transform: uppercase;
          line-height: 1.15;
          white-space: nowrap;
          margin-top: 1px;
        }

        .logo-arabic-title {
          font-family: var(--font-arabic);
          font-size: 0.82rem;
          direction: rtl;
          line-height: 1.1;
          white-space: nowrap;
          margin-top: 1px;
          font-weight: 600;
        }

        .text-primary { color: #005DB8; }
        .text-light { color: #FFFFFF; }
        .text-gold-dark { color: #B8860B; }
        .text-gold-light { color: var(--accent-gold-light); }
        .text-arabic-dark { color: #0A2240; }
        .text-arabic-light { color: rgba(255, 255, 255, 0.9); }

        @media (max-width: 640px) {
          .logo-seal-wrapper {
            width: 38px;
            height: 38px;
            min-width: 38px;
            padding: 1.5px;
          }
          .logo-main-title {
            font-size: 0.94rem;
            line-height: 1.08;
            letter-spacing: 0.03em;
          }
          .logo-sub-title {
            font-size: 0.56rem;
            letter-spacing: 0.09em;
            line-height: 1.08;
            margin-top: 1px;
          }
          .logo-arabic-title {
            font-size: 0.74rem;
            line-height: 1;
            margin-top: 1px;
          }
        }

        @media (max-width: 380px) {
          .logo-seal-wrapper {
            width: 34px;
            height: 34px;
            min-width: 34px;
          }
          .logo-main-title {
            font-size: 0.88rem;
          }
          .logo-sub-title {
            font-size: 0.52rem;
          }
          .logo-arabic-title {
            font-size: 0.68rem;
          }
        }
      `}</style>
    </Link>
  );
}

