/**
 * Al-Irshaad Islamic Institute
 * Student Database & Administration Service
 * Manages persistent storage, student records, admin accounts, and admission operations.
 */

const STORAGE_KEY_STUDENTS = 'alirshaad_students_db_v4';
const STORAGE_KEY_AUTH_STUDENT = 'alirshaad_current_student_v4';
const STORAGE_KEY_AUTH_ADMIN = 'alirshaad_admin_session_v4';
const STORAGE_KEY_ADMIN_USERS = 'alirshaad_admin_accounts_v5';

// Default Clean State: 0 initial dummy student accounts
const INITIAL_STUDENTS = [];

// Official Administrator Accounts (Authorized by Al-Irshaad Islamic Institute)
const INITIAL_ADMINS = [
  {
    id: 'ADMIN-001',
    name: 'Al-Irshaad Admissions Dean',
    email: 'instituteofislamicguidance@gmail.com',
    username: 'instituteofislamicguidance',
    password: 'Alhamdulillah@94',
    role: 'Super Administrator',
    createdAt: '2026-09-01T00:00:00.000Z'
  },
  {
    id: 'ADMIN-002',
    name: 'Executive Registry Office',
    email: 'lamidiabdulhameedolawale@gmail.com',
    username: 'lamidiabdulhameedolawale',
    password: 'Olawale!!!',
    role: 'Executive Administrator',
    createdAt: '2026-09-01T00:00:00.000Z'
  }
];



// Helper to get raw students from localStorage
function getRawStudents() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_STUDENTS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_STUDENTS, JSON.stringify(INITIAL_STUDENTS));
      return INITIAL_STUDENTS;
    }
    return JSON.parse(raw) || [];
  } catch (e) {
    console.error('Error loading students DB:', e);
    return [];
  }
}

// Helper to save students
function saveRawStudents(students) {
  try {
    localStorage.setItem(STORAGE_KEY_STUDENTS, JSON.stringify(students));
  } catch (e) {
    console.error('Error saving students DB:', e);
  }
}

// Helper to get admin users
function getRawAdmins() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ADMIN_USERS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_ADMIN_USERS, JSON.stringify(INITIAL_ADMINS));
      return INITIAL_ADMINS;
    }
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.length === 0) {
      localStorage.setItem(STORAGE_KEY_ADMIN_USERS, JSON.stringify(INITIAL_ADMINS));
      return INITIAL_ADMINS;
    }
    return parsed;
  } catch (e) {
    console.error('Error loading admin accounts:', e);
    return INITIAL_ADMINS;
  }
}

// Helper to save admin users
function saveRawAdmins(admins) {
  try {
    localStorage.setItem(STORAGE_KEY_ADMIN_USERS, JSON.stringify(admins));
  } catch (e) {
    console.error('Error saving admin accounts:', e);
  }
}

