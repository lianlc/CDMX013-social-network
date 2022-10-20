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
      console.log(doc.id, '=>', doc.data()); // está línea muestra todos los datos en consola.
      console.log(doc.data().user);
      console.log(auth.currentUser.uid);
      const post = doc.data();
      const print = document.createElement('div');
      print.classList = 'printPost';
      const contentReview = document.createElement('p');
      contentReview.textContent = post.review;
      contentReview.setAttribute('id', 'review');
      const titleRestaurant = document.createElement('h3');
      titleRestaurant.textContent = post.restaurant;
      const likeBtn = document.createElement('button');
      likeBtn.classList = 'likeBtn';
      likeBtn.setAttribute('src', 'https://i.postimg.cc/9fBgHBx6/iconmonstr-heart-thin-48.png');
      // const editBtn = document.createElement('button');
      // editBtn.setAttribute('id', 'editBtn');
      // editBtn.addEventListener('click', () => {
      //   editPost();
      //   console.log(editPost());
      // });
      if (doc.data().user === auth.currentUser.uid) {
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('id', 'deleteBtn');
        print.append(titleRestaurant, contentReview, deleteBtn);
        deleteBtn.addEventListener('click', () => {
          deletePost(doc.id);
        });
      } else {
        console.log('no hay user');
      }
      if (doc.data().user === auth.currentUser.uid) {
        const editBtn = document.createElement('button');
        editBtn.setAttribute('id', 'editBtn');
        print.append(titleRestaurant, contentReview, editBtn);
        editBtn.addEventListener('click', () => {
          editPost(doc.id, doc.review);
          console.log(editPost(doc.id, doc.review));
        });
      }

      titleRestaurant.setAttribute('id', 'titleRestaurant');
      contentReview.setAttribute('id', 'contentReview');
      print.append(titleRestaurant, contentReview, likeBtn);
      div.append(print);
    });
  });
  return div;
};
