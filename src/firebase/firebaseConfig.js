// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-z1ylzn9LsX2FkfJmJMQpL0zQ39u7CMA",
  authDomain: "prueba-tecnica-geek-44240.firebaseapp.com",
  projectId: "prueba-tecnica-geek-44240",
  storageBucket: "prueba-tecnica-geek-44240.appspot.com",
  messagingSenderId: "373653210902",
  appId: "1:373653210902:web:7eb38ebe1cb51a6d45f237",
  measurementId: "G-ZXHDMBKC9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const DB = getFirestore(app);
const analytics = getAnalytics(app);

export {
    app,
    google,
    DB
}