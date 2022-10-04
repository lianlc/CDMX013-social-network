import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  GithubAuthProvider,
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
      console.log(user.email);
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

// Sesión con github
export const providerGitHub = new GithubAuthProvider();
export const loginWhitGitHub = () => {
  signInWithRedirect(auth, providerGitHub);
  getRedirectResult(auth)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      if (credential) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const token = credential.accessToken;
        // ...
      }

      // The signed-in user info.
      const user = result.user;
      console.log(user.email);
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(errorMessage);
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
};

export const close = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
