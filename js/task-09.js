function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.body;
const buttonRef = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");

buttonRef.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  colorRef.textContent = color;
});
