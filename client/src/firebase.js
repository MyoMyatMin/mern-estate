// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-315f5.firebaseapp.com",
  projectId: "mern-estate-315f5",
  storageBucket: "mern-estate-315f5.appspot.com",
  messagingSenderId: "675981697698",
  appId: "1:675981697698:web:86513ae0dce12a6e78adfb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
