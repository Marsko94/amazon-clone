
import firebase from 'firebase';
require('dotenv').config();
console.log(process.env);

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "process.env.apiKey",
    authDomain: "e-be121.firebaseapp.com",
    projectId: "e-be121",
    storageBucket: "e-be121.appspot.com",
    messagingSenderId: "502044393259",
    appId: "1:502044393259:web:01e71e95e1bc2cc8d8cf6e",
    measurementId: "G-NTR38KV0GP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };