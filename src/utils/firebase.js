// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO85xD_Akn_CtpARth5vZL4DICqXUf1vM",
  authDomain: "netflixgpt-e06a4.firebaseapp.com",
  projectId: "netflixgpt-e06a4",
  storageBucket: "netflixgpt-e06a4.appspot.com",
  messagingSenderId: "82880473664",
  appId: "1:82880473664:web:97e6c9dbbddc785d5a0da5",
  measurementId: "G-MLGHTGXCPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();