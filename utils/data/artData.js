import { clientCredentials } from '../client';

const getArts = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/arts`, {
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

const createArt = (art, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/arts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
    body: JSON.stringify(art),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch(reject);
});

const getArtByTag = (tagId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/arts?tag=${tagId}`, {
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

const getSingleArt = (artId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/arts/${artId}`, {
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

export {
  getArts,
  createArt,
  getArtByTag,
  getSingleArt,
};
