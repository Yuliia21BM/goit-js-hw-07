import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const gallerySet = createGalleryset(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', gallerySet);

galleryRef.addEventListener('click', onAddItemsClick);

function createGalleryset(items =[]) {
    return items.map((item) => 
    `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`).join("");
}

function onAddItemsClick(evt) {
    evt.preventDefault();
}

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,});
