import { createIdea, getIdeas, updateIdea } from '../api/ideaData';
import { createProject, getProjects, updateProject } from '../api/projectData';
import { showIdeas } from '../pages/ideas';
import { showProjects } from '../pages/projects';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-idea')) {
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        image: document.querySelector('#image').value,
        date: document.querySelector('#date').value,
        idea_id: document.querySelector('#idea_id').value,
        project: document.querySelector('#select-project').checked,
      };

      createIdea(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateIdea(patchPayload).then(() => {
          getIdeas().then(showIdeas);
        });
      });
    }

    if (e.target.id.includes('update-idea')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        image: document.querySelector('#image').value,
        date: document.querySelector('#date').value,
        idea_id: document.querySelector('#idea_id').value,
        project: document.querySelector('#select-project').checked,
        firebaseKey,
      };

      updateIdea(payload).then(() => {
        getIdeas().then(showIdeas);
      });
    }

    if (e.target.id.includes('submit-project')) {
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
      };

      createProject(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateProject(patchPayload).then(() => {
          getProjects().then(showProjects);
        });
      });
    }

    if (e.target.id.includes('update-project')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        firebaseKey,
      };

      updateProject(payload).then(() => {
        getProjects().then(showProjects);
      });
    }
  });
};

export default formEvents;
