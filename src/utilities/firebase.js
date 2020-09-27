import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyCEMl_69uVKDEXyYgwiwydtYSGYAbXPzvo',
  authDomain: 'celebrity-tinder-app.firebaseapp.com',
  databaseURL: 'https://celebrity-tinder-app.firebaseio.com',
  projectId: 'celebrity-tinder-app',
  storageBucket: 'celebrity-tinder-app.appspot.com',
  messagingSenderId: '203477681872',
  appId: '1:203477681872:web:dc1ed9bae085e370a2c0d5',
  measurementId: 'G-R51YHSQZ42',
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore, firebase };
