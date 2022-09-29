import { onNavigate } from '../main.js';
import { loginwithGoogle } from '../lib/auth.js';

export const Welcome = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const divInput = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const copyright = document.createElement('p');
  const logoGoogle = document.createElement('img');

  /* Creación de los elementos */
  buttonRegister.textContent = 'REGISTRATE';
  buttonLogin.textContent = 'INICIA SESIÓN';
  title.textContent = 'Bienvenidos';
  copyright.textContent = 'Todos los derechos reservados 2022';
  buttonRegister.classList = 'buttonStyle';
  divInput.classList = 'divDirection';
  logoGoogle.setAttribute('src', 'https://i.postimg.cc/CLR5X5Vt/gmail.png');
  logoGoogle.classList = 'logoStyle';
  buttonLogin.classList = 'buttonStyle';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });
  logoGoogle.addEventListener('click', () => {
    loginwithGoogle();
    // onNavigate('/wall');
  });

  divInput.append(buttonLogin, buttonRegister, logoGoogle);
  div.append(title, divInput, copyright);

  return div;
};
