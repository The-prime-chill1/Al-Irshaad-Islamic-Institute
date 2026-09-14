import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import HadithRibbon from '../components/common/HadithRibbon';
import { contactData } from '../data/contactData';
import { studentDatabase } from '../services/studentDatabase';
import { getCountryByName, countriesData, getFlagEmoji } from '../data/countriesData';
import SearchableCountrySelect from '../components/common/SearchableCountrySelect';
import SearchableCitySelect from '../components/common/SearchableCitySelect';
import { IconCheckCircle, IconMail, IconPhone, IconWhatsApp, IconArrowRight, IconUser, IconClock, IconFileText } from '../components/common/Icons';

export default function EnrollPage() {
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  const [formData, setFormData] = useState({
    // Step 1: Student Information
    fullName: '',
    dateOfBirth: '',
    gender: 'Male',
    guardianName: '', // For kids
    country: 'Nigeria',
    countryCode: '+234',
    city: '',
    whatsappNumber: '',
    email: '',

    // Step 2: Program & Level
    program: 'Nuurul Bayaan',
    learningLevel: 'Beginner',

    // Step 3: Class & Schedule Preferences
    classPreference: '1-on-1 (Private)',
    preferredSchedule: 'Evening (5:00 PM - 7:00 PM)',
    preferredDays: '3 Days / Week',
    teacherPreference: 'Any Qualified Faculty (Fastest Placement)',

    // Step 4: Background & Goals
    previousQuranEducation: 'None / Complete Beginner',
    previousIslamicStudies: 'Basic knowledge from home',
    arabicKnowledge: 'No prior Arabic background',
    currentReadingLevel: 'Cannot read Arabic yet',
    learningGoal: ''
  });

  useEffect(() => {
    const courseParam = searchParams.get('course');
    const planParam = searchParams.get('plan');

    const courseMap = {
      'nuurul-bayaan': 'Nuurul Bayaan',
      'quran-recitation': "Qur'an Recitation with Tajweed",
      'hifdh': "Qur'an Memorization (Hifdh)",
      'islamic-studies-fundamentals': 'Fundamentals of Islamic Studies',
      'advanced-islamic-studies': 'Advanced Islamic Studies',
      'arabic-adhkaar': 'Arabic & Adhkaar'
    };

    const planMap = {
      'starter': '2 Days / Week',
      'standard': '3 Days / Week',
      'intensive': '5 Days / Week'
    };

    if (courseParam && courseMap[courseParam]) {
      setFormData(prev => ({
        ...prev,
        program: courseMap[courseParam],
        preferredDays: planParam && planMap[planParam] ? planMap[planParam] : prev.preferredDays
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.fullName.trim() || !formData.whatsappNumber.trim() || !formData.dateOfBirth) {
        alert('Please fill in Student Full Name, WhatsApp Number, and Date of Birth to proceed.');
        return;
      }
    }
    setCurrentStep(prev => Math.min(prev + 1, 5));
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  // Helper for full phone number with country code
  const getFullPhone = () => {
    const raw = (formData.whatsappNumber || '').trim();
    if (!raw) return '';
    if (raw.startsWith('+')) return raw;
    return `${formData.countryCode || '+234'} ${raw}`.trim();
  };

  // Generate structured message dossier
  const formatDossierText = (appId) => {
    return `Assalamu Alaikum Al-Irshaad Islamic Institute Admissions,

NEW STUDENT ENROLLMENT APPLICATION
--------------------------------------------------
Application Tracking ID: ${appId}
Date Submitted: ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}

1. STUDENT DETAILS:
- Full Name: ${formData.fullName}
- Gender: ${formData.gender}
- Date of Birth: ${formData.dateOfBirth || 'Not specified'}
- Parent / Guardian: ${formData.guardianName || 'Self / Adult Student'}
- WhatsApp / Phone: ${getFullPhone()}
- Email: ${formData.email || 'Not provided'}
- Country & City: ${formData.city ? `${formData.city}, ` : ''}${formData.country}

2. PROGRAM & SCHEDULE:
- Selected Program: ${formData.program}
- Learning Level: ${formData.learningLevel}
- Format Preference: ${formData.classPreference}
- Preferred Time: ${formData.preferredSchedule}
- Weekly Commitment: ${formData.preferredDays}
- Instructor Preference: ${formData.teacherPreference || 'Any Qualified Faculty'}

3. BACKGROUND & GOALS:
- Qur'an Background: ${formData.previousQuranEducation}
- Islamic Studies: ${formData.previousIslamicStudies}
- Arabic Proficiency: ${formData.arabicKnowledge}
- Reading Ability: ${formData.currentReadingLevel}
- Primary Learning Goal: ${formData.learningGoal || 'Consistent Qur\'an mastery and authentic Islamic knowledge.'}

--------------------------------------------------
Please review this application and schedule the placement assessment. Jazakumullahu Khayran.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedId = `ALIR-APP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setApplicationId(generatedId);

    const fullPhoneNumber = getFullPhone();

    try {
      // 1. Save directly into Admin Database with all required dossier fields
      studentDatabase.saveEnrollment({
        ...formData,
        whatsappNumber: fullPhoneNumber,
        id: generatedId,
        enrolledDate: new Date().toISOString(),
        status: 'Pending Admission'
      });
    } catch (err) {
      console.error('Local save error:', err);
    }

    const messageText = formatDossierText(generatedId);
    const whatsappUrl = `https://wa.me/${contactData.whatsapp}?text=${encodeURIComponent(messageText)}`;

    // Optional background submission to Admissions email endpoint
    try {
      fetch('https://formspree.io/f/xbjvlqnk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          applicationId: generatedId,
          recipientEmail: contactData.emailAdmissions,
          ...formData,
          whatsappNumber: fullPhoneNumber,
          formattedDossier: messageText
        })
      }).catch(() => {});
    } catch (e) {}

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 150, behavior: 'smooth' });

      // Automatically launch WhatsApp with prefilled dossier
      try {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      } catch (e) {
        console.log('Direct popup blocked, button is available.');
      }
    }, 800);
  };

  const dossierText = formatDossierText(applicationId || 'ALIR-APP-2026-1001');
  const whatsappUrl = `https://wa.me/${contactData.whatsapp}?text=${encodeURIComponent(dossierText)}`;
  const emailMailtoUrl = `mailto:${contactData.emailAdmissions}?subject=${encodeURIComponent(`New Student Enrollment Application - ${formData.fullName} [${applicationId || 'ALIR-APP'}]`)}&body=${encodeURIComponent(dossierText)}`;

  return (
    <div>
      {/* Page Header */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '4.5rem 0 3.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            ✦ Online Admissions 2026 ✦
          </span>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            Student Enrollment Application
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '1.15rem' }}>
            Begin your journey of Qur'anic and Islamic mastery. Complete the form below to transmit your application directly to the Admissions Committee.
          </p>
        </div>
      </section>

      {/* Sacred Hadith Ribbon */}
      <HadithRibbon variant="compact" />

      {/* Main Form Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          
          {!isSubmitted ? (
            <div 
              className="enroll-form-card"
              style={{
                background: 'var(--bg-card)',
                borderRadius: '24px',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-lg)',
                padding: 'clamp(1.25rem, 3.5vw, 3rem) clamp(1rem, 3vw, 2.5rem)',
                position: 'relative',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >

              
              {/* Stepper Progress Bar */}
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>
                  <span>Step {currentStep} of 5: {
                    currentStep === 1 ? 'Student Details' :
                    currentStep === 2 ? 'Program Selection' :
                    currentStep === 3 ? 'Schedule & Preferences' :
                    currentStep === 4 ? 'Experience & Goals' :
                    'Review & Transmit'
                  }</span>
                  <span style={{ color: 'var(--accent-gold-dark)' }}>{currentStep * 20}% Complete</span>
                </div>

                <div style={{ height: '8px', width: '100%', background: 'var(--bg-cream)', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div 
                    style={{
                      height: '100%',
                      width: `${currentStep * 20}%`,
                      background: 'linear-gradient(90deg, var(--accent-gold) 0%, var(--primary) 100%)',
                      borderRadius: '9999px',
                      transition: 'width 0.4s ease'
                    }}
                  />
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit}>
                
                {/* STEP 1: Student Information */}
                {currentStep === 1 && (
                  <div className="animate-fade-in">
                    <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>
                      Step 1: Student & Guardian Profile
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.75rem' }}>
                      Please provide your contact details so the Admissions Office can confirm your assessment.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                          Student Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          placeholder="e.g. Fatima Zahra / Ibrahim Musa"
                          value={formData.fullName}
                          onChange={handleChange}
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', fontSize: '0.95rem' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                          Gender *
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', fontSize: '0.95rem', background: '#fff' }}
                        >
                          <option value="Male">Male (Brothers / Boys Section)</option>
                          <option value="Female">Female (Sisters / Girls Section)</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                      {/* Searchable Country Selector with Flag */}
                      <div>
                        <SearchableCountrySelect
                          value={formData.country}
                          label="Country of Residence *"
                          onChange={(selectedCountry) => {
                            setFormData(prev => ({
                              ...prev,
                              country: selectedCountry.name,
                              countryCode: selectedCountry.dialCode,
                              city: selectedCountry.cities[0] || ''
                            }));
                          }}
                        />
                      </div>

                      {/* Searchable City Selector */}
                      <div>
                        <SearchableCitySelect
                          cities={(getCountryByName(formData.country) || {}).cities || []}
                          value={formData.city}
                          customValue={formData.city}
                          label="City / Municipality *"
                          onChange={(selectedCity) => {
                            setFormData(prev => ({
                              ...prev,
                              city: selectedCity === 'CUSTOM_OTHER' ? '' : selectedCity
                            }));
                          }}
                          onCustomChange={(customVal) => {
                            setFormData(prev => ({
                              ...prev,
                              city: customVal
                            }));
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                      {/* WhatsApp / Phone with Country Code */}
                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                          WhatsApp / Phone Number *
                        </label>
                        <div style={{ display: 'flex', gap: '0.4rem' }}>
                          <select
                            value={formData.countryCode}
                            onChange={(e) => {
                              const found = countriesData.find(c => c.dialCode === e.target.value);
                              setFormData(prev => ({
                                ...prev,
                                countryCode: e.target.value,
                                country: found ? found.name : prev.country,
                                city: found && found.cities.length > 0 ? found.cities[0] : prev.city
                              }));
                            }}
                            style={{
                              width: '125px',
                              padding: '0.75rem 0.45rem',
                              borderRadius: '10px',
                              border: '1.5px solid var(--border-medium)',
                              background: '#F8FAFC',
                              fontWeight: '700',
                              fontSize: '0.85rem'
                            }}
                          >
                            {countriesData.map((c) => (
                              <option key={c.name} value={c.dialCode}>
                                {getFlagEmoji(c.iso)} {c.dialCode} ({c.name})
                              </option>
                            ))}
                          </select>
                          <input
                            type="tel"
                            name="whatsappNumber"
                            required
                            placeholder="e.g. 903 516 0069"
                            value={formData.whatsappNumber}
                            onChange={handleChange}
                            style={{ flex: 1, padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', fontSize: '0.95rem' }}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="student@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', fontSize: '0.95rem' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                          Parent / Guardian Name (For Children)
                        </label>
                        <input
                          type="text"
                          name="guardianName"
                          placeholder="Leave blank if enrolling as an adult"
                          value={formData.guardianName}
                          onChange={handleChange}
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', fontSize: '0.95rem' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          required
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', fontSize: '0.95rem' }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Program Selection */}
                {currentStep === 2 && (
                  <div className="animate-fade-in">
                    <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>
                      Step 2: Choose Your Academic Program
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.75rem' }}>
                      Select the primary course you wish to study at Al-Irshaad Islamic Institute.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                      {[
                        { title: 'Nuurul Bayaan', desc: 'Arabic reading foundations for absolute beginners' },
                        { title: 'Qur\'an Recitation & Tajweed', desc: 'Applied pronunciation, rules, and fluent recitation' },
                        { title: 'Hifdh Memorization', desc: 'Systematic memorization with 3-tier retention' },
                        { title: 'Islamic Studies (Deeniyat)', desc: 'Aqeedah, Fiqh, Seerah, Hadith, and Akhlaaq' },
                        { title: 'Arabic Language & Adhkaar', desc: 'Spoken Arabic, vocabulary, and daily prophetic supplications' }
                      ].map((prog) => {
                        const isSelected = formData.program === prog.title;
                        return (
                          <div
                            key={prog.title}
                            onClick={() => setFormData(prev => ({ ...prev, program: prog.title }))}
                            style={{
                              padding: '1.25rem',
                              borderRadius: '14px',
                              border: isSelected ? '2px solid var(--accent-gold-dark)' : '1.5px solid var(--border-medium)',
                              backgroundColor: isSelected ? 'var(--primary-ultralight)' : '#FFFFFF',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between'
                            }}
                          >
                            <div>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <strong style={{ color: isSelected ? 'var(--primary)' : 'var(--text-main)', fontSize: '1.05rem' }}>{prog.title}</strong>
                                <span style={{
                                  width: '18px',
                                  height: '18px',
                                  borderRadius: '50%',
                                  border: isSelected ? '5px solid var(--accent-gold-dark)' : '2px solid #CBD5E1',
                                  display: 'inline-block'
                                }} />
                              </div>
                              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{prog.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                        Current Learning Level *
                      </label>
                      <select
                        name="learningLevel"
                        value={formData.learningLevel}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', fontSize: '0.95rem', background: '#fff' }}
                      >
                        <option value="Beginner">Beginner (Starting from scratch / basic letters)</option>
                        <option value="Intermediate">Intermediate (Can read slowly, needs Tajweed guidance)</option>
                        <option value="Advanced">Advanced (Fluent reader, aiming for full memorization / mastery)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 3: Schedule & Class Preferences */}
                {currentStep === 3 && (
                  <div className="animate-fade-in">
                    <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>
                      Step 3: Schedule & Class Preferences
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.75rem' }}>
                      Customize your weekly session format and preferred time windows.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                          Class Format *
                        </label>
                        <select
                          name="classPreference"
                          value={formData.classPreference}
                          onChange={handleChange}
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', fontSize: '0.95rem', background: '#fff' }}
                        >
                          <option value="1-on-1 (Private)">1-on-1 Dedicated Private Tutoring (Recommended)</option>
                          <option value="Family / Sibling Shared">Family / Sibling Shared Session</option>
                          <option value="Small Group (Max 4)">Small Interactive Group Cohort</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                          Weekly Frequency *
                        </label>
                        <select
                          name="preferredDays"
                          value={formData.preferredDays}
                          onChange={handleChange}
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', fontSize: '0.95rem', background: '#fff' }}
                        >
                          <option value="5 Days / Week">5 Days / Week (Accelerated Progress)</option>
                          <option value="3 Days / Week">3 Days / Week (Standard Pace)</option>
                          <option value="2 Days / Week (Weekend Only)">2 Days / Week (Weekend Focus)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                        Preferred Time of Day *
                      </label>
                      <select
                        name="preferredSchedule"
                        value={formData.preferredSchedule}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', fontSize: '0.95rem', background: '#fff' }}
                      >
                        <option value="Morning (7:00 AM - 11:00 AM)">Morning (7:00 AM - 11:00 AM)</option>
                        <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                        <option value="Evening (5:00 PM - 7:00 PM)">Evening (5:00 PM - 7:00 PM)</option>
                        <option value="Night (7:00 PM - 10:00 PM)">Night (7:00 PM - 10:00 PM)</option>
                        <option value="Flexible / Negotiable">Flexible / Timezone matched</option>
                      </select>
                    </div>

                    <div style={{ marginTop: '1.25rem' }}>
                      <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                        Preferred Instructor / Faculty (Optional)
                      </label>
                      <select
                        name="teacherPreference"
                        value={formData.teacherPreference}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', fontSize: '0.95rem', background: '#fff' }}
                      >
                        <option value="Any Qualified Faculty (Fastest Placement)">Any Qualified Faculty (Fastest Placement)</option>
                        <option value="Ustaadh Naasir Akinbolanle Jamiu (Director & Founder)">Ustaadh Naasir Akinbolanle Jamiu (Director & Founder)</option>
                        <option value="Ustaadh Tijani Jamiu Ayinde (Senior Islamic Studies & Shariah)">Ustaadh Tijani Jamiu Ayinde (Senior Islamic Studies & Shariah)</option>
                        <option value="Ustaadha Yaseeroh G. Gozali (Dedicated Sisters & Kids)">Ustaadha Yaseeroh G. Gozali (Dedicated Sisters & Kids)</option>
                        <option value="Ustaadh Muhammad Ballo Jamiu (Madeenah Scholar & Tajweed)">Ustaadh Muhammad Ballo Jamiu (Madeenah Scholar & Tajweed)</option>
                        <option value="Ustaadha Waliyyah Yuusuf (Dedicated Sisters & Kids)">Ustaadha Waliyyah Yuusuf (Dedicated Sisters & Kids)</option>
                        <option value="Dedicated Female Ustaadha (For Sisters & Young Learners)">Dedicated Female Ustaadha (For Sisters & Young Learners)</option>
                      </select>
                    </div>

                    <div style={{ marginTop: '1.25rem', background: '#FAF8F5', border: '1.5px solid #E2E8F0', borderRadius: '12px', padding: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.4rem' }}>🗓️</span>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                        <strong>Personalized Timetable Coordination:</strong> Our faculty coordinates directly with you upon admission to confirm your exact recurring 1-on-1 lesson slots matching your timezone (EST, CST, PST, GMT, WAT).
                      </p>
                    </div>
                  </div>
                )}

                {/* STEP 4: Educational Background & Goals */}
                {currentStep === 4 && (
                  <div className="animate-fade-in">
                    <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>
                      Step 4: Background & Goals
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.75rem' }}>
                      Help our academic team design your personalized placement roadmap.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                          Previous Qur'an Education
                        </label>
                        <select
                          name="previousQuranEducation"
                          value={formData.previousQuranEducation}
                          onChange={handleChange}
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', fontSize: '0.95rem', background: '#fff' }}
                        >
                          <option value="None / Complete Beginner">None / Complete Beginner</option>
                          <option value="Completed Qaida / Nuurul Bayaan">Completed Qaida / Nuurul Bayaan</option>
                          <option value="Can recite with some Tajweed">Can recite with some Tajweed</option>
                          <option value="Memorized several Juz">Memorized several Juz</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                          Arabic Knowledge Level
                        </label>
                        <select
                          name="arabicKnowledge"
                          value={formData.arabicKnowledge}
                          onChange={handleChange}
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', fontSize: '0.95rem', background: '#fff' }}
                        >
                          <option value="No prior Arabic background">No prior Arabic background</option>
                          <option value="Can recognize Arabic letters">Can recognize Arabic letters</option>
                          <option value="Basic vocabulary and reading">Basic vocabulary and reading</option>
                          <option value="Intermediate spoken Arabic">Intermediate spoken Arabic</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: '1.25rem' }}>
                      <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                        What is your primary learning goal?
                      </label>
                      <textarea
                        name="learningGoal"
                        rows={3}
                        placeholder="e.g. I want to recite the Qur'an fluently with proper Tajweed, understand daily supplications, and build strong character."
                        value={formData.learningGoal}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-medium)', fontSize: '0.95rem', resize: 'vertical' }}
                      />
                    </div>
                  </div>
                )}

                {/* STEP 5: Review & Transmit */}
                {currentStep === 5 && (
                  <div className="animate-fade-in">
                    <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>
                      Step 5: Review & Transmit Application
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                      Please verify your details. Upon submission, your full application dossier will be sent directly to the Admissions Desk via WhatsApp and Email.
                    </p>

                    <div style={{ background: 'var(--bg-cream)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-medium)', marginBottom: '1.5rem' }}>
                      <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', borderBottom: '1px solid var(--border-medium)', paddingBottom: '0.5rem' }}>
                        Application Summary
                      </h4>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem', fontSize: '0.92rem' }}>
                        <div>
                          <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.8rem' }}>Student Name</span>
                          <strong>{formData.fullName || 'Not provided'}</strong>
                        </div>
                        <div>
                          <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.8rem' }}>WhatsApp / Phone</span>
                          <strong>{getFullPhone() || 'Not provided'}</strong>
                        </div>
                        <div>
                          <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.8rem' }}>Program Selected</span>
                          <strong style={{ color: 'var(--primary)' }}>{formData.program}</strong>
                        </div>
                        <div>
                          <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.8rem' }}>Class Format</span>
                          <strong>{formData.classPreference}</strong>
                        </div>
                        <div>
                          <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.8rem' }}>Preferred Schedule</span>
                          <strong>{formData.preferredSchedule}</strong>
                        </div>
                        <div>
                          <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.8rem' }}>Date of Birth</span>
                          <strong>{formData.dateOfBirth || 'Not provided'}</strong>
                        </div>
                        <div>
                          <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.8rem' }}>Date Registered</span>
                          <strong style={{ color: '#005DB8' }}>{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</strong>
                        </div>
                        <div>
                          <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.8rem' }}>Location</span>
                          <strong>{formData.city ? `${formData.city}, ` : ''}{formData.country}</strong>
                        </div>
                      </div>
                    </div>

                    <div style={{ background: 'rgba(0, 93, 184, 0.05)', padding: '1.35rem', borderRadius: '14px', border: '1.5px solid rgba(0, 93, 184, 0.25)', marginBottom: '1.75rem', fontSize: '0.9rem', color: '#1E293B' }}>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                        <IconCheckCircle size={22} color="#005DB8" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <div>
                          <strong style={{ color: '#005DB8', display: 'block', fontSize: '0.98rem' }}>Dual-Channel Transmission to 2 Destinations:</strong>
                          <span>When you submit, your complete application dossier is transmitted directly to both official channels:</span>
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '0.75rem', marginTop: '0.65rem' }}>
                        <div style={{ background: '#FFFFFF', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid #CBD5E1', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                          <IconMail size={18} color="#005DB8" />
                          <div>
                            <span style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', color: '#64748B', fontWeight: '700' }}>Destination 1: Official Email</span>
                            <strong style={{ fontSize: '0.85rem', color: '#0F172A' }}>{contactData.email}</strong>
                          </div>
                        </div>

                        <div style={{ background: '#FFFFFF', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid #CBD5E1', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                          <IconWhatsApp size={18} color="#128C7E" />
                          <div>
                            <span style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', color: '#64748B', fontWeight: '700' }}>Destination 2: Admissions WhatsApp</span>
                            <strong style={{ fontSize: '0.85rem', color: '#0F172A' }}>{contactData.phoneFormatted} (Ustadh Nasir)</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Navigation Controls */}
                <div className="enroll-nav-controls">
                  {currentStep > 1 ? (
                    <button 
                      type="button" 
                      onClick={prevStep}
                      className="btn btn-outline enroll-btn-back"
                    >
                      ← Back
                    </button>
                  ) : <div />}

                  {currentStep < 5 ? (
                    <button 
                      type="button" 
                      onClick={nextStep}
                      className="btn btn-primary enroll-btn-next"
                    >
                      <span>Continue Next Step</span>
                      <IconArrowRight size={16} color="#FFFFFF" />
                    </button>
                  ) : (
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn btn-gold btn-lg enroll-btn-submit"
                    >
                      <IconCheckCircle size={20} color="#031122" />
                      <span>{isSubmitting ? 'Transmitting to Email & WhatsApp...' : 'Submit Application (Email + WhatsApp)'}</span>
                    </button>
                  )}
                </div>


              </form>

            </div>
          ) : (
            /* Application Success State */
            <div 
              className="enroll-success-card"
              style={{
                background: 'var(--bg-card)',
                borderRadius: '24px',
                border: '2px solid var(--accent-gold)',
                boxShadow: 'var(--shadow-lg)',
                padding: 'clamp(1.5rem, 4vw, 3.5rem) clamp(1rem, 3vw, 2.5rem)',
                textAlign: 'center',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              <div 
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  background: 'rgba(0, 93, 184, 0.08)',
                  color: 'var(--primary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <IconCheckCircle size={38} color="var(--primary)" />
              </div>

              <span className="badge-gold" style={{ marginBottom: '0.85rem', display: 'inline-block' }}>
                Application Transmitted to Email & WhatsApp
              </span>

              <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)', color: 'var(--primary)', marginBottom: '0.75rem' }}>
                Assalamu Alaikum, {formData.fullName}!
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', maxWidth: '650px', margin: '0 auto 1.5rem auto', lineHeight: '1.65' }}>
                Your enrollment application for <strong>{formData.program}</strong> has been logged into the Al-Irshaad Admissions Database and prepared for instant dispatch to both <strong>Official Email</strong> and <strong>WhatsApp</strong>.
              </p>

              {/* Reference ID Pill */}
              <div style={{ display: 'inline-block', padding: '0.75rem 1.5rem', background: 'var(--bg-cream)', borderRadius: '12px', border: '1px solid var(--border-medium)', marginBottom: '1.75rem', maxWidth: '100%', boxSizing: 'border-box' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Your Application Tracking ID</span>
                <strong style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)', color: 'var(--primary)', fontFamily: 'var(--font-heading)', wordBreak: 'break-all' }}>{applicationId}</strong>
              </div>

              {/* Two Destination Channels Box */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '0.85rem', maxWidth: '640px', margin: '0 auto 1.75rem auto', textAlign: 'left', width: '100%', boxSizing: 'border-box' }}>
                <div style={{ background: '#F0FDF4', border: '1.5px solid #86EFAC', borderRadius: '14px', padding: '1rem 1.15rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', color: '#166534', fontWeight: '700', fontSize: '0.9rem' }}>
                    <IconWhatsApp size={18} color="#166534" />
                    <span>Channel 1: WhatsApp</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#334155', margin: 0, lineHeight: 1.5 }}>
                    Sent directly to Ustadh Nasir at <strong>{contactData.phoneFormatted}</strong> for quick scheduling.
                  </p>
                </div>

                <div style={{ background: '#EFF6FF', border: '1.5px solid #93C5FD', borderRadius: '14px', padding: '1rem 1.15rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', color: '#1E40AF', fontWeight: '700', fontSize: '0.9rem' }}>
                    <IconMail size={18} color="#1E40AF" />
                    <span>Channel 2: Official Email</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#334155', margin: 0, lineHeight: 1.5, wordBreak: 'break-all' }}>
                    Delivered to <strong>{contactData.email}</strong> for permanent registry documentation.
                  </p>
                </div>
              </div>

              {/* Dual Action Buttons (Fully Responsive & Non-Overflowing) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '500px', margin: '0 auto 2rem auto', width: '100%', boxSizing: 'border-box' }}>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ width: '100%', padding: '0.9rem 1.25rem', fontSize: '0.95rem', fontWeight: '700', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', whiteSpace: 'normal', textAlign: 'center', lineHeight: 1.35, boxSizing: 'border-box' }}
                >
                  <IconWhatsApp size={22} color="#031122" style={{ flexShrink: 0 }} />
                  <div>
                    <span>Open & Confirm on WhatsApp</span>
                    <span style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, opacity: 0.85 }}>({contactData.phoneFormatted})</span>
                  </div>
                </a>

                <a 
                  href={emailMailtoUrl} 
                  className="btn btn-outline"
                  style={{ width: '100%', padding: '0.85rem 1.25rem', fontSize: '0.92rem', fontWeight: '700', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#FFFFFF', whiteSpace: 'normal', textAlign: 'center', lineHeight: 1.35, boxSizing: 'border-box' }}
                >
                  <IconMail size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                  <span>Send Direct Email Copy to Admissions Desk</span>
                </a>
              </div>


              {/* Next Steps Card */}
              <div style={{ background: 'var(--bg-cream)', borderRadius: '16px', padding: '1.5rem', textAlign: 'left', maxWidth: '600px', margin: '0 auto 2rem auto', border: '1px solid var(--border-medium)' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.05rem' }}>
                  What Happens Next?
                </h4>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.8' }}>
                  <li>Ustadh Nasir will review your background and time preferences.</li>
                  <li>You will receive a WhatsApp message / phone call to confirm your scheduled trial & placement class.</li>
                  <li>Your customized timetable will be finalized based on your timezone.</li>
                </ul>
              </div>

              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Direct Admissions Line: <a href={`tel:${contactData.phone}`} style={{ color: 'var(--primary)', fontWeight: 700 }}>{contactData.phone}</a> • Email: <a href={`mailto:${contactData.email}`} style={{ color: 'var(--primary)', fontWeight: 700 }}>{contactData.email}</a>
              </div>

            </div>
          )}

        </div>
      </section>

      <style>{`

        .enroll-nav-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.75rem;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-medium);
          width: 100%;
          box-sizing: border-box;
        }

        .enroll-btn-back {
          padding: 0.75rem 1.35rem;
          font-size: 0.92rem;
          flex-shrink: 0;
        }

        .enroll-btn-next {
          padding: 0.85rem 1.75rem;
          font-size: 0.92rem;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .enroll-btn-submit {
          min-width: 280px;
          padding: 1rem 2rem;
          font-weight: 700;
        }

        @media (max-width: 540px) {
          .enroll-nav-controls {
            flex-direction: row;
            gap: 0.5rem;
            width: 100%;
          }

          .enroll-btn-back {
            padding: 0.7rem 0.9rem !important;
            font-size: 0.82rem !important;
            flex-shrink: 0 !important;
          }

          .enroll-btn-next {
            padding: 0.7rem 0.9rem !important;
            font-size: 0.82rem !important;
            flex: 1 1 auto !important;
            min-width: 0 !important;
            white-space: nowrap !important;
            gap: 0.35rem !important;
            justify-content: center !important;
          }

          .enroll-btn-submit {
            width: 100% !important;
            min-width: 0 !important;
            font-size: 0.88rem !important;
            padding: 0.85rem 0.9rem !important;
            white-space: normal !important;
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
}

