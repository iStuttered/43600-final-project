import firebase from 'firebase/app';
require('firebase/firestore')
  // Initialize Firebase
var config = {
    apiKey: "AIzaSyAMAV03znhZW7uCAv-jdus41Z-BB4RAUzg",
    authDomain: "cit-43600-final-project.firebaseapp.com",
    databaseURL: "https://cit-43600-final-project.firebaseio.com",
    projectId: "cit-43600-final-project",
    storageBucket: "cit-43600-final-project.appspot.com",
    messagingSenderId: "566790291762"
};
        
let database = firebase.initializeApp(config).firestore();

export default database;
