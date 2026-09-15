import { studentDatabase } from './studentDatabase';
import { firebaseConfig } from './firebaseConfig';

const STORAGE_KEY_NOTIFICATIONS = 'alirshaad_admin_notifications_v1';

// Helper to get notifications
function getRawNotifications() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_NOTIFICATIONS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

// Helper to save notifications
function saveRawNotifications(notifications) {
  try {
    localStorage.setItem(STORAGE_KEY_NOTIFICATIONS, JSON.stringify(notifications));
    window.dispatchEvent(new CustomEvent('alirshaad-notifications-changed', { detail: notifications }));
  } catch (e) {}
}

export const firebaseDbService = {
  // 1. Subscribe to Students list in Real-time
  subscribeStudents(callback) {
    const pushUpdate = () => {
      const list = studentDatabase.getAllStudents();
      callback(list);
    };

    pushUpdate();

    const handleStorage = () => pushUpdate();
    const handleCustomChange = () => pushUpdate();

    window.addEventListener('storage', handleStorage);
    window.addEventListener('alirshaad-students-changed', handleCustomChange);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('alirshaad-students-changed', handleCustomChange);
    };
  },

  // 2. Add New Student by Admin (Direct Admission)
  async addStudent(studentData) {
    const added = studentDatabase.adminAddStudent(studentData);
    
    // Broadcast change
    window.dispatchEvent(new CustomEvent('alirshaad-students-changed', { detail: added }));

    // Send to Cloud Firestore if configured
    this.syncDocToFirestore('students', added.id, added);

    return added;
  },

  // 3. Save Student Enrollment from Public Form (/enroll Steps 1-5)
  async saveEnrollment(enrollFormData) {
    const saved = studentDatabase.saveEnrollment(enrollFormData);

    // Create Admin Notification
    const notif = {
      id: `NOTIF-${Date.now()}`,
      studentId: saved.id,
      studentName: saved.fullName,
      program: saved.program,
      country: saved.country,
      phone: saved.whatsappNumber,
      timestamp: new Date().toISOString(),
      read: false,
      title: `🎉 New Student Enrolled: ${saved.fullName}`,
      message: `Enrolled for ${saved.program} (${saved.country || 'Global'}). Preferred Format: ${saved.classPreference}.`
    };

    const currentNotifs = getRawNotifications();
    currentNotifs.unshift(notif);
    saveRawNotifications(currentNotifs);

    // Broadcast student and notification changes
    window.dispatchEvent(new CustomEvent('alirshaad-students-changed', { detail: saved }));
    window.dispatchEvent(new CustomEvent('alirshaad-new-enrollment-alert', { detail: notif }));

    // Sync to Cloud Firestore
    this.syncDocToFirestore('students', saved.id, saved);
    this.syncDocToFirestore('notifications', notif.id, notif);

    return saved;
  },

  // 4. Update Student
  async updateStudent(studentId, updatedData) {
    const updated = studentDatabase.updateStudent(studentId, updatedData);
    window.dispatchEvent(new CustomEvent('alirshaad-students-changed', { detail: updated }));
    this.syncDocToFirestore('students', studentId, updated);
    return updated;
  },

  // 5. Delete Student
  async deleteStudent(studentId) {
    const result = studentDatabase.deleteStudent(studentId);
    window.dispatchEvent(new CustomEvent('alirshaad-students-changed', { detail: studentId }));
    return result;
  },

  // ================= ADMIN NOTIFICATIONS =================

  // Subscribe to real-time Admin Notifications
  subscribeNotifications(callback) {
    const push = () => callback(getRawNotifications());
    push();

    const handleNotifs = () => push();
    window.addEventListener('storage', handleNotifs);
    window.addEventListener('alirshaad-notifications-changed', handleNotifs);
    window.addEventListener('alirshaad-new-enrollment-alert', handleNotifs);

    return () => {
      window.removeEventListener('storage', handleNotifs);
      window.removeEventListener('alirshaad-notifications-changed', handleNotifs);
      window.removeEventListener('alirshaad-new-enrollment-alert', handleNotifs);
    };
  },

  // Mark a single notification as read
  markNotificationAsRead(notifId) {
    const list = getRawNotifications();
    const updated = list.map(n => n.id === notifId ? { ...n, read: true } : n);
    saveRawNotifications(updated);
  },

  // Mark all notifications as read
  markAllNotificationsAsRead() {
    const list = getRawNotifications();
    const updated = list.map(n => ({ ...n, read: true }));
    saveRawNotifications(updated);
  },

  // Clear all notifications
  clearAllNotifications() {
    saveRawNotifications([]);
  },

  // ================= CLOUD FIRESTORE SYNC HELPER =================
  async syncDocToFirestore(collectionName, docId, data) {
    const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID || firebaseConfig.projectId;
    const apiKey = import.meta.env.VITE_FIREBASE_API_KEY || firebaseConfig.apiKey;

    if (!projectId || !apiKey) {
      return;
    }

    try {
      // Format document payload for Firestore REST API
      const fields = {};
      Object.keys(data).forEach(key => {
        const val = data[key];
        if (typeof val === 'string') fields[key] = { stringValue: val };
        else if (typeof val === 'number') fields[key] = { integerValue: String(val) };
        else if (typeof val === 'boolean') fields[key] = { booleanValue: val };
        else if (Array.isArray(val)) {
          fields[key] = {
            arrayValue: {
              values: val.map(v => ({ stringValue: String(v) }))
            }
          };
        } else if (val === null || val === undefined) {
          fields[key] = { nullValue: null };
        } else {
          fields[key] = { stringValue: JSON.stringify(val) };
        }
      });

      const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collectionName}/${docId}?key=${apiKey}`;
      await fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields })
      });
    } catch (e) {
      console.warn(`Firestore sync note for [${collectionName}/${docId}]:`, e);
    }
  }
};
