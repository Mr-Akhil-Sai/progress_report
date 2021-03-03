let submitButton = document.querySelector("#submit");
let canvas = document.querySelector("canvas");

submitButton.addEventListener("click", () => {
  canvasStyles();
});

function canvasStyles() {
  canvas.style.display = "block";
  canvas.style.border = "1px solid red";
  canvas.style.width = "45vw";
}
