import galleryItems from "./gallery-items.js";

const gallery = document.querySelector(".js-gallery");
const galleryMarkUp = galleryItems.reduce(renderImage, "");

const modal = document.querySelector("div.js-lightbox");
const lightbox = document.querySelector("img.lightbox__image");
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
// const overlay = document.querySelector("div.lightbox__overlay");
// console.log(overlay);

gallery.insertAdjacentHTML("afterbegin", galleryMarkUp);
gallery.addEventListener("click", handleGalleryClick);
closeBtn.addEventListener("click", handleModalCloseClick);
// overlay.addEventListener("click", handleModalCloseClick);

function handleGalleryClick(event) {
  event.preventDefault();
  const targetImage = event.target;
  if (targetImage.nodeName !== "IMG") return;
  const fullSizeLink = targetImage.getAttribute("data-source");
  openOriginal(fullSizeLink);
}

function openOriginal(link) {
  modal.classList.add("is-open");
  lightbox.setAttribute("src", link);
}

function handleModalCloseClick(event) {
  modal.classList.remove("is-open");
  lightbox.setAttribute("src", "");
}

function renderImage(acc, image) {
  return (
    acc +
    `<li class="gallery__item">
  <a
    class="gallery__link"
    href='${image.original}'
  >
    <img
      class="gallery__image"
      src='${image.preview}'
      data-source='${image.original}'
      alt='${image.description}'
    />
  </a>
</li>`
  );
}
