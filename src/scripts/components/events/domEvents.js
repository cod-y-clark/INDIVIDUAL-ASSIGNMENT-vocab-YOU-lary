import { deleteCard, getSingleCard } from '../../../api/vocabCardData';
import addVocabForm from '../form/addVocabForm';
import showCards from '../pages/vocabTerms';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteCard(firebaseKey, uid).then((cardsArray) => showCards(cardsArray));
      }
    }

    if (e.target.id.includes('add-card-btn')) {
      addVocabForm({}, uid);
    }

    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => addVocabForm(uid, cardObj));
    }
  });
};

export default domEvents;
