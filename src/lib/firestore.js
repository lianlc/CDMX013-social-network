import {
  getFirestore, addDoc, collection, onSnapshot,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';

import { app } from './config.js';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// add documents
// const colRef = collection(db, 'post');

export const savePost = (restaurant, review) => addDoc(collection(db, 'post'), { restaurant, review });

// listen when db have changes.
// export const getPost = () => onSnapshot((collection(db, 'post')));

// export const getPost = () => onSnapshot(colRef, (snapsShot) => {
//   const reviews = [];
//   snapsShot.docs.forEach((doc) => {
//     reviews.push({ ...doc.data });
//   });
//   console.log(reviews);
// });

// export const showDatos = (input) =>
//  db.collection('post').onSnapshot((querySnapshot) => {
//     input.innerHTML = '';
//     querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//     input.innerHTML = + =
//   });
// });

// export const getPosts = () => {
//   db.collection('post').get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.data().restaurant}`);
//     });
//   });
// };

export const getPost = (callback) => {
  onSnapshot(collection(db, 'post'), callback);
};
