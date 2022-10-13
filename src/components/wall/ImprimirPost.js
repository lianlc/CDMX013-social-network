import { getFirestore, collection, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
// import { getPost } from '../../lib/firestore.js';
import { app } from '../../lib/config.js';

export const printPost = () => {
  const div = document.createElement('div');
  div.classList = 'principalDiv';

  const db = getFirestore(app);
  const colRef = collection(db, 'post');
  onSnapshot(colRef, (snapsShot) => {
    console.log('SnapShot');
    const reviews = [];
    div.innerHTML = '';
    snapsShot.docs.forEach((doc) => {
      reviews.push({ ...doc.data() });
    });
    reviews.forEach((post) => {
      console.log(post);
      const print = document.createElement('div');
      const titleRestaurant = document.createElement('h3');
      const contentReview = document.createElement('p');

      print.classList = 'printPost';
      titleRestaurant.textContent = post.restaurant;
      titleRestaurant.setAttribute('id', 'titleRestaurant');
      contentReview.textContent = post.review;
      contentReview.setAttribute('id', 'contentReview');
      print.append(titleRestaurant, contentReview);
      div.append(print);
    });
  });

  return div;
};

getPost(() => {
  onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
    console.log(`${doc.data().restaurant}`);
    });
  });
});
