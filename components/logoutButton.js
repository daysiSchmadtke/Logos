import { signOut } from '../utils/auth';

const logoutButton = () => {
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;
