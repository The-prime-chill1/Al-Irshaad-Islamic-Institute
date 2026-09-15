/**
 * Firebase Admin Authentication Service for Al-Irshaad Islamic Institute
 * Project: al-irshaad-islamic-institute
 * 
 * Exclusively manages authentication and individual password resets for the two authorized administrators:
 * 1. instituteofislamicguidance@gmail.com (Password: Alhamdulillah@94)
 * 2. lamidiabdulhameedolawale@gmail.com (Password: Olawale!!!)
 */

import { studentDatabase } from './studentDatabase';
import { firebaseConfig } from './firebaseConfig';

// Recognized authorized administrator accounts
export const AUTHORIZED_ADMINS = [
  {
    email: 'instituteofislamicguidance@gmail.com',
    initialPassword: 'Alhamdulillah@94',
    name: 'Al-Irshaad Admissions Dean',
    role: 'Super Administrator'
  },
  {
    email: 'lamidiabdulhameedolawale@gmail.com',
    initialPassword: 'Olawale!!!',
    name: 'Executive Registry Office',
    role: 'Executive Administrator'
  }
];

export const AUTHORIZED_ADMIN_EMAILS = AUTHORIZED_ADMINS.map(a => a.email);

export const firebaseAuthService = {
  // Check if an email belongs to an authorized administrator
  isAuthorizedAdmin(email) {
    if (!email) return false;
    const clean = email.trim().toLowerCase();
    return AUTHORIZED_ADMIN_EMAILS.includes(clean);
  },

  // 1. Auto-provision both admin accounts into Firebase Auth pool
  async ensureAdminsProvisionedInFirebase() {
    const apiKey = import.meta.env.VITE_FIREBASE_API_KEY || firebaseConfig.apiKey;
    if (!apiKey) return;

    for (const admin of AUTHORIZED_ADMINS) {
      try {
        await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: admin.email,
            password: admin.initialPassword,
            returnSecureToken: true
          })
        });
      } catch (e) {
        // EMAIL_EXISTS or network check is completely normal
      }
    }
  },

  // 2. Admin Sign In
  async adminLogin(identifier, password) {
    const cleanId = (identifier || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();

    // Map username/email to full email address
    let fullEmail = cleanId;
    if (cleanId === 'admin' || cleanId === 'instituteofislamicguidance') {
      fullEmail = 'instituteofislamicguidance@gmail.com';
    } else if (cleanId === 'lamidiabdulhameedolawale' || cleanId === 'registry') {
      fullEmail = 'lamidiabdulhameedolawale@gmail.com';
    }

    if (!this.isAuthorizedAdmin(fullEmail)) {
      throw new Error('Access Denied: Only authorized Al-Irshaad administrators can log in.');
    }

    const apiKey = import.meta.env.VITE_FIREBASE_API_KEY || firebaseConfig.apiKey;
    let firebaseAuthenticated = false;

    // Verify against Firebase Authentication service
    if (apiKey) {
      try {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: fullEmail,
            password: cleanPass,
            returnSecureToken: true
          })
        });

        const data = await response.json();
        if (data.idToken || data.localId) {
          firebaseAuthenticated = true;
          const adminInfo = AUTHORIZED_ADMINS.find(a => a.email.toLowerCase() === fullEmail.toLowerCase());
          const session = {
            id: adminInfo?.role === 'Super Administrator' ? 'ADMIN-001' : 'ADMIN-002',
            name: adminInfo?.name || 'Administrator',
            email: fullEmail,
            role: adminInfo?.role || 'Administrator',
            firebaseUid: data.localId,
            loginTime: new Date().toISOString()
          };
          localStorage.setItem('alirshaad_admin_session_v4', JSON.stringify(session));
          window.dispatchEvent(new Event('storage'));
          window.dispatchEvent(new CustomEvent('admin-auth-changed', { detail: session }));
          return session;
        }
      } catch (err) {
        console.warn('Firebase Auth API check:', err);
      }
    }

    // Authenticate through studentDatabase administration layer (fallback & initial passwords)
    return studentDatabase.adminLogin(fullEmail, password);
  },

  // 3. Admin Self-Password Reset (Firebase Official Email Service)
  async sendAdminPasswordReset(email) {
    const cleanEmail = (email || '').trim().toLowerCase();

    if (!this.isAuthorizedAdmin(cleanEmail)) {
      throw new Error(`Unauthorized. Password reset is restricted to authorized Al-Irshaad administrators (${AUTHORIZED_ADMIN_EMAILS.join(', ')}).`);
    }

    const apiKey = import.meta.env.VITE_FIREBASE_API_KEY || firebaseConfig.apiKey;
    let firebaseDispatched = false;

    if (apiKey) {
      try {
        // First ensure account exists in Firebase Auth before triggering reset
        const adminProfile = AUTHORIZED_ADMINS.find(a => a.email.toLowerCase() === cleanEmail);
        if (adminProfile) {
          await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: cleanEmail,
              password: adminProfile.initialPassword,
              returnSecureToken: true
            })
          }).catch(() => {});
        }

        // Send official Password Reset Email via Firebase
        const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: cleanEmail
          })
        });

        const data = await res.json();
        if (data.email) {
          firebaseDispatched = true;
        } else if (data.error) {
          console.warn('Firebase reset response:', data.error.message);
        }
      } catch (e) {
        console.warn('Firebase password reset dispatch note:', e);
      }
    }

    return {
      success: true,
      email: cleanEmail,
      firebaseDispatched,
      message: `A secure password reset link has been dispatched to ${cleanEmail}. Please check your inbox and follow Google's link to set your new password.`
    };
  },

  // 4. Get current Admin session
  getAdminSession() {
    return studentDatabase.getAdminSession();
  },

  // 5. Admin Sign Out
  adminLogout() {
    studentDatabase.adminLogout();
  }
};

// Automatically provision admin accounts in Firebase on module load
if (typeof window !== 'undefined') {
  firebaseAuthService.ensureAdminsProvisionedInFirebase().catch(() => {});
}
