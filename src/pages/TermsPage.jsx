import React from 'react';
import { Link } from 'react-router-dom';
import { contactData } from '../data/contactData';

export default function TermsPage() {
  return (
    <div>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '5rem 0 4rem 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            ✦ Institutional Guidelines ✦
          </span>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            Terms & Conditions
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
              1. Acceptance of Terms
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              By accessing the website of <strong>Al-Irshaad Islamic Institute</strong> or enrolling in any of our online learning courses (Nuurul Bayaan, Qur'an Recitation with Tajweed, Hifdh, Islamic Studies, or Arabic), you agree to be bound by these Terms and Conditions and our educational code of conduct.
            </p>

            <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
              2. Enrollment & Placement Assessment
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Submitting an enrollment form constitutes an application for admission. Official enrollment is confirmed upon completion of the initial placement assessment and agreement on a schedule between the student/parent and the institute.
            </p>

            <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
              3. Student Attendance & Punctuality
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
              Consistency is vital to Qur'anic mastery and spiritual discipline. Students and parents agree to:
            </p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
              <li>Join online sessions promptly at the agreed scheduled time.</li>
              <li>Provide at least 12 hours advance notice via WhatsApp or email for any unavoidable session rescheduling.</li>
              <li>Maintain an environment conducive to learning during live lessons with a reliable internet connection.</li>
            </ul>

            <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
              4. Code of Islamic Manners & Respect (Adab)
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Islamic learning is built on mutual respect and reverence for sacred knowledge. All students, parents, and faculty members are expected to interact with Islamic manners (<em>Adab</em>), modesty, and courtesy at all times.
            </p>

            <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
              5. Intellectual Property & Course Materials
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              All course materials, custom worksheets, audio guides, and curriculum outlines provided by Al-Irshaad Islamic Institute are for the personal, non-commercial educational use of enrolled students and may not be reproduced or distributed without authorization.
            </p>

            <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
              6. Certifications & Ijazah Criteria
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Course completion certificates and Ijazah Sanad certifications are granted solely upon verified scholastic merit, attendance, and successful completion of formal oral examinations administered by our senior scholars.
            </p>

            <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
              7. Inquiries & Institutional Administration
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              For clarifications regarding our academic terms or admission guidelines, please reach out to:
            </p>

            <div style={{ padding: '1.5rem', background: 'var(--bg-cream)', borderRadius: '12px', borderLeft: '4px solid var(--accent-gold)' }}>
              <strong>AL-IRSHAAD ISLAMIC INSTITUTE</strong><br />
              Direct Phone / WhatsApp: <a href={`tel:${contactData.phone}`} style={{ color: 'var(--primary)', fontWeight: 700 }}>{contactData.phone}</a><br />
              Admissions: <span style={{ color: 'var(--primary)' }}>{contactData.emailAdmissions}</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
