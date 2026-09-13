import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HadithRibbon from '../components/common/HadithRibbon';
import { pricingData } from '../data/pricingData';
import { contactData } from '../data/contactData';
import { 
  IconCheck, 
  IconWhatsApp, 
  IconArrowRight, 
  IconShield, 
  IconClock, 
  IconGlobe, 
  IconUsers, 
  IconGraduationCap, 
  IconSparkle,
  IconChevronDown
} from '../components/common/Icons';

export default function PricingPage() {
  const [currency, setCurrency] = useState('USD');
  const [openFaq, setOpenFaq] = useState(null);

  // Conversion multipliers approx for global transparency
  const currencyRates = {
    USD: { symbol: '$', rate: 1, label: 'USD ($)' },
    GBP: { symbol: '£', rate: 0.78, label: 'GBP (£)' },
    EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
    CAD: { symbol: 'CA$', rate: 1.35, label: 'CAD ($)' },
    NGN: { symbol: '₦', rate: 1450, label: 'NGN (₦)' }
  };

  const formatPrice = (usdAmount) => {
    const rateObj = currencyRates[currency] || currencyRates.USD;
    const converted = Math.round(usdAmount * rateObj.rate);
    if (currency === 'NGN') {
      return `${rateObj.symbol}${converted.toLocaleString()}`;
    }
    return `${rateObj.symbol}${converted}`;
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: '#FAF7F2', minHeight: '100vh', color: '#1E293B' }}>
      
      {/* 1. Header Banner */}
      <section style={{
        background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)',
        color: '#FFFFFF',
        padding: '4.5rem 0 3.5rem 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle decorative glow */}
        <div style={{
          position: 'absolute',
          top: '-30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(197, 168, 105, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(197, 168, 105, 0.18)',
            border: '1px solid rgba(197, 168, 105, 0.4)',
            padding: '0.4rem 1.1rem',
            borderRadius: '9999px',
            color: 'var(--accent-gold-light)',
            fontSize: '0.84rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '1rem'
          }}>
            <IconSparkle size={14} color="#E6CA85" />
            <span>{pricingData.hero.subtitle}</span>
          </div>

          <h1 style={{
            color: '#FFFFFF',
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
            maxWidth: '850px',
            margin: '0 auto 1rem auto',
            lineHeight: 1.2
          }}>
            {pricingData.hero.title}
          </h1>

          <p style={{
            color: '#CBD5E1',
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            maxWidth: '720px',
            margin: '0 auto 1.5rem auto',
            lineHeight: 1.6
          }}>
            {pricingData.hero.description}
          </p>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            padding: '0.5rem 1.25rem',
            borderRadius: '12px',
            fontSize: '0.88rem',
            color: '#FFFFFF'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            <span>{pricingData.hero.freeTrialBadge}</span>
          </div>
        </div>
      </section>

      <HadithRibbon variant="compact" />

      {/* 2. Main Content & Pricing Plans */}
      <div className="container" style={{ padding: '3.5rem 1.5rem 5rem 1.5rem' }}>
        
        {/* Currency Switcher Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '3rem'
        }}>
          <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#031122' }}>
            Select Currency:
          </span>
          <div style={{
            display: 'inline-flex',
            background: '#FFFFFF',
            padding: '0.3rem',
            borderRadius: '12px',
            border: '1px solid rgba(197, 168, 105, 0.4)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}>
            {Object.keys(currencyRates).map((currKey) => (
              <button
                key={currKey}
                type="button"
                onClick={() => setCurrency(currKey)}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  background: currency === currKey ? 'linear-gradient(135deg, #005DB8 0%, #071C34 100%)' : 'transparent',
                  color: currency === currKey ? '#FFFFFF' : '#475569',
                  transition: 'all 0.2s ease'
                }}
              >
                {currencyRates[currKey].label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '2rem',
          alignItems: 'stretch',
          marginBottom: '4rem'
        }}>
          {pricingData.plans.map((plan) => (
            <div
              key={plan.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: plan.popular ? '2.5px solid #C5A869' : '1px solid rgba(197, 168, 105, 0.35)',
                boxShadow: plan.popular ? '0 12px 35px rgba(197, 168, 105, 0.25)' : '0 6px 20px rgba(3, 17, 34, 0.06)',
                padding: '2.25rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transform: plan.popular ? 'scale(1.02)' : 'none',
                transition: 'transform 0.25s ease'
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #D4A347 0%, #BA8E35 100%)',
                  color: '#FFFFFF',
                  fontWeight: '800',
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  padding: '0.35rem 1.1rem',
                  borderRadius: '9999px',
                  boxShadow: '0 4px 12px rgba(197, 168, 105, 0.4)'
                }}>
                  ★ Most Enrolled Plan
                </div>
              )}

              {/* Card Header */}
              <div style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
                <span style={{
                  display: 'inline-block',
                  background: plan.popular ? 'rgba(0, 93, 184, 0.08)' : '#F1F5F9',
                  color: plan.popular ? '#005DB8' : '#475569',
                  fontWeight: '700',
                  fontSize: '0.78rem',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '6px',
                  marginBottom: '0.65rem'
                }}>
                  {plan.badge}
                </span>
                <h3 style={{ fontSize: '1.35rem', color: '#031122', margin: '0 0 0.35rem 0', fontWeight: '800' }}>
                  {plan.title}
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.86rem', margin: 0 }}>
                  {plan.subtitle}
                </p>
              </div>

              {/* Price Box */}
              <div style={{
                background: '#FAF8F5',
                borderRadius: '14px',
                padding: '1.25rem',
                textAlign: 'center',
                marginBottom: '1.5rem',
                border: '1px solid rgba(197, 168, 105, 0.2)'
              }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#031122', lineHeight: 1 }}>
                  {formatPrice(plan.priceUsd)}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '0.35rem' }}>
                  {plan.frequency}
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginTop: '0.75rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px dashed rgba(197, 168, 105, 0.3)',
                  fontSize: '0.82rem',
                  color: '#005DB8',
                  fontWeight: '700'
                }}>
                  <span>{plan.daysPerWeek}</span>
                  <span>•</span>
                  <span>{plan.totalSessions}</span>
                </div>
              </div>

              {/* Suitable Tracks */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: '#475569', letterSpacing: '0.05em' }}>
                  Recommended Courses:
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.45rem' }}>
                  {plan.suitableFor.map((track, i) => (
                    <div key={i} style={{ fontSize: '0.84rem', color: '#031122', fontWeight: '600' }}>
                      • {track}
                    </div>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div style={{ marginBottom: '2rem', flexGrow: 1 }}>
                <span style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: '#475569', letterSpacing: '0.05em' }}>
                  What is included:
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0.65rem 0 0 0', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {plan.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#334155' }}>
                      <span style={{ color: '#B8860B', flexShrink: 0, marginTop: '2px' }}>
                        <IconCheck size={16} color="#B8860B" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link
                to={plan.ctaLink}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.9rem 1.25rem',
                  borderRadius: '12px',
                  background: plan.popular 
                    ? 'linear-gradient(135deg, #D4A347 0%, #BA8E35 100%)' 
                    : 'linear-gradient(135deg, #031122 0%, #005DB8 100%)',
                  color: '#FFFFFF',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  boxShadow: plan.popular 
                    ? '0 4px 15px rgba(197, 168, 105, 0.4)' 
                    : '0 4px 15px rgba(0, 93, 184, 0.25)',
                  transition: 'transform 0.2s ease'
                }}
              >
                <span>{plan.ctaText}</span>
                <IconArrowRight size={16} color="#FFFFFF" />
              </Link>
            </div>
          ))}
        </div>

        {/* 3. Family & Sibling Discounts Card */}
        <div style={{
          background: 'linear-gradient(135deg, #031122 0%, #071C34 60%, #005DB8 100%)',
          color: '#FFFFFF',
          borderRadius: '20px',
          padding: '2.5rem 2rem',
          marginBottom: '4rem',
          boxShadow: '0 12px 35px rgba(3, 17, 34, 0.15)',
          border: '1.5px solid rgba(197, 168, 105, 0.4)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <span style={{
                display: 'inline-block',
                background: 'rgba(197, 168, 105, 0.2)',
                border: '1px solid rgba(197, 168, 105, 0.4)',
                color: 'var(--accent-gold-light)',
                fontSize: '0.78rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                padding: '0.3rem 0.85rem',
                borderRadius: '9999px',
                marginBottom: '0.75rem'
              }}>
                Household Packages
              </span>
              <h2 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: '1.75rem', margin: '0 0 0.5rem 0' }}>
                {pricingData.familyDiscount.title}
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
                {pricingData.familyDiscount.description}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {pricingData.familyDiscount.terms.map((term, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', background: 'rgba(255, 255, 255, 0.08)', padding: '0.75rem 1rem', borderRadius: '10px' }}>
                  <IconCheck size={18} color="#C5A869" />
                  <span style={{ fontSize: '0.92rem', color: '#FFFFFF', fontWeight: '600' }}>{term}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Trust Guarantees */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
            <span className="section-subtitle-badge">
              Institute Commitments
            </span>
            <h2 style={{ fontSize: '1.85rem', color: '#031122', fontFamily: 'var(--font-serif)', margin: 0 }}>
              The Al-Irshaad Tuition Guarantee
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '1.5rem'
          }}>
            {pricingData.guarantees.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(197, 168, 105, 0.3)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(0, 93, 184, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#005DB8',
                  marginBottom: '0.85rem'
                }}>
                  <IconShield size={20} color="#005DB8" />
                </div>
                <h3 style={{ fontSize: '1.05rem', color: '#031122', fontWeight: '700', margin: '0 0 0.35rem 0' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Tuition & Payment FAQs */}
        <div style={{ maxWidth: '820px', margin: '0 auto 4rem auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-subtitle-badge">
              Frequently Asked Questions
            </span>
            <h2 style={{ fontSize: '1.75rem', color: '#031122', fontFamily: 'var(--font-serif)', margin: 0 }}>
              Common Questions About Fees & Enrollment
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {pricingData.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    border: '1px solid rgba(197, 168, 105, 0.3)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    style={{
                      width: '100%',
                      padding: '1.15rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span style={{ fontSize: '0.98rem', fontWeight: '700', color: '#031122' }}>
                      {faq.q}
                    </span>
                    <IconChevronDown
                      size={16}
                      color="#005DB8"
                      style={{
                        transition: 'transform 0.2s ease',
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        flexShrink: 0,
                        marginLeft: '0.5rem'
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 1.25rem 1.25rem 1.25rem', color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, borderTop: '1px solid #F1F5F9', paddingTop: '0.75rem' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. Quick Admissions WhatsApp CTA */}
        <div style={{
          background: '#FAF8F5',
          border: '2px dashed rgba(197, 168, 105, 0.5)',
          borderRadius: '20px',
          padding: '2.5rem 1.5rem',
          textAlign: 'center',
          maxWidth: '750px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontSize: '1.35rem', color: '#031122', fontWeight: '800', margin: '0 0 0.5rem 0' }}>
            Need Custom Timings or Special Course Arrangements?
          </h3>
          <p style={{ color: '#64748B', fontSize: '0.92rem', maxWidth: '550px', margin: '0 auto 1.5rem auto' }}>
            Speak directly with our Admissions Office for family package discounts, flexible time slot adjustments, and fee verification.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.85rem' }}>
            <Link
              to="/enroll"
              className="btn btn-gold btn-lg"
              style={{ padding: '0.75rem 1.6rem', fontSize: '0.95rem' }}
            >
              Start Free Assessment Class
            </Link>
            <a
              href={contactData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(37, 211, 102, 0.1)',
                color: '#128C7E',
                border: '1.5px solid rgba(37, 211, 102, 0.4)',
                borderRadius: '10px',
                padding: '0.75rem 1.35rem',
                fontWeight: '700',
                fontSize: '0.92rem',
                textDecoration: 'none'
              }}
            >
              <IconWhatsApp size={18} color="#25D366" />
              <span>Admissions WhatsApp ({contactData.phone})</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
