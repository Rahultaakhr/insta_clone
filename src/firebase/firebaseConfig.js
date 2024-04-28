import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY,
  authDomain: "insta-clone-19f85.firebaseapp.com",
  projectId: "insta-clone-19f85",
  storageBucket: "insta-clone-19f85.appspot.com",
  messagingSenderId: "149744267225",
  appId: "1:149744267225:web:e7374fd0609e4e7e16f3c8",
  measurementId: "G-GEDX0MNM0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
