import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewIdea = (ideas) => {
  clearDom();

  // Sort ideas by date (most recent first)
  const sortedIdeas = ideas.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get the most recent idea
  const obj = sortedIdeas[0];

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <h1>${obj.title || ''}</h1>
     <img src=${obj.image} alt=${obj.title} style="width: 300px;">
     <div class="mt-5">
       <i id="edit-idea-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-idea--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <p>${obj.description || ''}</p>
     <p>${obj.project || ''}</p>
      </div>
    </div>`;

  renderToDOM('#view', domString);
};

export default viewIdea;
