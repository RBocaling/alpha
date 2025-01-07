// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMdU025s8HRF1or9zeF9YCkbHsJSA5Y7o",
  authDomain: "alpha-e0071.firebaseapp.com",
  projectId: "alpha-e0071",
  storageBucket: "alpha-e0071.firebasestorage.app",
  messagingSenderId: "155623516630",
  appId: "1:155623516630:web:9d2c0504c353df0ef71c77",
  measurementId: "G-EX1MZ0QV81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
