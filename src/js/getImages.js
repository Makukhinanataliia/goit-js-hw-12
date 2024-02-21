import { refs } from './refs';

export function getImages(userInput) {
  const searchParams = new URLSearchParams({
    key: '42406888-248cc758d404d4e51dcff55ab',
    q: `${userInput}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `https://pixabay.com/api/?${searchParams}`;
  
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
