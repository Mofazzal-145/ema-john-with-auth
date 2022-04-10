// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlsjx6BFysH6r-X6PIwPGtJfSnNe0SZV8",
  authDomain: "ema-john-simple-d6334.firebaseapp.com",
  projectId: "ema-john-simple-d6334",
  storageBucket: "ema-john-simple-d6334.appspot.com",
  messagingSenderId: "350395984809",
  appId: "1:350395984809:web:35e43bf8e6e101cdc3f2b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;