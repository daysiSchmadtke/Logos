import { getProjects } from '../api/projectData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import navigationEvents from '../events/navEvents';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import { showProjects } from '../pages/projects';

const startApp = (user) => {
  domBuilder(user);
  formEvents(user);
  navBar();
  domEvents(user);
  logoutButton();
  document.addEventListener('DOMContentLoaded', () => {
    navigationEvents();
  });
  getProjects(user.uid).then(showProjects);
};

export default startApp;
