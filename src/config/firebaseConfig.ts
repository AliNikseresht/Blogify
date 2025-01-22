// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// تنظیمات Firebase خود را از کنسول Firebase دریافت کنید
const firebaseConfig = {
  apiKey: "AIzaSyDNUFNzuVYIlWYEmctx1iHfhT9P5sysT24",
  authDomain: "blogify-ae866.firebaseapp.com",
  projectId: "blogify-ae866",
  storageBucket: "blogify-ae866.firebasestorage.app",
  messagingSenderId: "925253530948",
  appId: "1:925253530948:web:fd72a17ab845f101971311",
  measurementId: "G-YZ45YVQYGZ",
};

// اینجا Firebase را تنظیم می‌کنید
const app = initializeApp(firebaseConfig);

// گرفتن دسترسی‌ها برای Auth، Firestore و Storage
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
