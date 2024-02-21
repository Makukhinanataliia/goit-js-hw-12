import axios from 'axios';

export async function getImages(userInput, currentPage) {
  const API_KEY = '42406888-248cc758d404d4e51dcff55ab';
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const url = `${BASE_URL}${END_POINT}`;
  const params = {
    key: API_KEY,
    q: userInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: currentPage,
  };

  const resp = await axios.get(url, { params });
  return resp.data;
}
