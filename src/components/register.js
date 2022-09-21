import { onNavigate } from '../main.js';

export const register = () => {
  // para crear elementos del formulario
  const form = document.createElement('div');
  const title = document.createElement('h1');
  const formu = document.createElement('p');
  const divInput = document.createElement('div');
  const inputName = document.createElement('input');
  const inputAge = document.createElement('input');
  const inputMail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonRegis = document.createElement('button');
  const copyright = document.createElement('p');

  // contenido de los elementos
  title.textContent = 'RedEat';
  formu.textContent = 'Completa el formulario';
  inputName.placeholder = 'Nombre';
  inputAge.placeholder = 'Edad';
  inputMail.placeholder = 'Correo';
  inputPass.placeholder = 'Contraseña';
  buttonRegis.textContent = 'REGISTRATE';
  buttonRegis.classList = 'buttonStyle';
  copyright.textContent = 'Todos los derechos reservados 2022';
  divInput.classList = 'divDirection';

  buttonRegis.addEventListener('click', () => {
    onNavigate('/login');
  });

  // Insertar los elementos en el div
  divInput.append(
    inputName,
    inputAge,
    inputMail,
    inputPass,
    buttonRegis,
  );
  form.append(
    title,
    divInput,
    copyright,
  );
  return form;
};
