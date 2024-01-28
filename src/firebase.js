// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcbN9ip05sqDF8YfAbK55HiRL4-T3FlWU",
  authDomain: "portfolio-83e9e.firebaseapp.com",
  projectId: "portfolio-83e9e",
  storageBucket: "portfolio-83e9e.appspot.com",
  messagingSenderId: "939815957293",
  appId: "1:939815957293:web:91d83a5cf782735ea4d9a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);