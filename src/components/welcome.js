import { onNavigate } from '../main.js';
import { loginwithGoogle, loginWhitGitHub } from '../lib/auth.js';

export const Welcome = () => {
  /* Creación de los elementos */
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const divInput = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const copyright = document.createElement('p');
  const logoGoogle = document.createElement('img');
  // const logoTwitter = document.createElement('img');
  const logoGit = document.createElement('img');
  const logoRed = document.createElement('img');
  const footer = document.createElement('footer');
  const logos = document.createElement('div');

  /* atributos de elementos */
  buttonRegister.textContent = 'REGISTRATE';
  buttonLogin.textContent = 'INICIA SESIÓN';
  title.textContent = 'Bienvenidos';
  copyright.textContent = 'Todos los derechos reservados 2022';
  copyright.classList = 'copyrightStyle';
  title.classList = 'title';
  buttonRegister.classList = 'buttonStyle';
  divInput.classList = 'divDirection';
  logoRed.setAttribute('src', 'https://i.postimg.cc/v8KSd9Z6/RedE.png');
  logoGoogle.setAttribute(
    'src',
    'https://i.postimg.cc/c1Trf3qD/btn-google-signin-light-normal-web.png',
  );
  logoGit.setAttribute('src', 'https://i.postimg.cc/Gmwf6M09/github.png');
  logos.classList = 'logos';
  logoGoogle.classList = 'logoGoogleStyle';
  logoGit.classList = 'logoStyle';
  buttonLogin.classList = 'buttonStyle';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });
  logoGoogle.addEventListener('click', () => {
    loginwithGoogle();
    onNavigate('/wall');
  });
  logoGit.addEventListener('click', () => {
    loginWhitGitHub();
  });

  divInput.append(buttonRegister, buttonLogin);
  logos.append(logoGit);
  div.append(title, logoRed, divInput, logoGoogle, logos, footer);
  footer.append(copyright);

  return div;
};
