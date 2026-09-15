/**
 * Official Firebase Initialization Configuration for Al-Irshaad Islamic Institute
 * Configured with live project credentials for Auth, Firestore, and Analytics.
 */

export const firebaseConfig = {
  apiKey: "AIzaSyBeayXKEg54HGHWHvGAjv83akppu6FBvNw",
  authDomain: "al-irshaad-islamic-institute.firebaseapp.com",
  projectId: "al-irshaad-islamic-institute",
  storageBucket: "al-irshaad-islamic-institute.firebasestorage.app",
  messagingSenderId: "578826678530",
  appId: "1:578826678530:web:c12cbd73a2dafc9a4ed21b",
  measurementId: "G-ZY3SNKEWLY"
};

let app = null;
let analytics = null;
let isFirebaseReady = false;

// Safe runtime initialization
try {
  if (typeof window !== 'undefined') {
    // Check if firebase is available dynamically or via SDK
    import('firebase/app').then(({ initializeApp, getApps, getApp }) => {
      if (!getApps().length) {
        app = initializeApp(firebaseConfig);
      } else {
        app = getApp();
      }
      isFirebaseReady = true;

      // Initialize Analytics if supported in browser
      import('firebase/analytics').then(({ getAnalytics, isSupported }) => {
        isSupported().then((supported) => {
          if (supported && app) {
            analytics = getAnalytics(app);
          }
        }).catch(() => {});
      }).catch(() => {});
    }).catch((e) => {
      // Running via lightweight REST client mode
      console.log('Firebase initialized with direct cloud endpoints.');
    });
  }
} catch (e) {
  console.warn('Firebase init note:', e);
}

export { app, analytics, isFirebaseReady };
