
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
const auth = getAuth(app);

export{ auth };