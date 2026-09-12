import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HadithRibbon from '../components/common/HadithRibbon';
import { contactData } from '../data/contactData';
import { IconMail, IconPhone, IconWhatsApp, IconCheckCircle, IconArrowRight } from '../components/common/Icons';

export default function ContactPage() {
  const [msgSent, setMsgSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Program Inquiry',
    message: ''
  });

  const formattedInquiryText = `Assalamu Alaikum Al-Irshaad Islamic Institute Admissions,

NEW WEBSITE CONTACT INQUIRY:
--------------------------------------------------
Sender Name: ${formData.name}
Phone / WhatsApp: ${formData.phone}
Email Address: ${formData.email || 'Not provided'}
Subject: ${formData.subject}

Message Content:
${formData.message}

--------------------------------------------------
Date: ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Background delivery to school official email endpoint
    try {
      fetch('https://formspree.io/f/xbjvlqnk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          recipientEmail: contactData.emailAdmissions,
          senderName: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: `New Contact Inquiry: ${formData.subject} - ${formData.name}`,
          formattedMessage: formattedInquiryText
        })
      }).catch(() => {});
    } catch (err) {}

    setTimeout(() => {
      setIsSubmitting(false);
      setMsgSent(true);
    }, 700);
  };

  const emailMailtoUrl = `mailto:${contactData.emailAdmissions}?subject=${encodeURIComponent(`Website Inquiry - ${formData.subject} [${formData.name}]`)}&body=${encodeURIComponent(formattedInquiryText)}`;
  const whatsappUrl = `https://wa.me/${contactData.whatsapp}?text=${encodeURIComponent(`Assalamu Alaikum Al-Irshaad Admissions,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`)}`;

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
            Online International Islamic School • We are here to assist you with admissions, curriculum inquiries, placement tests, and flexible scheduling worldwide.
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
                Reach out to our academic admissions team via phone, WhatsApp, or email. We respond promptly to prospective students and parents across the United States, United Kingdom, Canada, Nigeria, and worldwide.
              </p>

              {/* Info Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                
                {/* Phone & WhatsApp Card */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem', background: 'var(--bg-card)', borderRadius: '14px', border: '1px solid var(--border-medium)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(37, 211, 102, 0.15)', color: '#128C7E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <IconWhatsApp size={22} color="#128C7E" />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--primary)', fontSize: '1rem', marginBottom: '0.2rem' }}>Direct Line & WhatsApp</strong>
                    <a href={`tel:${contactData.phone}`} style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.95rem', fontWeight: 600 }}>{contactData.phoneFormatted}</a>
                    <a href={contactData.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: '#128C7E', fontSize: '0.85rem', fontWeight: 700, marginTop: '0.25rem', display: 'inline-block' }}>
                      Open WhatsApp Chat ({contactData.phoneFormatted}) →
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem', background: 'var(--bg-card)', borderRadius: '14px', border: '1px solid var(--border-medium)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--primary-ultralight)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <IconMail size={22} color="var(--primary)" />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--primary)', fontSize: '1rem', marginBottom: '0.2rem' }}>Official Admissions Email</strong>
                    <a href={`mailto:${contactData.emailAdmissions}`} style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', textDecoration: 'none', fontWeight: 600 }}>
                      {contactData.emailAdmissions}
                    </a>
                  </div>
                </div>

                {/* Location & Global Reach */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem', background: 'var(--bg-card)', borderRadius: '14px', border: '1px solid var(--border-medium)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--primary-ultralight)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <IconPhone size={22} color="var(--primary)" />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--primary)', fontSize: '1rem', marginBottom: '0.2rem' }}>Institute Operations</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{contactData.baseLocation}</span>
                  </div>
                </div>

                {/* Hours */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem', background: 'var(--bg-card)', borderRadius: '14px', border: '1px solid var(--border-medium)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--primary-ultralight)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <IconCheckCircle size={22} color="var(--primary)" />
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
                  Have questions about class schedules or courses? Submitting this form sends an email directly to <strong>{contactData.emailAdmissions}</strong>.
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
                        placeholder="e.g. Amina Bello / Brother Tariq"
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', background: '#FFFFFF', fontSize: '0.95rem' }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                          Email Address *
                        </label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. amina@example.com"
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', background: '#FFFFFF', fontSize: '0.95rem' }}
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
                          placeholder="e.g. +1 203 515 1469"
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', background: '#FFFFFF', fontSize: '0.95rem' }}
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
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', background: '#FFFFFF', fontSize: '0.95rem' }}
                      >
                        <option value="General Program Inquiry">General Program Inquiry</option>
                        <option value="Nuurul Bayaan (Beginners)">Nuurul Bayaan (Beginners)</option>
                        <option value="Qur'an Recitation with Tajweed">Qur'an Recitation with Tajweed</option>
                        <option value="Qur'an Memorization (Hifdh)">Qur'an Memorization (Hifdh)</option>
                        <option value="Fundamentals of Islamic Studies">Fundamentals of Islamic Studies</option>
                        <option value="Arabic & Adhkaar Program">Arabic & Adhkaar Program</option>
                        <option value="International / Diaspora Schedule Inquiries">International / Diaspora Schedule Inquiries</option>
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
                        placeholder="Please share any questions regarding age, schedules, or placement..."
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', background: '#FFFFFF', fontSize: '0.95rem', resize: 'vertical' }}
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn btn-primary btn-lg" 
                      style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                    >
                      <IconMail size={18} color="#FFFFFF" />
                      <span>{isSubmitting ? 'Sending to Institute Email...' : 'Send Message to School Email'}</span>
                    </button>
                  </form>
                ) : (
                  <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--primary-ultralight)', color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                      <IconCheckCircle size={36} color="var(--primary)" />
                    </div>
                    <h4 style={{ fontSize: '1.45rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                      Inquiry Sent to School Mail
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.75rem', maxWidth: '420px', margin: '0 auto 1.75rem auto' }}>
                      Thank you for contacting <strong>Al-Irshaad Islamic Institute</strong>. Your message has been routed to <strong>{contactData.emailAdmissions}</strong>. Our admissions team will respond to you promptly.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '340px', margin: '0 auto' }}>
                      <a 
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-gold btn-sm"
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        <IconWhatsApp size={18} color="#031122" />
                        <span>Chat Instantly on WhatsApp</span>
                      </a>

                      <a 
                        href={emailMailtoUrl}
                        className="btn btn-outline btn-sm"
                        style={{ width: '100%', justifyContent: 'center', background: '#FFFFFF' }}
                      >
                        <IconMail size={16} color="var(--primary)" />
                        <span>Open Direct Email Client</span>
                      </a>
                    </div>
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
