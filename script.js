var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button = document.querySelector("button");
var body = document.getElementById("gradient");

console.log(button);

body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
css.textContent = body.style.background + ";";

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomNumber() {
	return "#"+((1<<24)*Math.random()|0).toString(16)
}

function randomGradient(){
	color1.value = randomNumber();
	color2.value = randomNumber();
	setGradient();
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);   
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomGradient);