import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const navBar = () => {
  clearDom();
  const domString = `
    <nav id="navigation" class="navbar fixed-top navbar-expand-lg navbar-info bg-info mb-5">
      <div class="container-fluid">
        <a class="navbar-brand title" href="index.html">Logos</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="projects">
                Projects <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="all-ideas">Ideas</a>
            </li>
            <li class="nav-item">
              <input
                class="form-control mr-sm-2"
                id="search"
                placeholder="Search"
                aria-label="Search"
              />
            </li>
          </ul>
          <span class="navbar-text">
            <div id="cart-button"></div>
            <div id="logout-button"></div>
          </span>
        </div>
      </div>
    </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
