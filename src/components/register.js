/* eslint-disable no-unused-vars */
import { onNavigate } from '../main.js';
import { addUser } from '../lib/auth.js';

// REGISTTRO MEDIANTE CORREO Y CONTRASEÑA
export const register = () => {
  // para crear elementos del formulario
  const form = document.createElement('div');
  const logoRedEat = document.createElement('img');
  const formu = document.createElement('h1');
  const divInput = document.createElement('div');
  const inputName = document.createElement('input');
  const inputAge = document.createElement('input');
  const inputMail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonRegis = document.createElement('button');
  const footer = document.createElement('footer');
  const copyright = document.createElement('p');

  // contenido de los elementos
  form.classList = 'divDirection';
  logoRedEat.setAttribute('src', 'https://i.postimg.cc/v8KSd9Z6/RedE.png');
  logoRedEat.classList = 'logoTitle';
  formu.textContent = 'Completa el formulario';
  inputName.placeholder = 'Nombre';
  inputAge.placeholder = 'Edad';
  inputMail.placeholder = 'Correo';
  inputPass.placeholder = 'Contraseña';
  inputPass.setAttribute('type', 'password');
  buttonRegis.textContent = 'REGISTRATE';
  buttonRegis.classList = 'buttonStyle';
  copyright.textContent = 'Todos los derechos reservados 2022';
  copyright.classList = 'copyrightStyle';
  divInput.classList = 'divInputStyle';
  inputMail.setAttribute('id', 'mail');
  inputPass.setAttribute('id', 'pass');

  // console.log(mail, password);
  // EVENTOS  * *
  buttonRegis.addEventListener('click', () => {
    const mail = document.getElementById('mail').value;
    const password = document.getElementById('pass').value;
    addUser(mail, password)
      .then((userCredential) => {
        // Signed in
        // eslint-disable-next-line no-unused-vars
        const user = userCredential.user;
        onNavigate('/wall');
      })
      .catch((error) => {
        // eslint-disable-next-line no-unused-vars
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });

  // Insertar los elementos en el div
  divInput.append(inputName, inputAge, inputMail, inputPass);
  form.append(logoRedEat, formu, divInput, buttonRegis, footer);
  footer.append(copyright);
  return form;
};
