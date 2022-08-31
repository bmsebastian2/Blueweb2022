import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD24aHz-JanFaL1VHHgdoIoHQl8oTGbMcY",
  authDomain: "react-2022-3.firebaseapp.com",
  projectId: "react-2022-3",
  storageBucket: "react-2022-3.appspot.com",
  messagingSenderId: "537969559569",
  appId: "1:537969559569:web:7d4258e72dfecd641749b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
