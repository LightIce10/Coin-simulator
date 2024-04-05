// COIN FLIP SIMULATOR
let rand = Math.random();
console.log(rand);

// 50% heads 50% tails

if (rand < 0.5) {
  console.log("Heads");
} else if (rand < 0.5) {
  console.log("Feet");
} else {
  console.log("Tails");
}

// HTML Variables
let outputEl = document.getElementById("coin-output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
// Count variables
let numHeads = 0;
let numTails = 0;

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a Random Number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate coin flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png'>";
    numHeads = numHeads + 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png'>";
    numTails = numTails + 1;
    tailsEl.innerHTML = numTails;
  }
}

// DICE ROLL SIMULATOR

// HTML Variables
let diceOutputEl = document.getElementById("dice-output");
let sideOneEl = document.getElementById("side-1-Out");
let sideTwoEl = document.getElementById("side-2-Out");
let sideThreeEl = document.getElementById("side-3-Out");
let sideFourEl = document.getElementById("side-4-Out");
let sideFiveEl = document.getElementById("side-5-Out");
let sideSixEl = document.getElementById("side-6-Out");

// Count variables
let numOne = 0;
let numTwo = 0;
let numThree = 0;
let numFour = 0;
let numFive = 0;
let numSix = 0;

// Button Event Listener
document.getElementById("dice-btn").addEventListener("click", diceRolled);

function diceRolled() {
  // Generate a Random Number
  let randNum2 = Math.random();

  // Simulate dice roll
  if (randNum2 < 0.16666666666) {
    diceOutputEl.innerHTML = "<img src='img/1.png'>";
    numOne = numOne + 1;
    sideOneEl.innerHTML = numOne;
  } else if (randNum2 < 0.33333333333) {
    diceOutputEl.innerHTML = "<img src='img/2.png'>";
    numTwo = numTwo + 1;
    sideTwoEl.innerHTML = numTwo;
  } else if (randNum2 < 0.5) {
    diceOutputEl.innerHTML = "<img src='img/3.png'>";
    numThree = numThree + 1;
    sideThreeEl.innerHTML = numThree;
  } else if (randNum2 < 0.66666666666) {
    diceOutputEl.innerHTML = "<img src='img/4.png'>";
    numFour = numFour + 1;
    sideFourEl.innerHTML = numFour;
  } else if (randNum2 < 0.83333333333) {
    diceOutputEl.innerHTML = "<img src='img/5.png'>";
    numFive = numFive + 1;
    sideFiveEl.innerHTML = numFive;
  } else {
    diceOutputEl.innerHTML = "<img src='img/6.png'>";
    numSix = numSix + 1;
    sideSixEl.innerHTML = numSix;
  }
}
