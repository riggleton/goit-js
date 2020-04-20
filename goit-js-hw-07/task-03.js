const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

let imageList = "";
const list = document.querySelector("#gallery");
list.style.display = "flex";
list.style.flexDirection = "column";
list.style.listStyle = "none";

images.forEach((image) => {
  imageList = imageList.concat(createImageElement(image.url, image.alt));
});

console.log(imageList);
list.insertAdjacentHTML("afterbegin", imageList);

function createImageElement(src, alt) {
  const listItem = `
  <li>
    <img src = '${src}' alt = '${alt}' width = '1200px'></img>
  </li>
  `;
  return listItem;
}