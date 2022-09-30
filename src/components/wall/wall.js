import { Publicar } from './Publicar.js';
// imprimir post

export const wall = () => {
  const div = document.createElement('div');
  div.appendChild(Publicar());
  return div;
};
