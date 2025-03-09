// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
  <h1>Logos</h1>
  <h2> Your <span class="text-info">Digital Board</span> of Ideas, <span class="text-info">Visualize</span> your path to action.</h2> 
   <hr />`;

  // USE WITH FIREBASE AUTH
  ViewDirectorBasedOnUserAuthStatus();
};

init();
