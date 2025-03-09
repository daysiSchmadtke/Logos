import { getProjects } from '../api/projectData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import navigationEvents from '../events/navEvents';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import { showProjects } from '../pages/projects';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all books on the DOM on App load
  getProjects().then(showProjects);
};

export default startApp;
