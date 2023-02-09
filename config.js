import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAXzcy4zWqNy9F1WfAt3HqpAPjiJA-2_VE",
    authDomain: "e-ride-345f8.firebaseapp.com",
    projectId: "e-ride-345f8",
    storageBucket: "e-ride-345f8.appspot.com",
    messagingSenderId: "143621417887",
    appId: "1:143621417887:web:7b2c973845ad85e494ebaa"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
