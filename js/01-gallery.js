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
  if (event.target.classList.value !== "gallery__image") {
    return
  }

  const instance = basicLightbox.create(`
    <img class="gallery__image" src="${event.target.dataset.source}"/>
`)
  instance.show();

  //- Якщо вже робиш додаткове завдання, то там прописано, 
  // що подія на клавіатурі має існувати лише тоді, коли модалка відкрита(!)

  window.addEventListener("keydown", callback)
    
  function callback(event) {
    if (event.code === "Escape") {
      instance.close()
      console.log(123);
      window.removeEventListener("keydown", callback)
    }
  }


}

