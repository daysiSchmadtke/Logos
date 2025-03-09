import { getIdeas } from '../api/ideaData';
import { showIdeas } from '../pages/ideas';
import { getProjects } from '../api/projectData';
import { showProjects } from '../pages/projects';
import { signOut } from '../utils/auth';

// Function to filter ideas based on search value
const filterIdeas = (searchValue, ideas) => ideas.filter((idea) => idea.title.toLowerCase().includes(searchValue)
    || idea.description.toLowerCase().includes(searchValue));

// Function to safely add event listeners with debug logging
const addEventListenerSafe = (selector, event, handler) => {
  const element = document.querySelector(selector);
  if (element) {
    element.addEventListener(event, handler);
  } else {
    console.warn(`Element with selector '${selector}' not found.`);
  }
};

// Navigation events
const navigationEvents = () => {
// LOGOUT BUTTON
  addEventListenerSafe('#logout-button', 'click', signOut);

  // ALL IDEAS
  addEventListenerSafe('#all-ideas', 'click', () => {
    getIdeas().then(showIdeas);
  });

  // PROJECTS
  addEventListenerSafe('#projects', 'click', () => {
    getProjects().then(showProjects);
  });

  // SEARCH
  addEventListenerSafe('#search', 'keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      getIdeas().then((ideas) => {
        const filteredIdeas = filterIdeas(searchValue, ideas);
        showIdeas(filteredIdeas);
      });
      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
