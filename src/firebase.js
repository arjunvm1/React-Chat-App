// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOH_Utf7lEsl_h3ohqEHc0cGy1WixUS2w",
  authDomain: "chat-app-1302c.firebaseapp.com",
  projectId: "chat-app-1302c",
  storageBucket: "chat-app-1302c.appspot.com",
  messagingSenderId: "640592779227",
  appId: "1:640592779227:web:2ba6e5fe2bd10a1223b9fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app)

export const db = getFirestore(app)