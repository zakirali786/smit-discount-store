// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpsnSuM5ZFA73EjlPGePnjUENut6NbOIc",
  authDomain: "practise-147.firebaseapp.com",
  databaseURL: "https://practise-147-default-rtdb.firebaseio.com",
  projectId: "practise-147",
  storageBucket: "practise-147.appspot.com",
  messagingSenderId: "607844619887",
  appId: "1:607844619887:web:9806025092a783ea345f9a",
  measurementId: "G-F9DDHH49NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
