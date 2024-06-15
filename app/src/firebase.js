// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "margshala-6dcaa.firebaseapp.com",
    projectId: "margshala-6dcaa",
    storageBucket: "margshala-6dcaa.appspot.com",
    messagingSenderId: "366597585594",
    appId: "1:366597585594:web:14e9894a2cd7453719e083",
    measurementId: "G-16H15SDRXT"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };