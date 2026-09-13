import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { studentDatabase } from '../services/studentDatabase';
import { firebaseDbService } from '../services/firebaseDbService';
import { countriesData, getCountryByName, getCountryByDialCode, getFlagEmoji } from '../data/countriesData';
import SearchableCountrySelect from '../components/common/SearchableCountrySelect';
import SearchableCitySelect from '../components/common/SearchableCitySelect';
import HadithRibbon from '../components/common/HadithRibbon';
import { 
  IconSearch, 
  IconPlus, 
  IconDownload, 
  IconEdit, 
  IconTrash, 
  IconEye, 
  IconCheckCircle, 
  IconAlertCircle, 
  IconUsers, 
  IconBookOpen, 
  IconWhatsApp, 
  IconClock, 
  IconCheck,
  IconGlobe
} from '../components/common/Icons';

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const [adminSession, setAdminSession] = useState(null);
  const [students, setStudents] = useState([]);
  
  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [filterProgram, setFilterProgram] = useState('ALL');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [filterGender, setFilterGender] = useState('ALL');
  const [filterCountry, setFilterCountry] = useState('ALL');

  // Modals state
  const [selectedStudent, setSelectedStudent] = useState(null); // For View Dossier
  const [editingStudent, setEditingStudent] = useState(null); // For Edit / Assign
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // For Add New Student
  
  // New Student Form State
  const [newStudentData, setNewStudentData] = useState({
    fullName: '',
    email: '',
    countryCode: '+1',
    phoneRaw: '',
    whatsappNumber: '',
    dateOfBirth: '',
    gender: 'Male',
    guardianName: '',
    country: 'United States',
    city: 'Norwalk, CT',
    customCity: '',
    program: 'Nuurul Bayaan',
    learningLevel: 'Beginner',
    classPreference: '1-on-1 (Private)',
    preferredSchedule: 'Evening (5:00 PM - 7:00 PM)',
    preferredDays: '5 Days / Week',
    previousQuranEducation: 'None',
    learningGoal: '',
    status: 'Active',
    assignedTeacher: 'Ustadh Nasir',
    adminNotes: 'Direct administrative admission.'
  });

  // Toast message
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  useEffect(() => {
    const session = studentDatabase.getAdminSession();
    if (!session) {
      navigate('/admin/login');
      return;
    }
    setAdminSession(session);

    // Subscribe to real-time Firestore database with local fallback
    const unsubscribe = firebaseDbService.subscribeStudents((updatedList) => {
      setStudents([...updatedList]);
    });

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, [navigate]);

  const loadStudents = () => {
    const data = studentDatabase.getAllStudents();
    setStudents([...data]);
  };

  const handleAdminLogout = () => {
    studentDatabase.adminLogout();
    navigate('/admin/login');
  };

  // Filtered Students list
  const filteredStudents = useMemo(() => {
    return students.filter(student => {
      const matchSearch =
        (student.fullName && student.fullName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.id && student.id.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.email && student.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.whatsappNumber && student.whatsappNumber.includes(searchTerm)) ||
        (student.country && student.country.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.city && student.city.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchProgram = filterProgram === 'ALL' || student.program === filterProgram;
      const matchStatus = filterStatus === 'ALL' || student.status === filterStatus;
      const matchGender = filterGender === 'ALL' || student.gender === filterGender;
      const matchCountry = filterCountry === 'ALL' || (student.country && student.country.toLowerCase() === filterCountry.toLowerCase());

      return matchSearch && matchProgram && matchStatus && matchGender && matchCountry;
    });
  }, [students, searchTerm, filterProgram, filterStatus, filterGender, filterCountry]);

  // KPIs
  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.status === 'Active').length;
  const pendingStudents = students.filter(s => s.status === 'Pending Review' || s.status === 'Assessment Scheduled').length;
  const femaleCount = students.filter(s => s.gender === 'Female').length;
  const maleCount = students.filter(s => s.gender === 'Male').length;

  // Handle Export CSV
  const handleExportCSV = () => {
    const csvContent = studentDatabase.exportToCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `alirshaad_students_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Student database exported to CSV successfully.');
  };

  // Handle Edit Save
  const handleSaveEdit = async (e) => {
    e.preventDefault();
    try {
      const finalCity = editingStudent.city === 'CUSTOM_OTHER'
        ? (editingStudent.customCity || 'International')
        : (editingStudent.city || '');

      let finalWhatsapp = editingStudent.whatsappNumber || '';
      const dialCode = editingStudent.countryCode || '+1';
      if (finalWhatsapp && !finalWhatsapp.startsWith('+')) {
        finalWhatsapp = `${dialCode} ${finalWhatsapp}`.trim();
      }

      const updatedPayload = {
        ...editingStudent,
        city: finalCity,
        whatsappNumber: finalWhatsapp
      };

      await firebaseDbService.updateStudent(editingStudent.id, updatedPayload);
      loadStudents();
      setEditingStudent(null);
      showToast(`Student ${editingStudent.id} details updated.`);
    } catch (err) {
      alert(err.message);
    }
  };

  // Handle Add Student Save
  const handleSaveNewStudent = async (e) => {
    e.preventDefault();
    try {
      const finalCity = newStudentData.city === 'CUSTOM_OTHER'
        ? (newStudentData.customCity || 'International')
        : (newStudentData.city || '');

      let finalWhatsapp = (newStudentData.phoneRaw || newStudentData.whatsappNumber || '').trim();
      const dialCode = newStudentData.countryCode || '+1';
      if (finalWhatsapp && !finalWhatsapp.startsWith('+')) {
        finalWhatsapp = `${dialCode} ${finalWhatsapp}`.trim();
      }

      const payload = {
        ...newStudentData,
        city: finalCity,
        whatsappNumber: finalWhatsapp
      };

      const added = await firebaseDbService.addStudent(payload);
      loadStudents();
      setIsAddModalOpen(false);
      showToast(`New student ${added.fullName} admitted with ID ${added.id}.`);
      
      // reset
      const defaultCountry = countriesData[0];
      setNewStudentData({
        fullName: '',
        email: '',
        countryCode: defaultCountry.dialCode,
        phoneRaw: '',
        whatsappNumber: '',
        dateOfBirth: '',
        gender: 'Male',
        guardianName: '',
        country: defaultCountry.name,
        city: defaultCountry.cities[0] || '',
        customCity: '',
        program: 'Nuurul Bayaan',
        learningLevel: 'Beginner',
        classPreference: '1-on-1 (Private)',
        preferredSchedule: 'Evening (5:00 PM - 7:00 PM)',
        preferredDays: '5 Days / Week',
        previousQuranEducation: 'None',
        learningGoal: '',
        status: 'Active',
        assignedTeacher: 'Ustadh Nasir',
        adminNotes: 'Direct administrative admission.'
      });
    } catch (err) {
      alert(err.message);
    }
  };

  // Handle Delete Student
  const handleDeleteStudent = async (id, name) => {
    if (window.confirm(`Are you sure you want to remove student record for "${name}" (${id})?`)) {
      await firebaseDbService.deleteStudent(id);
      loadStudents();
      showToast(`Student record ${id} removed.`);
    }
  };

  // Status Badge style helper
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return { bg: '#DCFCE7', color: '#166534', border: '#86EFAC' };
      case 'Assessment Scheduled':
        return { bg: '#FEF3C7', color: '#92400E', border: '#FCD34D' };
      case 'Graduated':
        return { bg: '#E0E7FF', color: '#3730A3', border: '#A5B4FC' };
      default:
        return { bg: '#F1F5F9', color: '#475569', border: '#CBD5E1' };
    }
  };

  if (!adminSession) return null;

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', paddingBottom: '6rem', overflowX: 'clip', maxWidth: '100vw', width: '100%', boxSizing: 'border-box' }}>
      
      {/* Top Banner */}
      <section style={{ background: 'linear-gradient(180deg, #031122 0%, #071C34 50%, #005DB8 100%)', color: '#FFFFFF', padding: 'clamp(1.75rem, 4vw, 2.5rem) 0 clamp(1.5rem, 3vw, 2rem) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ flex: '1 1 300px' }}>
                <span className="section-subtitle-badge light" style={{ margin: 0, marginBottom: '0.4rem', fontSize: '0.75rem' }}>
                  Central Administration
                </span>
                <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3.2vw, 2.3rem)', margin: 0, lineHeight: 1.25 }}>
                  Student Admissions & Database Dashboard
                </h1>
                <p style={{ color: '#CBD5E1', fontSize: '0.88rem', marginTop: '0.35rem' }}>
                  Logged in as: <strong style={{ color: '#C5A869' }}>{adminSession.name}</strong> ({adminSession.role})
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(true)}
                  style={{
                    padding: '0.65rem 1.15rem',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #C5A869 0%, #E6CA85 100%)',
                    color: '#031122',
                    fontWeight: '700',
                    fontSize: '0.88rem',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    boxShadow: '0 4px 12px rgba(197, 168, 105, 0.3)',
                    flexGrow: 1,
                    justifyContent: 'center'
                  }}
                >
                  <IconPlus size={16} color="#031122" />
                  <span>Admit New Student</span>
                </button>

                <button
                  type="button"
                  onClick={handleExportCSV}
                  style={{
                    padding: '0.65rem 1.1rem',
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
                    flexGrow: 1,
                    justifyContent: 'center'
                  }}
                >
                  <IconDownload size={15} color="#FFFFFF" />
                  <span>Export CSV</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete all student records from the database? This cannot be undone.')) {
                      studentDatabase.clearAllStudents();
                      loadStudents();
                      showToast('All student records deleted. Database reset to clean state.');
                    }
                  }}
                  style={{
                    padding: '0.65rem 0.9rem',
                    borderRadius: '10px',
                    background: 'rgba(239, 68, 68, 0.15)',
                    color: '#FECACA',
                    border: '1px solid rgba(239, 68, 68, 0.35)',
                    fontWeight: '600',
                    fontSize: '0.84rem',
                    cursor: 'pointer'
                  }}
                  title="Wipe all student records"
                >
                  Clear All
                </button>

                <button
                  type="button"
                  onClick={handleAdminLogout}
                  style={{
                    padding: '0.65rem 1.1rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#CBD5E1',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
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
        </div>
      </section>

      <HadithRibbon variant="compact" />

      {/* Main Admin Content */}
      <div className="container" style={{ marginTop: '1.75rem' }}>
        
        {/* Toast Notification */}
        {toastMessage && (
          <div style={{
            background: '#031122',
            color: '#FFFFFF',
            borderLeft: '4px solid #C5A869',
            padding: '0.9rem 1.25rem',
            borderRadius: '10px',
            marginBottom: '1.25rem',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            fontSize: '0.92rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <IconCheckCircle size={18} color="#C5A869" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* ===================== KPI CARDS ===================== */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          
          <div style={{ background: '#FFFFFF', padding: '1.15rem 1.25rem', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '0.74rem', color: '#64748B', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.5px' }}>
              Total Students
            </div>
            <div style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.2rem)', fontWeight: '800', color: '#031122', marginTop: '0.2rem', lineHeight: 1.1 }}>
              {totalStudents}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#005DB8', marginTop: '0.3rem', fontWeight: '600' }}>
              {maleCount} Male / {femaleCount} Female
            </div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '1.15rem 1.25rem', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '0.74rem', color: '#64748B', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.5px' }}>
              Active Enrolled
            </div>
            <div style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.2rem)', fontWeight: '800', color: '#166534', marginTop: '0.2rem', lineHeight: 1.1 }}>
              {activeStudents}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#15803D', marginTop: '0.3rem', fontWeight: '600' }}>
              In scheduled classes
            </div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '1.15rem 1.25rem', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '0.74rem', color: '#64748B', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.5px' }}>
              Pending Review
            </div>
            <div style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.2rem)', fontWeight: '800', color: '#B45309', marginTop: '0.2rem', lineHeight: 1.1 }}>
              {pendingStudents}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#D97706', marginTop: '0.3rem', fontWeight: '600' }}>
              Awaiting faculty
            </div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '1.15rem 1.25rem', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '0.74rem', color: '#64748B', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.5px' }}>
              Academic Programs
            </div>
            <div style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.2rem)', fontWeight: '800', color: '#005DB8', marginTop: '0.2rem', lineHeight: 1.1 }}>
              6
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.3rem' }}>
              Qur'an, Tajweed & Fiqh
            </div>
          </div>

        </div>

        {/* ===================== FILTER & SEARCH TOOLBAR ===================== */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '1rem 1.25rem',
          border: '1px solid #E2E8F0',
          marginBottom: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          alignItems: 'center',
          boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
        }}>
          {/* Search Box */}
          <div style={{ flex: '1 1 240px', minWidth: 'min(100%, 200px)', position: 'relative' }}>
            <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }}>
              <IconSearch size={16} color="#94A3B8" />
            </span>
            <input
              type="text"
              placeholder="Search student, ID, email, WhatsApp, city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.3rem',
                borderRadius: '10px',
                border: '1.5px solid #CBD5E1',
                fontSize: '0.9rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Program Filter */}
          <div style={{ flex: '1 1 150px', minWidth: 'min(100%, 130px)' }}>
            <select
              value={filterProgram}
              onChange={(e) => setFilterProgram(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: '10px',
                border: '1.5px solid #CBD5E1',
                fontSize: '0.86rem',
                background: '#FFFFFF',
                boxSizing: 'border-box'
              }}
            >
              <option value="ALL">All Programs</option>
              <option value="Nuurul Bayaan">Nuurul Bayaan</option>
              <option value="Qur'an Recitation & Tajweed">Qur'an Recitation & Tajweed</option>
              <option value="Hifdh (Memorization)">Hifdh (Memorization)</option>
              <option value="Islamic Studies">Islamic Studies</option>
              <option value="Advanced Islamic Studies">Advanced Islamic Studies</option>
              <option value="Arabic Adhkaar & Daily Duas">Arabic Adhkaar & Daily Duas</option>
            </select>
          </div>

          {/* Status Filter */}
          <div style={{ flex: '1 1 130px', minWidth: 'min(100%, 120px)' }}>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: '10px',
                border: '1.5px solid #CBD5E1',
                fontSize: '0.86rem',
                background: '#FFFFFF',
                boxSizing: 'border-box'
              }}
            >
              <option value="ALL">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Assessment Scheduled">Assessment Scheduled</option>
              <option value="Pending Review">Pending Review</option>
              <option value="Graduated">Graduated</option>
            </select>
          </div>

          {/* Country Filter */}
          <div style={{ flex: '1 1 130px', minWidth: 'min(100%, 120px)' }}>
            <select
              value={filterCountry}
              onChange={(e) => setFilterCountry(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: '10px',
                border: '1.5px solid #CBD5E1',
                fontSize: '0.86rem',
                background: '#FFFFFF',
                boxSizing: 'border-box'
              }}
            >
              <option value="ALL">All Countries</option>
              {countriesData.map((c) => (
                <option key={c.name} value={c.name}>
                  {getFlagEmoji(c.iso)} {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Gender Filter */}
          <div style={{ flex: '1 1 110px', minWidth: 'min(100%, 100px)' }}>
            <select
              value={filterGender}
              onChange={(e) => setFilterGender(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: '10px',
                border: '1.5px solid #CBD5E1',
                fontSize: '0.86rem',
                background: '#FFFFFF',
                boxSizing: 'border-box'
              }}
            >
              <option value="ALL">All Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Reset Filters button */}
          {(searchTerm || filterProgram !== 'ALL' || filterStatus !== 'ALL' || filterGender !== 'ALL' || filterCountry !== 'ALL') && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setFilterProgram('ALL');
                setFilterStatus('ALL');
                setFilterGender('ALL');
                setFilterCountry('ALL');
              }}
              style={{
                padding: '0.65rem 1rem',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                background: '#F1F5F9',
                fontSize: '0.82rem',
                cursor: 'pointer',
                fontWeight: '600',
                color: '#475569'
              }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* ===================== MASTER STUDENTS CONTAINER ===================== */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '1.15rem 1.25rem',
            borderBottom: '1px solid #E2E8F0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            <div>
              <h2 style={{ fontSize: '1.1rem', color: '#031122', margin: 0, fontWeight: '700' }}>
                All Enrolled Students ({filteredStudents.length} Records)
              </h2>
              <p style={{ color: '#64748B', fontSize: '0.8rem', margin: '0.15rem 0 0 0' }}>
                Manage student records admitted from online applications & WhatsApp admissions.
              </p>
            </div>
          </div>

          {/* Empty State */}
          {filteredStudents.length === 0 ? (
            <div style={{ padding: '3.5rem 1rem', textAlign: 'center', color: '#94A3B8' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.85rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(0, 93, 184, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IconUsers size={28} color="#005DB8" />
                </div>
              </div>
              <h3 style={{ margin: '0 0 0.4rem 0', fontWeight: '700', color: '#031122', fontSize: '1.1rem' }}>
                No Student Records Found
              </h3>
              <p style={{ margin: '0 auto 1.5rem auto', fontSize: '0.88rem', color: '#64748B', maxWidth: '440px' }}>
                No students match your filter or database is empty. Click below to add a student.
              </p>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(true)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #C5A869 0%, #BA8E35 100%)',
                  color: '#FFFFFF',
                  fontWeight: '700',
                  fontSize: '0.92rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 14px rgba(197, 168, 105, 0.4)'
                }}
              >
                <IconPlus size={16} color="#FFFFFF" />
                <span>+ Admit New Student</span>
              </button>
            </div>
          ) : (
            <>
              {/* 1. DESKTOP / TABLET VIEW (>= 768px) */}
              <div className="admin-desktop-table">
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ background: '#F8FAFC', borderBottom: '1.5px solid #E2E8F0', color: '#475569', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      <th style={{ padding: '0.9rem 1.15rem' }}>Student ID & Name</th>
                      <th style={{ padding: '0.9rem 1rem' }}>Contact / Location</th>
                      <th style={{ padding: '0.9rem 1rem' }}>Program & Level</th>
                      <th style={{ padding: '0.9rem 1rem' }}>Schedule</th>
                      <th style={{ padding: '0.9rem 1rem' }}>Faculty Assigned</th>
                      <th style={{ padding: '0.9rem 1rem' }}>Status</th>
                      <th style={{ padding: '0.9rem 1.15rem', textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((student) => {
                      const statusBadge = getStatusBadge(student.status);
                      return (
                        <tr
                          key={student.id}
                          style={{
                            borderBottom: '1px solid #F1F5F9',
                            transition: 'background-color 0.15s'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FAF8F5'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                          {/* ID & Name & Dates */}
                          <td style={{ padding: '0.9rem 1.15rem' }}>
                            <div style={{ fontWeight: '700', color: '#031122' }}>
                              {student.fullName}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: '#005DB8', fontWeight: '600' }}>
                              {student.id}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                              {student.gender} {student.guardianName ? `• Guardian: ${student.guardianName}` : ''}
                            </div>
                            <div style={{ fontSize: '0.73rem', color: '#475569', marginTop: '0.2rem', display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                              <span><strong>DOB:</strong> {student.dateOfBirth || 'Not specified'}</span>
                              <span style={{ color: '#005DB8' }}><strong>Registered:</strong> {student.enrolledDate ? new Date(student.enrolledDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'N/A'}</span>
                            </div>
                          </td>

                          {/* Contact */}
                          <td style={{ padding: '0.9rem 1rem' }}>
                            <div style={{ fontSize: '0.84rem', color: '#1E293B' }}>
                              {student.email}
                            </div>
                            <a
                              href={`https://wa.me/${(student.whatsappNumber || '').replace(/[^0-9]/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ fontSize: '0.8rem', color: '#15803D', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                            >
                              <IconWhatsApp size={14} color="#15803D" />
                              <span>{student.whatsappNumber}</span>
                            </a>
                            <div style={{ fontSize: '0.78rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.2rem' }}>
                              <span>{getFlagEmoji((getCountryByName(student.country) || {}).iso)}</span>
                              <span>{student.city ? `${student.city}, ` : ''}{student.country}</span>
                            </div>
                          </td>

                          {/* Program */}
                          <td style={{ padding: '0.9rem 1rem' }}>
                            <div style={{ fontWeight: '600', color: '#1E293B', fontSize: '0.86rem' }}>
                              {student.program}
                            </div>
                            <span style={{ fontSize: '0.74rem', background: '#F1F5F9', padding: '0.15rem 0.45rem', borderRadius: '4px', color: '#475569' }}>
                              {student.learningLevel} • {student.classPreference}
                            </span>
                          </td>

                          {/* Schedule */}
                          <td style={{ padding: '0.9rem 1rem', fontSize: '0.82rem', color: '#475569' }}>
                            <div>{student.preferredSchedule}</div>
                            <div style={{ color: '#64748B', fontSize: '0.76rem' }}>{student.preferredDays}</div>
                          </td>

                          {/* Assigned Teacher */}
                          <td style={{ padding: '0.9rem 1rem', fontSize: '0.84rem' }}>
                            <div style={{ fontWeight: '600', color: student.assignedTeacher === 'Unassigned' ? '#DC2626' : '#031122' }}>
                              {student.assignedTeacher}
                            </div>
                          </td>

                          {/* Status */}
                          <td style={{ padding: '0.9rem 1rem' }}>
                            <span style={{
                              background: statusBadge.bg,
                              color: statusBadge.color,
                              border: `1px solid ${statusBadge.border}`,
                              padding: '0.2rem 0.6rem',
                              borderRadius: '12px',
                              fontSize: '0.76rem',
                              fontWeight: '700',
                              display: 'inline-block'
                            }}>
                              {student.status}
                            </span>
                          </td>

                          {/* Actions */}
                          <td style={{ padding: '0.9rem 1.15rem', textAlign: 'right' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.35rem' }}>
                              <button
                                type="button"
                                onClick={() => setSelectedStudent(student)}
                                title="View Full Student Dossier"
                                style={{
                                  padding: '0.4rem 0.65rem',
                                  borderRadius: '6px',
                                  background: '#F8FAFC',
                                  border: '1px solid #CBD5E1',
                                  fontSize: '0.78rem',
                                  fontWeight: '600',
                                  color: '#031122',
                                  cursor: 'pointer',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.25rem'
                                }}
                              >
                                <IconEye size={13} color="#031122" />
                                <span>Dossier</span>
                              </button>

                              <button
                                type="button"
                                onClick={() => setEditingStudent({ ...student })}
                                title="Edit & Assign Faculty"
                                style={{
                                  padding: '0.4rem 0.65rem',
                                  borderRadius: '6px',
                                  background: '#005DB8',
                                  border: 'none',
                                  fontSize: '0.78rem',
                                  fontWeight: '600',
                                  color: '#FFFFFF',
                                  cursor: 'pointer',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.25rem'
                                }}
                              >
                                <IconEdit size={13} color="#FFFFFF" />
                                <span>Edit</span>
                              </button>

                              <button
                                type="button"
                                onClick={() => handleDeleteStudent(student.id, student.fullName)}
                                title="Delete Record"
                                style={{
                                  padding: '0.4rem 0.55rem',
                                  borderRadius: '6px',
                                  background: '#FEE2E2',
                                  border: '1px solid #FCA5A5',
                                  fontSize: '0.78rem',
                                  color: '#991B1B',
                                  cursor: 'pointer'
                                }}
                              >
                                <IconTrash size={13} color="#991B1B" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* 2. MOBILE SMART CARDS VIEW (< 768px) */}
              <div className="admin-mobile-cards">
                {filteredStudents.map((student) => {
                  const statusBadge = getStatusBadge(student.status);
                  return (
                    <div
                      key={student.id}
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        borderRadius: '14px',
                        padding: '1.1rem',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem'
                      }}
                    >
                      {/* Card Header: Name + ID + Status */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <div>
                          <div style={{ fontWeight: '700', fontSize: '1.02rem', color: '#031122' }}>
                            {student.fullName}
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.15rem' }}>
                            <span style={{ fontSize: '0.76rem', color: '#005DB8', fontWeight: '700', background: 'rgba(0,93,184,0.08)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>
                              {student.id}
                            </span>
                            <span style={{ fontSize: '0.74rem', color: '#64748B' }}>
                              • {student.gender} {student.guardianName ? `(${student.guardianName})` : ''}
                            </span>
                          </div>
                        </div>

                        <span style={{
                          background: statusBadge.bg,
                          color: statusBadge.color,
                          border: `1px solid ${statusBadge.border}`,
                          padding: '0.2rem 0.55rem',
                          borderRadius: '10px',
                          fontSize: '0.74rem',
                          fontWeight: '700',
                          whiteSpace: 'nowrap'
                        }}>
                          {student.status}
                        </span>
                      </div>

                      {/* Program & Schedule Chip */}
                      <div style={{ background: '#F8FAFC', padding: '0.65rem 0.85rem', borderRadius: '8px', fontSize: '0.82rem' }}>
                        <div style={{ fontWeight: '700', color: '#005DB8', marginBottom: '0.2rem' }}>
                          {student.program}
                        </div>
                        <div style={{ color: '#475569', fontSize: '0.78rem' }}>
                          {student.learningLevel} • {student.classPreference}
                        </div>
                        <div style={{ color: '#64748B', fontSize: '0.76rem', marginTop: '0.2rem' }}>
                          🕒 {student.preferredSchedule} ({student.preferredDays})
                        </div>
                      </div>

                      {/* Contact & Location info */}
                      <div style={{ fontSize: '0.82rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span>{getFlagEmoji((getCountryByName(student.country) || {}).iso)}</span>
                          <span style={{ fontWeight: '500' }}>{student.city ? `${student.city}, ` : ''}{student.country}</span>
                        </div>
                        <div style={{ color: '#64748B', fontSize: '0.78rem' }}>
                          ✉️ {student.email}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#031122' }}>
                          👨‍🏫 <strong>Tutor:</strong> {student.assignedTeacher || 'Ustadh Nasir'}
                        </div>
                      </div>

                      {/* Quick Mobile Actions */}
                      <div style={{ display: 'flex', gap: '0.4rem', paddingTop: '0.4rem', borderTop: '1px solid #F1F5F9', flexWrap: 'wrap' }}>
                        {/* 1-Tap WhatsApp Link */}
                        <a
                          href={`https://wa.me/${(student.whatsappNumber || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Assalamu Alaikum ${student.fullName},\n\nThis is Al-Irshaad Islamic Institute Administration regarding your enrollment (ID: ${student.id}).`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            flex: '1 1 100px',
                            padding: '0.55rem 0.75rem',
                            borderRadius: '8px',
                            background: '#F0FDF4',
                            border: '1px solid #BBF7D0',
                            color: '#15803D',
                            fontSize: '0.8rem',
                            fontWeight: '700',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.35rem'
                          }}
                        >
                          <IconWhatsApp size={14} color="#15803D" />
                          <span>WhatsApp</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => setSelectedStudent(student)}
                          style={{
                            flex: '1 1 70px',
                            padding: '0.55rem 0.75rem',
                            borderRadius: '8px',
                            background: '#F8FAFC',
                            border: '1px solid #CBD5E1',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            color: '#031122',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.3rem'
                          }}
                        >
                          <IconEye size={13} color="#031122" />
                          <span>Dossier</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setEditingStudent({ ...student })}
                          style={{
                            flex: '1 1 60px',
                            padding: '0.55rem 0.75rem',
                            borderRadius: '8px',
                            background: '#005DB8',
                            border: 'none',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            color: '#FFFFFF',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.3rem'
                          }}
                        >
                          <IconEdit size={13} color="#FFFFFF" />
                          <span>Edit</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDeleteStudent(student.id, student.fullName)}
                          style={{
                            padding: '0.55rem 0.75rem',
                            borderRadius: '8px',
                            background: '#FEE2E2',
                            border: '1px solid #FCA5A5',
                            fontSize: '0.8rem',
                            color: '#991B1B',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                          title="Delete Record"
                        >
                          <IconTrash size={13} color="#991B1B" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

      </div>

      {/* ===================== MODAL 1: VIEW FULL DOSSIER ===================== */}
      {selectedStudent && (
        <div className="alir-modal-overlay" onClick={() => setSelectedStudent(null)}>
          <div className="alir-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.85rem' }}>
              <div>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#005DB8', fontWeight: '700', letterSpacing: '0.5px' }}>
                  Al-Irshaad Student Dossier
                </span>
                <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: '#031122', margin: '0.15rem 0 0 0', fontWeight: '700' }}>
                  {selectedStudent.fullName}
                </h2>
                <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '0.2rem' }}>
                  ID: <strong style={{ color: '#C5A869' }}>{selectedStudent.id}</strong> | Status: <strong>{selectedStudent.status}</strong>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedStudent(null)}
                style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#64748B', padding: '0.25rem' }}
                aria-label="Close dossier"
              >
                ✕
              </button>
            </div>

            <div className="alir-modal-grid-2" style={{ marginBottom: '1.25rem', fontSize: '0.88rem' }}>
              <div style={{ background: '#F8FAFC', padding: '0.85rem', borderRadius: '10px' }}>
                <strong style={{ display: 'block', color: '#475569', fontSize: '0.75rem', textTransform: 'uppercase' }}>Email Address</strong>
                <span style={{ color: '#031122', wordBreak: 'break-all' }}>{selectedStudent.email}</span>
              </div>

              <div style={{ background: '#F8FAFC', padding: '0.85rem', borderRadius: '10px' }}>
                <strong style={{ display: 'block', color: '#475569', fontSize: '0.75rem', textTransform: 'uppercase' }}>WhatsApp Number</strong>
                <span style={{ color: '#031122' }}>{selectedStudent.whatsappNumber}</span>
              </div>

              <div style={{ background: '#F8FAFC', padding: '0.85rem', borderRadius: '10px' }}>
                <strong style={{ display: 'block', color: '#475569', fontSize: '0.75rem', textTransform: 'uppercase' }}>Guardian Name / Contact</strong>
                <span style={{ color: '#031122' }}>{selectedStudent.guardianName || 'Self / Adult'}</span>
              </div>

              <div style={{ background: '#F8FAFC', padding: '0.85rem', borderRadius: '10px' }}>
                <strong style={{ display: 'block', color: '#475569', fontSize: '0.75rem', textTransform: 'uppercase' }}>Gender</strong>
                <span style={{ color: '#031122' }}>{selectedStudent.gender || 'Not specified'}</span>
              </div>

              <div style={{ background: '#F8FAFC', padding: '0.85rem', borderRadius: '10px' }}>
                <strong style={{ display: 'block', color: '#475569', fontSize: '0.75rem', textTransform: 'uppercase' }}>Date of Birth</strong>
                <span style={{ color: '#031122', fontWeight: '700' }}>{selectedStudent.dateOfBirth || 'Not specified'}</span>
              </div>

              <div style={{ background: '#F8FAFC', padding: '0.85rem', borderRadius: '10px' }}>
                <strong style={{ display: 'block', color: '#475569', fontSize: '0.75rem', textTransform: 'uppercase' }}>Date Registered (Enrolled)</strong>
                <span style={{ color: '#005DB8', fontWeight: '700' }}>
                  {selectedStudent.enrolledDate ? new Date(selectedStudent.enrolledDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'N/A'}
                </span>
              </div>

              <div style={{ background: '#F8FAFC', padding: '0.85rem', borderRadius: '10px' }}>
                <strong style={{ display: 'block', color: '#475569', fontSize: '0.75rem', textTransform: 'uppercase' }}>Location & Country</strong>
                <span style={{ color: '#031122', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>{getFlagEmoji((getCountryByName(selectedStudent.country) || {}).iso)}</span>
                  <span>{selectedStudent.city ? `${selectedStudent.city}, ` : ''}{selectedStudent.country}</span>
                </span>
              </div>

              <div style={{ background: '#F8FAFC', padding: '0.85rem', borderRadius: '10px' }}>
                <strong style={{ display: 'block', color: '#475569', fontSize: '0.75rem', textTransform: 'uppercase' }}>Enrolled Program</strong>
                <span style={{ color: '#005DB8', fontWeight: '700' }}>{selectedStudent.program}</span>
              </div>

              <div style={{ background: '#F8FAFC', padding: '0.85rem', borderRadius: '10px' }}>
                <strong style={{ display: 'block', color: '#475569', fontSize: '0.75rem', textTransform: 'uppercase' }}>Class Format & Level</strong>
                <span style={{ color: '#031122' }}>{selectedStudent.classPreference} ({selectedStudent.learningLevel})</span>
              </div>

              <div style={{ background: '#F8FAFC', padding: '0.85rem', borderRadius: '10px' }}>
                <strong style={{ display: 'block', color: '#475569', fontSize: '0.75rem', textTransform: 'uppercase' }}>Preferred Timing & Days</strong>
                <span style={{ color: '#031122' }}>{selectedStudent.preferredSchedule} - {selectedStudent.preferredDays}</span>
              </div>
            </div>

            {/* Academic Background */}
            <div style={{ background: '#FAF8F5', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '0.9rem', color: '#031122', fontWeight: '700', marginBottom: '0.5rem' }}>
                Academic Background & Learning Ambition
              </h3>
              <p style={{ margin: '0 0 0.4rem 0', fontSize: '0.84rem' }}>
                <strong>Prior Qur'anic Education:</strong> {selectedStudent.previousQuranEducation || 'None'}
              </p>
              <p style={{ margin: '0 0 0.4rem 0', fontSize: '0.84rem' }}>
                <strong>Prior Islamic Studies:</strong> {selectedStudent.previousIslamicStudies || 'None'}
              </p>
              <p style={{ margin: '0 0 0.4rem 0', fontSize: '0.84rem' }}>
                <strong>Target Goal:</strong> {selectedStudent.learningGoal || 'Mastery of Qur\'an & Tajweed'}
              </p>
            </div>

            {/* Admin Notes */}
            <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '12px', padding: '1rem', marginBottom: '1.25rem' }}>
              <strong style={{ display: 'block', color: '#1E40AF', fontSize: '0.82rem', marginBottom: '0.2rem' }}>
                Internal Administrative Notes
              </strong>
              <p style={{ margin: 0, fontSize: '0.86rem', color: '#1E3A8A' }}>
                {selectedStudent.adminNotes || 'No administrative notes recorded.'}
              </p>
            </div>

            {/* Quick Actions & WhatsApp Welcome */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a
                href={`https://wa.me/${(selectedStudent.whatsappNumber || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Assalaamu Alaykum ${selectedStudent.fullName},\n\nWe are pleased to confirm your admission to AL-IRSHAAD ISLAMIC INSTITUTE.\n\nStudent ID: ${selectedStudent.id}\nEnrolled Program: ${selectedStudent.program}\nAssigned Teacher: ${selectedStudent.assignedTeacher}\nClass Type: ${selectedStudent.classPreference}\n\nOur academic office will contact you shortly to schedule your live orientation class. BaarakAllahu Feekum!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.7rem 1.15rem',
                  borderRadius: '8px',
                  background: 'rgba(37, 211, 102, 0.12)',
                  color: '#128C7E',
                  border: '1px solid rgba(37, 211, 102, 0.4)',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  flexGrow: 1
                }}
              >
                <IconWhatsApp size={16} color="#128C7E" />
                <span>Send WhatsApp Admission Confirmation</span>
              </a>

              <div style={{ display: 'flex', gap: '0.6rem', width: 'auto', flexWrap: 'wrap', flexGrow: 1, justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => {
                    const studentToEdit = { ...selectedStudent };
                    setSelectedStudent(null);
                    setEditingStudent(studentToEdit);
                  }}
                  style={{
                    padding: '0.7rem 1.25rem',
                    borderRadius: '8px',
                    background: '#005DB8',
                    color: '#FFFFFF',
                    border: 'none',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem',
                    flexGrow: 1
                  }}
                >
                  <IconEdit size={14} color="#FFFFFF" />
                  <span>Edit Record</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedStudent(null)}
                  style={{
                    padding: '0.7rem 1.15rem',
                    borderRadius: '8px',
                    background: '#F1F5F9',
                    color: '#475569',
                    border: 'none',
                    fontWeight: '600',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    flexGrow: 1
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================== MODAL 2: EDIT / ASSIGN FACULTY ===================== */}
      {editingStudent && (
        <div className="alir-modal-overlay" onClick={() => setEditingStudent(null)}>
          <div className="alir-modal-dialog primary-border" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(1.15rem, 3vw, 1.35rem)', color: '#031122', margin: 0, fontWeight: '700' }}>
                  Edit Student & Assign Faculty
                </h2>
                <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
                  Student ID: {editingStudent.id} ({editingStudent.fullName})
                </span>
              </div>
              <button
                type="button"
                onClick={() => setEditingStudent(null)}
                style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#64748B', padding: '0.25rem' }}
                aria-label="Close edit modal"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveEdit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '0.85rem', marginBottom: '1.25rem' }}>
                
                {/* Full Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={editingStudent.fullName}
                    onChange={(e) => setEditingStudent({ ...editingStudent, fullName: e.target.value })}
                    required
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={editingStudent.email}
                    onChange={(e) => setEditingStudent({ ...editingStudent, email: e.target.value })}
                    required
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Gender */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Gender *
                  </label>
                  <select
                    value={editingStudent.gender || 'Male'}
                    onChange={(e) => setEditingStudent({ ...editingStudent, gender: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', background: '#FFFFFF', fontWeight: '600', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                {/* Date of Birth */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={editingStudent.dateOfBirth || ''}
                    onChange={(e) => setEditingStudent({ ...editingStudent, dateOfBirth: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Date Registered */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Date Registered (Enrolled Date)
                  </label>
                  <input
                    type="date"
                    value={editingStudent.enrolledDate ? editingStudent.enrolledDate.slice(0, 10) : ''}
                    onChange={(e) => setEditingStudent({ ...editingStudent, enrolledDate: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Guardian Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    placeholder="Leave blank if self / adult"
                    value={editingStudent.guardianName || ''}
                    onChange={(e) => setEditingStudent({ ...editingStudent, guardianName: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Searchable Country Selector with Flag */}
                <div>
                  <SearchableCountrySelect
                    value={editingStudent.country || 'United States'}
                    label="Country of Residence *"
                    onChange={(selectedC) => {
                      setEditingStudent({
                        ...editingStudent,
                        country: selectedC.name,
                        countryCode: selectedC.dialCode,
                        city: selectedC.cities[0] || '',
                        customCity: ''
                      });
                    }}
                  />
                </div>

                {/* WhatsApp with Country Code Dropdown */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    WhatsApp Number (with Country Code) *
                  </label>
                  <div style={{ display: 'flex', gap: '0.35rem' }}>
                    <select
                      value={editingStudent.countryCode || (getCountryByName(editingStudent.country).dialCode)}
                      onChange={(e) => {
                        const found = countriesData.find(c => c.dialCode === e.target.value);
                        setEditingStudent({
                          ...editingStudent,
                          countryCode: e.target.value,
                          country: found ? found.name : editingStudent.country,
                          city: found && found.cities.length > 0 ? found.cities[0] : editingStudent.city
                        });
                      }}
                      style={{
                        width: '115px',
                        padding: '0.7rem 0.35rem',
                        borderRadius: '8px',
                        border: '1.5px solid #CBD5E1',
                        background: '#F8FAFC',
                        fontWeight: '700',
                        fontSize: '0.82rem',
                        boxSizing: 'border-box'
                      }}
                    >
                      {countriesData.map((c) => (
                        <option key={c.name} value={c.dialCode}>
                          {getFlagEmoji(c.iso)} {c.dialCode}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      value={editingStudent.whatsappNumber}
                      onChange={(e) => setEditingStudent({ ...editingStudent, whatsappNumber: e.target.value })}
                      required
                      placeholder="e.g. 203 515 1469"
                      style={{ flex: 1, padding: '0.7rem 0.85rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.88rem', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                {/* Searchable City Selection Dropdown */}
                <div>
                  <SearchableCitySelect
                    cities={(getCountryByName(editingStudent.country || 'United States') || {}).cities || []}
                    value={editingStudent.city}
                    customValue={editingStudent.customCity}
                    label="City / Municipality *"
                    onChange={(selectedCity) => {
                      setEditingStudent({
                        ...editingStudent,
                        city: selectedCity,
                        customCity: selectedCity === 'CUSTOM_OTHER' ? (editingStudent.customCity || '') : ''
                      });
                    }}
                    onCustomChange={(customVal) => {
                      setEditingStudent({
                        ...editingStudent,
                        customCity: customVal,
                        city: 'CUSTOM_OTHER'
                      });
                    }}
                  />
                </div>

                {/* Status */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Enrollment Status *
                  </label>
                  <select
                    value={editingStudent.status}
                    onChange={(e) => setEditingStudent({ ...editingStudent, status: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontWeight: '600', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  >
                    <option value="Active">Active (Attending Classes)</option>
                    <option value="Assessment Scheduled">Assessment Scheduled</option>
                    <option value="Pending Review">Pending Review</option>
                    <option value="Graduated">Graduated / Certified</option>
                    <option value="Inactive">Inactive / Suspended</option>
                  </select>
                </div>

                {/* Assigned Teacher */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Assigned Tutor (Coordinates & Gives Class Timings) *
                  </label>
                  <select
                    value={editingStudent.assignedTeacher || 'Ustadh Nasir'}
                    onChange={(e) => setEditingStudent({ ...editingStudent, assignedTeacher: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontWeight: '700', color: '#005DB8', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  >
                    <option value="Ustadh Nasir">Ustadh Nasir (Head Tutor & Instructor)</option>
                    <option value="Ustadh Nasir (Class Timing Confirmed)">Ustadh Nasir (Class Timing Confirmed)</option>
                    <option value="Ustadh Nasir (Awaiting Timing Assignment)">Ustadh Nasir (Awaiting Timing Assignment)</option>
                  </select>
                </div>

                {/* Program */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Program
                  </label>
                  <select
                    value={editingStudent.program}
                    onChange={(e) => setEditingStudent({ ...editingStudent, program: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  >
                    <option value="Nuurul Bayaan">Nuurul Bayaan</option>
                    <option value="Qur'an Recitation & Tajweed">Qur'an Recitation & Tajweed</option>
                    <option value="Hifdh (Memorization)">Hifdh (Memorization)</option>
                    <option value="Islamic Studies">Islamic Studies</option>
                    <option value="Advanced Islamic Studies">Advanced Islamic Studies</option>
                    <option value="Arabic Adhkaar & Daily Duas">Arabic Adhkaar & Daily Duas</option>
                  </select>
                </div>

                {/* Preferred Schedule */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Schedule / Timetable
                  </label>
                  <input
                    type="text"
                    value={editingStudent.preferredSchedule}
                    onChange={(e) => setEditingStudent({ ...editingStudent, preferredSchedule: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Admin Notes */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Administrative Notes & Academic Progress
                  </label>
                  <textarea
                    rows="3"
                    value={editingStudent.adminNotes || ''}
                    onChange={(e) => setEditingStudent({ ...editingStudent, adminNotes: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                </div>

              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.6rem', flexWrap: 'wrap' }}>
                <button
                  type="submit"
                  style={{
                    padding: '0.75rem 1.6rem',
                    borderRadius: '8px',
                    background: '#005DB8',
                    color: '#FFFFFF',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    border: 'none',
                    cursor: 'pointer',
                    flexGrow: 1
                  }}
                >
                  Save Updates
                </button>
                <button
                  type="button"
                  onClick={() => setEditingStudent(null)}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    background: '#F1F5F9',
                    color: '#475569',
                    border: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    flexGrow: 1
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================== MODAL 3: ADMIT NEW STUDENT MANUALLY ===================== */}
      {isAddModalOpen && (
        <div className="alir-modal-overlay" onClick={() => setIsAddModalOpen(false)}>
          <div className="alir-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(1.15rem, 3vw, 1.35rem)', color: '#031122', margin: 0, fontWeight: '700' }}>
                  Direct Student Admission
                </h2>
                <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
                  Register a student directly into the database from email or WhatsApp applications.
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#64748B', padding: '0.25rem' }}
                aria-label="Close admission modal"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveNewStudent}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '0.85rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Abdullah Omar"
                    value={newStudentData.fullName}
                    onChange={(e) => setNewStudentData({ ...newStudentData, fullName: e.target.value })}
                    required
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="student.email@gmail.com"
                    value={newStudentData.email}
                    onChange={(e) => setNewStudentData({ ...newStudentData, email: e.target.value })}
                    required
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Gender *
                  </label>
                  <select
                    value={newStudentData.gender}
                    onChange={(e) => setNewStudentData({ ...newStudentData, gender: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', background: '#FFFFFF', fontWeight: '600', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    value={newStudentData.dateOfBirth}
                    onChange={(e) => setNewStudentData({ ...newStudentData, dateOfBirth: e.target.value })}
                    required
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Date Registered (Admission Date) *
                  </label>
                  <input
                    type="date"
                    value={newStudentData.enrolledDate || new Date().toISOString().slice(0, 10)}
                    onChange={(e) => setNewStudentData({ ...newStudentData, enrolledDate: e.target.value })}
                    required
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Guardian Name (if minor)
                  </label>
                  <input
                    type="text"
                    placeholder="Parent / Guardian Name"
                    value={newStudentData.guardianName}
                    onChange={(e) => setNewStudentData({ ...newStudentData, guardianName: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Searchable Country Selector with Flag */}
                <div>
                  <SearchableCountrySelect
                    value={newStudentData.country}
                    label="Country of Residence *"
                    onChange={(selected) => {
                      setNewStudentData({
                        ...newStudentData,
                        country: selected.name,
                        countryCode: selected.dialCode,
                        city: selected.cities[0] || '',
                        customCity: ''
                      });
                    }}
                  />
                </div>

                {/* WhatsApp Number with Country Code Dropdown */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    WhatsApp Contact Number (with Country Code) *
                  </label>
                  <div style={{ display: 'flex', gap: '0.35rem' }}>
                    <select
                      value={newStudentData.countryCode}
                      onChange={(e) => {
                        const found = countriesData.find(c => c.dialCode === e.target.value);
                        setNewStudentData({
                          ...newStudentData,
                          countryCode: e.target.value,
                          country: found ? found.name : newStudentData.country,
                          city: found && found.cities.length > 0 ? found.cities[0] : newStudentData.city
                        });
                      }}
                      style={{
                        width: '115px',
                        padding: '0.7rem 0.35rem',
                        borderRadius: '8px',
                        border: '1.5px solid #CBD5E1',
                        background: '#F8FAFC',
                        fontWeight: '700',
                        fontSize: '0.82rem',
                        boxSizing: 'border-box'
                      }}
                    >
                      {countriesData.map((c) => (
                        <option key={c.name} value={c.dialCode}>
                          {getFlagEmoji(c.iso)} {c.dialCode}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      placeholder="e.g. 203 515 1469 or 803 123 4567"
                      value={newStudentData.phoneRaw || newStudentData.whatsappNumber}
                      onChange={(e) => setNewStudentData({ ...newStudentData, phoneRaw: e.target.value, whatsappNumber: e.target.value })}
                      required
                      style={{ flex: 1, padding: '0.7rem 0.85rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.88rem', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                {/* Searchable City Selector Dropdown */}
                <div>
                  <SearchableCitySelect
                    cities={(getCountryByName(newStudentData.country) || {}).cities || []}
                    value={newStudentData.city}
                    customValue={newStudentData.customCity}
                    label="City / Municipality *"
                    onChange={(selectedCity) => {
                      setNewStudentData({
                        ...newStudentData,
                        city: selectedCity,
                        customCity: selectedCity === 'CUSTOM_OTHER' ? (newStudentData.customCity || '') : ''
                      });
                    }}
                    onCustomChange={(customVal) => {
                      setNewStudentData({
                        ...newStudentData,
                        customCity: customVal,
                        city: 'CUSTOM_OTHER'
                      });
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Enrolled Program *
                  </label>
                  <select
                    value={newStudentData.program}
                    onChange={(e) => setNewStudentData({ ...newStudentData, program: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  >
                    <option value="Nuurul Bayaan">Nuurul Bayaan</option>
                    <option value="Qur'an Recitation & Tajweed">Qur'an Recitation & Tajweed</option>
                    <option value="Hifdh (Memorization)">Hifdh (Memorization)</option>
                    <option value="Islamic Studies">Islamic Studies</option>
                    <option value="Advanced Islamic Studies">Advanced Islamic Studies</option>
                    <option value="Arabic Adhkaar & Daily Duas">Arabic Adhkaar & Daily Duas</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Class Preference & Level
                  </label>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <select
                      value={newStudentData.classPreference}
                      onChange={(e) => setNewStudentData({ ...newStudentData, classPreference: e.target.value })}
                      style={{ width: '50%', padding: '0.7rem 0.5rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.84rem', boxSizing: 'border-box' }}
                    >
                      <option value="1-on-1 (Private)">1-on-1 (Private)</option>
                      <option value="Small Group">Small Group</option>
                    </select>
                    <select
                      value={newStudentData.learningLevel}
                      onChange={(e) => setNewStudentData({ ...newStudentData, learningLevel: e.target.value })}
                      style={{ width: '50%', padding: '0.7rem 0.5rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.84rem', boxSizing: 'border-box' }}
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Assigned Tutor (Coordinates & Gives Class Timings) *
                  </label>
                  <select
                    value={newStudentData.assignedTeacher}
                    onChange={(e) => setNewStudentData({ ...newStudentData, assignedTeacher: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontWeight: '700', color: '#005DB8', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  >
                    <option value="Ustadh Nasir">Ustadh Nasir (Head Tutor & Instructor)</option>
                    <option value="Ustadh Nasir (Class Timing Confirmed)">Ustadh Nasir (Class Timing Confirmed)</option>
                    <option value="Ustadh Nasir (Awaiting Timing Assignment)">Ustadh Nasir (Awaiting Timing Assignment)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Initial Status *
                  </label>
                  <select
                    value={newStudentData.status}
                    onChange={(e) => setNewStudentData({ ...newStudentData, status: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontWeight: '600', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  >
                    <option value="Active">Active</option>
                    <option value="Assessment Scheduled">Assessment Scheduled</option>
                    <option value="Pending Review">Pending Review</option>
                  </select>
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Preferred Schedule & Timing
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Evening (5:00 PM - 7:00 PM EST) - 5 Days/Week"
                    value={newStudentData.preferredSchedule}
                    onChange={(e) => setNewStudentData({ ...newStudentData, preferredSchedule: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>
                    Administrative Admission Notes
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Notes from email or WhatsApp consultation..."
                    value={newStudentData.adminNotes}
                    onChange={(e) => setNewStudentData({ ...newStudentData, adminNotes: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.6rem', flexWrap: 'wrap' }}>
                <button
                  type="submit"
                  style={{
                    padding: '0.75rem 1.6rem',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #C5A869 0%, #BA8E35 100%)',
                    color: '#FFFFFF',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    boxShadow: '0 4px 14px rgba(197, 168, 105, 0.4)',
                    flexGrow: 1
                  }}
                >
                  <IconPlus size={16} color="#FFFFFF" />
                  <span>Admit & Register Student</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    background: '#F1F5F9',
                    color: '#475569',
                    border: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    flexGrow: 1
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}


