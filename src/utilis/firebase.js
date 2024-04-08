// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXp4qrXw41t1EUFypfnosdMzgPPbsLE7M",
  authDomain: "foody-app-43f45.firebaseapp.com",
  projectId: "foody-app-43f45",
  storageBucket: "foody-app-43f45.appspot.com",
  messagingSenderId: "700780578199",
  appId: "1:700780578199:web:665645ecf7a9782e0a70d2",
  measurementId: "G-49FJTHQ91W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);