/**
 * Database Service for Admin & Student operations
 * Works with local persistent storage without external package dependency.
 */
import { studentDatabase } from './studentDatabase';

export const firebaseDbService = {
  // Listen to all students
  subscribeStudents(callback) {
    const list = studentDatabase.getAllStudents();
    callback(list);

    // Set up window storage event listener for cross-tab or in-page synchronization
    const handleStorage = () => {
      callback(studentDatabase.getAllStudents());
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  },

  // Update a student record
  async updateStudent(studentId, updatedData) {
    return studentDatabase.updateStudent(studentId, updatedData);
  },

  // Add new student
  async addStudent(studentData) {
    return studentDatabase.adminAddStudent(studentData);
  },

  // Delete student
  async deleteStudent(studentId) {
    return studentDatabase.deleteStudent(studentId);
  }
};
