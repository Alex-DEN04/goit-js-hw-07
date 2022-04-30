import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const markup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", markup);

function createGallery(items) {
    return items.map((item) => {
        const { preview, original, description } = item;
        // console.log(item);
        return `
            <a class="gallery__item" 
                href="${original}">
            <img class="gallery__image" 
                src="${preview}"" 
                alt="${description}" />
            </a>
        `;
    }).join(''); 
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
