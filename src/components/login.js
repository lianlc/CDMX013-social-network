/* eslint-disable no-alert */
// import { singInUserWithProviders } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { onNavigate } from '../main.js';
import { loginUser } from '../lib/auth.js';
// import { app } from '../lib/config.js';

export const login = () => {
  // CREA ELEMENTOS **
  const div = document.createElement('div');
  const title = document.createElement('img');
  const textLogin = document.createElement('h1');
  const imgUser = document.createElement('img');
  const divInput = document.createElement('div');
  const inputMail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonContinius = document.createElement('button');
  const footer = document.createElement('footer');
  const copyright = document.createElement('p');

  // CONTENIDO DE LOS ELENETOS **
  div.classList = 'divDirection';
  // title.textContent = 'RedEAT';
  textLogin.textContent = 'Inicia sesión';
  divInput.classList = 'divDirection';
  inputMail.placeholder = 'Correo Electronico';
  inputPass.placeholder = 'Contraseña';
  buttonContinius.textContent = 'CONTINUAR';
  buttonContinius.classList = 'buttonStyle';
  copyright.textContent = 'Todos los derechos reservados, 2022';
  copyright.classList = 'copyrightStyle';
  // ATRIBUTOS  **
  title.setAttribute('src', 'https://i.postimg.cc/d0jN93v0/RedE.png');
  inputMail.setAttribute('id', 'mail');
  inputPass.setAttribute('id', 'pass');
  inputPass.setAttribute('type', 'password');
  imgUser.setAttribute(
    'src',
    'https://i.postimg.cc/fW6CmMs0/iconmonstr-user-19-240.png',
  );
  imgUser.classList = 'logoUser';
  title.classList = 'logoTitle';
  // INSERTA ELEMENTOS AL DIV **
  divInput.append(imgUser, inputMail, inputPass);
  div.append(title, textLogin, divInput, buttonContinius, footer);
  footer.append(copyright);
  // EVENTOS **
  // * * INICIO CON CORREO Y CONTRASEÑA * *
  buttonContinius.addEventListener('click', () => {
    const mail = document.getElementById('mail').value;
    const password = document.getElementById('pass').value;
    loginUser(mail, password)
      .then((userCredential) => {
        // Signed in
        // eslint-disable-next-line no-unused-vars
        const user = userCredential.user;
        onNavigate('/wall');
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log('No bienvenido', errorMessage);
        alert(`No puedes acceder a este sitio porque: ${errorMessage}`);
      });
  });
  return div;
};
