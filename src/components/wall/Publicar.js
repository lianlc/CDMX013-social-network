import { savePost, getPost } from '../../lib/firestore.js';

export const Publicar = () => {
  const div = document.createElement('div');
  const messageWelcome = document.createElement('h1');
  const inputRestaurant = document.createElement('input');
  const inputReview = document.createElement('input');
  const buttonShare = document.createElement('button');
  inputReview.placeholder = '¿Cómo fue tu experiencia?';
  inputReview.setAttribute('id', 'inputReview');
  inputReview.classList = 'inputReview';
  inputRestaurant.placeholder = '¿En qué lugar comiste?';
  inputRestaurant.classList = 'inputRestaurant';
  inputRestaurant.setAttribute = 'inputRestaurant';
  messageWelcome.textContent = '¡Bienvenidx!';
  buttonShare.textContent = 'Compartir';
  buttonShare.setAttribute('id', 'buttonShare');

  buttonShare.addEventListener('click', () => {
    savePost(inputRestaurant.value, inputReview.value)
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

  div.append(messageWelcome, inputRestaurant, inputReview, buttonShare);
  return div;
};
