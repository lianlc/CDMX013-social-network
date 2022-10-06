import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { app } from './config.js';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// add documents
// export const getCollection = () => {
//   db.collection('wall').add({
//     restaurant: document.getElementById('restaurant').value,
//     review: document.getElementById('review').value,
//   })
//     .then((docRef) => {
//       console.log('Document written with ID: ', docRef.id);
//     })
//     .catch((error) => {
//       console.error('Error adding document: ', error);
//     });
// };
export const savePost = (restaurant, review) => addDoc(collection(db, 'post'), { restaurant, review });
