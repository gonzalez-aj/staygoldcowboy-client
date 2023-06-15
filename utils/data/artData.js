import { clientCredentials } from '../client';

const getArts = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.baseURL}/arts`)
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

export default getArts;
