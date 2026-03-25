const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

inputEl.checked = true;

upadateBody();

function upadateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
}

inputEl.addEventListener("input", () => {
  upadateBody();
});
