let submitButton = document.querySelector("#submit");
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let marks = document.querySelector("#marks");
let subjects = document.querySelector("#subjects");

submitButton.addEventListener("click", () => {
  canvasStyles();
	xAxis();
	yAxis();	
	mathsMarks();
	physicsMarks();
	chemistryMarks();
	frenchMarks();
	englishMarks();
	clearInputs();
});

function canvasStyles() {
  canvas.style.display = "block"; 
  canvas.style.width = "50vw";
  marks.style.display = "flex";
  subjects.style.display = "flex";
}

function xAxis(){
	ctx.beginPath();
	ctx.moveTo(15, 15);
	ctx.lineTo(15, 135);
	ctx.stroke();
}

function yAxis(){
	ctx.beginPath();
	ctx.moveTo(15, 135);
	ctx.lineTo(240, 135);
	ctx.stroke();
}

function mathsMarks(){
	let maths = document.querySelector("#maths").value;
	ctx.fillRect(40,135, 20, -maths);
}

function physicsMarks(){
	let physics = document.querySelector("#physics").value;
	ctx.fillRect(80, 135, 20, -physics);
}

function chemistryMarks(){
	let chemistry = document.querySelector("#chemistry").value;
	ctx.fillRect(120, 135, 20, -chemistry);
}

function frenchMarks(){
	let french = document.querySelector("#french").value;
	ctx.fillRect(160, 135, 20, -french);
}

function englishMarks(){
	let english = document.querySelector("#english").value;
	ctx.fillRect(200, 135, 20, -english);
}

function clearInputs(){
	let name = document.querySelector("#name");
	let maths = document.querySelector("#maths");
	let physics = document.querySelector("#physics");
	let chemistry = document.querySelector("#chemistry");
	let french = document.querySelector("#french");
	let english = document.querySelector("#english");

	name.value = "";
	maths.value = "";
	physics.value = "";
	chemistry.value = "";
	french.value = "";
	english.value = "";
}

