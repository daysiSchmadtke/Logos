import renderToDOM from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div>
  <div id="navigation"></div>
  <div id="main-container">
  <div id="form-container"></div>
  <div id ="store-projects"> </div>
  <div id ="store-ideas"> </div>
  <div id="view"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
