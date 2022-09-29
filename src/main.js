import {
  getAuth,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { Welcome } from './components/welcome.js';
import { register } from './components/register.js';
import { login } from './components/login.js';
import { wall } from './components/wall/wall.js';

const auth = getAuth();

const root = document.getElementById('root');

const routes = {
  '/': Welcome,
  '/login': login,
  '/register': register,
  '/wall': wall,
};

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  if (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};

root.appendChild(component());
// myFunction();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(user.email);
    onNavigate('/wall');
    // ...
  } else {
    // User is signed out
    // ...
    onNavigate('/');
    console.log('Nel valedora');
  }
});
