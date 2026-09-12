import React from 'react';
import { Link } from 'react-router-dom';
import { contactData } from '../data/contactData';

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '5rem 0 4rem 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            ✦ Legal & Data Protection ✦
          </span>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '1.1rem' }}>
            Last Updated: September 2026 • Al-Irshaad Islamic Institute
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="card-premium" style={{ padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
            
            <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
              1. Introduction & Commitment to Trust (Amanah)
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              At <strong>Al-Irshaad Islamic Institute</strong>, we treat the personal information and educational records of our students, parents, and website visitors as a sacred trust (<em>Amanah</em>). This Privacy Policy explains how we collect, use, protect, and handle your personal information across our online learning platform.
            </p>

            <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
              2. Information We Collect
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
              We collect information that you provide directly to us when submitting an enrollment application, requesting a placement assessment, or contacting our admissions office:
            </p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
              <li><strong>Student & Guardian Information:</strong> Full name, date of birth, gender, parent/guardian details (for minors), country of residence, city, and timezone.</li>
              <li><strong>Contact Coordinates:</strong> WhatsApp telephone number, email address, and preferred messaging channels.</li>
              <li><strong>Educational Background:</strong> Prior Arabic reading background, Qur'an recitation history, previous Islamic studies level, and personal learning objectives.</li>
              <li><strong>Class Records:</strong> Attendance logs, assessment notes, revision scores, and teacher progress evaluations.</li>
            </ul>

            <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
              3. How We Use Your Information
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
              Your information is used strictly to provide quality, personalized Islamic educational services:
            </p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
              <li>Scheduling introductory placement assessments and regular live class sessions.</li>
              <li>Pairing students with the most appropriate teachers (e.g., matching female students with Ustadhas or children with specialized youth educators).</li>
              <li>Generating monthly academic and memorization progress reports for parents.</li>
              <li>Communicating important institutional notices, schedule updates, or academic milestones.</li>
            </ul>

            <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
              4. Child Safety & Online Privacy
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Protecting young learners is paramount. All interactions involving minor students are conducted in a safe, monitored online environment. We do not share children's personal data with third parties for marketing purposes, and parents maintain full visibility into classroom sessions and teacher communications.
            </p>

            <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
              5. Data Security & Storage
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              We implement industry-standard encryption, secure server storage, and restricted access protocols to protect your personal data from unauthorized access, alteration, or disclosure.
            </p>

            <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
              6. Third-Party Platforms
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Our classes utilize recognized educational video platforms (such as Zoom or Google Meet) and secure messaging (such as WhatsApp for admissions coordination). We encourage you to review the privacy policies of these third-party services.
            </p>

            <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
              7. Contact Our Data Coordinator
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              If you have any questions about this Privacy Policy or wish to review, update, or request deletion of your information, please contact our administrative desk:
            </p>

            <div style={{ padding: '1.5rem', background: 'var(--bg-cream)', borderRadius: '12px', borderLeft: '4px solid var(--accent-gold)' }}>
              <strong>AL-IRSHAAD ISLAMIC INSTITUTE</strong><br />
              Direct Phone / WhatsApp: <a href={`tel:${contactData.phone}`} style={{ color: 'var(--primary)', fontWeight: 700 }}>{contactData.phone}</a><br />
              Email: <span style={{ color: 'var(--primary)' }}>{contactData.email}</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
