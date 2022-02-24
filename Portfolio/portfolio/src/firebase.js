import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBCx0-urQ70cTFGD-sSuxnakmhjVHRHg-U",
    authDomain: "portfolio-form-b4d20.firebaseapp.com",
    projectId: "portfolio-form-b4d20",
    storageBucket: "portfolio-form-b4d20.appspot.com",
    messagingSenderId: "370196408759",
    appId: "1:370196408759:web:23979f34ca2867645a6032"
  };

//   initialise firebase app
initializeApp(firebaseConfig);

//initialise services so we can connect to it 
var db = getFirestore();

export { db };