var numberSquares = 9;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for (var i = 0; i < modeBtns.length; i ++) {
		modeBtns[i].addEventListener("click", function() {
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			modeBtns[2].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numberSquares = 3;
			} else if (this.textContent === "Medium") {
				numberSquares = 6;
			} else {
				numberSquares = 9;
			}
			reset();
		});	
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i ++) {
		// add click listeners
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.background;
			// compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetBtn.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}

function reset() {
	// new colors
	colors = generateRandomColors(numberSquares);
	// a new random color
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetBtn.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change color of squares
	for (var i = 0; i < squares.length; i ++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetBtn.addEventListener("click", function() {
	reset();
})

function changeColors(color) {
	// loop through all the squares
	for (var i = 0; i < squares.length; i ++) {
		// change each color to match the given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
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