/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { savePost } from '../../lib/firestore.js';

export const Publicar = () => {
  const div = document.createElement('div');
  const messageWelcome = document.createElement('h1');
  const inputRestaurant = document.createElement('input');
  const inputReview = document.createElement('textArea');
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
    savePost(inputRestaurant.value, inputReview.value);
    // .then(() => {
    //   // resetar los valores de los inputs
    //   console.log('Ya se armo, luego, que se ejecute otra función: mostrar post ');
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // ..
    //   console.log(
    //     'nel no te salio. Escribe alog mejorcito',
    //     errorMessage,
    //   );
    // });
    document.getElementsByClassName('inputReview')[0].value = '';
    document.getElementsByClassName('inputRestaurant')[0].value = '';
  });

  div.append(messageWelcome, inputRestaurant, inputReview, buttonShare);
  return div;
};
