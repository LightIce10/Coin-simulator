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
let
// Count variables
let sideOne = 0;
let sideTwo = 0;
let sideThree = 0;
let sideFour = 0;
let sideFive = 0;
let sideSix = 0;


// Button Event Listener
document.getElementById("dice-btn").addEventListener("click", diceRolled);

function btnClicked() {
  // Generate a Random Number
  let randNum2 = Math.random();
  console.log(randNum2);

  // Simulate dice roll
  if (randNum2 < 0.5) {
    outputEl.innerHTML = "<img src='img/1.png'>";
  } else if (condition) {
    
  } 
}
