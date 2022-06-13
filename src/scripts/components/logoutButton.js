import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from '../helpers/clearDom';

const signMeOut = () => {
  firebase.auth().signOut();
  clearDom();
  document.querySelector('#app').innerHTML = `
<h1>Vocab-YOU-lary</h1>
<h2>Sign in to continue</h2>
`;
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger signout-btn">SIGNOUT</button>';
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
