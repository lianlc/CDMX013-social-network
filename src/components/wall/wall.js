import { Publicar } from './Publicar.js';
import { close } from '../../lib/auth.js';
import { printPost } from './ImprimirPost.js';

// imprimir post
export const wall = () => {
  const logo = document.createElement('img');
  const div = document.createElement('div');
  const Header = document.createElement('header');
  const signOff = document.createElement('img');

  signOff.setAttribute('src', 'https://i.postimg.cc/HW6M6BCg/Sign-off.png');
  logo.setAttribute('src', 'https://i.postimg.cc/v8KSd9Z6/RedE.png');
  logo.classList = 'logoHeader';
  signOff.classList = 'singOffButton';

  Header.append(signOff, logo);
  div.append(Header);
  div.appendChild(Publicar());
  div.append(printPost());

  signOff.addEventListener('click', () => {
    close();
  });

  return div;
};
