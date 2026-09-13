import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { studentDatabase } from '../services/studentDatabase';
import HadithRibbon from '../components/common/HadithRibbon';
import { 
  IconEdit, 
  IconVideo, 
  IconPhone, 
  IconWhatsApp, 
  IconBookOpen, 
  IconCheckCircle, 
  IconClock, 
  IconUser, 
  IconGraduationCap, 
  IconCheck, 
  IconArrowRight 
} from '../components/common/Icons';

export default function StudentDashboardPage() {
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({});
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    const current = studentDatabase.getCurrentStudent();
    if (!current) {
      navigate('/student/login');
      return;
    }
    setStudent(current);
    setEditFormData(current);
  }, [navigate]);

  if (!student) {
    return null;
  }

  const handleLogout = () => {
    studentDatabase.studentLogout();
    navigate('/student/login');
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    try {
      const updated = studentDatabase.updateStudent(student.id, editFormData);
      setStudent(updated);
      setIsEditing(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 4000);
    } catch (err) {
      alert(err.message || 'Failed to update profile');
    }
  };

  // Status Badge styling helper
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return { bg: '#DCFCE7', color: '#166534', border: '#86EFAC', label: 'Active & Enrolled' };
      case 'Assessment Scheduled':
        return { bg: '#FEF3C7', color: '#92400E', border: '#FCD34D', label: 'Assessment Scheduled' };
      case 'Graduated':
        return { bg: '#E0E7FF', color: '#3730A3', border: '#A5B4FC', label: 'Completed & Certified' };
      default:
        return { bg: '#F1F5F9', color: '#475569', border: '#CBD5E1', label: 'Pending Faculty Review' };
    }
  };

  const statusStyle = getStatusBadge(student.status);

  return (
    <div style={{ backgroundColor: 'var(--bg-ivory)', minHeight: '90vh', paddingBottom: '5rem', overflowX: 'clip', maxWidth: '100vw', width: '100%', boxSizing: 'border-box' }}>
      {/* Top Banner with Student ID summary */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 60%, #005DB8 100%)', color: '#FFFFFF', padding: 'clamp(2rem, 4.5vw, 3.5rem) 0 clamp(1.5rem, 3.5vw, 2.5rem) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ flex: '1 1 280px' }}>
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span className="section-subtitle-badge light" style={{ margin: 0 }}>
                  Official Student Academic Portal
                </span>
                <span style={{
                  background: statusStyle.bg,
                  color: statusStyle.color,
                  border: `1px solid ${statusStyle.border}`,
                  padding: '0.2rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '700'
                }}>
                  {statusStyle.label}
                </span>
              </div>
              <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', margin: 0, lineHeight: 1.25 }}>
                Ahlan wa Sahlan, {student.fullName}
              </h1>
              <p style={{ color: 'var(--text-on-dark-muted)', marginTop: '0.35rem', fontSize: '0.94rem' }}>
                Student ID: <strong style={{ color: '#C5A869', letterSpacing: '0.5px' }}>{student.id}</strong> | Program: <strong>{student.program}</strong>
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setIsEditing(!isEditing)}
                style={{
                  padding: '0.65rem 1.2rem',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.15)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.3)',
                  fontWeight: '600',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s ease'
                }}
              >
                <IconEdit size={15} color="#FFFFFF" />
                <span>{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
              </button>
              <button
                type="button"
                onClick={handleLogout}
                style={{
                  padding: '0.65rem 1.2rem',
                  borderRadius: '10px',
                  background: 'rgba(239, 68, 68, 0.2)',
                  color: '#FECACA',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  fontWeight: '600',
                  fontSize: '0.88rem',
                  cursor: 'pointer'
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>

      <HadithRibbon variant="compact" />

      <div className="container" style={{ marginTop: '2rem' }}>
        {saveSuccess && (
          <div style={{
            background: '#DCFCE7',
            border: '1px solid #86EFAC',
            color: '#166534',
            padding: '0.9rem 1.25rem',
            borderRadius: '12px',
            fontWeight: '600',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.92rem'
          }}>
            <IconCheckCircle size={18} color="#166534" />
            <span>Student profile updated successfully!</span>
          </div>
        )}

        {/* ===================== EDIT PROFILE MODAL / DRAWER ===================== */}
        {isEditing && (
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: 'clamp(1.25rem, 3.5vw, 2rem)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            border: '2px solid #C5A869',
            marginBottom: '2rem',
            boxSizing: 'border-box'
          }}>
            <h2 style={{ fontSize: '1.25rem', color: '#031122', marginBottom: '1.15rem', fontWeight: '700' }}>
              Update Student Profile Information
            </h2>
            <form onSubmit={handleSaveProfile}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '0.85rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={editFormData.fullName || ''}
                    onChange={handleEditChange}
                    required
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    WhatsApp Phone Number
                  </label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    value={editFormData.whatsappNumber || ''}
                    onChange={handleEditChange}
                    required
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Guardian Name
                  </label>
                  <input
                    type="text"
                    name="guardianName"
                    value={editFormData.guardianName || ''}
                    onChange={handleEditChange}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    City & Country
                  </label>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={editFormData.city || ''}
                      onChange={handleEditChange}
                      style={{ width: '50%', padding: '0.7rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem', boxSizing: 'border-box' }}
                    />
                    <input
                      type="text"
                      name="country"
                      placeholder="Country"
                      value={editFormData.country || ''}
                      onChange={handleEditChange}
                      style={{ width: '50%', padding: '0.7rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Preferred Schedule
                  </label>
                  <input
                    type="text"
                    name="preferredSchedule"
                    value={editFormData.preferredSchedule || ''}
                    onChange={handleEditChange}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Learning Goal / Notes
                  </label>
                  <input
                    type="text"
                    name="learningGoal"
                    value={editFormData.learningGoal || ''}
                    onChange={handleEditChange}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <button
                  type="submit"
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    background: '#005DB8',
                    color: '#FFFFFF',
                    fontWeight: '700',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    background: '#F1F5F9',
                    color: '#475569',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Dashboard Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
          
          {/* 1. DIGITAL STUDENT ID CARD */}
          <div style={{
            background: 'linear-gradient(135deg, #031122 0%, #071C34 50%, #005DB8 100%)',
            borderRadius: '20px',
            padding: 'clamp(1.25rem, 3.5vw, 2rem)',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 12px 30px rgba(0, 93, 184, 0.25)',
            border: '1px solid rgba(197, 168, 105, 0.4)',
            boxSizing: 'border-box'
          }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(197, 168, 105, 0.15)', filter: 'blur(10px)' }}></div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', gap: '0.5rem' }}>
              <div>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#C5A869', fontWeight: '700' }}>
                  Al-Irshaad Islamic Institute
                </span>
                <h2 style={{ fontSize: '1.15rem', color: '#FFFFFF', margin: '0.15rem 0 0 0', fontWeight: '700' }}>
                  Digital Student Identity
                </h2>
              </div>
              <div style={{
                background: 'rgba(197, 168, 105, 0.2)',
                border: '1px solid #C5A869',
                borderRadius: '8px',
                padding: '0.25rem 0.55rem',
                fontSize: '0.72rem',
                color: '#FAF8F5',
                fontWeight: '700',
                whiteSpace: 'nowrap'
              }}>
                ACADEMIC YEAR 2026
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #C5A869 0%, #E6CA85 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                color: '#031122',
                fontWeight: '700',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                flexShrink: 0
              }}>
                {student.fullName ? student.fullName.charAt(0).toUpperCase() : 'S'}
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF' }}>
                  {student.fullName}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#CBD5E1', wordBreak: 'break-all' }}>
                  {student.email}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#C5A869', marginTop: '0.15rem' }}>
                  ID: <strong>{student.id}</strong>
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(0,0,0,0.25)',
              borderRadius: '12px',
              padding: '0.85rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 120px), 1fr))',
              gap: '0.65rem',
              fontSize: '0.8rem',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div>
                <span style={{ color: '#94A3B8', display: 'block', fontSize: '0.74rem' }}>Gender</span>
                <strong>{student.gender}</strong>
              </div>
              <div>
                <span style={{ color: '#94A3B8', display: 'block', fontSize: '0.74rem' }}>Location</span>
                <strong>{student.city ? `${student.city}, ` : ''}{student.country}</strong>
              </div>
              <div>
                <span style={{ color: '#94A3B8', display: 'block', fontSize: '0.74rem' }}>Format</span>
                <strong>{student.classPreference}</strong>
              </div>
              <div>
                <span style={{ color: '#94A3B8', display: 'block', fontSize: '0.74rem' }}>Admission Date</span>
                <strong>{student.enrolledDate ? new Date(student.enrolledDate).toLocaleDateString() : 'Active'}</strong>
              </div>
            </div>
          </div>

          {/* 2. ENROLLED COURSE & LIVE CLASSROOM */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: 'clamp(1.25rem, 3.5vw, 2rem)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            border: '1px solid #E2E8F0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#005DB8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Active Academic Course
                </span>
                <span style={{ fontSize: '0.78rem', background: '#F1F5F9', padding: '0.2rem 0.6rem', borderRadius: '6px', color: '#475569', fontWeight: '600' }}>
                  {student.learningLevel}
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.4rem)', color: '#031122', fontWeight: '700', marginBottom: '0.5rem' }}>
                {student.program}
              </h2>
              
              <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                {student.learningGoal || 'Mastery of Qur\'anic phonetics, memorization, and classical Islamic sciences.'}
              </p>

              <div style={{ background: '#FAF8F5', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <IconClock size={16} color="#005DB8" />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', color: '#1E293B' }}>Class Schedule</strong>
                    <span style={{ fontSize: '0.82rem', color: '#64748B' }}>{student.preferredSchedule} ({student.preferredDays})</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <IconGraduationCap size={16} color="#005DB8" />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', color: '#1E293B' }}>Assigned Tutor</strong>
                    <span style={{ fontSize: '0.82rem', color: '#64748B' }}>{student.assignedTeacher || 'Ustadh Nasir'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Class Portal Button */}
            <a
              href={`https://wa.me/${contactData.whatsapp}?text=Assalamu%20Alaikum%20Ustadh,%20I%20am%20ready%20for%20my%20session%20(Student%20ID:%20${student.id},%20Name:%20${encodeURIComponent(student.fullName)}).`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.5rem',
                borderRadius: '10px',
                background: '#25D366',
                color: '#FFFFFF',
                fontWeight: '700',
                textDecoration: 'none',
                fontSize: '0.92rem'
              }}
            >
              <IconWhatsApp size={18} color="#FFFFFF" />
              <span>Contact Teacher on WhatsApp</span>
            </a>
          </div>

          {/* 3. FACULTY & ADMISSIONS SUPPORT */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            border: '1px solid #E2E8F0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#C5A869', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '0.75rem' }}>
                Academic & Admissions Helpdesk
              </span>
              <h2 style={{ fontSize: '1.3rem', color: '#031122', fontWeight: '700', marginBottom: '0.5rem' }}>
                Direct Faculty Coordination
              </h2>
              <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Have questions regarding your timetable, exam assessments, syllabus, or tuition? Contact the Al-Irshaad administration directly via WhatsApp.
              </p>

              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '12px', padding: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <IconWhatsApp size={20} color="#166534" />
                <div>
                  <strong style={{ display: 'block', color: '#166534', fontSize: '0.88rem' }}>
                    WhatsApp Support Line
                  </strong>
                  <span style={{ color: '#15803D', fontSize: '0.85rem' }}>+234 903 516 0069</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a
                href={`https://wa.me/2349035160069?text=Assalamu%20Alaikum%20Al-Irshaad%20Admissions,%20I%20am%20student%20${encodeURIComponent(student.fullName)}%20(ID:%20${student.id}).%20I%20have%20an%20inquiry%20about%20my%20classes.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  background: '#25D366',
                  color: '#FFFFFF',
                  padding: '0.8rem',
                  borderRadius: '10px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  fontSize: '0.92rem'
                }}
              >
                <IconWhatsApp size={18} color="#FFFFFF" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                to="/enroll"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: '#F8FAFC',
                  color: '#334155',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  border: '1px solid #CBD5E1'
                }}
              >
                Apply for an Additional Program
              </Link>
            </div>
          </div>

        </div>

        {/* Learning Milestone & Curriculum Progress */}
        <div style={{
          marginTop: '2rem',
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          border: '1px solid #E2E8F0'
        }}>
          <h3 style={{ fontSize: '1.2rem', color: '#031122', fontWeight: '700', marginBottom: '1rem' }}>
            Academic Progress & Curriculum Path
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1rem' }}>
            <div style={{ background: '#F8FAFC', padding: '1.2rem', borderRadius: '12px', borderLeft: '4px solid #005DB8' }}>
              <div style={{ fontSize: '0.78rem', color: '#64748B', textTransform: 'uppercase', fontWeight: '700' }}>Stage 1</div>
              <div style={{ fontWeight: '700', color: '#1E293B', marginTop: '0.2rem' }}>Orientation & Assessment</div>
              <div style={{ fontSize: '0.82rem', color: '#166534', marginTop: '0.3rem', fontWeight: '600' }}>Completed</div>
            </div>

            <div style={{ background: '#F8FAFC', padding: '1.2rem', borderRadius: '12px', borderLeft: '4px solid #C5A869' }}>
              <div style={{ fontSize: '0.78rem', color: '#64748B', textTransform: 'uppercase', fontWeight: '700' }}>Stage 2</div>
              <div style={{ fontWeight: '700', color: '#1E293B', marginTop: '0.2rem' }}>Core Modules & Phonetics</div>
              <div style={{ fontSize: '0.82rem', color: '#005DB8', marginTop: '0.3rem', fontWeight: '600' }}>In Progress</div>
            </div>

            <div style={{ background: '#F8FAFC', padding: '1.2rem', borderRadius: '12px', borderLeft: '4px solid #CBD5E1' }}>
              <div style={{ fontSize: '0.78rem', color: '#64748B', textTransform: 'uppercase', fontWeight: '700' }}>Stage 3</div>
              <div style={{ fontWeight: '700', color: '#1E293B', marginTop: '0.2rem' }}>Applied Tajweed & Retention</div>
              <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '0.3rem' }}>Next Phase</div>
            </div>

            <div style={{ background: '#F8FAFC', padding: '1.2rem', borderRadius: '12px', borderLeft: '4px solid #CBD5E1' }}>
              <div style={{ fontSize: '0.78rem', color: '#64748B', textTransform: 'uppercase', fontWeight: '700' }}>Stage 4</div>
              <div style={{ fontWeight: '700', color: '#1E293B', marginTop: '0.2rem' }}>Graduation & Certification</div>
              <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '0.3rem' }}>Final Milestone</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
