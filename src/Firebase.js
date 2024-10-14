// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyQ1Db4zy6Pglyj4RfsN2676NITJCytdg",
  authDomain: "netflix-clone-814a1.firebaseapp.com",
  projectId: "netflix-clone-814a1",
  storageBucket: "netflix-clone-814a1.appspot.com",
  messagingSenderId: "347920669041",
  appId: "1:347920669041:web:d9b8f715874ef97eeabed0",
  measurementId: "G-TK19Z1HNWL"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)