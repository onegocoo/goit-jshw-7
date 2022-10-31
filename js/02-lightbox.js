import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
console.log(galleryRef);

const item = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");

galleryRef.insertAdjacentHTML("afterbegin", item);

galleryRef.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionsDelay: 250,
  });
}
