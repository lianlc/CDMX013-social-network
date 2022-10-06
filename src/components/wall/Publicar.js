import { savePost } from '../../lib/firestore.js';

export const Publicar = () => {
  const div = document.createElement('div');
  const title = document.createElement('h1');
  const nameRestaurant = document.createElement('input');
  const review = document.createElement('input');
  const button = document.createElement('button');

  title.textContent = 'Bienvenidx';
  button.textContent = 'COMPARTIR';
  nameRestaurant.setAttribute('id', 'restaurant');
  review.setAttribute('id', 'review');

  const res = document.getElementById('restaurant').value;
  const rev = document.getElementById('review').value;

  button.addEventListener('click', savePost(res, rev));

  div.append(title, nameRestaurant, review, button);
  return div;
};
