import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { contactData } from '../../data/contactData';
import { 
  IconChevronDown, 
  IconWhatsApp, 
  IconArrowRight 
} from './Icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
    setAboutDropdownOpen(false);
    setMobileProgramsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="site-header-root">
      {/* 1. Golden Accent Ribbon */}
      <div className="header-gold-ribbon" aria-hidden="true" />

      {/* 2. Main Navigation Bar */}
      <div className={`nav-bar-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="nav-bar-inner">
          
          {/* Logo Brand */}
          <div className="nav-brand">
            <Link to="/" className="brand-link" aria-label="Al-Irshaad Islamic Institute Home">
              <div className="brand-seal-wrap">
                <img 
                  src="/logo.jpg" 
                  onError={(e) => { e.target.src = '/logo.svg'; }}
                  alt="Al-Irshaad Seal" 
                  className="brand-seal-img"
                />
              </div>
              <div className="brand-titles">
                <span className="brand-main">AL-IRSHAAD</span>
                <span className="brand-sub">ISLAMIC INSTITUTE</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links (>= 1024px) */}
          <nav className="desktop-nav-menu" aria-label="Main Navigation">
            <ul className="desktop-links-list">
              <li>
                <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                  <span>Home</span>
                </Link>
              </li>

              {/* Institute Dropdown */}
              <li 
                className="nav-item-dropdown"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <Link to="/about" className={`nav-link ${isActive('/about') || isActive('/teachers') || isActive('/for-parents') ? 'active' : ''}`}>
                  <span>Institute</span>
                  <IconChevronDown size={11} color="currentColor" style={{ transition: 'transform 0.2s ease', transform: aboutDropdownOpen ? 'rotate(180deg)' : 'none', marginLeft: '2px' }} />
                </Link>

                {aboutDropdownOpen && (
                  <div className="dropdown-panel animate-fade-in">
                    <Link to="/about" className="dropdown-panel-item">
                      <div className="dropdown-item-title">About Al-Irshaad</div>
                      <div className="dropdown-item-desc">Vision, mission, and international leadership</div>
                    </Link>
                    <Link to="/teachers" className="dropdown-panel-item">
                      <div className="dropdown-item-title">Meet Our Teachers</div>
                      <div className="dropdown-item-desc">Certified Huffaz & Scholarly faculty</div>
                    </Link>
                    <Link to="/for-parents" className="dropdown-panel-item">
                      <div className="dropdown-item-title">For Parents & Families</div>
                      <div className="dropdown-item-desc">Safeguarding, progress tracking & flexible timings</div>
                    </Link>
                  </div>
                )}
              </li>

              {/* Programs Dropdown */}
              <li 
                className="nav-item-dropdown"
                onMouseEnter={() => setProgramsDropdownOpen(true)}
                onMouseLeave={() => setProgramsDropdownOpen(false)}
              >
                <Link to="/programs" className={`nav-link ${isActive('/programs') ? 'active' : ''}`}>
                  <span>Programs</span>
                  <IconChevronDown size={11} color="currentColor" style={{ transition: 'transform 0.2s ease', transform: programsDropdownOpen ? 'rotate(180deg)' : 'none', marginLeft: '2px' }} />
                </Link>

                {programsDropdownOpen && (
                  <div className="dropdown-panel programs-dropdown animate-fade-in">
                    <div className="dropdown-grid-header">
                      <span>Structured Online Curricula</span>
                      <Link to="/programs" className="dropdown-view-all">View All →</Link>
                    </div>
                    <div className="dropdown-items-grid">
                      <Link to="/programs/nuurul-bayaan" className="dropdown-panel-item">
                        <div className="dropdown-item-title">Nuurul Bayaan</div>
                        <div className="dropdown-item-desc">Reading foundation & phonetics</div>
                      </Link>
                      <Link to="/programs/quran-recitation" className="dropdown-panel-item">
                        <div className="dropdown-item-title">Qur'an Recitation</div>
                        <div className="dropdown-item-desc">Tajweed & applied rules</div>
                      </Link>
                      <Link to="/programs/hifdh" className="dropdown-panel-item">
                        <div className="dropdown-item-title">Hifdh Memorization</div>
                        <div className="dropdown-item-desc">3-Cycle retention system</div>
                      </Link>
                      <Link to="/programs/islamic-studies" className="dropdown-panel-item">
                        <div className="dropdown-item-title">Islamic Studies</div>
                        <div className="dropdown-item-desc">Age-tailored fundamental tracks</div>
                      </Link>
                      <Link to="/programs/advanced-islamic-studies" className="dropdown-panel-item">
                        <div className="dropdown-item-title">Advanced Studies</div>
                        <div className="dropdown-item-desc">Classical sciences & Usul</div>
                      </Link>
                      <Link to="/programs/arabic-adhkaar" className="dropdown-panel-item">
                        <div className="dropdown-item-title">Arabic & Adhkaar</div>
                        <div className="dropdown-item-desc">Daily Duas & language</div>
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link to="/programs#pricing" className={`nav-link ${location.pathname === '/programs' && location.hash === '#pricing' ? 'active' : ''}`}>
                  <span>Tuition</span>
                </Link>
              </li>

              <li>
                <Link to="/how-it-works" className={`nav-link ${isActive('/how-it-works') ? 'active' : ''}`}>
                  <span>How It Works</span>
                </Link>
              </li>

              <li>
                <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop Right CTA Action (>= 1024px) */}
          <div className="desktop-action-box">
            <Link to="/enroll" className="header-gold-cta-btn">
              <span>Enroll Now</span>
              <IconArrowRight size={13} color="currentColor" />
            </Link>
          </div>

          {/* Mobile Right Controls (< 1024px) */}
          <div className="mobile-controls-row">
            <Link to="/enroll" className="mobile-enroll-pill">
              <span>Enroll</span>
            </Link>

            <button 
              type="button"
              className={`mobile-menu-trigger ${mobileMenuOpen ? 'is-active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="hamburger-bar top-bar" />
              <span className="hamburger-bar mid-bar" />
              <span className="hamburger-bar bot-bar" />
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu (Drops neatly right below the header) */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown-menu animate-slide-down">
            <div className="mobile-menu-content">
              
              <Link 
                to="/" 
                className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Home</span>
              </Link>

              <Link 
                to="/about" 
                className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>About Al-Irshaad</span>
              </Link>

              {/* Expandable Programs */}
              <div className="mobile-accordion-block">
                <button 
                  type="button"
                  className={`mobile-nav-link mobile-accordion-btn ${mobileProgramsOpen ? 'expanded' : ''}`}
                  onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                >
                  <span>Academic Programs</span>
                  <IconChevronDown size={13} color="currentColor" style={{ transition: 'transform 0.2s ease', transform: mobileProgramsOpen ? 'rotate(180deg)' : 'none' }} />
                </button>
                {mobileProgramsOpen && (
                  <div className="mobile-sublinks-box">
                    <Link to="/programs" className="mobile-sublink highlight" onClick={() => setMobileMenuOpen(false)}>
                      • All Programs & Pricing Overview
                    </Link>
                    <Link to="/programs/nuurul-bayaan" className="mobile-sublink" onClick={() => setMobileMenuOpen(false)}>
                      • Nuurul Bayaan (Beginners)
                    </Link>
                    <Link to="/programs/quran-recitation" className="mobile-sublink" onClick={() => setMobileMenuOpen(false)}>
                      • Qur'an Recitation & Tajweed
                    </Link>
                    <Link to="/programs/hifdh" className="mobile-sublink" onClick={() => setMobileMenuOpen(false)}>
                      • Qur'an Memorization (Hifdh)
                    </Link>
                    <Link to="/programs/islamic-studies" className="mobile-sublink" onClick={() => setMobileMenuOpen(false)}>
                      • Fundamentals of Islamic Studies
                    </Link>
                    <Link to="/programs/advanced-islamic-studies" className="mobile-sublink" onClick={() => setMobileMenuOpen(false)}>
                      • Advanced Islamic Studies
                    </Link>
                    <Link to="/programs/arabic-adhkaar" className="mobile-sublink" onClick={() => setMobileMenuOpen(false)}>
                      • Arabic & Adhkaar
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/programs#pricing" 
                className={`mobile-nav-link ${location.pathname === '/programs' && location.hash === '#pricing' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Tuition & Fees</span>
              </Link>

              <Link 
                to="/how-it-works" 
                className={`mobile-nav-link ${isActive('/how-it-works') ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>How Classes Work</span>
              </Link>

              <Link 
                to="/teachers" 
                className={`mobile-nav-link ${isActive('/teachers') ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Meet Our Teachers</span>
              </Link>

              <Link 
                to="/contact" 
                className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Contact Admissions</span>
              </Link>

              <Link 
                to="/faqs" 
                className={`mobile-nav-link ${isActive('/faqs') ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>FAQs</span>
              </Link>

              {/* Bottom Action inside Dropdown */}
              <div className="mobile-menu-footer">
                <Link 
                  to="/enroll" 
                  className="mobile-menu-cta-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Apply for Admission</span>
                  <IconArrowRight size={14} color="#031122" />
                </Link>

                <a 
                  href={contactData.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mobile-quick-btn whatsapp"
                >
                  <IconWhatsApp size={15} color="#128C7E" />
                  <span>WhatsApp Admissions Desk</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>

      <style>{`
        /* ==========================================================================
           1. ROOT SITE HEADER
           ========================================================================== */
        .site-header-root {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          max-width: 100%;
          z-index: 1000;
        }

        .header-gold-ribbon {
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #BA8E35 0%, #D4A347 25%, #FFE8AA 50%, #D4A347 75%, #BA8E35 100%);
        }

        /* ==========================================================================
           2. NAVBAR CONTAINER
           ========================================================================== */
        .nav-bar-wrapper {
          position: relative;
          width: 100%;
          max-width: 100%;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(197, 168, 105, 0.3);
          box-shadow: 0 2px 10px rgba(3, 17, 34, 0.05);
          transition: background 0.2s ease, box-shadow 0.2s ease;
        }

        .nav-bar-wrapper.is-scrolled {
          background: #FFFFFF;
          box-shadow: 0 4px 18px rgba(3, 17, 34, 0.09);
        }

        .nav-bar-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0.45rem clamp(0.6rem, 2.5vw, 1rem);
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          gap: 0.4rem;
          width: 100%;
        }

        /* ==========================================================================
           3. BRAND LOGO
           ========================================================================== */
        .nav-brand {
          display: flex;
          align-items: center;
          flex-shrink: 1;
          min-width: 0;
        }

        .brand-link {
          display: inline-flex;
          align-items: center;
          gap: clamp(0.3rem, 1.5vw, 0.5rem);
          text-decoration: none;
          min-width: 0;
        }

        .brand-seal-wrap {
          width: 34px;
          height: 34px;
          min-width: 34px;
          border-radius: 50%;
          padding: 1.5px;
          background: #FFFFFF;
          border: 1.5px solid #005DB8;
          box-shadow: 0 2px 6px rgba(0, 93, 184, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
        }

        .brand-seal-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .brand-titles {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
        }

        .brand-main {
          font-family: var(--font-heading, 'Plus Jakarta Sans', sans-serif);
          font-weight: 800;
          font-size: clamp(0.78rem, 2.5vw, 0.95rem);
          color: #005DB8;
          letter-spacing: 0.02em;
          line-height: 1.1;
          white-space: nowrap;
        }

        .brand-sub {
          font-family: var(--font-sans, sans-serif);
          font-weight: 700;
          font-size: clamp(0.46rem, 1.4vw, 0.54rem);
          color: #B8860B;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          line-height: 1.15;
          margin-top: 1px;
          white-space: nowrap;
        }

        /* ==========================================================================
           4. DESKTOP NAVIGATION (>= 1024px)
           ========================================================================== */
        .desktop-nav-menu {
          display: none;
          align-items: center;
        }

        .desktop-links-list {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-item-dropdown {
          position: relative;
        }

        .nav-link {
          font-size: 0.86rem;
          font-weight: 600;
          color: #2D3748;
          padding: 0.4rem 0.55rem;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
          text-decoration: none;
          transition: color 0.15s ease, background 0.15s ease;
          white-space: nowrap;
        }

        .nav-link:hover, .nav-link.active {
          color: #005DB8;
          background: rgba(0, 93, 184, 0.05);
        }

        .dropdown-panel {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          background: #FFFFFF;
          min-width: 260px;
          border-radius: 10px;
          border: 1px solid rgba(197, 168, 105, 0.35);
          box-shadow: 0 12px 30px rgba(3, 17, 34, 0.12);
          padding: 0.5rem;
          z-index: 1100;
        }

        .dropdown-panel.programs-dropdown {
          width: 480px;
          left: -40px;
        }

        .dropdown-grid-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.25rem 0.45rem 0.45rem;
          border-bottom: 1px solid #F1F5F9;
          font-size: 0.72rem;
          font-weight: 700;
          color: #64748B;
          text-transform: uppercase;
        }

        .dropdown-view-all {
          color: #005DB8;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.75rem;
        }

        .dropdown-items-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.25rem;
          margin-top: 0.35rem;
        }

        .dropdown-panel-item {
          display: block;
          padding: 0.45rem 0.6rem;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.15s ease;
        }

        .dropdown-panel-item:hover {
          background: rgba(0, 93, 184, 0.04);
        }

        .dropdown-item-title {
          font-size: 0.84rem;
          font-weight: 700;
          color: #005DB8;
          line-height: 1.2;
        }

        .dropdown-item-desc {
          font-size: 0.72rem;
          color: #64748B;
          margin-top: 1px;
        }

        /* ==========================================================================
           5. DESKTOP CTA ACTIONS (>= 1024px)
           ========================================================================== */
        .desktop-action-box {
          display: none;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .header-gold-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.45rem 1rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, #FFE8AA 0%, #D4A347 50%, #B8892D 100%);
          color: #031122 !important;
          font-weight: 700;
          font-size: 0.82rem;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(197, 168, 105, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.6);
          white-space: nowrap;
        }

        /* ==========================================================================
           6. MOBILE CONTROLS & HAMBURGER TRIGGER (< 1024px)
           ========================================================================== */
        .mobile-controls-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          flex-shrink: 0;
        }

        .mobile-enroll-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.28rem 0.65rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, #FFE8AA 0%, #D4A347 50%, #B8892D 100%);
          color: #031122 !important;
          font-weight: 700;
          font-size: 0.75rem;
          text-decoration: none;
          box-shadow: 0 2px 6px rgba(197, 168, 105, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.5);
          white-space: nowrap;
        }

        .mobile-menu-trigger {
          width: 34px;
          height: 34px;
          min-width: 34px;
          border-radius: 7px;
          border: 1.5px solid rgba(0, 93, 184, 0.2);
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3.5px;
          padding: 0;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .mobile-menu-trigger:active {
          background: #F1F5F9;
        }

        .hamburger-bar {
          width: 16px;
          height: 2px;
          background-color: #005DB8;
          border-radius: 2px;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .mobile-menu-trigger.is-active .top-bar {
          transform: translateY(5.5px) rotate(45deg);
        }

        .mobile-menu-trigger.is-active .mid-bar {
          opacity: 0;
        }

        .mobile-menu-trigger.is-active .bot-bar {
          transform: translateY(-5.5px) rotate(-45deg);
        }

        /* ==========================================================================
           7. CLEAN HEADER-ANCHORED MOBILE DROPDOWN (< 1024px)
           ========================================================================== */
        .mobile-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          width: 100%;
          max-width: 100%;
          background: #FFFFFF;
          border-bottom: 2px solid #C5A869;
          box-shadow: 0 14px 30px rgba(3, 17, 34, 0.15);
          max-height: calc(100dvh - 60px);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          z-index: 1000;
        }

        .mobile-menu-content {
          padding: 0.75rem 0.85rem 1rem 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.55rem 0.65rem;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #1E293B;
          text-decoration: none;
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
          box-sizing: border-box;
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          background: rgba(0, 93, 184, 0.05);
          color: #005DB8;
        }

        .mobile-accordion-btn {
          cursor: pointer;
        }

        .mobile-sublinks-box {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding: 0.35rem 0.5rem 0.45rem 1rem;
          background: #F8FAFC;
          border-radius: 6px;
          margin: 0.15rem 0 0.35rem 0;
          border-left: 2px solid rgba(0, 93, 184, 0.3);
        }

        .mobile-sublink {
          font-size: 0.82rem;
          font-weight: 500;
          color: #475569;
          text-decoration: none;
          padding: 0.25rem 0;
        }

        .mobile-sublink:hover {
          color: #005DB8;
        }

        .mobile-sublink.highlight {
          color: #005DB8;
          font-weight: 700;
        }

        /* Mobile Menu Bottom Actions */
        .mobile-menu-footer {
          margin-top: 0.5rem;
          padding-top: 0.75rem;
          border-top: 1px solid #F1F5F9;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-menu-cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          padding: 0.65rem 1rem;
          border-radius: 8px;
          background: linear-gradient(135deg, #FFE8AA 0%, #D4A347 100%);
          color: #031122 !important;
          font-weight: 700;
          font-size: 0.88rem;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(197, 168, 105, 0.35);
        }

        .mobile-quick-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          padding: 0.55rem 0.85rem;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          text-align: center;
        }

        .mobile-quick-btn.whatsapp {
          background: #F0FDF4;
          border: 1px solid #86EFAC;
          color: #166534;
        }

        /* Animation */
        @keyframes slideDownNav {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slideDownNav 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* ==========================================================================
           8. RESPONSIVE BREAKPOINTS
           ========================================================================== */
        @media (min-width: 1024px) {
          .desktop-nav-menu { display: flex; }
          .desktop-action-box { display: flex; }
          .mobile-controls-row { display: none; }
          .mobile-dropdown-menu { display: none !important; }
        }

        @media (max-width: 480px) {
          .nav-bar-inner {
            padding: 0.4rem 0.65rem;
            gap: 0.3rem;
          }
          .brand-seal-wrap {
            width: 32px;
            height: 32px;
            min-width: 32px;
          }
          .brand-main {
            font-size: 0.82rem;
          }
          .brand-sub {
            font-size: 0.48rem;
          }
          .mobile-enroll-pill {
            padding: 0.25rem 0.55rem;
            font-size: 0.72rem;
          }
          .mobile-menu-trigger {
            width: 32px;
            height: 32px;
            min-width: 32px;
          }
        }

        @media (max-width: 340px) {
          .nav-bar-inner {
            padding: 0.35rem 0.45rem;
            gap: 0.2rem;
          }
          .brand-seal-wrap {
            width: 28px;
            height: 28px;
            min-width: 28px;
          }
          .brand-main {
            font-size: 0.74rem;
          }
          .brand-sub {
            font-size: 0.44rem;
          }
          .mobile-enroll-pill {
            padding: 0.22rem 0.45rem;
            font-size: 0.68rem;
          }
          .mobile-menu-trigger {
            width: 30px;
            height: 30px;
            min-width: 30px;
          }
        }
      `}</style>
    </header>
  );
}
