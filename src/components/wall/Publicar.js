export const Publicar = () => {
  const div = document.createElement('div');
  const title = document.createElement('h1');
  const nameRestaurant = document.createElement('input');
  const review = document.createElement('input');
  const button = document.createElement('button');
  title.textContent = 'Bienvenidx';
  button.textContent = 'COMPARTIR';
  div.append(title, nameRestaurant, review, button);
  return div;
};
