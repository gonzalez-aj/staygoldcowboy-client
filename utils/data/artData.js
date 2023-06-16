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

const createArt = (art) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/arts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${art.uid}`,
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
    .then((artObject) => {
      if (artObject) {
        resolve(Object.values(artObject));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default { getArts, createArt, getArtByTag };
