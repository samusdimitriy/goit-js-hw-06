const onInputEl = document.querySelector("#font-size-control");
const onTextEl = document.querySelector("#text");

onInputEl.addEventListener("input", onInputChanged);

function onInputChanged(event) {
  onTextEl.style.fontSize = event.currentTarget.value + "px";
}
