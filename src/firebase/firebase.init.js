// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaIlwg5mikM3Dt3M2-Bwr2-GgbFPR7kNo",
  authDomain: "coffee-store-a019d.firebaseapp.com",
  projectId: "coffee-store-a019d",
  storageBucket: "coffee-store-a019d.firebasestorage.app",
  messagingSenderId: "167202783216",
  appId: "1:167202783216:web:52f3320f76196eef88e735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);