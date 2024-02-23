import React from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHYIIJIqE92oOcviqf92Zro5PqDmoKgew",
  authDomain: "hh99-ac7ee.firebaseapp.com",
  projectId: "hh99-ac7ee",
  storageBucket: "hh99-ac7ee.appspot.com",
  messagingSenderId: "877080615515",
  appId: "1:877080615515:web:d4f8b152bd2080aaa77d7e"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const storage = firebase.storage();
const db = firebase.firestore();

export { auth, storage, db };
