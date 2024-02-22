import { refs } from './refs';
import { getImages } from './pixabay-api';
import { templateForImages } from './render-functions';
import { showLoader, hideLoader } from './loader';
import { showError } from './showError';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

let userInput;
let page;
let maxPage;

export async function onFormSubmit(event) {
  event.preventDefault();
  userInput = event.target.elements.query.value.trim();
  refs.imageContainer.innerHTML = '';
  page = 1;

  if (!userInput) {
    refs.LoadMore.classList.add('hidden');
    iziToast.warning({
      message: 'This field cannot be empty!!!',
      position: 'topRight',
    });
    return;
  }

  showLoader();

  try {
    const data = await getImages(userInput, page);
    if (!data.hits.length) {
      showError();
    }
    maxPage = Math.ceil(data.totalHits / 15);
    refs.imageContainer.innerHTML = '';
    renderImages(data.hits);
    lightbox.refresh();
  } catch (error) {
    showError();
  } finally {
    hideLoader();
    checkBtnStatus();
  }

  event.target.reset();
}

export async function clickOnLoadMore(event) {
  event.preventDefault();
  page += 1;
  showLoader();

  try {
    const data = await getImages(userInput, page);
    renderImages(data.hits);
    lightbox.refresh();
  } catch (error) {
    showError();
  } finally {
    hideLoader();
    checkBtnStatus();
  }

  if (page >= maxPage) {
    iziToast.info({
      message: `We're sorry, but you've reached the end of search results.`,
      position: 'bottomRight',
    });
  }

  const galleryItemHeight =
    refs.imageContainer.firstElementChild.getBoundingClientRect().height;

  scrollBy({
    top: galleryItemHeight * 2,
    behavior: 'smooth',
  });
}

export function renderImages(images) {
  const markup = templateForImages(images);
  refs.imageContainer.insertAdjacentHTML('beforeend', markup);
}

function checkBtnStatus() {
  refs.LoadMore.classList.toggle('hidden', page >= maxPage);
}
