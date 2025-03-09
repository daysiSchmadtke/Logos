import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import { getIdeasByProject } from '../api/ideaData';
import viewIdea from './viewIdea';

const viewProject = (project) => {
  clearDom();
  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <h1>${project.title || ''}</h1>
     <p>${project.description || ''}</p>
     <div class="mt-5">
       <i id="edit-project-btn--${project.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-project--${project.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
       <i id="view-project-ideas-btn--${project.firebaseKey}" class="fas fa-eye btn btn-primary"> View Ideas</i>
     </div>
   </div>
  </div>`;

  renderToDOM('#view', domString);

  document.querySelector(`#view-project-ideas-btn--${project.firebaseKey}`).addEventListener('click', () => {
    getIdeasByProject(project.firebaseKey).then(viewIdea);
  });
};

export default viewProject;
