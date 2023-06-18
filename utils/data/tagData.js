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
  fetch(`${clientCredentials.databaseURL}/arts.json?orderBy="tagId"&equalTo="${tagId}"`, {
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

export {
  getTags,
  createTag,
  getArtsByTag,
};
