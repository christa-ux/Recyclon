import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase  } from 'firebase/database';

const firebaseConfig = {
  //apiKey: "AIzaSyAY-8oEFhrHWxcJD4xJI0lXcK4_ZmGt9q8",
  authDomain: "recyclon.firebaseapp.com",
  projectId: "recyclon",
  storageBucket: "recyclon.appspot.com",
  //messagingSenderId: "752905052866",
  //appId: "1:752905052866:web:b9ef8f518112877783515b"
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const auth = getAuth(fireApp);
const db = getDatabase(fireApp);

export {
  auth,
  db
};