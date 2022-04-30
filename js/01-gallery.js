import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const markup = createGallery(galleryItems);

let instance;


galleryContainer.insertAdjacentHTML("afterbegin", markup);

galleryContainer.addEventListener("click", onImageClick);

document.addEventListener("keydown", onEscKeyPress);

function createGallery(items) {
    return items.map((item) => {
        const { preview, original, description } = item;
        // console.log(item);
        return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>
            </div>
        `;
    }).join(''); 
}

function onImageClick(event) {
    event.preventDefault();
    const largeImage = event.target.dataset.source;
    const description = event.target.alt;
    instance = basicLightbox.create(`
        <img src="${largeImage}" alt="${description}"/>
    `);
    instance.show();
}

function onEscKeyPress(event) {
     event.preventDefault();
    if (event.code === "Escape") {
        instance.close();
        return;
    }
   document.removeEventListener("keydown", onEscKeyPress);
}
   