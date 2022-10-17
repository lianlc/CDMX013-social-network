/* eslint-disable import/no-unresolved */
import {
  getFirestore, addDoc, collection, doc, deleteDoc, onSnapshot,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';

import { app } from './config.js';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// add documents
// const colRef = collection(db, 'post');

export const savePost = (restaurant, review) => addDoc(collection(db, 'post'), { restaurant, review });

export const deletePost = async (id) => deleteDoc(doc(db, 'post', id));

export const getPost = (callback) => { onSnapshot(collection(db, 'post'), callback); };
