import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBOQkBS4fDM5AzmqPRjdO0i5-SiwOfrTlM",
    authDomain: "book-santa-e7089.firebaseapp.com",
    projectId: "book-santa-e7089",
    storageBucket: "book-santa-e7089.appspot.com",
    messagingSenderId: "862704798545",
    appId: "1:862704798545:web:c248c4641c0d736a61e170"
  };

  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase.firestore();