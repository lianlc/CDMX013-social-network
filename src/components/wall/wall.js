import { Publicar } from './Publicar.js';
import { close } from '../../lib/auth.js';

// imprimir post
export const wall = () => {
  const div = document.createElement('div');
  const Header = document.createElement('header');
  const signOff = document.createElement('img');

  signOff.setAttribute('src', 'https://i.postimg.cc/HW6M6BCg/Sign-off.png');
  signOff.classList = 'singOffButton';

  Header.append(signOff);
  div.append(Header);
  div.appendChild(Publicar());

  signOff.addEventListener('click', () => {
    close();
  });
  return div;
};
