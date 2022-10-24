/* eslint-disable import/no-unresolved */
import {
  getFirestore, addDoc, collection, doc, deleteDoc, onSnapshot, updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { auth } from './auth.js';
import { app } from './config.js';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const savePost = (restaurant, review) => {
  const dateCreated = Date.now();
  const user = auth.currentUser.uid;
  return addDoc(collection(db, 'post'), {
    restaurant, review, dateCreated, user,
  });
};

export const deletePost = (id) => deleteDoc(doc(db, 'post', id));
export const getPost = (callback) => {
  onSnapshot(collection(db, 'post'), callback);
};

export const editPost = (id, newReview, newRestaurant) => updateDoc(doc(db, 'post', id), {
  review: newReview,
  restaurant: newRestaurant,
});
