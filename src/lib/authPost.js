import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

// Add a new document with a generated id
const newPost = addDoc(collection(db, 'wall'), {
  restaurant: 'Tokyo',
  review: 'Japan',
});
console.log('Document written with ID: ', docRef.id);
