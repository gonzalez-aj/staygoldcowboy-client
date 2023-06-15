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

export default getArts;
