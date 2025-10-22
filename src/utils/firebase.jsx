// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRwCHp6PLTQAuH2G3IACzEeCDtz_btea4",
  authDomain: "netflix-gpt-1bad7.firebaseapp.com",
  projectId: "netflix-gpt-1bad7",
  storageBucket: "netflix-gpt-1bad7.firebasestorage.app",
  messagingSenderId: "876661764297",
  appId: "1:876661764297:web:b865b9c787195935ffdd18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
