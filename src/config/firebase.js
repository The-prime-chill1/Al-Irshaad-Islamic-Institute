/**
 * Firebase Config Adapter
 * Designed to work seamlessly with or without the external Firebase package installed.
 */

export const isLiveFirebaseConfigured = () => false;

export const app = null;
export const auth = null;
export const db = null;
export const googleProvider = null;
export const RecaptchaVerifier = class {
  constructor() {}
  clear() {}
};
