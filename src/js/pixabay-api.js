import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52828842-5c1784e92de7248ba7b84eab7';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}
