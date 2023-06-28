import { galleryItems } from './gallery-items.js';
const galeryElements = galleryItems.map( ({preview,original,description}) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
   </a>
</li>`).join("")
const ulEl = document.querySelector(".gallery")
ulEl.insertAdjacentHTML("afterbegin", galeryElements)

const br = new SimpleLightbox(".gallery a", {
   captionsData: "alt",
   captionDelay: 250,
   doubleTapZoom: 2,
   scrollZoom: false
})

// br.on('next.simplelightbox', function () {
//    console.log("Hello");
//    br.close()
// });

// const lightbox = new SimpleLightbox('.gallery a');
// let currentIndex = 0;
// let intervalId;
// function autoNextImage(delay) {
//   intervalId = setInterval(() => {
//     lightbox.close();
//     currentIndex = (currentIndex + 1) % lightbox.elements.length;
//     const nextElement = lightbox.elements[currentIndex];
//     lightbox.open(nextElement);
//   }, delay);
// }
// autoNextImage(5000);
