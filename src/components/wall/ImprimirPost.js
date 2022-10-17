/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
// getFirestore, collection, onSnapshot,
// import {
//   doc,
// } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { deletePost, getPost } from '../../lib/firestore.js';
// import { app } from '../../lib/config.js';

export const printPost = () => {
  const div = document.createElement('div');
  div.classList = 'principalDiv';

  /** Intento 2 */
  getPost((i) => {
    div.innerHTML = '';
    i.forEach((docs) => {
      console.log(docs.id, '=>', docs.data());
      const post = docs.data();

      const print = document.createElement('div');
      print.classList = 'printPost';
      const contentReview = document.createElement('p');
      contentReview.textContent = post.review;
      const titleRestaurant = document.createElement('h3');
      titleRestaurant.textContent = post.restaurant;
      const deleteBtn = document.createElement('button');
      // deleteBtn.setAttribute('src', 'https://i.postimg.cc/FHqySXyf/delete-FILL0-wght400-GRAD0-opsz48.png');

      deleteBtn.setAttribute('id', 'deleteBtn');
      titleRestaurant.setAttribute('id', 'titleRestaurant');
      contentReview.setAttribute('id', 'contentReview');
      deleteBtn.addEventListener('click', async () => {
        await deletePost(docs.id);
      });

      print.append(titleRestaurant, contentReview, deleteBtn);
      div.append(print);
    });
  });

  /** intento 1 */
  // const db = getFirestore(app);
  // const colRef = collection(db, 'post');
  // onSnapshot(colRef, (snapsShot) => {
  //   const reviews = [];
  //   div.innerHTML = '';
  //   snapsShot.docs.forEach((docs) => {
  //     reviews.push({ ...docs.data() });
  //   });
  //   // crea las tarjetas por cada post
  //   reviews.forEach((post) => {
  //     // console.log(post);
  //     const print = document.createElement('div');
  //     const titleRestaurant = document.createElement('h3');
  //     const contentReview = document.createElement('p');
  //     const deleteBtn = document.createElement('button');
  //     // deleteBtn.setAttribute('src', 'https://i.postimg.cc/FHqySXyf/delete-FILL0-wght400-GRAD0-opsz48.png');

  //     deleteBtn.setAttribute('id', 'deleteBtn');
  //     print.classList = 'printPost';
  //     titleRestaurant.textContent = post.restaurant;
  //     titleRestaurant.setAttribute('id', 'titleRestaurant');
  //     contentReview.textContent = post.review;
  //     contentReview.setAttribute('id', 'contentReview');
  //     print.append(titleRestaurant, contentReview, deleteBtn);
  //     div.append(print);
  //     deleteBtn.addEventListener('click', deletePost(doc.id));
  //     console.log(doc.id);
  //   });
  // });

  return div;
};
