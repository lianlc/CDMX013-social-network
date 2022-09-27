// import { singInUserWithProviders } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { onNavigate } from '../main.js';
import { loginUser, loginwithGoogle, providerGoogle } from '../lib/auth.js';
// import { app } from '../lib/config.js';

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
  const buttonGoogle = document.createElement('button');
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
  img.setAttribute(
    'src',
    'https://i.postimg.cc/X7FRfSYd/iconmonstr-user-19-240.png'
  ); //* *
  divInput.classList = 'divDirection';
  buttonContinius.textContent = 'CONTINUAR';
  buttonContinius.classList = 'buttonStyle';
  //  - - - secctionO.textContent = '- o -';
  copyright.textContent = 'Todos los derechos reservados, 2022';

  buttonGoogle.textContent = 'Google';

  buttonGoogle.addEventListener('click', () => {
    // singInUserWithProviders(providerGoogle);
    loginwithGoogle();
  });

  // INSERTA ELEMENTOS AL DIV **
  divInput.append(inputMail, inputPass, buttonContinius, buttonGoogle);
  div.append(title, textLogin, img, divInput, copyright);

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
