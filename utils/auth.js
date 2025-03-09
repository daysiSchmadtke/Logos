import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from './clearDom';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  clearDom();
  firebase.auth().signOut();
};

export { signIn, signOut };
