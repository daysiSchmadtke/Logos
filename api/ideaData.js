import firebase from 'firebase/app';
import client from '../utils/client';

const endpoint = client.databaseURL;

// TODO: GET IDEAS
const getIdeas = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/ideas.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// TODO: DELETE IDEA
const deleteIdea = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/ideas/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((res) => res.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: GET SINGLE IDEA
const getSingleIdea = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/ideas/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: CREATE IDEA
const createIdea = (payload) => new Promise((resolve, reject) => {
  const user = firebase.auth().currentUser; // Get the currently logged-in user

  if (!user) {
    reject(new Error('User must be logged in to create an Idea.'));
    return;
  }

  const updatedPayload = { ...payload, uid: user.uid }; // Attach the current user's uid
  fetch(`${endpoint}/ideas.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedPayload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => reject(new Error('Error creating idea: ', error.message)));
});

// TODO: UPDATE IDEA
const updateIdea = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/ideas/${payload.firebaseKey}.json`, {
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

// TODO: GET IDEA DETAILS
const getIdeaDet = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/ideas.json?orderBy="author_id"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// GET IDEAS BY PROJECT
const getIdeasByProject = (projectFirebaseKey) => new Promise((resolve, reject) => {
  getIdeas().then((ideas) => {
    const filteredIdeas = ideas.filter((idea) => idea.project === projectFirebaseKey);
    resolve(filteredIdeas);
  }).catch(reject);
});

export {
  getIdeas,
  createIdea,
  deleteIdea,
  getSingleIdea,
  updateIdea,
  getIdeaDet,
  getIdeasByProject
};
