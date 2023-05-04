// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvGUiYcE6wsrW6XbwZA4Ckj0CIecYipMY",
  authDomain: "delizioso-resturent.firebaseapp.com",
  projectId: "delizioso-resturent",
  storageBucket: "delizioso-resturent.appspot.com",
  messagingSenderId: "667050783871",
  appId: "1:667050783871:web:9e15f00ef896e5814cbb4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;