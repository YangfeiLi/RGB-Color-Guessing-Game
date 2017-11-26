var numberSquares = 9;
var colors = generateRandomColors(numberSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var mediumBtn = document.querySelector("#mediumBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	mediumBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numberSquares = 3;
	colors = generateRandomColors(numberSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i ++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

mediumBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.remove("selected");
	mediumBtn.classList.add("selected");
	numberSquares = 6;
	colors = generateRandomColors(numberSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i ++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	mediumBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numberSquares = 9;
	colors = generateRandomColors(numberSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i ++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});


reset.addEventListener("click", function() {
	// new colors
	colors = generateRandomColors(numberSquares);
	// a new random color
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// change color of squares
	for (var i = 0; i < squares.length; i ++) {
		squares[i].style.background = colors[i];
	}

	h1.style.background = "steelblue";
});

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
			reset.textContent = "Play again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again"
		}
	});
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