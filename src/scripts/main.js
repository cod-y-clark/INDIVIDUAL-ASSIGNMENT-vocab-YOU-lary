// USE WITH FIREBASE AUTH
import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
<h1>Vocab-YOU-lary</h1>
<h2>Sign in to continue</h2>
`;

  // USE WITH FIREBASE AUTH
  checkLoginStatus();
};

init();
