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
    const itemSrc = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${itemSrc}" width="800" height="600">
    `);
    instance.show( (instance) => {
        document.onkeydown = function (evt) {
            evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key === "Escape" || evt.key === "Esc");
            } else {
                isEscape = (evt.keyCode === 27);
            }
            if (isEscape) {
                instance.close();
            }
        };
})
}

