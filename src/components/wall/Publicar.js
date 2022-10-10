import { savePost, getPost } from '../../lib/firestore.js';

export const Publicar = () => {
  const div = document.createElement('div');
  const title = document.createElement('h1');
  const nameRestaurant = document.createElement('input');
  const review = document.createElement('input');
  const button = document.createElement('button');
  const wall = document.createElement('div');

  title.textContent = 'Bienvenidx';
  button.textContent = 'COMPARTIR';
  wall.setAttribute('id', 'wall');

  button.addEventListener('click', () => {
    savePost(nameRestaurant.value, review.value)
      .then(() => {
        getPost();
        console.log('Ya se armo, luego, que se ejecute otra función: mostrar post ');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(
          'nel no te salio. Escribe alog mejorcito',
          errorMessage,
        );
      });
  });

  div.append(title, nameRestaurant, review, button);
  // button.addEventListener('click', savePost(nameRestaurant.value, review.value));
  return div;
};
