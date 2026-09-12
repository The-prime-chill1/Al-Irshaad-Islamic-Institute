import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { contactData } from '../../data/contactData';
import { 
  IconCheck, 
  IconWhatsApp, 
  IconArrowRight, 
  IconShield, 
  IconClock, 
  IconGraduationCap, 
  IconBookOpen,
  IconSparkle,
  IconUsers,
  IconStar
} from '../common/Icons';

export default function CoursePricingCalculatorSection() {
  const [selectedCourseId, setSelectedCourseId] = useState('quran-recitation');
  const [selectedPlanId, setSelectedPlanId] = useState('standard');
  const [currency, setCurrency] = useState('USD');

  // Multi-currency exchange approximation
  const currencyRates = {
    USD: { symbol: '$', rate: 1, label: 'USD ($)' },
    GBP: { symbol: '£', rate: 0.78, label: 'GBP (£)' },
    EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
    CAD: { symbol: 'CA$', rate: 1.35, label: 'CAD ($)' },
    NGN: { symbol: '₦', rate: 1450, label: 'NGN (₦)' }
  };

  const coursesList = [
    {
      id: 'nuurul-bayaan',
      category: "Qur'an & Tajweed",
      title: 'Nuurul Bayaan',
      subtitle: 'Beginners Reading & Arabic Phonetics',
      badge: 'Beginner Level',
      level: 'Ages 4+ & Adult Beginners',
      icon: 'book',
      prices: { starter: 45, standard: 65, intensive: 95 },
      durations: { starter: '8 classes / mo', standard: '12 classes / mo', intensive: '20 classes / mo' },
      features: [
        'Step-by-step Nuurul Bayaan methodology',
        'Direct 1-on-1 articulation correction (Makharij)',
        'Letter recognition, Harakaat, Sukoon & Tanween',
        'Digital interactive reading boards & worksheets',
        'Teacher evaluation and level progression certificate'
      ]
    },
    {
      id: 'quran-recitation',
      category: "Qur'an & Tajweed",
      title: "Qur'an Recitation with Tajweed",
      subtitle: 'Verse-by-Verse Fluency & Articulation',
      badge: 'Most Popular Course',
      level: 'All Ages (Kids & Adults)',
      icon: 'star',
      prices: { starter: 48, standard: 70, intensive: 105 },
      durations: { starter: '8 classes / mo', standard: '12 classes / mo', intensive: '20 classes / mo' },
      features: [
        'Dedicated certified Haafidh / Tajweed instructor',
        'Verse-by-verse patient listening and real-time corrections',
        'Mastery of Ghunnah, Idgham, Ikhfa, Madd & Waqf rules',
        'Weekly audio recording feedback & homework tracking',
        'Official Qur\'an Tajweed Competency Certificate'
      ]
    },
    {
      id: 'hifdh',
      category: "Qur'an & Tajweed",
      title: "Qur'an Memorization (Hifdh)",
      subtitle: '3-Cycle Systematic Retention System',
      badge: 'Hifdh Mastery',
      level: 'Committed Kids, Youth & Adults',
      icon: 'grad',
      prices: { starter: 55, standard: 78, intensive: 115 },
      durations: { starter: '8 classes / mo', standard: '12 classes / mo', intensive: '20 classes / mo' },
      features: [
        '3-Cycle method: Daily Sabaq, Sabqi (recent) & Manzil (old)',
        'Daily Haafidh mentorship to prevent forgetting',
        'Theoretical Tajweed (Tuhfat al-Atfal & Al-Jazariyyah)',
        'Quarterly oral examinations & retention benchmarks',
        'Pathway toward continuous Sanad & Ijaazah certification'
      ]
    },
    {
      id: 'islamic-studies-fundamentals',
      category: 'Islamic Studies',
      title: 'Fundamentals of Islamic Studies',
      subtitle: 'Age-Tailored Tracks (Ages 5–10, 11–15, 16–20)',
      badge: 'Core Essentials',
      level: 'Kids, Teens & Adults',
      icon: 'shield',
      prices: { starter: 45, standard: 65, intensive: 95 },
      durations: { starter: '8 classes / mo', standard: '12 classes / mo', intensive: '20 classes / mo' },
      features: [
        'Authentic Fiqh of Taharah, Salah, Fasting & Daily Worship',
        'Pure Islamic Aqeedah, Tawheed & 6 Pillars of Iman',
        'Inspiring Seerah of Prophet Muhammad ﷺ & the Sahabah',
        'Daily Islamic manners (Adab), Akhlaaq & character building',
        'Graded assignments and downloadable study workbooks'
      ]
    },
    {
      id: 'advanced-islamic-studies',
      category: 'Islamic Studies',
      title: 'Advanced Islamic Studies',
      subtitle: 'Classical Sciences, Usul al-Fiqh & Hadith',
      badge: 'Scholarly Track',
      level: 'Teens & Adults (Level 3+)',
      icon: 'book',
      prices: { starter: 50, standard: 75, intensive: 110 },
      durations: { starter: '8 classes / mo', standard: '12 classes / mo', intensive: '20 classes / mo' },
      features: [
        'Deep study of Usul al-Fiqh and comparative legal maxims',
        '40 Hadith of Imam Nawawi & Hadith methodology (Mustalah)',
        'Contemporary fiqh challenges in modern societies',
        'Direct classical text reading with scholarly faculty',
        'Structured graduation diploma with academic transcript'
      ]
    },
    {
      id: 'arabic-adhkaar',
      category: 'Language & Devotion',
      title: 'Arabic for English Speakers & Adhkaar',
      subtitle: 'Conversational Arabic, Grammar & Daily Duas',
      badge: 'Practical & Applied',
      level: 'All English Speakers',
      icon: 'star',
      prices: { starter: 45, standard: 65, intensive: 95 },
      durations: { starter: '8 classes / mo', standard: '12 classes / mo', intensive: '20 classes / mo' },
      features: [
        'Practical Arabic vocabulary for Qur\'anic comprehension',
        'Foundational Sarf (morphology) and Nahw (grammar)',
        'Daily morning & evening Adhkaar memorization with meanings',
        'Duas for Salah, protection, gratitude and daily life',
        'Interactive audio flashcards & conversational practice'
      ]
    }
  ];

  const planTracks = [
    {
      id: 'starter',
      name: 'Foundation Track',
      days: '2 Days / Week',
      sessions: '8 Live 1-on-1 Sessions / Month',
      sessionLength: '30–40 Mins',
      badge: 'Light Schedule',
      desc: 'Ideal for busy schedules, school balance, or weekend students.'
    },
    {
      id: 'standard',
      name: 'Standard Track',
      days: '3 Days / Week',
      sessions: '12 Live 1-on-1 Sessions / Month',
      sessionLength: '30–45 Mins',
      badge: 'Most Popular',
      recommended: true,
      desc: 'Our premier track for consistent progress, fluency, and steady retention.'
    },
    {
      id: 'intensive',
      name: 'Intensive Track',
      days: '5 Days / Week',
      sessions: '20 Live 1-on-1 Sessions / Month',
      sessionLength: '45–60 Mins',
      badge: 'Accelerated Learning',
      desc: 'Daily immersive study for rapid mastery, Hifdh, and deep scholarship.'
    }
  ];

  // Active selections
  const currentCourse = coursesList.find(c => c.id === selectedCourseId) || coursesList[1];
  const currentPlan = planTracks.find(p => p.id === selectedPlanId) || planTracks[1];
  const rawPrice = currentCourse.prices[selectedPlanId] || 70;

  const formatPrice = (usdAmount) => {
    const rateObj = currencyRates[currency] || currencyRates.USD;
    const converted = Math.round(usdAmount * rateObj.rate);
    if (currency === 'NGN') {
      return `${rateObj.symbol}${converted.toLocaleString()}`;
    }
    return `${rateObj.symbol}${converted}`;
  };

  const calculatePerSession = (usdAmount, planId) => {
    const sessions = planId === 'starter' ? 8 : planId === 'standard' ? 12 : 20;
    const rateObj = currencyRates[currency] || currencyRates.USD;
    const convertedTotal = usdAmount * rateObj.rate;
    const perSession = (convertedTotal / sessions).toFixed(1);
    if (currency === 'NGN') {
      return `${rateObj.symbol}${Math.round(convertedTotal / sessions).toLocaleString()}`;
    }
    return `${rateObj.symbol}${perSession}`;
  };

  const whatsappInquiryText = encodeURIComponent(
    `Assalamu Alaikum! I would like to inquire about enrolling in "${currentCourse.title}" on the "${currentPlan.name}" (${currentPlan.days}). Could you assist me with the schedule?`
  );

  return (
    <section 
      id="course-pricing-calculator" 
      style={{
        backgroundColor: '#FAF7F2',
        padding: '5rem 0',
        position: 'relative',
        borderTop: '1px solid rgba(197, 168, 105, 0.25)',
        borderBottom: '1px solid rgba(197, 168, 105, 0.25)'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(0, 93, 184, 0.08)',
            border: '1px solid rgba(0, 93, 184, 0.2)',
            padding: '0.4rem 1.2rem',
            borderRadius: '9999px',
            color: '#005DB8',
            fontSize: '0.85rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '1rem'
          }}>
            <IconSparkle size={14} color="#005DB8" />
            <span>Interactive Course Pricing Calculator</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            color: '#031122',
            marginBottom: '1rem',
            lineHeight: 1.25
          }}>
            Select Your Course to View Custom Tuition & Plans
          </h2>

          <p style={{
            color: '#475569',
            fontSize: '1.08rem',
            lineHeight: 1.65
          }}>
            Every student receives personalized one-on-one instruction from certified teachers. 
            Choose your desired course below to calculate transparent monthly rates with flexible scheduling.
          </p>

          {/* Currency Switcher */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: '#FFFFFF',
            padding: '0.35rem 0.5rem',
            borderRadius: '14px',
            border: '1px solid rgba(197, 168, 105, 0.35)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
            marginTop: '1.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#031122', paddingLeft: '0.5rem' }}>
              Currency:
            </span>
            {Object.keys(currencyRates).map((currKey) => (
              <button
                key={currKey}
                type="button"
                onClick={() => setCurrency(currKey)}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9px',
                  border: 'none',
                  fontWeight: '700',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  background: currency === currKey ? 'linear-gradient(135deg, #005DB8 0%, #071C34 100%)' : 'transparent',
                  color: currency === currKey ? '#FFFFFF' : '#64748B',
                  transition: 'all 0.2s ease'
                }}
              >
                {currencyRates[currKey].label}
              </button>
            ))}
          </div>
        </div>

        {/* STEP 1: Course Selector Grid */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '1.25rem',
            borderBottom: '1px solid rgba(197, 168, 105, 0.25)',
            paddingBottom: '0.75rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{
                background: 'linear-gradient(135deg, #C5A869 0%, #9A7B38 100%)',
                color: '#FFFFFF',
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: '800'
              }}>
                1
              </span>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#031122', fontWeight: 700 }}>
                Step 1: Choose the Course
              </h3>
            </div>
            <span style={{ fontSize: '0.88rem', color: '#64748B' }}>
              Select a subject to customize your tuition
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem'
          }}>
            {coursesList.map((course) => {
              const isSelected = selectedCourseId === course.id;
              return (
                <div
                  key={course.id}
                  onClick={() => setSelectedCourseId(course.id)}
                  style={{
                    background: isSelected ? '#FFFFFF' : '#FAF9F6',
                    border: isSelected ? '2.5px solid #005DB8' : '1px solid rgba(197, 168, 105, 0.3)',
                    borderRadius: '16px',
                    padding: '1.35rem 1.25rem',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 8px 24px rgba(0, 93, 184, 0.16)' : '0 2px 8px rgba(0,0,0,0.02)',
                    transition: 'all 0.25s ease',
                    position: 'relative',
                    transform: isSelected ? 'translateY(-2px)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{
                      fontSize: '0.74rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: isSelected ? '#005DB8' : '#9A7B38',
                      background: isSelected ? 'rgba(0, 93, 184, 0.08)' : 'rgba(197, 168, 105, 0.12)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px'
                    }}>
                      {course.category}
                    </span>
                    <span style={{
                      fontSize: '0.78rem',
                      color: isSelected ? '#005DB8' : '#64748B',
                      fontWeight: '600'
                    }}>
                      Starts {formatPrice(course.prices.starter)}/mo
                    </span>
                  </div>

                  <h4 style={{
                    fontSize: '1.08rem',
                    color: '#031122',
                    margin: '0 0 0.35rem 0',
                    fontWeight: '700'
                  }}>
                    {course.title}
                  </h4>

                  <p style={{
                    fontSize: '0.84rem',
                    color: '#64748B',
                    margin: '0 0 0.75rem 0',
                    lineHeight: 1.45
                  }}>
                    {course.subtitle}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.6rem',
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                    fontSize: '0.78rem',
                    color: '#475569'
                  }}>
                    <span>{course.level}</span>
                    <span style={{
                      color: isSelected ? '#005DB8' : '#C5A869',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}>
                      {isSelected ? '✓ Selected' : 'Select →'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* STEP 2: Choose Frequency / Track + Live Calculated Breakdown */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '1.25rem',
            borderBottom: '1px solid rgba(197, 168, 105, 0.25)',
            paddingBottom: '0.75rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{
                background: 'linear-gradient(135deg, #C5A869 0%, #9A7B38 100%)',
                color: '#FFFFFF',
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: '800'
              }}>
                2
              </span>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#031122', fontWeight: 700 }}>
                Step 2: Choose Class Frequency & View Cost
              </h3>
            </div>
            <span style={{ fontSize: '0.88rem', color: '#64748B' }}>
              Showing cost for: <strong style={{ color: '#005DB8' }}>{currentCourse.title}</strong>
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem',
            alignItems: 'stretch',
            marginBottom: '3rem'
          }}>
            {planTracks.map((plan) => {
              const isSelected = selectedPlanId === plan.id;
              const planCost = currentCourse.prices[plan.id];
              const perSessionCost = calculatePerSession(planCost, plan.id);

              return (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    border: isSelected 
                      ? '2.5px solid #C5A869' 
                      : '1px solid rgba(197, 168, 105, 0.35)',
                    boxShadow: isSelected 
                      ? '0 12px 32px rgba(197, 168, 105, 0.22)' 
                      : '0 4px 16px rgba(0, 0, 0, 0.04)',
                    padding: '2rem 1.75rem',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    transition: 'all 0.25s ease',
                    transform: isSelected ? 'scale(1.02)' : 'none'
                  }}
                >
                  {/* Top Badge */}
                  {plan.recommended && (
                    <div style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #C5A869 0%, #9A7B38 100%)',
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '0.3rem 0.9rem',
                      borderRadius: '9999px',
                      boxShadow: '0 4px 10px rgba(197, 168, 105, 0.4)'
                    }}>
                      Recommended Track
                    </div>
                  )}

                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        color: isSelected ? '#005DB8' : '#64748B',
                        background: 'rgba(0, 93, 184, 0.06)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px'
                      }}>
                        {plan.days}
                      </span>
                      <span style={{
                        fontSize: '0.76rem',
                        color: '#9A7B38',
                        fontWeight: '700'
                      }}>
                        {plan.sessionLength}
                      </span>
                    </div>

                    <h4 style={{
                      fontSize: '1.25rem',
                      color: '#031122',
                      margin: '0 0 0.35rem 0',
                      fontWeight: '800'
                    }}>
                      {plan.name}
                    </h4>

                    <p style={{
                      fontSize: '0.84rem',
                      color: '#64748B',
                      margin: 0,
                      lineHeight: 1.45
                    }}>
                      {plan.desc}
                    </p>
                  </div>

                  {/* Price Box */}
                  <div style={{
                    background: isSelected ? 'linear-gradient(135deg, rgba(197, 168, 105, 0.12) 0%, rgba(0, 93, 184, 0.06) 100%)' : '#FAF9F6',
                    padding: '1.25rem',
                    borderRadius: '14px',
                    border: '1px solid rgba(197, 168, 105, 0.25)',
                    marginBottom: '1.5rem',
                    textAlign: 'center'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.35rem' }}>
                      <span style={{
                        fontSize: '2.3rem',
                        fontWeight: '800',
                        color: '#031122',
                        fontFamily: 'var(--font-heading)'
                      }}>
                        {formatPrice(planCost)}
                      </span>
                      <span style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: '600' }}>
                        / month
                      </span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#005DB8', fontWeight: '700', marginTop: '0.35rem' }}>
                      ~ {perSessionCost} per 1-on-1 session ({plan.sessions})
                    </div>
                  </div>

                  {/* Radio Selection Indicator */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem',
                    borderRadius: '10px',
                    background: isSelected ? 'linear-gradient(135deg, #005DB8 0%, #071C34 100%)' : '#F1F5F9',
                    color: isSelected ? '#FFFFFF' : '#475569',
                    fontWeight: '700',
                    fontSize: '0.88rem',
                    transition: 'all 0.2s ease',
                    marginTop: 'auto'
                  }}>
                    <span>{isSelected ? 'Selected Plan' : 'Choose This Frequency'}</span>
                    {isSelected && <IconCheck size={16} color="#FFFFFF" />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Course & Plan Inclusions Summary Card */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '2px solid rgba(197, 168, 105, 0.45)',
            boxShadow: '0 10px 30px rgba(3, 17, 34, 0.08)',
            padding: 'clamp(1.75rem, 4vw, 2.75rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            {/* Left: What's included in this customized enrollment */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{
                  background: 'rgba(197, 168, 105, 0.18)',
                  color: '#9A7B38',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  textTransform: 'uppercase'
                }}>
                  Custom Plan Summary
                </span>
                <span style={{ fontSize: '0.82rem', color: '#10B981', fontWeight: '700' }}>
                  • 100% Free Placement Trial
                </span>
              </div>

              <h4 style={{
                fontSize: '1.45rem',
                color: '#031122',
                margin: '0 0 0.5rem 0',
                fontFamily: 'var(--font-serif)',
                fontWeight: '700'
              }}>
                {currentCourse.title} — {currentPlan.name}
              </h4>

              <p style={{
                fontSize: '0.92rem',
                color: '#475569',
                margin: '0 0 1.5rem 0',
                lineHeight: 1.5
              }}>
                Includes <strong>{currentPlan.days}</strong> ({currentPlan.sessions}) with dedicated 1-on-1 Ustadh / Ustadha mentorship:
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {currentCourse.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.88rem', color: '#1E293B', lineHeight: 1.45 }}>
                    <span style={{
                      background: 'rgba(16, 185, 129, 0.12)',
                      color: '#10B981',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      <IconCheck size={13} color="#10B981" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Price Checkout & Actions */}
            <div style={{
              background: 'linear-gradient(135deg, #031122 0%, #071C34 50%, #005DB8 100%)',
              borderRadius: '20px',
              padding: '2.25rem 2rem',
              color: '#FFFFFF',
              textAlign: 'center',
              boxShadow: '0 12px 35px rgba(0, 93, 184, 0.25)'
            }}>
              <span style={{
                fontSize: '0.82rem',
                color: '#E6CA85',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}>
                Calculated Tuition
              </span>

              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'center',
                gap: '0.4rem',
                margin: '0.75rem 0'
              }}>
                <span style={{
                  fontSize: '3rem',
                  fontWeight: '900',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {formatPrice(rawPrice)}
                </span>
                <span style={{ fontSize: '1rem', color: '#CBD5E1', fontWeight: '600' }}>
                  / month
                </span>
              </div>

              <p style={{
                fontSize: '0.85rem',
                color: '#E2E8F0',
                margin: '0 0 1.5rem 0',
                lineHeight: 1.45
              }}>
                Zero admission fees • Flexible month-to-month • Free initial placement trial session
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <Link
                  to={`/enroll?course=${currentCourse.id}&plan=${currentPlan.id}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    background: 'linear-gradient(135deg, #C5A869 0%, #9A7B38 100%)',
                    color: '#FFFFFF',
                    padding: '0.95rem 1.5rem',
                    borderRadius: '12px',
                    fontWeight: '800',
                    fontSize: '0.98rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(197, 168, 105, 0.35)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>Enroll in {currentCourse.title}</span>
                  <IconArrowRight size={17} color="#FFFFFF" />
                </Link>

                <a
                  href={`https://wa.me/12035151469?text=${whatsappInquiryText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.12)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#FFFFFF',
                    padding: '0.85rem 1.25rem',
                    borderRadius: '12px',
                    fontWeight: '700',
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <IconWhatsApp size={17} color="#25D366" />
                  <span>Inquire via WhatsApp Admissions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sibling Discounts & Four Guarantees Mini-Banner */}
          <div style={{
            marginTop: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem'
          }}>
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '1.25rem',
              border: '1px solid rgba(197, 168, 105, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem'
            }}>
              <div style={{
                background: 'rgba(197, 168, 105, 0.15)',
                color: '#9A7B38',
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <IconUsers size={22} color="#9A7B38" />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.88rem', color: '#031122' }}>
                  Family & Sibling Discount
                </strong>
                <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
                  10% off 2nd student, 15% off 3rd child & beyond
                </span>
              </div>
            </div>

            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '1.25rem',
              border: '1px solid rgba(197, 168, 105, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem'
            }}>
              <div style={{
                background: 'rgba(0, 93, 184, 0.1)',
                color: '#005DB8',
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <IconShield size={22} color="#005DB8" />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.88rem', color: '#031122' }}>
                  100% Free Placement Trial
                </strong>
                <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
                  Evaluate teacher fit before paying any tuition
                </span>
              </div>
            </div>

            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '1.25rem',
              border: '1px solid rgba(197, 168, 105, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem'
            }}>
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                color: '#10B981',
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <IconClock size={22} color="#10B981" />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.88rem', color: '#031122' }}>
                  No Long-Term Contracts
                </strong>
                <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
                  Billed month-to-month with flexible rescheduling
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
