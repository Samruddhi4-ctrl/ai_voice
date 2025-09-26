import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlPkQgzDkaoxBU9SQqObbgR032SvYGgcw",
  authDomain: "viprj-e05f9.firebaseapp.com",
  projectId: "viprj-e05f9",
  storageBucket: "viprj-e05f9.firebasestorage.app",
  messagingSenderId: "843012993566",
  appId: "1:843012993566:web:b48ade47e98b232d17f40f",
  measurementId: "G-G3T4E8NN2C"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);