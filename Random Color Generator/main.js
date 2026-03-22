const container = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorContainerDiv = document.createElement("div");
  colorContainerDiv.classList.add("color-container");
  container.appendChild(colorContainerDiv);
}

const colorContainerEl = document.querySelectorAll(".color-container");
generateColor();

function generateColor() {
  colorContainerEl.forEach((colorContainerDiv) => {
    const newColorCode = randomColor();
    colorContainerDiv.style.backgroundColor = "#" + newColorCode;
    colorContainerDiv.innerText = "#" + newColorCode;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const codeLength = 6;
  let colorCode = "";
  for (let index = 0; index < codeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}

