import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { contactData } from '../../data/contactData';
import { IconPhone, IconWhatsApp } from './Icons';

export default function Footer() {
  return (
    <footer className="footer-minimalist">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          
          {/* 1. Brand Column */}
          <div className="footer-col-brand">
            <Logo size="normal" variant="light" className="footer-logo" />
            <div className="footer-arabic-title" dir="rtl">
              مَعْهَدُ الإِرْشَادِ الإِسْلَامِي
            </div>
            <p className="footer-brand-text">
              Authentic Qur'anic and Islamic education delivered with quality, care, and structured 1-on-1 mentorship for students and families worldwide.
            </p>
          </div>

          {/* Links Row on Mobile (Navigation & Programs side by side) */}
          <div className="footer-links-group">
            {/* 2. Quick Navigation */}
            <div className="footer-col">
              <h4 className="footer-heading">Navigation</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Institute</Link></li>
                <li><Link to="/programs">All Programs</Link></li>
                <li><Link to="/teachers">Meet Teachers</Link></li>
                <li><Link to="/how-it-works">How It Works</Link></li>
                <li><Link to="/for-parents">For Parents</Link></li>
              </ul>
            </div>

            {/* 3. Core Programs */}
            <div className="footer-col">
              <h4 className="footer-heading">Programs</h4>
              <ul className="footer-links">
                <li><Link to="/programs/nuurul-bayaan">Nuurul Bayaan</Link></li>
                <li><Link to="/programs/quran-recitation">Qur'an & Tajweed</Link></li>
                <li><Link to="/programs/hifdh">Hifdh Memorization</Link></li>
                <li><Link to="/programs/islamic-studies">Islamic Studies</Link></li>
                <li><Link to="/programs/arabic-adhkaar">Arabic & Adhkaar</Link></li>
              </ul>
            </div>
          </div>

          {/* 4. Contact & Admissions */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-heading">Admissions Desk</h4>
            <ul className="footer-links">
              <li>
                <a href={`tel:${contactData.phone}`} className="footer-contact-link">
                  <IconPhone size={14} color="var(--accent-gold-light)" />
                  <span>{contactData.phone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={contactData.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-contact-link footer-whatsapp-highlight"
                >
                  <IconWhatsApp size={15} color="#25D366" />
                  <span>WhatsApp Admissions</span>
                </a>
              </li>
              <li><Link to="/contact">Contact Support Desk</Link></li>
              <li><Link to="/faqs">Frequently Asked Questions</Link></li>
            </ul>

            <div className="footer-cta-container">
              <Link to="/enroll" className="footer-cta-btn">
                <span>Enroll Now</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Developer Attribution */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} <strong>Al-Irshaad Islamic Institute</strong>. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="footer-dot-sep">•</span>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <span className="footer-dot-sep">•</span>
            <a 
              href={contactData.developerAttribution.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-dev-link"
            >
              {contactData.developerAttribution.text}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-minimalist {
          background: #031122;
          color: #E2E8F0;
          border-top: 2px solid rgba(197, 168, 105, 0.35);
          padding-top: 4.5rem;
          padding-bottom: 2.5rem;
          font-family: var(--font-sans);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 2.2fr 1.3fr;
          gap: 3.5rem;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-links-group {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 2.5rem;
        }

        .footer-col-brand {
          max-width: 360px;
        }

        .footer-arabic-title {
          font-family: var(--font-arabic);
          font-size: 1.25rem;
          color: var(--accent-gold-light);
          margin-top: 0.6rem;
          margin-bottom: 0.75rem;
        }

        .footer-brand-text {
          font-size: 0.9rem;
          line-height: 1.65;
          color: #94A3B8;
          margin: 0;
        }

        .footer-heading {
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #FFFFFF;
          margin-bottom: 1.35rem;
          position: relative;
          display: inline-block;
        }

        .footer-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 24px;
          height: 2px;
          background: var(--accent-gold);
          border-radius: 2px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          color: #94A3B8;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          color: var(--accent-gold-light);
          transform: translateX(3px);
        }

        .footer-contact-link {
          display: inline-flex !important;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-whatsapp-highlight {
          color: #25D366 !important;
          font-weight: 600;
        }

        .footer-cta-container {
          margin-top: 1.25rem;
        }

        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.6rem 1.4rem;
          border-radius: 8px;
          background: linear-gradient(135deg, #D4A347 0%, #BA8E35 100%);
          color: #FFFFFF !important;
          font-size: 0.875rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(197, 168, 105, 0.25);
        }

        .footer-cta-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 18px rgba(197, 168, 105, 0.45);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
          padding-top: 2rem;
          font-size: 0.85rem;
          color: #94A3B8;
        }

        .footer-copyright {
          margin: 0;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        .footer-bottom-links a {
          color: #94A3B8;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-bottom-links a:hover {
          color: var(--accent-gold-light);
        }

        .footer-dev-link {
          color: var(--accent-gold-light) !important;
          font-weight: 600;
        }

        .footer-dot-sep {
          color: rgba(255, 255, 255, 0.25);
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
          .footer-col-brand {
            grid-column: span 2;
            max-width: 100%;
          }
          .footer-links-group {
            grid-column: span 2;
          }
          .footer-col-contact {
            grid-column: span 2;
          }
        }

        @media (max-width: 640px) {
          .footer-minimalist {
            padding-top: 3.25rem;
            padding-bottom: 2rem;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.25rem;
            padding-bottom: 2.25rem;
          }
          .footer-col-brand {
            grid-column: span 1;
            text-align: left;
          }
          .footer-links-group {
            grid-column: span 1;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }
          .footer-col-contact {
            grid-column: span 1;
          }
          .footer-cta-btn {
            width: 100%;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            padding-top: 1.5rem;
          }
          .footer-bottom-links {
            gap: 0.65rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </footer>
  );
}
