import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD2WJiaHiI3bhTfXXzknPPZaFbfGgL3ctU",
    authDomain: "notes-arkk.firebaseapp.com",
    databaseURL: "https://notes-arkk.firebaseio.com",
    projectId: "notes-arkk",
    storageBucket: "notes-arkk.appspot.com",
    messagingSenderId: "797380584366",
    appId: "1:797380584366:web:230f696034937189c79e3f",
    measurementId: "G-N3HB6JM81D"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;