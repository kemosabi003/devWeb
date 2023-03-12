// Model

const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const robotContainer = document.getElementById('robotContainer');
const header = document.getElementById('header');
const middleBar = document.getElementById('middleBar');
const robotImage = document.createElement('img');

//bools
let win;
let lose;
let tie;

let playerChoice;
let robotNumber;
let winCount = 0;
let tieCount = 0;
let loseCount = 0;

function score() {
  header.innerHTML = '';
  let winScore = document.createElement('div');
  let loseScore = document.createElement('div');
  let tieScore = document.createElement('div');
  
  winScore.innerText = ('Wins: ' + winCount);
  loseScore.innerText = ('Loses: ' + loseCount);
  tieScore.innerText = ('Ties: ' + tieCount);

  header.appendChild(winScore);
  header.appendChild(loseScore);
  header.appendChild(tieScore);
}

function outcome() {
  middleBar.innerHTML = '';
  let outcome = document.createElement('div');
  
  if(win === true) {
    outcome.innerText = 'You Win!'
  }
  else if(lose === true) {
    outcome.innerText = 'You Lose.'
  }
  else if(tie === true) {
    outcome.innerText = "It's A Tie.";
  }
  middleBar.appendChild(outcome);
}


// Veiw
function draw() {
  robotContainer.innerHTML = '';
  if(robotNumber === 0){
    robotImage.src = 'images/rock.png'
  }  
  if(robotNumber === 1)
  {
    robotImage.src = 'images/paper.png'
  }
  if(robotNumber === 2) {
    robotImage.src = 'images/scissors.png'
  }
  robotContainer.appendChild(robotImage);
}


// Controller
function choice() {
 robotNumber = Math.floor(Math.random() * 3)
}

function round() {
console.log(robotNumber);
//player rock
if(robotNumber === 0 && playerChoice === 0) {
  console.log('rock');
  tie = true;
  tieCount++;
}
else if(robotNumber === 1 && playerChoice === 0) {
  console.log('paper');
  lose = true;
  loseCount++;
}
else if(robotNumber === 2 && playerChoice === 0) {
  console.log('scissors');
  win = true;
  winCount++;
}
// Play paper
else if(robotNumber === 0 && playerChoice === 1) {
  console.log('rock');
  win = true;
  winCount++;
}
else if(robotNumber === 1 && playerChoice === 1) {
  console.log('paper');
  tie = true;
  tieCount++;
}
else if(robotNumber === 2 && playerChoice === 1) {
  console.log('scissors');
  lose = true;
  loseCount++;
}
// Player scissors
else if(robotNumber === 0 && playerChoice === 2) {
  console.log('rock');
  lose = true;
  loseCount++;
}
else if(robotNumber === 1 && playerChoice === 2) {
  console.log('paper');
  win = true;
  winCount++;
}
else{
  console.log('scissors');
  tie = true;
  tieCount++;
}
}


function rock() {
  win = false;
  lose= false; 
  tie = false;
  playerChoice = 0;
  choice();
  draw();
  round();
  outcome();
  score();
  
  console.log(loseCount+':' + winCount + ':' + tieCount);
}
function paper() {
  win = false;
  lose= false; 
  tie = false;
  playerChoice = 1;
  choice();
  draw();
  round();
  outcome();
  score();
  console.log(loseCount+':' + winCount + ':' + tieCount);
}
function scissors() {
  win = false;
  lose= false; 
  tie = false;
  playerChoice = 2;
  choice();
  draw();
  round();
  outcome();
  score();
  console.log(loseCount+':' + winCount + ':' + tieCount);
}