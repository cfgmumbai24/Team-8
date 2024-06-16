// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Import storage module
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "cfghackathon-7692b.firebaseapp.com",
  projectId: "cfghackathon-7692b",
  storageBucket: "cfghackathon-7692b.appspot.com",
  messagingSenderId: "774892978839",
  appId: "1:774892978839:web:c5f88471069ad9ba0d9fd2",
  measurementId: "G-LWBZ9MMHLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // Initialize storage

export { app, db, auth, storage }; // Export storage along with other Firebase services
