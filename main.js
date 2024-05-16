// COIN FLIP SIMULATOR
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads");
let tailsEl = document.getElementById("tails");

let numHeads = 0;
let numTails = 0;

document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  let randNum = Math.random();
  console.log(randNum);

  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png' />";
    numHeads = numHeads + 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png' />";
    numTails = numTails + 1;
    tailsEl.innerHTML = numTails;
  }
}
