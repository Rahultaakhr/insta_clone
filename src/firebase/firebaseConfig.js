import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
const auth=getAuth(app)
const provider= new GoogleAuthProvider(app)
const fireDB=getFirestore(app)
const storage=getStorage(app)
export{auth,provider,fireDB,storage}

