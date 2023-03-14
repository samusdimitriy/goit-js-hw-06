const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Белый и черный длинношерстный кот",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Оранжево-белая карповая рыба возле желтой карповой рыбы",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Группа бегущих лошадей",
  },
];

const createStringImages = ({ url, alt }) => {
  return `<li><img src="${url}" alt="${alt}"></li>`;
};

const galleryEl = images.map(createStringImages).join("");
console.log(galleryEl);

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("afterbegin", galleryEl);

gallery.style.display = "flex";
gallery.style.listStyle = "none";
gallery.style.justifyContent = "space-around";

const imagesEl = document.querySelectorAll("img");
console.log(imagesEl);
imagesEl.forEach((image) => {
  image.style.width = "300px";
  image.style.height = "200px";
});
