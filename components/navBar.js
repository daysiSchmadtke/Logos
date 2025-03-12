import renderToDOM from '../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
      <div class="container-fluid">
        <a class="navbar-brand title" href="#">Logos</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="show-projects">
                Projects <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="show-ideas">Ideas</a>
            </li>
            <li class="nav-item">
              <input
                class="form-control mr-sm-2"
                id="search"
                placeholder="Search ideas"
                aria-label="Search"
              />
            </li>
            <li class="nav-item">
              <div id="add-button-ideas" class="ml-2"></div>
            </li>
              <li class="nav-item">
              <div id="add-button-projects" class="ml-2"></div>
            </li>
          </ul>
          <span class="navbar-text ml-auto" id="log">
            <button id="google-auth" class="btn btn-danger ml-5">SIGNOUT</button>
          </span>
        </div>
      </div>
    </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
