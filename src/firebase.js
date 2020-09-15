import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAcCH7G_LAQTfJoV8dGqRXg4DFg5ca6188",
  authDomain: "project-manager-57ea1.firebaseapp.com",
  databaseURL: "https://project-manager-57ea1.firebaseio.com",
  projectId: "project-manager-57ea1",
  storageBucket: "project-manager-57ea1.appspot.com",
  messagingSenderId: "336505830738",
  appId: "1:336505830738:web:741f494ec281dc913e0e8b",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();  // establish connection to firestore

export default db;