import { getVocabCards } from '../../../api/vocabCardData';
import signOut from '../../helpers/signOut';
import addVocabForm from '../form/addVocabForm';
import showCards from '../pages/vocabTerms';

const navEvents = () => {
  document.querySelector('#google-auth')
    .addEventListener('click', signOut);

  document.querySelector('#create-card').addEventListener('click', () => {
    addVocabForm();
  });

  document.querySelector('#all-cards').addEventListener('click', () => {
    getVocabCards().then((cardsArray) => showCards(cardsArray));
  });
};

export default navEvents;
