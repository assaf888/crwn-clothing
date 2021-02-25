import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB6-iERc59MXVIBp9yV70ZJNj691RMzc4s",
    authDomain: "crwn-db-42362.firebaseapp.com",
    projectId: "crwn-db-42362",
    storageBucket: "crwn-db-42362.appspot.com",
    messagingSenderId: "835957671076",
    appId: "1:835957671076:web:346b4c0fd7f94221461231",
    measurementId: "G-XQNV9009ZJ"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;