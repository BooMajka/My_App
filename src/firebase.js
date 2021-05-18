import firebase from "firebase/app";
// import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAFdk37JA7cjP0aWJGbTFrmZjea7ClMpfY",
    authDomain: "final-project-aa99d.firebaseapp.com",
    projectId: "final-project-aa99d",
    storageBucket: "final-project-aa99d.appspot.com",
    messagingSenderId: "624450815939",
    appId: "1:624450815939:web:08b690337bab4308181f76"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  export const db = firebase.firestore();