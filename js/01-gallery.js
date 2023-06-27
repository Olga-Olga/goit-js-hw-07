// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);
// 
import { galleryItems } from './gallery-items.js';
// Change code below this line

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// console.log(galleryItems);

// const ulElement = document.querySelector(".gallery")



// ulElement.insertAdjacentHTML(afterbegin, instance)
    
    
    
    
const list = document.querySelector(".gallery");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

  list.insertAdjacentHTML("beforeend", markup);
//list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");




//instance.show()



