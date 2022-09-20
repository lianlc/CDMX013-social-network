export const register = () => {
// para crear elementos del formulario
  const form = document.createElement('div');
  const title = document.createElement('h1');
  const inputName = document.createElement('input');
  const inputAge = document.createElement('input');
  const inputMail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonRegis = document.createElement('button');
  // contenido de los elementos
  title.textContent = 'Completa el formulario';
  inputName.placeholder = 'Nombre';
  inputAge.placeholder = 'Edad';
  inputMail.placeholder = 'Correo';
  inputPass.placeholder = 'Contraseña';
  buttonRegis.textContent = 'REGISTRATE';

  // Insertar los elementos en el div
  form.append(title, inputName, inputAge, inputMail, inputPass, buttonRegis);
  return form;
};
