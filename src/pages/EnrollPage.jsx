import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import HadithRibbon from '../components/common/HadithRibbon';
import { contactData } from '../data/contactData';

export default function EnrollPage() {
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
    city: '',
    whatsappNumber: '',
    email: '',

    // Step 2: Program & Level
    program: 'Nuurul Bayaan',
    learningLevel: 'Beginner',

    // Step 3: Class & Schedule Preferences
    classPreference: '1-on-1 (Private)',
    preferredSchedule: 'Evening',
    preferredDays: '5 Days / Week',

    // Step 4: Background & Goals
    previousQuranEducation: 'None / Complete Beginner',
    previousIslamicStudies: 'Basic knowledge from home',
    arabicKnowledge: 'No prior Arabic background',
    currentReadingLevel: 'Cannot read Arabic yet',
    learningGoal: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.fullName.trim() || !formData.whatsappNumber.trim()) {
        alert('Please fill in your Full Name and WhatsApp Number to proceed.');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `AL-IRSHAAD-${Math.floor(100000 + Math.random() * 900000)}`;
      setApplicationId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }, 1200);
  };

  // WhatsApp pre-filled text with application details
  const whatsappAppUrl = `https://wa.me/2349035160069?text=${encodeURIComponent(
    `Assalamu Alaikum Al-Irshaad Admissions,\n\nI have submitted an enrollment application on your website.\n\nApplication ID: ${applicationId}\nStudent Name: ${formData.fullName}\nProgram: ${formData.program}\nLevel: ${formData.learningLevel}\nClass Preference: ${formData.classPreference}\nSchedule: ${formData.preferredSchedule}\nCountry: ${formData.country}\n\nPlease confirm next steps for my assessment.`
  )}`;

  return (
    <div>
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: '4.5rem 0 3.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-subtitle-badge light" style={{ marginBottom: '1rem' }}>
            ✦ Online Admissions 2026 ✦
          </span>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            Student Enrollment Application
          </h1>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '1.15rem' }}>
            Take the first step toward lifelong Qur'anic and Islamic mastery. Complete the application below to begin your placement assessment.
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
              style={{
                background: 'var(--bg-card)',
                borderRadius: '24px',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-lg)',
                padding: 'clamp(2rem, 4vw, 3.5rem)',
                position: 'relative'
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
                    'Review & Submit'
                  }</span>
                  <span style={{ color: 'var(--accent-gold-dark)' }}>{currentStep * 20}% Complete</span>
                </div>

                <div style={{ height: '8px', width: '100%', background: 'var(--bg-cream)', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div 
                    style={{
                      height: '100%',
                      width: `${currentStep * 20}%`,
                      background: 'linear-gradient(90deg, var(--primary), var(--accent-gold))',
                      borderRadius: '9999px',
                      transition: 'width 0.4s ease'
                    }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                
                {/* STEP 1: Student Information */}
                {currentStep === 1 && (
                  <div>
                    <h3 style={{ fontSize: '1.45rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                      Step 1: Student Personal Information
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                      Please provide accurate contact details so our admissions advisor can reach you.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                          Full Name of Student *
                        </label>
                        <input 
                          type="text" 
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Ibrahim Yusuf"
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-medium)', background: 'var(--bg-ivory)' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                          Date of Birth *
                        </label>
                        <input 
                          type="date" 
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-medium)', background: 'var(--bg-ivory)' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                          Gender *
                        </label>
                        <select 
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-medium)', background: 'var(--bg-ivory)' }}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                          Parent / Guardian Name (If student is under 18)
                        </label>
                        <input 
                          type="text" 
                          name="guardianName"
                          value={formData.guardianName}
                          onChange={handleChange}
                          placeholder="e.g. Dr. & Mrs. Yusuf"
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-medium)', background: 'var(--bg-ivory)' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                          Country of Residence *
                        </label>
                        <input 
                          type="text" 
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="e.g. Nigeria, United Kingdom, USA, Canada"
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-medium)', background: 'var(--bg-ivory)' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                          City / State
                        </label>
                        <input 
                          type="text" 
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="e.g. London, Abuja, Toronto, Dallas"
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-medium)', background: 'var(--bg-ivory)' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                          WhatsApp Number (with Country Code) *
                        </label>
                        <input 
                          type="tel" 
                          name="whatsappNumber"
                          required
                          value={formData.whatsappNumber}
                          onChange={handleChange}
                          placeholder="e.g. +44 7123 456789 or +234 801 234 5678"
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-medium)', background: 'var(--bg-ivory)' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. student@gmail.com"
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-medium)', background: 'var(--bg-ivory)' }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Program & Level */}
                {currentStep === 2 && (
                  <div>
                    <h3 style={{ fontSize: '1.45rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                      Step 2: Program & Learning Level
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                      Select the primary course and your self-assessed starting proficiency.
                    </p>

                    <div style={{ marginBottom: '1.75rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                        Desired Learning Program *
                      </label>
                      <select 
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: '8px', border: '1px solid var(--border-medium)', background: 'var(--bg-ivory)', fontWeight: 600, color: 'var(--primary)' }}
                      >
                        <option value="Nuurul Bayaan">Nuurul Bayaan (Foundational Arabic & Qur'an Reading)</option>
                        <option value="Qur'an Recitation with Tajweed">Qur'an Recitation with Tajweed (Fluency Track)</option>
                        <option value="Qur'an Memorization — Hifdh">Qur'an Memorization — Hifdh (3-Cycle Method)</option>
                        <option value="Fundamentals of Islamic Studies">Fundamentals of Islamic Studies (Ages 5–20)</option>
                        <option value="Advanced Islamic Studies">Advanced Islamic Studies (Classical Sciences)</option>
                        <option value="Arabic Language for English Speakers">Arabic Language for English Speakers</option>
                        <option value="Adhkaar Memorization">Adhkaar Memorization (Daily Prophetic Supplications)</option>
                      </select>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                        Current Estimated Level *
                      </label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                        {['Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                          <label 
                            key={lvl}
                            style={{
                              padding: '1.25rem 1rem',
                              borderRadius: '10px',
                              border: formData.learningLevel === lvl ? '2px solid var(--primary)' : '1px solid var(--border-medium)',
                              background: formData.learningLevel === lvl ? 'var(--primary-ultralight)' : 'var(--bg-ivory)',
                              cursor: 'pointer',
                              textAlign: 'center',
                              fontWeight: 700,
                              color: formData.learningLevel === lvl ? 'var(--primary)' : 'var(--text-secondary)'
                            }}
                          >
                            <input 
                              type="radio" 
                              name="learningLevel" 
                              value={lvl}
                              checked={formData.learningLevel === lvl}
                              onChange={handleChange}
                              style={{ display: 'none' }}
                            />
                            {lvl}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Class Preference & Schedule */}
                {currentStep === 3 && (
                  <div>
                    <h3 style={{ fontSize: '1.45rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                      Step 3: Class Format & Schedule Preferences
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                      Tell us your preferred learning format and the times that best suit your routine.
                    </p>

                    <div style={{ marginBottom: '1.75rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                        Class Preference *
                      </label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                        {[
                          { id: '1-on-1 (Private)', title: '1-on-1 (Private Instruction)', desc: 'Dedicated teacher solely focused on you or your child.' },
                          { id: 'Small Group', title: 'Small Group (2–4 Students)', desc: 'Interactive peer learning at similar age/level.' }
                        ].map((opt) => (
                          <label 
                            key={opt.id}
                            style={{
                              padding: '1.25rem',
                              borderRadius: '12px',
                              border: formData.classPreference === opt.id ? '2px solid var(--primary)' : '1px solid var(--border-medium)',
                              background: formData.classPreference === opt.id ? 'var(--primary-ultralight)' : 'var(--bg-ivory)',
                              cursor: 'pointer'
                            }}
                          >
                            <input 
                              type="radio" 
                              name="classPreference" 
                              value={opt.id}
                              checked={formData.classPreference === opt.id}
                              onChange={handleChange}
                              style={{ display: 'none' }}
                            />
                            <strong style={{ display: 'block', color: 'var(--primary)', marginBottom: '0.25rem' }}>{opt.title}</strong>
                            <span style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>{opt.desc}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                        Preferred Time of Day *
                      </label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem' }}>
                        {['Morning', 'Afternoon', 'Evening', 'Weekend Slots'].map((time) => (
                          <label 
                            key={time}
                            style={{
                              padding: '0.85rem',
                              borderRadius: '8px',
                              border: formData.preferredSchedule === time ? '2px solid var(--primary)' : '1px solid var(--border-medium)',
                              background: formData.preferredSchedule === time ? 'var(--primary-ultralight)' : 'var(--bg-ivory)',
                              cursor: 'pointer',
                              textAlign: 'center',
                              fontSize: '0.9rem',
                              fontWeight: 600,
                              color: formData.preferredSchedule === time ? 'var(--primary)' : 'var(--text-secondary)'
                            }}
                          >
                            <input 
                              type="radio" 
                              name="preferredSchedule" 
                              value={time}
                              checked={formData.preferredSchedule === time}
                              onChange={handleChange}
                              style={{ display: 'none' }}
                            />
                            {time}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: Experience & Goals */}
                {currentStep === 4 && (
                  <div>
                    <h3 style={{ fontSize: '1.45rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                      Step 4: Previous Experience & Learning Goals
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                      Help us understand your background so we can match you with the ideal teacher.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                          Previous Qur'an Education
                        </label>
                        <input 
                          type="text" 
                          name="previousQuranEducation"
                          value={formData.previousQuranEducation}
                          onChange={handleChange}
                          placeholder="e.g. Completed Nuurul Bayaan / Self-taught / None"
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-medium)', background: 'var(--bg-ivory)' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                          Current Qur'an Reading Level
                        </label>
                        <input 
                          type="text" 
                          name="currentReadingLevel"
                          value={formData.currentReadingLevel}
                          onChange={handleChange}
                          placeholder="e.g. Can read slowly with mistakes / Fluent without Tajweed"
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-medium)', background: 'var(--bg-ivory)' }}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                        Personal Learning Goal / What would you like to achieve?
                      </label>
                      <textarea 
                        name="learningGoal"
                        rows="4"
                        value={formData.learningGoal}
                        onChange={handleChange}
                        placeholder="e.g. I want my son to memorize Juz' Amma and master Tajweed before he turns 10 / I want to be able to recite Surah Al-Baqarah fluently..."
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-medium)', background: 'var(--bg-ivory)', resize: 'vertical' }}
                      />
                    </div>
                  </div>
                )}

                {/* STEP 5: Review & Submit */}
                {currentStep === 5 && (
                  <div>
                    <h3 style={{ fontSize: '1.45rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                      Step 5: Review Your Application
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                      Please review your application summary before final submission.
                    </p>

                    <div style={{ background: 'var(--bg-cream)', borderRadius: '16px', border: '1px solid var(--border-light)', padding: '1.75rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.925rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Student Name:</span>
                        <strong style={{ color: 'var(--primary)' }}>{formData.fullName || '—'}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>WhatsApp Contact:</span>
                        <strong style={{ color: 'var(--primary)' }}>{formData.whatsappNumber || '—'}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Country:</span>
                        <strong style={{ color: 'var(--primary)' }}>{formData.country || '—'}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Program Selected:</span>
                        <strong style={{ color: 'var(--accent-gold-dark)' }}>{formData.program}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Learning Level:</span>
                        <strong style={{ color: 'var(--primary)' }}>{formData.learningLevel}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Class Preference & Schedule:</span>
                        <strong style={{ color: 'var(--primary)' }}>{formData.classPreference} • {formData.preferredSchedule}</strong>
                      </div>
                    </div>

                    <div style={{ padding: '1rem', background: 'rgba(197, 168, 105, 0.1)', borderRadius: '10px', border: '1px solid rgba(197, 168, 105, 0.3)', marginBottom: '2rem', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                      <strong>Note:</strong> Submitting this application registers your interest with the Al-Irshaad Admissions Office. An academic coordinator will contact you directly to confirm your schedule and conduct your initial placement assessment.
                    </div>
                  </div>
                )}

                {/* Form Buttons Navigation */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                  {currentStep > 1 ? (
                    <button 
                      type="button" 
                      onClick={prevStep}
                      className="btn btn-outline"
                    >
                      ← Back
                    </button>
                  ) : <div />}

                  {currentStep < 5 ? (
                    <button 
                      type="button" 
                      onClick={nextStep}
                      className="btn btn-gold"
                    >
                      Continue to Step {currentStep + 1} →
                    </button>
                  ) : (
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn btn-primary btn-lg"
                      style={{ minWidth: '220px' }}
                    >
                      {isSubmitting ? 'Submitting Application...' : 'Submit Enrollment Application'}
                    </button>
                  )}
                </div>

              </form>

            </div>
          ) : (
            /* Application Success State */
            <div 
              style={{
                background: 'var(--bg-card)',
                borderRadius: '24px',
                border: '2px solid var(--accent-gold)',
                boxShadow: 'var(--shadow-lg)',
                padding: 'clamp(2.5rem, 5vw, 4rem)',
                textAlign: 'center'
              }}
            >
              <div 
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'var(--primary-ultralight)',
                  color: 'var(--primary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>

              <span className="badge-gold" style={{ marginBottom: '1rem' }}>
                Application Received Successfully
              </span>

              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: 'var(--primary)', marginBottom: '1rem' }}>
                Assalamu Alaikum, {formData.fullName}!
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 1.75rem auto', lineHeight: '1.7' }}>
                Your enrollment application for <strong>{formData.program}</strong> has been registered with the Al-Irshaad Islamic Institute Admissions Desk.
              </p>

              {/* Reference ID Pill */}
              <div style={{ display: 'inline-block', padding: '0.85rem 2rem', background: 'var(--bg-cream)', borderRadius: '12px', border: '1px solid var(--border-medium)', marginBottom: '2.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Your Application Tracking ID</span>
                <strong style={{ fontSize: '1.4rem', color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>{applicationId}</strong>
              </div>

              {/* Direct WhatsApp Follow-up Action */}
              <div style={{ padding: '2rem', background: 'linear-gradient(135deg, #031122, #071C34)', borderRadius: '16px', color: '#FFFFFF', maxWidth: '650px', margin: '0 auto 2rem auto', textAlign: 'center' }}>
                <h4 style={{ color: 'var(--accent-gold-light)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  Fast-Track Your Admissions on WhatsApp
                </h4>
                <p style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Click below to send your application details directly to our admissions team at <strong>{contactData.phone}</strong> for instant confirmation.
                </p>

                <a 
                  href={whatsappAppUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-lg"
                  style={{ width: '100%', maxWidth: '380px', margin: '0 auto' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span>Transmit Application via WhatsApp</span>
                </a>
              </div>

              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Questions? Direct Line: <a href={`tel:${contactData.phone}`} style={{ color: 'var(--primary)', fontWeight: 700 }}>{contactData.phone}</a>
              </div>

            </div>
          )}

        </div>
      </section>
    </div>
  );
}
