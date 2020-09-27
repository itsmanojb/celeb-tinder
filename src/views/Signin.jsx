import React from 'react';
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';

import { firebase, firestore } from '../utilities/firebase';

function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((credential) => {
      updateUser(credential.user);
    });
}

function updateUser(user) {
  const { displayName, email, uid } = user;

  const usersRef = firestore.doc(`users/${uid}`);
  usersRef.get().then(async (doc) => {
    let data;
    if (doc.exists) {
      data = doc.data();
    } else {
      data = { uid, email, displayName };
    }
    localStorage.setItem('C_TIND_USER', JSON.stringify(data));
    await usersRef.set(data, { merge: true });
  });

  // console.log(user);
}

const Signin = () => {
  return (
    <div className="Login">
      <div className="top">
        <div className="logo">
          <WhatshotRoundedIcon />
          <span>tinder</span>
        </div>
        <p>Swipe like Celebrities</p>
      </div>
      <div>
        <button className="login-btn" onClick={signInWithGoogle}>
          Create Account
        </button>
        <button className="login-btn outlined" onClick={signInWithGoogle}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Signin;
