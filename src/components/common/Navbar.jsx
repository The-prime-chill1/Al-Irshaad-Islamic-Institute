import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { contactData } from '../../data/contactData';
import { studentDatabase } from '../../services/studentDatabase';
import { IconChevronDown, IconWhatsApp, IconArrowRight } from './Icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [quranDropdownOpen, setQuranDropdownOpen] = useState(false);
  const [adminSession, setAdminSession] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = () => {
      setAdminSession(studentDatabase.getAdminSession());
    };
    checkAdmin();
    window.addEventListener('storage', checkAdmin);
    window.addEventListener('admin-auth-changed', checkAdmin);
    return () => {
      window.removeEventListener('storage', checkAdmin);
      window.removeEventListener('admin-auth-changed', checkAdmin);
    };
  }, [location.pathname]);

  const isAdminLoggedIn = !!adminSession;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll locking when drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menus on route navigation
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
      {/* 1. Golden Islamic Geometric Pattern Top Banner */}
      <div className="top-islamic-ribbon" aria-hidden="true"></div>

      {/* 2. Floating Capsule Navbar */}
      <div className={`navbar-floating-wrapper ${isScrolled ? 'is-sticky' : ''}`}>
        <nav className="navbar-pill">
          
          {/* Logo Brand */}
          <div className="navbar-logo-box">
            <Logo size="normal" />
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <ul className="desktop-nav-list">
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
                <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                  <span>Institute</span>
                  <IconChevronDown size={11} color="currentColor" style={{ transition: 'transform 0.2s ease', transform: aboutDropdownOpen ? 'rotate(180deg)' : 'none', marginLeft: '0.2rem' }} />
                </Link>

                {aboutDropdownOpen && (
                  <div className="dropdown-menu">
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
                      <p className="dropdown-item-desc">Safeguarding, progress tracking & flexible timings</p>
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
                <Link to="/programs" className={`nav-link ${isActive('/programs') && !location.pathname.startsWith('/programs/quran') ? 'active' : ''}`}>
                  <span>Programs</span>
                  <IconChevronDown size={11} color="currentColor" style={{ transition: 'transform 0.2s ease', transform: programsDropdownOpen ? 'rotate(180deg)' : 'none', marginLeft: '0.2rem' }} />
                </Link>

                {programsDropdownOpen && (
                  <div className="dropdown-menu" style={{ width: '320px' }}>
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
                      <p className="dropdown-item-desc">Age-tailored tracks (Ages 5–10, 11–15, 16–20)</p>
                    </Link>
                    <Link to="/programs/advanced-islamic-studies" className="dropdown-item">
                      <strong style={{ color: 'var(--primary)' }}>Advanced Islamic Studies</strong>
                      <p className="dropdown-item-desc">Classical Islamic sciences & Usul al-Fiqh</p>
                    </Link>
                    <Link to="/programs/arabic-adhkaar" className="dropdown-item">
                      <strong style={{ color: 'var(--primary)' }}>Arabic & Adhkaar</strong>
                      <p className="dropdown-item-desc">Arabic for English speakers & daily Duas</p>
                    </Link>
                  </div>
                )}
              </li>

              {/* Qur'an & Tajweed Dropdown */}
              <li 
                className="nav-item-dropdown"
                onMouseEnter={() => setQuranDropdownOpen(true)}
                onMouseLeave={() => setQuranDropdownOpen(false)}
              >
                <Link to="/programs/quran-recitation" className={`nav-link ${location.pathname.startsWith('/programs/quran') || location.pathname === '/programs/nuurul-bayaan' || location.pathname === '/programs/hifdh' ? 'active' : ''}`}>
                  <span>Qur'an & Tajweed</span>
                  <IconChevronDown size={11} color="currentColor" style={{ transition: 'transform 0.2s ease', transform: quranDropdownOpen ? 'rotate(180deg)' : 'none', marginLeft: '0.2rem' }} />
                </Link>

                {quranDropdownOpen && (
                  <div className="dropdown-menu" style={{ width: '300px' }}>
                    <Link to="/programs/nuurul-bayaan" className="dropdown-item">
                      <strong style={{ color: 'var(--primary)' }}>1. Nuurul Bayaan (Beginners)</strong>
                      <p className="dropdown-item-desc">Arabic alphabet, vowels, and phonetics</p>
                    </Link>
                    <Link to="/programs/quran-recitation" className="dropdown-item">
                      <strong style={{ color: 'var(--primary)' }}>2. Qur'an Recitation</strong>
                      <p className="dropdown-item-desc">Applied Makharij and Tajweed rules</p>
                    </Link>
                    <Link to="/programs/hifdh" className="dropdown-item">
                      <strong style={{ color: 'var(--primary)' }}>3. Hifdh Memorization</strong>
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
                <Link to="/programs#pricing" className={`nav-link ${location.pathname === '/programs' && location.hash === '#pricing' ? 'active' : ''}`}>
                  <span>Tuition & Pricing</span>
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
          </div>

          {/* Desktop Right CTAs */}
          <div className="desktop-cta">
            {isAdminLoggedIn ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Link 
                  to="/admin/dashboard" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.55rem 1.15rem',
                    borderRadius: '9999px',
                    background: 'linear-gradient(135deg, #031122 0%, #071C34 100%)',
                    color: '#E6CA85',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    border: '1.5px solid rgba(197, 168, 105, 0.5)',
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                  <span>Admin Portal</span>
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    studentDatabase.adminLogout();
                    setAdminSession(null);
                    navigate('/admin/login');
                  }}
                  style={{
                    padding: '0.55rem 1rem',
                    borderRadius: '9999px',
                    background: 'rgba(220, 38, 38, 0.08)',
                    color: '#DC2626',
                    border: '1px solid rgba(220, 38, 38, 0.25)',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                to="/enroll" 
                className="navbar-cta-btn"
              >
                <span>Enroll Now</span>
              </Link>
            )}
          </div>

          {/* Mobile Clean Hamburger Button */}
          <button 
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#005DB8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} 
        onClick={() => setMobileMenuOpen(false)}
      >
        <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
          
          {/* Header */}
          <div className="drawer-header">
            <Logo size="small" />
            <button 
              type="button"
              className="drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#005DB8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div className="drawer-links-box">
            <Link to="/" className={`drawer-link ${isActive('/') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className={`drawer-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              About Institute
            </Link>

            {/* Expandable Programs */}
            <div>
              <div 
                className="drawer-link drawer-accordion-header"
                onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
              >
                <span>Academic Programs</span>
                <IconChevronDown size={14} color="currentColor" style={{ transition: 'transform 0.2s ease', transform: mobileProgramsOpen ? 'rotate(180deg)' : 'none' }} />
              </div>

              {mobileProgramsOpen && (
                <div className="drawer-sublinks-list">
                  <Link to="/programs" className="drawer-sublink" onClick={() => setMobileMenuOpen(false)}>
                    • All Programs Overview
                  </Link>
                  <Link to="/programs/nuurul-bayaan" className="drawer-sublink" onClick={() => setMobileMenuOpen(false)}>
                    • Nuurul Bayaan (Beginners)
                  </Link>
                  <Link to="/programs/quran-recitation" className="drawer-sublink" onClick={() => setMobileMenuOpen(false)}>
                    • Qur'an Recitation & Tajweed
                  </Link>
                  <Link to="/programs/hifdh" className="drawer-sublink" onClick={() => setMobileMenuOpen(false)}>
                    • Qur'an Memorization (Hifdh)
                  </Link>
                  <Link to="/programs/islamic-studies" className="drawer-sublink" onClick={() => setMobileMenuOpen(false)}>
                    • Fundamentals of Islamic Studies
                  </Link>
                  <Link to="/programs/advanced-islamic-studies" className="drawer-sublink" onClick={() => setMobileMenuOpen(false)}>
                    • Advanced Islamic Studies
                  </Link>
                  <Link to="/programs/arabic-adhkaar" className="drawer-sublink" onClick={() => setMobileMenuOpen(false)}>
                    • Arabic & Adhkaar
                  </Link>
                </div>
              )}
            </div>

            <Link to="/programs#pricing" className={`drawer-link ${location.pathname === '/programs' && location.hash === '#pricing' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              Tuition & Course Pricing
            </Link>
            <Link to="/how-it-works" className={`drawer-link ${isActive('/how-it-works') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              How Online Classes Work
            </Link>
            <Link to="/teachers" className={`drawer-link ${isActive('/teachers') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              Meet Our Teachers
            </Link>
            <Link to="/for-parents" className={`drawer-link ${isActive('/for-parents') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              For Parents & Families
            </Link>
            <Link to="/contact" className={`drawer-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              Contact Admissions
            </Link>
            <Link to="/faqs" className={`drawer-link ${isActive('/faqs') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              Frequently Asked Questions
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="drawer-cta-box">
            {isAdminLoggedIn ? (
              <>
                <Link 
                  to="/admin/dashboard" 
                  className="drawer-enroll-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ background: 'linear-gradient(135deg, #031122 0%, #071C34 100%)', color: '#E6CA85', border: '1.5px solid rgba(197, 168, 105, 0.45)' }}
                >
                  <span>Go to Admin Dashboard</span>
                  <IconArrowRight size={16} color="#E6CA85" />
                </Link>

                <button 
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    studentDatabase.adminLogout();
                    setAdminSession(null);
                    navigate('/admin/login');
                  }}
                  className="drawer-whatsapp-btn"
                  style={{ color: '#DC2626', borderColor: 'rgba(220, 38, 38, 0.3)', background: 'rgba(220, 38, 38, 0.06)', width: '100%', cursor: 'pointer' }}
                >
                  <span>Admin Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/enroll" 
                  className="drawer-enroll-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Enroll Now</span>
                  <IconArrowRight size={16} color="#FFFFFF" />
                </Link>

                <a 
                  href={contactData.whatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="drawer-whatsapp-btn"
                >
                  <IconWhatsApp size={17} color="#128C7E" />
                  <span>Admissions WhatsApp</span>
                </a>
              </>
            )}
          </div>

          {/* Contact summary */}
          <div className="drawer-footer-text">
            <p style={{ margin: '0 0 3px 0', fontWeight: 600, color: 'var(--primary)', fontSize: '0.8rem' }}>
              {contactData.email}
            </p>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.74rem' }}>
              Norwalk, Connecticut, USA • International Virtual Campus
            </p>
          </div>

        </div>
      </div>

      <style>{`
        /* Top Islamic Ribbon */
        .top-islamic-ribbon {
          height: 42px;
          width: 100%;
          background-color: #C5A869;
          background-image: 
            url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L24.5 9.5L34 5L30 15L40 20L30 25L34 35L24.5 30.5L20 40L15.5 30.5L6 35L10 25L0 20L10 15L6 5L15.5 9.5L20 0z' fill='%23FFFFFF' fill-opacity='0.16' fill-rule='evenodd'/%3E%3Cpath d='M20 6L23 13L30 10L27 17L34 20L27 23L30 30L23 27L20 34L17 27L10 30L13 23L6 20L13 17L10 10L17 13L20 6z' fill='%238E6A1B' fill-opacity='0.22' fill-rule='evenodd'/%3E%3C/svg%3E"),
            linear-gradient(90deg, #D4A347 0%, #C5A869 50%, #BA8E35 100%);
          background-size: 32px 32px, 100% 100%;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        /* Floating Capsule Navbar */
        .navbar-floating-wrapper {
          position: sticky;
          top: 8px;
          z-index: 1000;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          padding: 0 1rem;
          margin-top: -22px;
        }

        .navbar-pill {
          max-width: 1380px;
          width: 100%;
          margin: 0 auto;
          background: #FAF7F2;
          border: 1.5px solid rgba(197, 168, 105, 0.45);
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.4rem 1rem;
          box-sizing: border-box;
          transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .navbar-floating-wrapper.is-sticky .navbar-pill {
          background: rgba(250, 247, 242, 0.98);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.15);
          border-color: rgba(197, 168, 105, 0.65);
        }

        .navbar-logo-box {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        /* Desktop Nav List */
        .desktop-nav {
          display: none;
          align-items: center;
          flex-shrink: 0;
        }

        .desktop-nav-list {
          display: flex;
          align-items: center;
          gap: 0.15rem;
          list-style: none;
          margin: 0;
          padding: 0;
          flex-wrap: nowrap;
        }

        .nav-item-dropdown {
          position: relative;
        }

        .nav-link {
          font-size: 0.88rem;
          font-weight: 600;
          color: #2D3748;
          padding: 0.42rem 0.58rem;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
          position: relative;
          white-space: nowrap;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--primary);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #FFFFFF;
          min-width: 270px;
          border-radius: 14px;
          box-shadow: 0 15px 35px rgba(3, 17, 34, 0.16);
          border: 1px solid rgba(197, 168, 105, 0.35);
          padding: 0.65rem;
          z-index: 1100;
        }

        .dropdown-item {
          display: block;
          padding: 0.55rem 0.75rem;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.18s ease;
        }

        .dropdown-item:hover {
          background: var(--primary-ultralight);
        }

        .dropdown-item-desc {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin: 2px 0 0 0;
          line-height: 1.3;
        }

        /* Desktop CTA Area */
        .desktop-cta {
          display: none;
          align-items: center;
          gap: 0.55rem;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .navbar-whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.48rem 0.85rem;
          border-radius: 10px;
          background: rgba(37, 211, 102, 0.1);
          color: #128C7E;
          font-size: 0.84rem;
          font-weight: 700;
          text-decoration: none;
          border: 1px solid rgba(37, 211, 102, 0.3);
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .navbar-whatsapp-btn:hover {
          background: rgba(37, 211, 102, 0.18);
        }

        .navbar-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          padding: 0.52rem 1.3rem;
          font-weight: 700;
          font-size: 0.88rem;
          color: #FFFFFF !important;
          background: linear-gradient(135deg, #D4A347 0%, #BA8E35 100%);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 4px 14px rgba(197, 168, 105, 0.45);
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .navbar-cta-btn:hover {
          transform: translateY(-1px);
        }

        /* Clean Mobile Toggle Button */
        .mobile-toggle-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          padding: 0;
          border-radius: 8px;
          border: 1px solid rgba(197, 168, 105, 0.35);
          background: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .mobile-toggle-btn:active {
          background: #FFFFFF;
          transform: scale(0.95);
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          inset: 0;
          background: rgba(3, 17, 34, 0.65);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 9999;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
          display: flex;
          justify-content: flex-end;
        }

        .mobile-drawer.open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-drawer-content {
          width: 86%;
          max-width: 360px;
          height: 100%;
          background: #FFFFFF;
          padding: 1.25rem 1.25rem 1.5rem 1.25rem;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          transform: translateX(100%);
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: -8px 0 25px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        .mobile-drawer.open .mobile-drawer-content {
          transform: translateX(0);
        }

        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.85rem;
          border-bottom: 1px solid #E2E8F0;
        }

        .drawer-close-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #E2E8F0;
          background: #F8FAFC;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .drawer-links-box {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding: 1rem 0;
        }

        .drawer-link {
          display: block;
          padding: 0.62rem 0.75rem;
          border-radius: 8px;
          font-size: 0.94rem;
          font-weight: 600;
          color: #1E293B;
          text-decoration: none;
          transition: all 0.18s ease;
        }

        .drawer-link:hover, .drawer-link.active {
          background: var(--primary-ultralight);
          color: var(--primary);
        }

        .drawer-sublinks-list {
          padding: 0.3rem 0 0.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .drawer-sublink {
          font-size: 0.85rem;
          color: #475569;
          text-decoration: none;
          padding: 0.2rem 0;
        }

        .drawer-sublink:hover {
          color: var(--primary);
        }

        .drawer-cta-box {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          padding-top: 1rem;
          border-top: 1px solid #E2E8F0;
        }

        .drawer-enroll-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #D4A347 0%, #BA8E35 100%);
          color: #FFFFFF !important;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(197, 168, 105, 0.35);
        }

        .drawer-whatsapp-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: rgba(37, 211, 102, 0.08);
          color: #128C7E !important;
          border: 1px solid rgba(37, 211, 102, 0.35);
          font-weight: 600;
          font-size: 0.88rem;
          padding: 0.7rem 1rem;
          border-radius: 10px;
          text-decoration: none;
        }

        .drawer-footer-text {
          padding-top: 0.85rem;
          text-align: center;
        }

        /* Responsive Breakpoints */
        @media (max-width: 640px) {
          .top-islamic-ribbon {
            height: 38px;
          }
          .navbar-floating-wrapper {
            top: 6px;
            margin-top: -18px;
            padding: 0 0.65rem;
          }
          .navbar-pill {
            padding: 0.35rem 0.75rem;
            border-radius: 14px;
          }
        }

        @media (min-width: 1180px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-toggle-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
