import { onNavigate } from '../main.js';

export const Welcome = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const copyright = document.createElement('p');

  buttonRegister.textContent = 'Registrate';
  buttonRegister.className = 'buttonRegister';
  buttonLogin.textContent = 'Inicia Sesión';
  buttonLogin.className = 'buttonLogin';
  title.textContent = 'Bienvenidos';
  copyright.textContent = 'Todos los derechos reservados 2022';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  div.append(title, buttonLogin, buttonRegister, copyright);

  return div;
};
