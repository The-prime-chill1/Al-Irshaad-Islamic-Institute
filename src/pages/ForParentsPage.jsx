import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';
import CtaBannerSection from '../components/sections/CtaBannerSection';
import TestimonialCard from '../components/cards/TestimonialCard';
import HadithRibbon from '../components/common/HadithRibbon';
import { IconCheck } from '../components/common/Icons';
import { testimonialsData } from '../data/testimonialsData';
import { contactData } from '../data/contactData';
import { images } from '../data/imageAssets';

export default function ForParentsPage() {
  const parentPillars = [
    {
      title: "Safe & Monitored Online Learning",
      desc: "All classes occur on secure, parent-accessible video sessions. You are always welcome to observe lessons and engage with teachers."
    },
    {
      title: "Age-Appropriate Pedagogy",
      desc: "Our instructors use gentle positive reinforcement, engaging visuals, and joyful pacing designed specifically for young minds."
    },
    {
      title: "Holistic Character & Tarbiyah",
      desc: "We focus on real character building — teaching respect for parents, honesty, humility, and genuine love for Allah and His Messenger ﷺ."
    },
    {
      title: "Monthly Progress Reports",
      desc: "Receive regular structured feedback on your child's memorization retention, Tajweed accuracy, attendance, and weekly milestones."
    },
    {
      title: "Vetted & Knowledgeable Instructors",
      desc: "Our teachers are thoroughly vetted for both Islamic scholarly qualifications and compassionate child-friendly communication."
    },
    {
      title: "Flexible After-School & Weekend Slots",
      desc: "Easily schedule classes around school hours, homework routines, and weekend family commitments in any global timezone."
    }
  ];

  return (
    <div>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '5.5rem 0 4.5rem 0', textAlign: 'center', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            ✦ Parent & Family Portal ✦
          </span>
          <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2.2rem', color: 'var(--accent-gold-light)', marginBottom: '0.5rem', direction: 'rtl' }}>
            رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ
          </div>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            Give Your Child a Stronger Islamic Foundation
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '780px', margin: '0 auto 2rem auto', fontSize: '1.15rem', lineHeight: '1.7' }}>
            Partner with dedicated, gentle Islamic educators who nurture your child's Qur'anic recitation, love for worship, and noble prophetic character from home.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/enroll" className="btn btn-gold btn-lg">
              Enroll Your Child Today
            </Link>
            <a 
              href={contactData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              Chat with Parent Coordinator
            </a>
          </div>
        </div>
      </section>

      {/* Sacred Hadith Ribbon */}
      <HadithRibbon variant="compact" />

      {/* Pillars Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div className="container">
          <SectionHeader 
            badge="Parent Commitments"
            title="Our Promises to Every Parent"
            description="We know how deeply you care about your child's spiritual education. Here is how we ensure peace of mind for your family."
          />

          <div className="grid-3" style={{ marginBottom: '4.5rem' }}>
            {parentPillars.map((p, idx) => (
              <div key={idx} className="card-premium" style={{ padding: '2.25rem 2rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--primary-ultralight)', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', border: '1px solid rgba(0, 93, 184, 0.15)' }}>
                  <IconCheck size={20} color="var(--primary-dark)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', marginBottom: '0.65rem', fontWeight: 700 }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.65', margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Parent Testimonial Spotlight */}
          <div style={{ background: 'var(--bg-cream)', borderRadius: '24px', border: '1px solid var(--border-medium)', padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
              <span className="badge-gold">Parent Reflections</span>
              <h3 style={{ fontSize: '1.85rem', color: 'var(--primary-dark)', marginTop: '0.75rem', fontWeight: 700 }}>
                Loved by Families in Nigeria & Across the Diaspora
              </h3>
            </div>

            <div className="grid-3">
              {(testimonialsData.testimonials || []).slice(0, 3).map((t, idx) => (
                <TestimonialCard key={t.id || idx} testimonial={t} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CtaBannerSection 
        badge="Start Your Child's Journey"
        title="Schedule Your Child's Assessment Session"
        subtitle="Experience our gentle teaching style firsthand with no obligation."
      />
    </div>
  );
}
