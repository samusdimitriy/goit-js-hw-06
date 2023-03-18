const onInputEl = document.querySelector("#font-size-control");
const onTextEl = document.querySelector("#text");

onTextEl.style.fontSize = onInputEl.value + "px";

onInputEl.addEventListener("input", onInputChanged);

function onInputChanged(event) {
  onTextEl.style.fontSize = event.currentTarget.value + "px";
}
