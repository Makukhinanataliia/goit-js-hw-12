import { refs } from './js/refs';
import { onFormSubmit, clickOnLoadMore } from './js/onFormSubmit';
refs.form.addEventListener('submit', onFormSubmit);
refs.LoadMore.addEventListener('click', clickOnLoadMore);
