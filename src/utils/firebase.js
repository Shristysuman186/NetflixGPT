// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjg_eRQnenKgOBWvHmlg370J8uLeMGVro",
  authDomain: "netflixgpt-d0c38.firebaseapp.com",
  projectId: "netflixgpt-d0c38",
  storageBucket: "netflixgpt-d0c38.appspot.com",
  messagingSenderId: "626774033000",
  appId: "1:626774033000:web:5df4158a5f906575b5b1dd",
  measurementId: "G-BV3Y07XDE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();