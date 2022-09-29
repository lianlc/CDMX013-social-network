import { Publicar } from './Publicar.js';

export const wall = () => {
  const div = document.createElement('div');
  div.appendChild(Publicar());
  return div;
};
