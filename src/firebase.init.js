// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCv2_7XwM6qP9sXBEIHF36prF5p5THpIq0",
    authDomain: "manufacturer-website-50975.firebaseapp.com",
    projectId: "manufacturer-website-50975",
    storageBucket: "manufacturer-website-50975.appspot.com",
    messagingSenderId: "371488761498",
    appId: "1:371488761498:web:3cac842e3a660bb3f76123"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth 