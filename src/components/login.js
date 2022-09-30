// import { singInUserWithProviders } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { onNavigate } from '../main.js';
import { loginUser } from '../lib/auth.js';
// import { app } from '../lib/config.js';

export const login = () => {
  // CREA ELEMENTOS **
  const div = document.createElement('div');
  const title = document.createElement('h1');
  const textLogin = document.createElement('p');
  //  - - - const img = document.createElement('img');
  const divInput = document.createElement('div');
  const inputMail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonContinius = document.createElement('button');
  const copyright = document.createElement('p');

  // CONTENIDO DE LOS ELENETOS **
  title.textContent = 'RedEAT';
  textLogin.textContent = 'Inicia sesión';
  divInput.classList = 'divDirection';
  buttonContinius.textContent = 'CONTINUAR';
  buttonContinius.classList = 'buttonStyle';
  copyright.textContent = 'Todos los derechos reservados, 2022';
  // ATRIBUTOS  **
  inputMail.setAttribute('id', 'mail');
  inputPass.setAttribute('id', 'pass');
  // INSERTA ELEMENTOS AL DIV **
  divInput.append(inputMail, inputPass, buttonContinius);
  div.append(title, textLogin, divInput, copyright);
  // EVENTOS **
  // * * INICIO CON CORREO Y CONTRASEÑA * *
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
