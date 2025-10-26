import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52828842-5c1784e92de7248ba7b84eab7';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: PER_PAGE,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}

export { PER_PAGE };
