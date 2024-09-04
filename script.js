const container = document.querySelector(".container");
const WIDTH = innerWidth * (2 / 5);

function newGrid(squares) {
  for (let i = 0; i < squares; i++) {
    for (let j = 0; j < squares; j++) {
      const square = document.createElement("div");
      square.style.width = `${WIDTH / squares}px`;
      square.style.height = square.style.width;
      square.setAttribute("opacity", 0);
      container.appendChild(square);
    }
  }
}

container.addEventListener("mouseover", (e) => {
  let opacity = parseInt(e.target.getAttribute("opacity"));
  if (opacity < 100) {
    e.target.setAttribute("opacity", opacity + 10);
    opacity += 10;
  }
  if (rainbow) {
    e.target.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 256
    )} ${Math.floor(Math.random() * 256)} ${Math.floor(
      Math.random() * 256
    )} / ${opacity}%)`;
  } else {
    e.target.style.backgroundColor = `rgb(0 0 0 / ${opacity}%)`;
  }
});

const sketchButton = document.querySelector("#sketch-button");

sketchButton.addEventListener("click", () => {
  let squares;
  do {
    squares = parseInt(prompt("Squares per side of new grid (max 100)", 16));
  } while (squares > 100);
  if (!isNaN(squares)) {
    container.replaceChildren();
    newGrid(squares);
  }
});

let rainbow = false;
const rainbowButton = document.querySelector("#rainbow-button");

rainbowButton.addEventListener("click", () => {
  if (!rainbow) {
    rainbow = true;
    rainbowButton.textContent = "Normal";
    rainbowButton.style.backgroundColor = "gray";
  } else {
    rainbow = false;
    rainbowButton.textContent = "Rainbow";
    rainbowButton.style.backgroundColor = "hotpink";
  }
});

newGrid(16);
