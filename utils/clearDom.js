const clearDom = () => {
  document.querySelector('#store-projects').innerHTML = '';
  document.querySelector('#store-ideas').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

export default clearDom;
