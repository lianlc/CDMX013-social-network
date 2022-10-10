export const Publicar = () => {
  const messageWelcome = document.createElement('h1');
  const div = document.createElement('div');
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
  div.append(messageWelcome, inputRestaurant, inputReview, buttonShare);
  return div;
};
