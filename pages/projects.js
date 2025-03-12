import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

// Function to show a message when there are no books
const emptyProjects = () => {
  const domString = '<h1>No Projects</h1>';
  renderToDOM('#store', domString);
};

// Function to show books associated with the logged-in user's uid
const showProjects = (array, uid) => {
  clearDom();

  const btnString = '<button class="btn btn-info" id="add-project-btn">New Project</button>';
  renderToDOM('#add-button-projects', btnString);

  // Filter books to only include those with the specified uid
  const userProjects = array.filter((project) => project.uid === uid);
  const existingContent = document.querySelector('#store-projects').innerHTML;
  let domString = existingContent;

  userProjects.forEach((item) => {
    domString += `
      <div class="card width:25rem">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.description}</p>
            <hr>
            <div class="projects-btns">
            <i class="btn btn-success fas fa-eye" id="view-project-btn--${item.firebaseKey}"></i>
            <i id="edit-project-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-project-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
            </div>
        </div>
      </div>`;
  });

  // If there are no books for the user, show a message
  if (!userProjects.length) {
    domString = '<h1>No Projects</h1>';
  }

  renderToDOM('#store-projects', domString);
};

export { showProjects, emptyProjects };
