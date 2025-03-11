import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyIdeas = () => {
  const domString = '<h1>No Ideas</h1>';
  renderToDOM('#store', domString);
};

const showIdeas = (array, uid) => {
  clearDom();

  const btnString = '<button class="btn btn-warning btn-lg mb-5" id="add-idea-btn">New Idea</button>';
  renderToDOM('#add-button', btnString);

  const userIdeas = array.filter((idea) => idea.uid === uid);

  let domString = '';
  userIdeas.forEach((item) => {
    domString += `
      <div class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.description}</p>
            <p class="card-text bold">${item.project}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-idea-btn--${item.firebaseKey}"></i>
            <i id="edit-idea-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-idea-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });

  if (!userIdeas.length) {
    domString = '<h1>No Ideas</h1>';
  }

  renderToDOM('#store', domString);
};

export { showIdeas, emptyIdeas };
