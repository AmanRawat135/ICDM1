import firebase from "firebase";
import 'firebase/firestore';
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBfnxyScpOu3mVgfOV5mQmP5JfraZMwA6k",
  authDomain: "icdm-official.firebaseapp.com",
  projectId: "icdm-official",
  storageBucket: "icdm-official.appspot.com",
  messagingSenderId: "139730215345",
  appId: "1:139730215345:web:756c7dbf2b76782d5c9d90",
  measurementId: "${config.measurementId}"
});
var db = firebaseApp.firestore();

export { db };