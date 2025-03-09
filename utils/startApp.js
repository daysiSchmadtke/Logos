import { getProjects } from '../api/projectData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import navigationEvents from '../events/navEvents';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import { showProjects } from '../pages/projects';

const startApp = () => {
  domBuilder();
  domEvents();
  formEvents();
  navBar();
  logoutButton();
  document.addEventListener('DOMContentLoaded', () => {
    navigationEvents();
  });
  getProjects().then(showProjects);
};

export default startApp;