export const studentDatabase = {
  // Get all registered students
  getAllStudents() {
    return getRawStudents();
  },

  // Get student by ID or Email
  getStudentById(id) {
    const students = getRawStudents();
    return students.find(s => s.id === id || (s.email && s.email.toLowerCase() === id.toLowerCase())) || null;
  },

  // Add new student manually by Admin
  adminAddStudent(studentData) {
    const students = getRawStudents();
    
    // Check if email already registered (if email provided)
    if (studentData.email && studentData.email.trim()) {
      const existing = students.find(s => s.email && s.email.toLowerCase() === studentData.email.trim().toLowerCase());
      if (existing) {
        throw new Error(`A student record with email "${studentData.email}" already exists (ID: ${existing.id}).`);
      }
    }

    const uniqueNum = Math.floor(1000 + Math.random() * 9000);
    const newStudent = {
      id: studentData.id || `ALIR-2026-${uniqueNum}`,
      fullName: studentData.fullName ? studentData.fullName.trim() : '',
      email: studentData.email ? studentData.email.trim() : '',
      whatsappNumber: studentData.whatsappNumber ? studentData.whatsappNumber.trim() : '',
      dateOfBirth: studentData.dateOfBirth || '',
      gender: studentData.gender || 'Male',
      guardianName: studentData.guardianName || '',
      country: studentData.country || 'United States',
      city: studentData.city || '',
      program: studentData.program || 'Nuurul Bayaan',
      learningLevel: studentData.learningLevel || 'Beginner',
      classPreference: studentData.classPreference || '1-on-1 (Private)',
      preferredSchedule: studentData.preferredSchedule || 'Flexible Timing',
      preferredDays: studentData.preferredDays || '5 Days / Week',
      previousQuranEducation: studentData.previousQuranEducation || 'None',
      previousIslamicStudies: studentData.previousIslamicStudies || 'General fundamentals',
      arabicKnowledge: studentData.arabicKnowledge || 'Beginner',
      currentReadingLevel: studentData.currentReadingLevel || 'Beginner',
      learningGoal: studentData.learningGoal || '',
      status: studentData.status || 'Active',
      assignedTeacher: studentData.assignedTeacher || 'Ustaadh Naasir Akinbolanle Jamiu',
      enrolledDate: studentData.enrolledDate || new Date().toISOString(),
      adminNotes: studentData.adminNotes || 'Admitted directly by Al-Irshaad Administrator.',
      source: studentData.source || 'Admin Direct Entry'
    };

    students.unshift(newStudent);
    saveRawStudents(students);
    return newStudent;
  },

  // Save student enrollment from the Enroll Page form
  saveEnrollment(enrollFormData) {
    const students = getRawStudents();
    
    const uniqueNum = Math.floor(1000 + Math.random() * 9000);
    const studentRecord = {
      id: `ALIR-2026-${uniqueNum}`,
      fullName: enrollFormData.fullName || '',
      email: enrollFormData.email || '',
      whatsappNumber: enrollFormData.whatsappNumber || '',
      dateOfBirth: enrollFormData.dateOfBirth || '',
      gender: enrollFormData.gender || 'Male',
      guardianName: enrollFormData.guardianName || '',
      country: enrollFormData.country || 'United States',
      city: enrollFormData.city || '',
      program: enrollFormData.program || 'Nuurul Bayaan',
      learningLevel: enrollFormData.learningLevel || 'Beginner',
      classPreference: enrollFormData.classPreference || '1-on-1 (Private)',
      preferredSchedule: enrollFormData.preferredSchedule || 'Evening',
      preferredDays: enrollFormData.preferredDays || '5 Days / Week',
      previousQuranEducation: enrollFormData.previousQuranEducation || 'None',
      previousIslamicStudies: enrollFormData.previousIslamicStudies || 'Basic knowledge from home',
      arabicKnowledge: enrollFormData.arabicKnowledge || 'No prior Arabic background',
      currentReadingLevel: enrollFormData.currentReadingLevel || 'Cannot read Arabic yet',
      learningGoal: enrollFormData.learningGoal || '',
      status: 'Pending Review',
      assignedTeacher: enrollFormData.teacherPreference || 'Ustaadh Naasir Akinbolanle Jamiu',
      enrolledDate: new Date().toISOString(),
      adminNotes: 'Direct online inquiry received via Website Application Dossier.',
      source: 'Website Enrollment Form'
    };

    students.unshift(studentRecord);
    saveRawStudents(students);
    return studentRecord;
  },

  // Update an existing student record
  updateStudent(id, updatedFields) {
    const students = getRawStudents();
    const index = students.findIndex(s => s.id === id);
    if (index === -1) {
      throw new Error(`Student with ID ${id} not found.`);
    }

    students[index] = { ...students[index], ...updatedFields };
    saveRawStudents(students);
    return students[index];
  },

  // Delete a student record (Admin only)
  deleteStudent(id) {
    const students = getRawStudents();
    const filtered = students.filter(s => s.id !== id);
    saveRawStudents(filtered);
    return true;
  },

  // Wipe all student records (Clean Reset)
  clearAllStudents() {
    saveRawStudents([]);
    return true;
  },

  // ================= ADMIN ACCOUNTS MANAGEMENT =================

  // Get all registered admin accounts
  getAllAdmins() {
    return getRawAdmins();
  },

  // Admin Authentication: Login (Only authorized administrators)
  adminLogin(identifier, password) {
    const cleanId = (identifier || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();

    // Check specific authorized Admin 1
    if (
      (cleanId === 'instituteofislamicguidance@gmail.com' || cleanId === 'instituteofislamicguidance' || cleanId === 'admin') &&
      cleanPass === 'Alhamdulillah@94'
    ) {
      const session = {
        id: 'ADMIN-001',
        name: 'Al-Irshaad Admissions Dean',
        email: 'instituteofislamicguidance@gmail.com',
        username: 'instituteofislamicguidance',
        role: 'Super Administrator',
        loginTime: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY_AUTH_ADMIN, JSON.stringify(session));
      try {
        window.dispatchEvent(new Event('storage'));
        window.dispatchEvent(new CustomEvent('admin-auth-changed', { detail: session }));
      } catch (e) {}
      return session;
    }

    // Check specific authorized Admin 2
    if (
      (cleanId === 'lamidiabdulhameedolawale@gmail.com' || cleanId === 'lamidiabdulhameedolawale') &&
      cleanPass === 'Olawale!!!'
    ) {
      const session = {
        id: 'ADMIN-002',
        name: 'Executive Registry Office',
        email: 'lamidiabdulhameedolawale@gmail.com',
        username: 'lamidiabdulhameedolawale',
        role: 'Executive Administrator',
        loginTime: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY_AUTH_ADMIN, JSON.stringify(session));
      try {
        window.dispatchEvent(new Event('storage'));
        window.dispatchEvent(new CustomEvent('admin-auth-changed', { detail: session }));
      } catch (e) {}
      return session;
    }

    // Check against any updated stored admins in database
    const admins = getRawAdmins();
    const admin = admins.find(a => 
      (a.email && a.email.toLowerCase() === cleanId) ||
      (a.username && a.username.toLowerCase() === cleanId)
    );

    if (admin && admin.password === cleanPass) {
      const session = {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        username: admin.username,
        role: admin.role,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY_AUTH_ADMIN, JSON.stringify(session));
      try {
        window.dispatchEvent(new Event('storage'));
        window.dispatchEvent(new CustomEvent('admin-auth-changed', { detail: session }));
      } catch (e) {}
      return session;
    }

    throw new Error('Unauthorized Admin Access. Only verified Al-Irshaad administrators can log in.');
  },

  // Create a new Administrator Account
  createAdminAccount(newAdmin) {
    const admins = getRawAdmins();
    const cleanEmail = newAdmin.email.trim().toLowerCase();
    const cleanUsername = (newAdmin.username || '').trim().toLowerCase();

    const exists = admins.find(a => 
      (a.email && a.email.toLowerCase() === cleanEmail) ||
      (cleanUsername && a.username && a.username.toLowerCase() === cleanUsername)
    );

    if (exists) {
      throw new Error(`An administrator with email "${newAdmin.email}" or username "${newAdmin.username}" already exists.`);
    }

    const uniqueId = `ADMIN-${Math.floor(100 + Math.random() * 900)}`;
    const created = {
      id: uniqueId,
      name: newAdmin.name || 'Admissions Officer',
      email: cleanEmail,
      username: cleanUsername || cleanEmail.split('@')[0],
      password: newAdmin.password,
      role: newAdmin.role || 'Admissions Administrator',
      createdAt: new Date().toISOString()
    };

    admins.push(created);
    saveRawAdmins(admins);
    return created;
  },

  // Update Admin Password
  updateAdminPassword(email, currentPassword, newPassword) {
    const admins = getRawAdmins();
    const cleanEmail = email.trim().toLowerCase();
    const index = admins.findIndex(a => a.email && a.email.toLowerCase() === cleanEmail);

    if (index === -1) {
      throw new Error(`Administrator account "${email}" not found.`);
    }

    if (admins[index].password !== currentPassword.trim()) {
      throw new Error('Current password does not match.');
    }

    if (!newPassword || newPassword.trim().length < 6) {
      throw new Error('New password must be at least 6 characters long.');
    }

    admins[index].password = newPassword.trim();
    saveRawAdmins(admins);
    return true;
  },

  // Check current Admin Session
  getAdminSession() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_AUTH_ADMIN);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  },

  // Admin Logout
  adminLogout() {
    localStorage.removeItem(STORAGE_KEY_AUTH_ADMIN);
    try {
      window.dispatchEvent(new Event('storage'));
      window.dispatchEvent(new CustomEvent('admin-auth-changed', { detail: null }));
    } catch (e) {}
  },

  // Export all students to CSV formatted string
  exportToCSV() {
    const students = getRawStudents();
    const headers = [
      'Student ID',
      'Full Name',
      'Email',
      'WhatsApp Number',
      'Gender',
      'Date of Birth',
      'Guardian Name',
      'Country',
      'City',
      'Enrolled Program',
      'Learning Level',
      'Class Type',
      'Preferred Schedule',
      'Status',
      'Assigned Teacher',
      'Enrollment Date',
      'Admin Notes'
    ];

    const rows = students.map(s => [
      `"${s.id || ''}"`,
      `"${s.fullName || ''}"`,
      `"${s.email || ''}"`,
      `"${s.whatsappNumber || ''}"`,
      `"${s.gender || ''}"`,
      `"${s.dateOfBirth || ''}"`,
      `"${s.guardianName || ''}"`,
      `"${s.country || ''}"`,
      `"${s.city || ''}"`,
      `"${s.program || ''}"`,
      `"${s.learningLevel || ''}"`,
      `"${s.classPreference || ''}"`,
      `"${s.preferredSchedule || ''}"`,
      `"${s.status || ''}"`,
      `"${s.assignedTeacher || ''}"`,
      `"${s.enrolledDate ? new Date(s.enrolledDate).toLocaleDateString() : ''}"`,
      `"${(s.adminNotes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    return csvContent;
  }
};

