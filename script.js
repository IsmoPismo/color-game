var numSquares = 6;
var colors = creataRandomColors(numSquares);

var squares = document.querySelectorAll(".color");
var pickCol = colors[colorPicker()];
var titleCol = document.getElementById("current-color");
var resetB = document.getElementById('reset-button')
var easyHardMode = document.querySelectorAll('.mode');

for (var i = 0; i < easyHardMode.length; i++){
  easyHardMode[i].addEventListener("click", function() {
    easyHardMode[0].classList.remove('selected');
    easyHardMode[1].classList.remove('selected');
    this.classList.add('selected');
    if (this.textContent === "Easy") {
      numSquares = 3;
    } else {
      numSquares = 6;
    }
    reset();
  });
}

function reset() {
  document.getElementById("prompt").innerHTML = "Let's go!";
  colors = creataRandomColors(numSquares);
  pickCol = colors[colorPicker()];
  titleCol.textContent = pickCol;
  document.body.style.backgroundColor = "mediumpurple"
  for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  if (colors[i]) {
      squares[i].style.display = "block";
    squares[i].style.display = colors[i]
  }else {
    squares[i].style.display = "none";
  }
  }
}
// easyHard[1].addEventListener("click", function() {
//   easyHard[1].classList.add('selected');
//   easyHard[2].classList.remove('selected');
//   numSquares = 3;
//   colors = creataRandomColors(numSquares);
//   var pickCol = colors[colorPicker()];
//   titleCol.textContent = pickCol;
//   for (var i = 0; i <= squares.length; i++) {
//     if (colors[i]) {
//     squares[i].style.backgroundColor = colors[i];
//   } else {
//       squares[i].style.display = "none";
//     }
//   }
// });
//
// easyHard[2].addEventListener("click", function() {
//   easyHard[2].classList.add('selected');
//   easyHard[1].classList.remove('selected');
//   numSquares = 6;
//   colors = creataRandomColors(numSquares);
//   var pickCol = colors[colorPicker()];
//   titleCol.textContent = pickCol;
//   for (var i = 0; i <= squares.length; i++) {
//   squares[i].style.backgroundColor = colors[i];
//   squares[i].style.display = "block";
// }
// });

titleCol.textContent = pickCol;

resetB.addEventListener("click", function() {
  // document.getElementById("prompt").innerHTML = "Let's go!";
  // colors = creataRandomColors(numSquares);
  // pickCol = colors[colorPicker()];
  // titleCol.textContent = pickCol;
  // document.body.style.backgroundColor = "mediumpurple"
  // for (var i = 0; i < squares.length; i++) {
  //   squares[i].style.backgroundColor = colors[i];
  // }
  reset();
});

for (var i = 0; i < squares.length; i++) {
  // adds colors
  squares[i].style.backgroundColor = colors[i];

  // adds events
  squares[i].addEventListener("click", function() {
    var clckCol = this.style.backgroundColor;
    // console.log(clckCol, pickCol);
    if (clckCol == pickCol) {
      for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = clckCol;
      }

      document.querySelector('h1').style.backgroundColor = clckCol;
      document.querySelector('#reset-button').textContent = "Reset?"
    } else {
      this.style.backgroundColor = "mediumpurple";
      document.getElementById("prompt").innerHTML = "Try again"
    }
  });
}

function colorPicker() {
  var c = Math.floor(Math.random() * numSquares);
  return c;
}

function creataRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() *256);
  var g = Math.floor(Math.random() *256);
  var b = Math.floor(Math.random() *256);
  return "rgb("+ r +", " + g + ", " + b + ")";
}
