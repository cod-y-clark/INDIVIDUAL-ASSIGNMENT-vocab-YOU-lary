import showCards from '../pages/vocabTerms';
import { createEntry, updateEntry } from '../../../api/vocabCardData';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      const cardObj = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language_tech: document.querySelector('#language_tech').value,
        uid
      };
      createEntry(cardObj).then((cardsArray) => showCards(cardsArray));
    }

    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const cardObj = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language_tech: document.querySelector('#language_tech').value,
        firebaseKey
      };
      updateEntry(cardObj).then(showCards);
    }
  });
};

export default formEvents;
