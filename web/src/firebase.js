// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD0PfBmzCWiuU2aJyd8591-i0pIUY3VXnI",
  authDomain: "fitnessconnect-337d5.firebaseapp.com",
  projectId: "fitnessconnect-337d5",
  storageBucket: "fitnessconnect-337d5.appspot.com",
  messagingSenderId: "12348037366",
  appId: "1:12348037366:web:a2c97ea88f1cceb55674d7",
  measurementId: "G-W8C06JZ7RK"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};