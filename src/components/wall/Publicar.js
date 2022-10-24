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
  inputRestaurant.setAttribute('id', 'inputRestaurant');
  messageWelcome.textContent = '¡Bienvenidx!';
  buttonShare.textContent = 'Compartir';
  buttonShare.classList = 'buttonS';
  buttonShare.addEventListener('click', () => {
    savePost(inputRestaurant.value, inputReview.value)
      .then(() => {
        console.log('El post se guardo correctamente. ');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(
          'El mensaje tiene un error, por eso no se publicó.',
          errorMessage,
        );
      });
    document.getElementsByClassName('inputReview')[0].value = '';
    document.getElementsByClassName('inputRestaurant')[0].value = '';
  });
  div.append(messageWelcome, inputRestaurant, inputReview, buttonShare);
  return div;
};
