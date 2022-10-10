export const printPost = () => {
  const div = document.createElement('div');
  const titleRestaurant = document.createElement('h3');
  const contentReview = document.createElement('p');

  titleRestaurant.textContent = 'Que hay raza';
  contentReview.textContent = 'Nada pues';

  div.append(titleRestaurant, contentReview);
  return div;
};
