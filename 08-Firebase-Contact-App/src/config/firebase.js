import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8ohFFsbLuSmgriC1a-ThH4mQ1UgLbySE",
  authDomain: "vite-contact-6a35f.firebaseapp.com",
  projectId: "vite-contact-6a35f",
  storageBucket: "vite-contact-6a35f.firebasestorage.app",
  messagingSenderId: "446439282386",
  appId: "1:446439282386:web:48f06993c240f07ed2ff0b",
  // measurementId: "G-YPL1KK4FXM"
};

// Initialize Firebase
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)