let submitButton = document.querySelector("#submit");
let graphDiv = document.querySelector("#graphDiv");

submitButton.addEventListener("click", ()=>{
	graphDivStyles();

});

function graphDivStyles(){
	graphDiv.style.display = "block";
	graphDiv.style.width = "45vw";
	graphDiv.style.border = "1px solid red";
}


