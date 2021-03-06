import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCm-9Mjx5fKZ0h3O904Vb5WEOCD2M5dXZ0",
    authDomain: "slack2-850a7.firebaseapp.com",
    projectId: "slack2-850a7",
    storageBucket: "slack2-850a7.appspot.com",
    messagingSenderId: "766001105068",
    appId: "1:766001105068:web:9c466b997ac3ad15e63709"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  auth,
  provider
};
