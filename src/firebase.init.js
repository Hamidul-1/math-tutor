// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARiFt4cNg2GpfES9CeOkwnedR-84x1hH4",
  authDomain: "math-tutor-1c0de.firebaseapp.com",
  projectId: "math-tutor-1c0de",
  storageBucket: "math-tutor-1c0de.appspot.com",
  messagingSenderId: "1062455253750",
  appId: "1:1062455253750:web:5340835479a588215e2ad7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;