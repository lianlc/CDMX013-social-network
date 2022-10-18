/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
// getFirestore, collection, onSnapshot,
// import { deletePost, getPost, savePost } from '../../lib/firestore.js';
import { deletePost, getPost, savePost } from '../../lib/firestore.js';
// import { app } from '../../lib/config.js';
import { auth } from '../../lib/auth.js';

export const user = auth.currentUser;
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
      deleteBtn.setAttribute('id', 'deleteBtn');
      const likeBtn = document.createElement('button');
      likeBtn.classList = 'likeBtn';
      likeBtn.setAttribute('src', 'https://i.postimg.cc/9fBgHBx6/iconmonstr-heart-thin-48.png');
      const editBtn = document.createElement('button');
      editBtn.setAttribute('id', 'editBtn');
      deleteBtn.addEventListener('click', async () => {
        //await deletePost(docs.id);
        if (savePost.user === user) {
          deleteBtn.setAttribute('id', 'deleteBtn');
          print.append(titleRestaurant, contentReview, deleteBtn);
          deleteBtn.addEventListener('click', async () => {
            await deletePost(docs.id);
          });
        } else {
          console.log(savePost, user);
          console.log('no hay user');
        }
      });

      titleRestaurant.setAttribute('id', 'titleRestaurant');
      contentReview.setAttribute('id', 'contentReview');
      print.append(titleRestaurant, contentReview, deleteBtn, editBtn, likeBtn);
      div.append(print);
    });
    // deleteBtn.setAttribute('src', 'https://i.postimg.cc/FHqySXyf/delete-FILL0-wght400-GRAD0-opsz48.png');
  });
  return div;
};
