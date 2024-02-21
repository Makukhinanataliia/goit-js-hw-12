export function templateForImages(images) {
  return `<li class="gallery-item">
            <a class="gallery-link" href="${images.largeImageURL}">
              <img class="gallery-image" src="${images.webformatURL}" alt="${images.tags}" />
            </a>
               <ul class="list-content">      
                  <li class="list-text"><p>Likes <span>${images.likes}</span></p></li>
                  <li class="list-text"><p>Views <span>${images.views}</span></p></li>
                  <li class="list-text"><p>Comments <span>${images.comments}</span></p></li>
                  <li class="list-text"><p>Downloads <span>${images.downloads}</span></p></li>
              </ul>
          </li>`;
}
