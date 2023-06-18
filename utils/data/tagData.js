import { clientCredentials } from '../client';

const getTags = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/tags`, {
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

const createTag = (tag, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/tags`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
    body: JSON.stringify(tag),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch(reject);
});

const getArtsByTag = (tagId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/arts?tag=${tagId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((artObject) => {
      if (artObject) {
        resolve(Object.values(artObject));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleTag = (tagId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/tags/${tagId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((artObject) => {
      if (artObject) {
        resolve(artObject);
      } else {
        resolve({});
      }
    })
    .catch(reject);
});

const updateTag = (tag) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/tags/${tag.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tag),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteTag = (tagId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/tags/${tagId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getTags,
  createTag,
  getArtsByTag,
  getSingleTag,
  updateTag,
  deleteTag,
};
