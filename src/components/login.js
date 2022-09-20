import { onNavigate } from '../main.js';

export const login = () => {
  // CREA ELEMENTOS **
  const div = document.createElement('div');
  const title = document.createElement('h1');
  const textLogin = document.createElement('p');
  const img = document.createElement('img');
  const inputMail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonContinius = document.createElement('button');
  //  - - - const secctionO = document.createElement('p');
  //  - - - const logoGitHub = document.createElement('img');
  //  - - - const logoMail = document.createElement('img');
  //  - - - const logoTwetter = document.createElement('img');
  const textReserved = document.createElement('p');

  // CONTENIDO DE LOS ELENETOS **
  title.textContent = 'RedEAT';
  textLogin.textContent = 'Inicia sesión';
  img.setAttribute('src', './material/User.png'); //* *
  buttonContinius.textContent = 'CONTINUAR';
  //  - - - secctionO.textContent = '- o -';
  textReserved.textContent = 'Todos los derechos reservados, 2022';

  // INSERTA ELEMENTOS AL DIV **
  div.append(
    title,
    textLogin,
    /* img, */
    inputMail,
    inputPass,
    buttonContinius,
    textReserved
  );

  buttonContinius.addEventListener('click', () => {
    onNavigate('/wall');
  });
  // buttonBack.addEventListener('click', () => {
  //  onNavigate('/');
  // });

  // DEVUELE EL DIV **
  return div;
};
