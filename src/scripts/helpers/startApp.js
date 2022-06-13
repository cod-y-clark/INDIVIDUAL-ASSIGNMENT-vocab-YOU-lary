import domBuilder from '../components/pages/domBuilder';
import navBar from '../components/pages/navBar';
import logoutButton from '../components/logoutButton';
import { getVocabCards } from '../../api/vocabCardData';
import navEvents from '../components/events/navigationEvents';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';
import showCards from '../components/pages/vocabTerms';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  domEvents(user.uid);
  formEvents(user.uid);
  navEvents(user.uid);
  getVocabCards(user.uid).then((object) => showCards(object));
};

export default startApp;
