var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var chosenColor = chooseColor(colors);
var respo = document.getElementById("response");
var resetButton = document.querySelector("#reset");
var colorName = document.getElementById("color-name");
var modeButtons = document.querySelectorAll(".mode");
var buttonEasy = document.getElementById("easy-btn");
var buttonHard = document.getElementById("hard-btn");

/*
 * return a random value between 0 and 255, inclusive
 * */
function randomColorValue () {
  return Math.floor(Math.random() * 256);
}

/*
 * return an array of strings, each of which is a random RGB color
 * @param len {number} length of the array to be returned
 * */
function generateRandomColors (len) {
  var c = new Array();
  for (var i = 0; i < len; i++) {
    var r = randomColorValue();
    var g = randomColorValue();
    var b = randomColorValue();
    c.push("rgb(" + r + ", " + g + ", " + b + ")");
  }
  return c;
}

/*
 * return an item from array l, chosen at random
 * @param l {Array}
 * */
function chooseColor (l) {
  var idx = Math.floor(Math.random() * l.length);
  return l[idx];
}

/*
 * reset colors of headings and squares
 * */
function resetColors() {
    resetButton.textContent = "New colors";
    colors = generateRandomColors(numSquares);
    chosenColor = chooseColor(colors);
    colorName.textContent = chosenColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        colorName.style.background = "steelblue";
        document.querySelector("h1").style.background = "steelblue";
        respo.textContent = "";
    }
}

/*
 * change colors of all squares and main headings to color
 * @param color {string} the chosen color for the current game
 * */
function changeColorsOnWin (color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
  document.getElementById("color-name").style.background = color;
  document.querySelector("h1").style.background = color;
};



resetButton.addEventListener("click", resetColors);

colorName.textContent = chosenColor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function () {
    if (this.style.background === chosenColor) {
      resetButton.textContent = "Play again";
      respo.textContent = "You win!";
      changeColorsOnWin(this.style.background);
    } else {
      this.style.background = "#232323";
      respo.textContent = "Try again";
    }
  });
}



buttonEasy.addEventListener("click", function() {
    numSquares = 3;
    buttonEasy.classList.add("selected");
    buttonHard.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    chosenColor = chooseColor(colors);
    colorName.textContent = chosenColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

buttonHard.addEventListener("click", function() {
    numSquares = 6;
    buttonHard.classList.add("selected");
    buttonEasy.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    chosenColor = chooseColor(colors);
    colorName.textContent = chosenColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});
