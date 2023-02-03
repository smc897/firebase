// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3Q68LxKA9VaxqitBdv9q58e-NLwgj7iM",
  authDomain: "project1-80340.firebaseapp.com",
  projectId: "project1-80340",
  storageBucket: "project1-80340.appspot.com",
  messagingSenderId: "437326011689",
  appId: "1:437326011689:web:4a8c3b545aa605a481eb38",
  measurementId: "G-WTL9N9KN5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);