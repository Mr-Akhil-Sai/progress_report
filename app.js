let submitButton = document.querySelector("#submit");
let clearButton = document.querySelector("#clear");
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let marks = document.querySelector("#marks");
let subjects = document.querySelector("#subjects");
let nameDiv = document.createElement("div");
let mathsMarks = document.querySelector("#maths");
let physicsMarks = document.querySelector("#physics");
let chemistryMarks = document.querySelector("#chemistry");
let frenchMarks = document.querySelector("#french");
let englishMarks = document.querySelector("#english");
let startingPoint = 15;
let yAxisCoordinate = 135; 

submitButton.addEventListener("click", () => {
		canvasStyles();
		xAxis();
		yAxis();
		marksDisplayingOnGraph();
		displayingName();
		clearInputs();	
});

clearButton.addEventListener("click", () => {
	location.reload();
	clearInputs();
});

function canvasStyles() {
  canvas.style.display = "block";
  canvas.style.width = "50vw";
  marks.style.display = "flex";
  subjects.style.display = "flex";
}

function xAxis() {
  ctx.beginPath();
  ctx.moveTo(startingPoint, startingPoint);
  ctx.lineTo(startingPoint, yAxisCoordinate);
  ctx.strokeStyle = "black";
  ctx.stroke();
}

function yAxis() {
  ctx.beginPath();
  ctx.moveTo(startingPoint, yAxisCoordinate);
  ctx.lineTo(240, yAxisCoordinate);
  ctx.strokeStyle = "black";
  ctx.stroke();
}

function marksDisplayingOnGraph(){
	let marksArray = [];
	let rectangleWidth = 20;
	marksArray.push(mathsMarks.value, physicsMarks.value, chemistryMarks.value, frenchMarks.value, englishMarks.value);
	let j = 0;
	for(let i = 0; i <= marksArray.length; i++){
		j += 40;	
		ctx.fillRect(j, yAxisCoordinate, rectangleWidth, -marksArray[i]);
}
}

function displayingName() {
  let main = document.querySelector("main");
  let name = document.querySelector("#name");
  nameDiv.innerText = name.value;
  nameDiv.style.position = "absolute";
  nameDiv.style.left = "62%";
  nameDiv.style.top = "10%";
  main.appendChild(nameDiv);
}

function clearInputs() {
  let name = document.querySelector("#name");
  name.value = "";
  mathsMarks.value = "";
  physicsMarks.value = "";
  chemistryMarks.value = "";
  frenchMarks.value = "";
  englishMarks.value = "";
}
