import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const gallerySet = createGalleryset(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', gallerySet);

galleryRef.addEventListener('click', onAddItemsClick);

function createGalleryset(items =[]) {
    return items.map((item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join("");
}


function onAddItemsClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) return;
    const itemSrc = e.target.dataset.source;
  const modalImageBox = basicLightbox.create(`
    // <img src="${itemSrc}" width="800" height="600">`,
    {
      onShow: () => document.addEventListener('keydown', onEscapeClick),
      onClose: () => document.removeEventListener('keydown', onEscapeClick),
    }
  );
  const onEscapeClick = (e) => {
  if (e.key === 'Escape') modalImageBox.close();
  };
  modalImageBox.show();
}




