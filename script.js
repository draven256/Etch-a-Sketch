const container = document.querySelector(".container");
const WIDTH = innerWidth * (2 / 5);

function newGrid(squares) {
  for (let i = 0; i < squares; i++) {
    for (let j = 0; j < squares; j++) {
      const div = document.createElement("div");
      div.style.width = `${WIDTH / squares}px`;
      div.style.height = div.style.width;
      container.appendChild(div);
    }
  }
}

container.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "black";
});

const button = document.querySelector("button");

button.addEventListener("click", () => {
  let squares;
  do {
    squares = parseInt(
      prompt("Squares per side of new grid (max 100)", 16)
    );
  } while (squares > 100);
  if (!isNaN(squares)) {
    container.replaceChildren();
    newGrid(squares);
  }
});

newGrid(16);
