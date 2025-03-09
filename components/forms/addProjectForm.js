import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addProjectForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-project--${obj.firebaseKey}` : 'submit-project'}" class="mb-4">
    <div class="form-group">
      <label for="title">Project Title</label>
      <input type="text" class="form-control" id="title" aria-describedby="projectTitle" placeholder="Enter your Project Title" value="${obj.title || ''}" required>
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea class="form-control" placeholder="Project Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
    </div>
    <button type="submit" class="btn btn-primary">Create Project</button>
  </form>
  `;
  renderToDOM('#form-container', domString);
};

export default addProjectForm;
