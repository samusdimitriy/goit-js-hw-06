const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  input.classList.toggle(
    "valid",
    input.value.length === Number(input.dataset.length)
  );
  input.classList.toggle(
    "invalid",
    input.value.length !== Number(input.dataset.length)
  );
});
