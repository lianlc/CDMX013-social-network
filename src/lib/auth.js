import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  //GoogleAuthProvider,

} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from './config.js';

const auth = getAuth();

export const addUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const loginGoogle = (auth, provider) => signInWithPopup(auth, provider);
// const provider = new GoogleAuthProvider();