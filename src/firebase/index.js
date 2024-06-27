import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase  } from 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiPGE0BnuilFHcshCuzoXi8AkI1tth_zE",
  authDomain: "recyclon-16414.firebaseapp.com",
  projectId: "recyclon-16414",
  storageBucket: "recyclon-16414.appspot.com",
  messagingSenderId: "103330130204",
  appId: "1:103330130204:web:0cce9313859a0ed95272d9",
  measurementId: "G-Q9PVDKXF2D"
};


// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const auth = getAuth(fireApp);
const db = getDatabase(fireApp);

export {
  auth,
  db
};