import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUomMDRvZ-yeNh0FLKQuIBybjPNC5cnao",
  authDomain: "practice-goog-auth.firebaseapp.com",
  projectId: "practice-goog-auth",
  storageBucket: "practice-goog-auth.appspot.com",
  messagingSenderId: "511168415204",
  appId: "1:511168415204:web:25654003a0562a5abcb3f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
