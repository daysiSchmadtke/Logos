import renderToDOM from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
 <div id="add-button"></div>
<button class="btn btn-info mb-5" id="show-projects"> All Projects</button>
<button class="btn btn-light mb-5" id="show-ideas"> All Ideas</button>
    <div id="form-container"></div>
    <div id ="store"> </div>
    <div id="view"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
