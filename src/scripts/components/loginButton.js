import signIn from '../helpers/signIn';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger login-btn">LOGIN WITH GOOGLE</button>';
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
