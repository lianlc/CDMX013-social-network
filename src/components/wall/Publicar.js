export const Publicar = () => {
  const div = document.createElement('div');
  const input = document.createElement('input');
  const button = document.createElement('button');
  button.textContent = 'soy una serpiente que anda por el bosque';
  div.append(input, button);
  return div;
};
