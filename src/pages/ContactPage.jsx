import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';
import HadithRibbon from '../components/common/HadithRibbon';
import { contactData } from '../data/contactData';

export default function ContactPage() {
  const [msgSent, setMsgSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Program Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsgSent(true);
  };

  return (
    <div>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '5rem 0 4rem 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            ✦ Connect With Us ✦
          </span>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            Contact Al-Irshaad Islamic Institute
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '1.15rem' }}>
            We are here to assist you with admissions, curriculum inquiries, placement tests, and flexible scheduling.
          </p>
        </div>
      </section>

      {/* Sacred Hadith Ribbon */}
      <HadithRibbon variant="compact" />

      {/* Main Grid: Contact Info & Interactive Form */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem' }}>
            
            {/* Left: Institute Contact Coordinates */}
            <div>
              <span className="badge-emerald" style={{ marginBottom: '1rem' }}>Get in Touch</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                We Welcome Your Inquiries
              </h2>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
                Reach out to our academic admissions team via phone, WhatsApp, or email. We respond promptly to prospective students and parents from Nigeria and across the international diaspora.
              </p>

              {/* Info Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                
                {/* Phone & WhatsApp Card */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem', background: 'var(--bg-card)', borderRadius: '14px', border: '1px solid var(--border-medium)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(37, 211, 102, 0.15)', color: '#128C7E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--primary)', fontSize: '1rem', marginBottom: '0.2rem' }}>Direct Line & WhatsApp</strong>
                    <a href={`tel:${contactData.phone}`} style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.95rem', fontWeight: 600 }}>{contactData.phone}</a>
                    <a href={contactData.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: '#128C7E', fontSize: '0.85rem', fontWeight: 700, marginTop: '0.25rem', display: 'inline-block' }}>
                      Open WhatsApp Chat →
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem', background: 'var(--bg-card)', borderRadius: '14px', border: '1px solid var(--border-medium)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--primary-ultralight)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--primary)', fontSize: '1rem', marginBottom: '0.2rem' }}>Admissions Office Email</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{contactData.emailAdmissions}</span>
                  </div>
                </div>

                {/* Location & Global Reach */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem', background: 'var(--bg-card)', borderRadius: '14px', border: '1px solid var(--border-medium)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--primary-ultralight)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--primary)', fontSize: '1rem', marginBottom: '0.2rem' }}>Institute Operations</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{contactData.baseLocation}</span>
                  </div>
                </div>

                {/* Hours */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem', background: 'var(--bg-card)', borderRadius: '14px', border: '1px solid var(--border-medium)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--primary-ultralight)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--primary)', fontSize: '1rem', marginBottom: '0.2rem' }}>Admissions Desk Hours</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{contactData.businessHours}</span>
                  </div>
                </div>

              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/enroll" className="btn btn-gold btn-sm">
                  Apply for Admission
                </Link>
                <Link to="/faqs" className="btn btn-outline btn-sm">
                  Read FAQs
                </Link>
              </div>

            </div>

            {/* Right: Interactive Message Form */}
            <div>
              <div 
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: '24px',
                  border: '1px solid var(--border-medium)',
                  boxShadow: 'var(--shadow-md)',
                  padding: 'clamp(2rem, 4vw, 3rem)'
                }}
              >
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  Send an Inquiry
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                  Have questions about class schedules or courses? Leave a message below.
                </p>

                {!msgSent ? (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        Your Full Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Amina Bello"
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-medium)', background: 'var(--bg-ivory)' }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. amina@example.com"
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-medium)', background: 'var(--bg-ivory)' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                          Phone / WhatsApp *
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +234 903 516 0069"
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-medium)', background: 'var(--bg-ivory)' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        Subject / Program of Interest
                      </label>
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-medium)', background: 'var(--bg-ivory)' }}
                      >
                        <option value="General Program Inquiry">General Program Inquiry</option>
                        <option value="Nuurul Bayaan (Beginners)">Nuurul Bayaan (Beginners)</option>
                        <option value="Qur'an Recitation with Tajweed">Qur'an Recitation with Tajweed</option>
                        <option value="Qur'an Memorization (Hifdh)">Qur'an Memorization (Hifdh)</option>
                        <option value="Fundamentals of Islamic Studies">Fundamentals of Islamic Studies</option>
                        <option value="Diaspora Family Inquiries">Diaspora Family Inquiries</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        Your Message / Question *
                      </label>
                      <textarea 
                        rows="4" 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please share any questions regarding age, schedules, or assessment..."
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-medium)', background: 'var(--bg-ivory)', resize: 'vertical' }}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: '0.5rem' }}>
                      Contact Al-Irshaad
                    </button>
                  </form>
                ) : (
                  <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--primary-ultralight)', color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <h4 style={{ fontSize: '1.35rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                      Message Received
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                      Thank you for contacting Al-Irshaad Islamic Institute. Our admissions office will get back to you shortly.
                    </p>
                    <a 
                      href={contactData.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold btn-sm"
                    >
                      Chat Instantly on WhatsApp
                    </a>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
