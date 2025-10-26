import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//gallery container
const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

//SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

//render gallery
export function createGallery(images) {
  const markup = images
    .map(
      img => `
      <li class="gallery-item">
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" />
        </a>
        <div class="stats">
          <p> ${img.likes}</p>
          <p> ${img.views}</p>
          <p> ${img.comments}</p>
          <p>⬇ ${img.downloads}</p>
        </div>
      </li>`
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

//clear
export function clearGallery() {
  galleryContainer.innerHTML = '';
}

//show loader
export function showLoader() {
  loader.classList.remove('hidden');
}

//hide loader
export function hideLoader() {
  loader.classList.add('hidden');
}
