// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyApM64e4AAJA-c5QYYsXQJqk9CsomEzRk8",
    authDomain: "aula03-firebase.firebaseapp.com",
    projectId: "aula03-firebase",
    storageBucket: "aula03-firebase.appspot.com",
    messagingSenderId: "603094381407",
    appId: "1:603094381407:web:787309337828cae6a6fcea",
    measurementId: "G-H03485KX22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db }