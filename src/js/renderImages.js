import { refs } from './refs';
import { showError } from './showError';
import { templateForImages} from './templateForImages';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images) {
  const markup = images.hits.map(templateForImages).join('');
  if (!images.hits.length) {
    showError();
  } else {
    refs.imageContainer.innerHTML = markup;
    const lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionSelector: 'img',
      captionType: 'attr',
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });

    lightbox.on('show.simplelightbox');
    lightbox.refresh();
  }
}
