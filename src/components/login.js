import { GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { onNavigate } from '../main.js';
import { loginUser, loginGoogle } from '../lib/auth.js';

export const login = () => {
  // CREA ELEMENTOS **
  const div = document.createElement('div');
  const title = document.createElement('h1');
  const textLogin = document.createElement('p');
  const img = document.createElement('img');
  const divInput = document.createElement('div');
  const inputMail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonContinius = document.createElement('button');
  //  - - - const secctionO = document.createElement('p');
  //  - - - const logoGitHub = document.createElement('img');
  //  - - - const logoMail = document.createElement('img');
  //  - - - const logoTwetter = document.createElement('img');
  const copyright = document.createElement('p');

  // CONTENIDO DE LOS ELENETOS **
  inputMail.setAttribute('id', 'mail');
  inputPass.setAttribute('id', 'pass');
  title.textContent = 'RedEAT';
  textLogin.textContent = 'Inicia sesión';
  img.setAttribute('src', './material/User.png'); //* *
  divInput.classList = 'divDirection';
  buttonContinius.textContent = 'CONTINUAR';
  buttonContinius.classList = 'buttonStyle';
  //  - - - secctionO.textContent = '- o -';
  copyright.textContent = 'Todos los derechos reservados, 2022';

  // INSERTA ELEMENTOS AL DIV **
  divInput.append(inputMail, inputPass, buttonContinius);
  div.append(
    title,
    textLogin,
    /* img, */
    divInput,
    copyright,
  );

  buttonContinius.addEventListener('click', () => {
    const mail = document.getElementById('mail').value;
    const password = document.getElementById('pass').value;
    loginUser(mail, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('Bienvenid@');
        onNavigate('/wall');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('No bienvenido', errorMessage);
      });
  });
  // buttonBack.addEventListener('click', () => {
  //  onNavigate('/');
  // });

  // DEVUELE EL DIV **
  return div;
};

loginGoogle(auth, provider);
const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
