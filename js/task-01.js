const countCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${countCategories.length}`);

countCategories.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
