// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "arte-ecommerce.firebaseapp.com",
    projectId: process.env.REACT_APP_FIREBASE_PROYECT_ID,
    storageBucket: "arte-ecommerce.appspot.com",
    messagingSenderId: "461195033315",
    appId: "1:461195033315:web:608d252320b5d43e0423d6",
    measurementId: "G-EDV6K6GS9L"
};

// Initialize Firebase
initializeApp(firebaseConfig);
