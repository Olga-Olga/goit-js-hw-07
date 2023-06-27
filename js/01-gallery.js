 import { galleryItems } from './gallery-items.js';
const elImgCards = galleryItems.map(({preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join("");

const ulElement = document.querySelector(".gallery")
ulElement.insertAdjacentHTML("afterbegin", elImgCards)
    
ulElement.addEventListener("click", handlerClickOnPicture)

function handlerClickOnPicture(event) {
  event.preventDefault()
  console.dir(event.target.classList)
 if (event.target.classList.value !== "gallery__image")
{
     return
  }

  const instance = basicLightbox.create(`
    <img class="gallery__image" src="${event.target.dataset.source}"/>
`)
  instance.show();
  
  window.addEventListener("keydown", (event) => {
  console.log(event.code);
  if (event.code === "Escape") {
    instance.close()
  }
})

}




