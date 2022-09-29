import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

import { app } from './config.js';

const auth = getAuth();

export const providerGoogle = new GoogleAuthProvider();
// INICIO DE SESION CON CORREO Y CONTRASEÑA * *
export const addUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
export const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
// INICIO DE SESION CON GOOGLE  * *
export const loginwithGoogle = () => {
  signInWithRedirect(auth, providerGoogle);
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
