import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { contactData } from '../../data/contactData';
import { IconChevronDown, IconWhatsApp } from './Icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [quranDropdownOpen, setQuranDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
    setAboutDropdownOpen(false);
    setQuranDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* 1. Golden Islamic Geometric Pattern Top Banner (Clean decorative band without cluttering text) */}
      <div className="top-islamic-ribbon" aria-hidden="true"></div>

      {/* 2. Floating Ivory/Cream Capsule Island Navbar */}
      <div className={`navbar-floating-wrapper ${isScrolled ? 'is-sticky' : ''}`}>
        <nav className="navbar-pill animate-navbar-entrance">
          
          {/* Logo Section in its own ivory badge container */}
          <div className="navbar-logo-box">
            <Logo size="normal" />
          </div>

          {/* Desktop Navigation Links matching Screenshot structure */}
          <div className="desktop-nav" style={{ display: 'none' }}>
            <ul style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', listStyle: 'none', margin: 0, padding: 0 }}>
              <li>
                <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                  <span>Home</span>
                </Link>
              </li>

              {/* Institute Dropdown */}
              <li 
                style={{ position: 'relative' }}
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                  <span>Institute</span>
                  <IconChevronDown size={11} color="currentColor" style={{ transition: 'transform 0.25s ease', transform: aboutDropdownOpen ? 'rotate(180deg)' : 'none' }} />
                </Link>

                {aboutDropdownOpen && (
                  <div className="dropdown-menu animate-dropdown-fade">
                    <Link to="/about" className="dropdown-item">
                      <strong style={{ color: 'var(--primary)' }}>About Al-Irshaad</strong>
                      <p className="dropdown-item-desc">Vision, mission, and international leadership</p>
                    </Link>
                    <Link to="/teachers" className="dropdown-item">
                      <strong style={{ color: 'var(--primary)' }}>Meet Our Teachers</strong>
                      <p className="dropdown-item-desc">Certified Huffaz & scholarly faculty</p>
                    </Link>
                    <Link to="/for-parents" className="dropdown-item">
                      <strong style={{ color: 'var(--primary)' }}>For Parents & Families</strong>
                      <p className="dropdown-item-desc">Safeguarding, progress monitoring & flexible timings</p>
                    </Link>
                  </div>
                )}
              </li>

              {/* Degree Programs / Programs Dropdown */}
              <li 
                style={{ position: 'relative' }}
                onMouseEnter={() => setProgramsDropdownOpen(true)}
                onMouseLeave={() => setProgramsDropdownOpen(false)}
              >
                <Link to="/programs" className={`nav-link ${isActive('/programs') ? 'active' : ''}`}>
                  <span>Programs</span>
                  <IconChevronDown size={11} color="currentColor" style={{ transition: 'transform 0.25s ease', transform: programsDropdownOpen ? 'rotate(180deg)' : 'none' }} />
                </Link>

                {programsDropdownOpen && (
                  <div className="dropdown-menu animate-dropdown-fade" style={{ width: '310px' }}>
                    <Link to="/programs/nuurul-bayaan" className="dropdown-item">
                      <strong style={{ color: 'var(--primary)' }}>Nuurul Bayaan</strong>
                      <p className="dropdown-item-desc">Foundation in Qur'anic reading & pronunciation</p>
                    </Link>
                    <Link to="/programs/quran-recitation" className="dropdown-item">
                      <strong style={{ color: 'var(--primary)' }}>Qur'an Recitation with Tajweed</strong>
                      <p className="dropdown-item-desc">Verse-by-verse fluency & applied rules</p>
                    </Link>
                    <Link to="/programs/hifdh" className="dropdown-item">
                      <strong style={{ color: 'var(--primary)' }}>Qur'an Memorization (Hifdh)</strong>
                      <p className="dropdown-item-desc">Structured 3-Cycle method with Haafidh mentor</p>
                    </Link>
                    <Link to="/programs/islamic-studies" className="dropdown-item">
                      <strong style={{ color: 'var(--primary)' }}>Fundamentals of Islamic Studies</strong>
                      <p className="dropdown-item-desc">Age-appropriate tracks (Ages 5–10, 11–15, 16–20)</p>
                    </Link>
                    <Link to="/programs/advanced-islamic-studies" className="dropdown-item">
                      <strong style={{ color: 'var(--primary)' }}>Advanced Islamic Studies</strong>
                      <p className="dropdown-item-desc">Classical Islamic sciences & Usul</p>
                    </Link>
                    <Link to="/programs/arabic-adhkaar" className="dropdown-item">
                      <strong style={{ color: 'var(--primary)' }}>Arabic & Adhkaar</strong>
                      <p className="dropdown-item-desc">Arabic for English speakers & daily Duas</p>
                    </Link>
                  </div>
                )}
              </li>

              {/* Courses / Qur'an Dropdown */}
              <li 
                style={{ position: 'relative' }}
                onMouseEnter={() => setQuranDropdownOpen(true)}
                onMouseLeave={() => setQuranDropdownOpen(false)}
              >
                <Link to="/programs/quran-recitation" className={`nav-link ${location.pathname.startsWith('/programs/quran') ? 'active' : ''}`}>
                  <span>Qur'an & Tajweed</span>
                  <IconChevronDown size={11} color="currentColor" style={{ transition: 'transform 0.25s ease', transform: quranDropdownOpen ? 'rotate(180deg)' : 'none' }} />
                </Link>

                {quranDropdownOpen && (
                  <div className="dropdown-menu animate-dropdown-fade">
                    <Link to="/programs/nuurul-bayaan" className="dropdown-item">
                      <strong style={{ color: 'var(--primary)' }}>Nuurul Bayaan (Beginners)</strong>
                      <p className="dropdown-item-desc">Master Arabic letters and phonetics</p>
                    </Link>
                    <Link to="/programs/quran-recitation" className="dropdown-item">
                      <strong style={{ color: 'var(--primary)' }}>Qur'an Recitation</strong>
                      <p className="dropdown-item-desc">Applied Makharij and Tajweed rules</p>
                    </Link>
                    <Link to="/programs/hifdh" className="dropdown-item">
                      <strong style={{ color: 'var(--primary)' }}>Hifdh Memorization</strong>
                      <p className="dropdown-item-desc">3-Cycle systematic retention system</p>
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link to="/programs/islamic-studies" className={`nav-link ${location.pathname === '/programs/islamic-studies' ? 'active' : ''}`}>
                  <span>Islamic Studies</span>
                </Link>
              </li>

              <li>
                <Link to="/how-it-works" className={`nav-link ${isActive('/how-it-works') ? 'active' : ''}`}>
                  <span>How It Works</span>
                </Link>
              </li>

              <li>
                <Link to="/for-parents" className={`nav-link ${isActive('/for-parents') ? 'active' : ''}`}>
                  <span>For Parents</span>
                </Link>
              </li>

              <li>
                <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Action Section: Golden CTA Button */}
          <div className="desktop-cta" style={{ display: 'none', alignItems: 'center' }}>
            <Link 
              to="/enroll" 
              className="navbar-cta-btn"
            >
              <span>Enroll Now</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              border: '1px solid var(--border-medium)',
              background: 'transparent',
              color: 'var(--primary)',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}>
        <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-light)' }}>
            <Logo size="small" />
            <button 
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About Institute</Link>
            <Link to="/programs" className={`nav-link ${isActive('/programs') ? 'active' : ''}`}>All Programs</Link>
            
            {/* Sub programs */}
            <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', borderLeft: '2px solid var(--accent-gold-soft)', margin: '0.25rem 0' }}>
              <Link to="/programs/nuurul-bayaan" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', padding: '0.3rem 0' }}>• Nuurul Bayaan (Beginners)</Link>
              <Link to="/programs/quran-recitation" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', padding: '0.3rem 0' }}>• Qur'an Recitation & Tajweed</Link>
              <Link to="/programs/hifdh" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', padding: '0.3rem 0' }}>• Qur'an Memorization (Hifdh)</Link>
              <Link to="/programs/islamic-studies" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', padding: '0.3rem 0' }}>• Islamic Studies (Ages 5-20)</Link>
              <Link to="/programs/arabic-adhkaar" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', padding: '0.3rem 0' }}>• Arabic & Adhkaar</Link>
            </div>

            <Link to="/how-it-works" className={`nav-link ${isActive('/how-it-works') ? 'active' : ''}`}>How It Works</Link>
            <Link to="/for-parents" className={`nav-link ${isActive('/for-parents') ? 'active' : ''}`}>For Parents</Link>
            <Link to="/teachers" className={`nav-link ${isActive('/teachers') ? 'active' : ''}`}>Meet Our Teachers</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact Us</Link>
            <Link to="/faqs" className={`nav-link ${isActive('/faqs') ? 'active' : ''}`}>FAQs</Link>
            <Link to="/privacy-policy" className={`nav-link ${isActive('/privacy-policy') ? 'active' : ''}`}>Privacy Policy</Link>
            <Link to="/terms-and-conditions" className={`nav-link ${isActive('/terms-and-conditions') ? 'active' : ''}`}>Terms & Conditions</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link to="/enroll" className="btn btn-gold btn-lg" style={{ width: '100%', background: 'linear-gradient(135deg, #D4A347, #BA8E35)', color: '#FFFFFF' }}>
              Enroll Now
            </Link>
            <a 
              href={contactData.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline" 
              style={{ width: '100%', borderColor: '#25D366', color: '#128C7E' }}
            >
              <IconWhatsApp size={18} color="#25D366" />
              Chat on WhatsApp
            </a>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <Link to="/privacy-policy" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-and-conditions" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms & Conditions</Link>
          </div>
        </div>
      </div>

      <style>{`
        /* Top Islamic Geometric Pattern Ribbon (Clean Pure Decorative Band) */
        .top-islamic-ribbon {
          height: 52px;
          width: 100%;
          background-color: #C5A869;
          background-image: 
            url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L24.5 9.5L34 5L30 15L40 20L30 25L34 35L24.5 30.5L20 40L15.5 30.5L6 35L10 25L0 20L10 15L6 5L15.5 9.5L20 0z' fill='%23FFFFFF' fill-opacity='0.14' fill-rule='evenodd'/%3E%3Cpath d='M20 6L23 13L30 10L27 17L34 20L27 23L30 30L23 27L20 34L17 27L10 30L13 23L6 20L13 17L10 10L17 13L20 6z' fill='%238E6A1B' fill-opacity='0.22' fill-rule='evenodd'/%3E%3C/svg%3E"),
            linear-gradient(90deg, #D4A347 0%, #C5A869 50%, #BA8E35 100%);
          background-size: 32px 32px, 100% 100%;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          position: relative;
          z-index: 998;
        }

        /* Floating Pill Island Navbar Wrapper */
        .navbar-floating-wrapper {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          padding: 0 1.25rem;
          margin-top: -30px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .navbar-floating-wrapper.is-sticky {
          padding-top: 0.4rem;
        }

        .navbar-pill {
          max-width: 1280px;
          margin: 0 auto;
          background: #FAF7F2;
          border: 1px solid rgba(197, 168, 105, 0.45);
          border-radius: 18px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.16), 0 2px 6px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.55rem 1.4rem;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .navbar-floating-wrapper.is-sticky .navbar-pill {
          background: rgba(250, 247, 242, 0.98);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
          border-color: rgba(197, 168, 105, 0.65);
        }

        .navbar-logo-box {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-right: 0.5rem;
        }

        .nav-link {
          font-size: 0.925rem;
          font-weight: 600;
          color: #2D3748;
          padding: 0.45rem 0.75rem;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          position: relative;
          transition: all 0.25s ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 60%;
          height: 2px;
          background: var(--accent-gold);
          transition: transform 0.25s ease;
          border-radius: 2px;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .nav-link:hover::after, .nav-link.active::after {
          transform: translateX(-50%) scaleX(1);
        }

        .nav-link.active {
          color: var(--primary);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #FFFFFF;
          min-width: 275px;
          border-radius: 14px;
          box-shadow: 0 15px 35px rgba(3, 17, 34, 0.16);
          border: 1px solid rgba(197, 168, 105, 0.35);
          padding: 0.75rem;
          z-index: 110;
        }

        .animate-dropdown-fade {
          animation: dropFade 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes dropFade {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .dropdown-item {
          display: block;
          padding: 0.65rem 0.85rem;
          border-radius: 8px;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .dropdown-item:hover {
          background: var(--primary-ultralight);
          transform: translateX(3px);
        }

        /* Navbar CTA Button with shimmer glow */
        .navbar-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          padding: 0.55rem 1.45rem;
          font-weight: 700;
          font-size: 0.9rem;
          color: #FFFFFF !important;
          background: linear-gradient(135deg, #D4A347 0%, #BA8E35 100%);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 4px 14px rgba(197, 168, 105, 0.45);
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .navbar-cta-btn::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(60deg, transparent, rgba(255, 255, 255, 0.35), transparent);
          transform: rotate(30deg) translateY(-100%);
          transition: transform 0.6s ease;
        }

        .navbar-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 7px 20px rgba(197, 168, 105, 0.6);
        }

        .navbar-cta-btn:hover::before {
          transform: rotate(30deg) translateY(100%);
        }

        .nav-icon-link {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          transition: all 0.2s ease;
          background: rgba(0, 93, 184, 0.04);
        }

        .nav-icon-link:hover {
          background: var(--primary-ultralight);
          color: var(--primary);
          transform: scale(1.08);
        }

        .animate-navbar-entrance {
          animation: navEntrance 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes navEntrance {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 1140px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-toggle-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
