// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5Gp1AHh3PsMVlg1nDATfG7InhOKbgx2E",
  authDomain: "movies-658ca.firebaseapp.com",
  projectId: "movies-658ca",
  storageBucket: "movies-658ca.appspot.com",
  messagingSenderId: "63446946049",
  appId: "1:63446946049:web:399bf2cc0861cdc4df4b00",
  measurementId: "G-YL1RTJ3BZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);