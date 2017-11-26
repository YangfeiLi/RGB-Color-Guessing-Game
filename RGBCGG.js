var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.background = colors[i];

	// add click listeners
	squares[i].addEventListener("click",function() {
		var clickedColor = this.style.background;
		// compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	})
}

function changeColors(color) {
	// loop
	for (var i = 0; i < squares.length; i ++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	// repeat num times
	for(var i = 0; i < num; i ++) {
		arr.push(randomColor())
	}

	return arr;
}

function randomColor() {
	// pick a "R" from  0 - 255
	var r =  Math.floor(Math.random() * 256);

	// pick a "G" from  0 - 255
	var g =  Math.floor(Math.random() * 256);

	// pick a "B" from  0 - 255
	var b =  Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";


}