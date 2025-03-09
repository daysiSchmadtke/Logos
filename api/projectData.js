import firebase from 'firebase/app';
import client from '../utils/client';

const endpoint = client.databaseURL;

// TODO: GET PROJECT
const getProjects = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/projects.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// TODO: DELETE PROJECT
const deleteProject = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/projects/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((res) => res.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: GET SINGLE PROJECT
const getSingleProject = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/projects/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// TODO: CREATE PROJECT
const createProject = (payload) => new Promise((resolve, reject) => {
  const user = firebase.auth().currentUser; // Get the currently logged-in user

  if (!user) {
    reject(new Error('User must be logged in to create a Project.'));
    return;
  }

  const updatedPayload = { ...payload, uid: user.uid }; // Attach the current user's uid
  fetch(`${endpoint}/projects.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedPayload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => reject(new Error('Error creating project: ', error.message)));
});

// TODO: UPDATE PROJECT
const updateProject = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/projects/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getProjects,
  createProject,
  deleteProject,
  getSingleProject,
  updateProject
};
