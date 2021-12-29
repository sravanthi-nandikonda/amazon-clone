import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAabjTNq8XwPbe5YL_F7YOgPobYwdD0yWQ",
    authDomain: "clone-9a31e.firebaseapp.com",
    projectId: "clone-9a31e",
    storageBucket: "clone-9a31e.appspot.com",
    messagingSenderId: "870153675196",
    appId: "1:870153675196:web:4361deaea8931c7b604bb9",
    measurementId: "G-F14QFZQ3BZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
