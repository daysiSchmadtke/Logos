import { getProjects } from '../api/projectData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import navigationEvents from '../events/navEvents';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import { showProjects } from '../pages/projects';
import { getIdeas } from '../api/ideaData';
import { showIdeas } from '../pages/ideas';

const startApp = (user) => {
  domBuilder(user);
  formEvents(user);
  navBar();
  domEvents(user);
  logoutButton();
  document.addEventListener('DOMContentLoaded', () => {
    navigationEvents();
  });
  getProjects(user.uid).then((projects) => showProjects(projects));
  getIdeas(user.uid).then(showIdeas);
};

export default startApp;
