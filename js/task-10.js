function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);

function createBoxes(amount) {
  amount = Number(input.value);
  const arr = [];

  const { min, max } = input;

  if (amount < Number(min) || amount > Number(max)) {
    alert(`Please enter a number between ${min} and ${max}`);
    return;
  }

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    arr.push(div);
  }
  boxes.append(...arr);

  input.value = "";
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
}
