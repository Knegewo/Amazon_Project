// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGd2-l7oAhWQ5jW2ATyNhhZTAePJr21xI",
  authDomain: "project-b3540.firebaseapp.com",
  projectId: "project-b3540",
  storageBucket: "project-b3540.appspot.com",
  messagingSenderId: "587935935189",
  appId: "1:587935935189:web:b3e5240de20825849d905c",
  measurementId: "G-0S75V34V8N"
};


  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = app.firestore();
  

  export { db, auth };

