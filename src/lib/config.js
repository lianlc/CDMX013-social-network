// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js';

const firebaseConfig = {
  apiKey: 'AIzaSyA0ns4KG9fNSyluu23Z9zM0UqFNdpTjYig',
  authDomain: 'rs-comida.firebaseapp.com',
  projectId: 'rs-comida',
  storageBucket: 'rs-comida.appspot.com',
  messagingSenderId: '706302494954',
  appId: '1:706302494954:web:cf34294b632cfbc3d92f93',
  measurementId: 'G-F8F8WE0JQQ',
};

export const app = initializeApp(firebaseConfig);
