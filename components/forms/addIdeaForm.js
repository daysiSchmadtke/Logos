import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addIdeaForm = (obj = {}, projects = []) => {
  clearDom();
  let projectOptions = '';

  projects.forEach((project) => {
    projectOptions += `<option value="${project.firebaseKey}" ${obj.project === project.firebaseKey ? 'selected' : ''}>${project.title}</option>`;
  });

  const domString = `
  <form id="${obj.firebaseKey ? `update-idea--${obj.firebaseKey}` : 'submit-idea'}" class="mb-4">
    <div class="form-group">
      <label for="title">Idea Title</label>
      <input type="text" class="form-control" id="title" aria-describedby="ideaTitle" placeholder="Enter your Idea" value="${obj.title || ''}" required>
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea class="form-control" placeholder="Describe your Idea" id="description" style="height: 100px">${obj.description || ''}</textarea>
    </div>
    <div class="form-group">
      <label for="image">Image URL</label>
      <input type="url" class="form-control" id="image" placeholder="Image URL" value="${obj.image || ''}" required>
    </div>
    <div class="form-group">
      <label for="date">Date</label>
      <input type="date" id="date" placeholder="date" value="${obj.date || ''}" required>
    </div>
    <div class="form-group" id="select-project">
      <label for="project">Project</label>
      <select class="form-control" id="project" required>
        <option value="" disabled ${!obj.project ? 'selected' : ''}>Select Project</option>
        ${projectOptions}
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Create Idea</button>
  </form>
  `;
  renderToDOM('#form-container', domString);
};

export default addIdeaForm;
