const container = document.querySelector(".container");
const n_sqr = 500;
const color = ["#008744", "	#0057e7", "	#d62d20", "#ffa700", "#ffffff"];

function randomc(color) {
  return color[Math.floor(Math.random() * color.length)];
}

function setcolor(element) {
  element.style.backgroundColor = randomc(color);
}
function unsetColor(element) {
  element.style.backgroundColor = "#1D1D1D";
  element.style.boxShadow = "0 0 2px 0 rbga(0,0,0,0.3)";
}

for (let a = 0; a < n_sqr; a++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    setcolor(square);
  });
  square.addEventListener("mouseout", () => {
    unsetColor(square);
  });
  container.appendChild(square);
}
