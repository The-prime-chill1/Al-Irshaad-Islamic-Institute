import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';
import CtaBannerSection from '../components/sections/CtaBannerSection';
import { programsData } from '../data/programsData';
import { contactData } from '../data/contactData';
import { IconAward, IconCheck } from '../components/common/Icons';
import { images } from '../data/imageAssets';

export default function NuurulBayaanPage() {
  const data = programsData.nuurulBayaanDetails;

  return (
    <div>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '5rem 0 4rem 0', textAlign: 'center', position: 'relative' }}>
        <div className="container">
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            {data.subtitle}
          </span>
          <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2rem', color: 'var(--accent-gold-light)', marginBottom: '0.5rem', direction: 'rtl' }}>
            نُورُ الْبَيَانِ لِتَعْلِيمِ الْقِرَاءَةِ وَتَرْتِيلِ الْقُرْآن
          </div>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            {data.title}
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '780px', margin: '0 auto 2rem auto', fontSize: '1.15rem', lineHeight: '1.7' }}>
            The premier foundational methodology for mastering Arabic letters, vowels, and phonetics from the ground up.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/enroll" className="btn btn-gold btn-lg">
              Enroll in Nuurul Bayaan
            </Link>
            <a 
              href={contactData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              Ask About Nuurul Bayaan
            </a>
          </div>
        </div>
      </section>

      {/* Program Overview & Quick Spec Bar */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div className="container">
          
          {/* Quick Details Bar */}
          <div 
            style={{
              background: 'var(--bg-card)',
              borderRadius: '20px',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-md)',
              padding: '2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
              gap: '1.5rem',
              marginBottom: '4.5rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>Duration:</span>
              <strong style={{ fontSize: '1.15rem', color: 'var(--primary)' }}>{data.details.duration}</strong>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>Class Frequency:</span>
              <strong style={{ fontSize: '1.15rem', color: 'var(--primary)' }}>{data.details.classes}</strong>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>Session Length:</span>
              <strong style={{ fontSize: '1.15rem', color: 'var(--primary)' }}>{data.details.session}</strong>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>Target Students:</span>
              <strong style={{ fontSize: '1.15rem', color: 'var(--primary)' }}>{data.details.students}</strong>
            </div>
          </div>

          {/* Description & Goal */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(2rem, 4vw, 3.5rem)', alignItems: 'center', marginBottom: '5rem' }}>
            <div>
              <span className="badge-emerald" style={{ marginBottom: '1rem' }}>Methodology Overview</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'var(--primary)', marginBottom: '1.25rem' }}>
                Why Nuurul Bayaan is the Gold Standard for Beginners
              </h2>
              
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                The <strong>Nuurul Bayaan program</strong> is our step-by-step foundation course designed for kids aged 4+ and adult beginners with no prior Arabic background. It is the perfect starting point before Qur'an recitation.
              </p>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.75rem' }}>
                Using the Nuurul Bayaan methodology, students learn to read Arabic correctly from the very basics, with a strong focus on proper pronunciation (<em>Makharij</em>) from day one.
              </p>

              <div style={{ padding: '1.5rem', background: 'var(--bg-cream)', borderRadius: '14px', borderLeft: '4px solid var(--accent-gold)' }}>
                <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                  <IconAward size={20} color="var(--accent-gold-dark)" /> Course Goal:
                </strong>
                <p style={{ color: 'var(--text-secondary)', margin: 0, fontStyle: 'italic' }}>
                  "{data.details.goal}"
                </p>
              </div>
            </div>

            {/* Program Features List */}
            <div style={{ background: 'var(--bg-card)', borderRadius: '24px', border: '1px solid var(--border-medium)', padding: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                Key Program Features
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {data.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <span style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'var(--primary-ultralight)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <IconCheck size={16} color="var(--primary)" />
                    </span>
                    <div>
                      <strong style={{ display: 'block', color: 'var(--primary)', fontSize: '0.95rem' }}>{feat.title}</strong>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{feat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What You Will Learn Grid */}
          <div>
            <SectionHeader 
              badge="Curriculum Modules"
              title="What You Will Learn in Nuurul Bayaan"
              description="A systematic six-stage learning progression taking the student step-by-step from isolated letters to fluent Qur'anic phrases."
            />

            <div className="grid-3">
              {data.whatYouWillLearn.map((item, idx) => (
                <div key={idx} className="card-premium" style={{ padding: '2rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--primary)', color: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: '1.25rem' }}>
                    0{idx + 1}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '0.65rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CtaBannerSection 
        badge="Start at the Foundation"
        title="Ready to Master Qur'anic Reading?"
        subtitle="Begin with our structured Nuurul Bayaan foundation course under patient, dedicated guidance."
      />
    </div>
  );
}
