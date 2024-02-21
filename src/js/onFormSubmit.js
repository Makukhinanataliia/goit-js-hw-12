import { refs } from './refs';
import { renderImages } from './renderImages';
import { getImages } from './getImages';
import { showLoader } from './loader';
import { hideLoader } from './loader';
import { showError } from './showError';

export function onFormSubmit(event) {
  event.preventDefault();
  showLoader();
  refs.imageContainer.innerHTML = '';
  const userInput = event.target.elements.query.value;
  getImages(userInput)
    .then(renderImages)
    .catch(showError)
    .finally(hideLoader);

  event.target.reset();
}
