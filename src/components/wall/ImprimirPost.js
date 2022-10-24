/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import { getPost, deletePost, editPost } from '../../lib/firestore.js';
import { auth } from '../../lib/auth.js';

export const printPost = () => {
  const div = document.createElement('div');
  div.classList = 'principalDiv';
  /* Intento 3  */
  getPost((i) => {
    div.innerHTML = '';
    i.forEach((doc) => {
      // console.log(doc.id, '=>', doc.data()); // está línea muestra todos los datos en consola.
      // console.log(doc.data().user);
      // console.log(auth.currentUser.uid);
      const buttonEdit = document.createElement('button');
      buttonEdit.style.display = 'none';
      buttonEdit.setAttribute('id', doc.data().id);
      buttonEdit.classList = 'buttonS';
      const post = doc.data();
      const print = document.createElement('div');
      print.classList = 'printPost';
      const contentReview = document.createElement('p');
      contentReview.textContent = post.review;
      contentReview.setAttribute('id', 'review');
      const titleRestaurant = document.createElement('h3');
      titleRestaurant.textContent = post.restaurant;

      if (doc.data().user === auth.currentUser.uid) {
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('id', 'deleteBtn');
        print.append(titleRestaurant, contentReview, deleteBtn);
        deleteBtn.addEventListener('click', () => {
          deletePost(doc.id);
        });
      } {
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.classList = 'buttonS';
        print.append(titleRestaurant, contentReview, editBtn, buttonEdit);
        editBtn.addEventListener('click', () => {
          const inputEdit = document.querySelector('#inputReview');
          const inputRestaurant = document.querySelector('#inputRestaurant');
          buttonEdit.style.display = 'inline';
          buttonEdit.textContent = 'Guardar Edit';
          inputEdit.value = post.review;
          inputRestaurant.value = post.restaurant;
          const id = doc.id;
          buttonEdit.addEventListener('click', () => {
            editPost(id, inputRestaurant.value, inputReview.value);
            document.getElementsByClassName('inputReview')[0].value = '';
            document.getElementsByClassName('inputRestaurant')[0].value = '';
          });
        });
      }

      titleRestaurant.setAttribute('id', 'titleRestaurant');
      contentReview.setAttribute('id', 'contentReview');
      print.append(titleRestaurant, contentReview);
      div.append(print);
    });
  });
  return div;
};
