import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB1YGN_4KgDbmWJ2PkvOQlLXFIAj7r380E",
  authDomain: "blogify-2840e.firebaseapp.com",
  projectId: "blogify-2840e",
  storageBucket: "blogify-2840e.firebasestorage.app",
  messagingSenderId: "290018228736",
  appId: "1:290018228736:web:fbe9e43d8ebdd7e36db6e5",
  measurementId: "G-DGMYT9KJ7L",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
