// Model

let winScore = 0;
let loseScore = 0;

winArray = localStorage.getItem('winScore');
loseArray = localStorage.getItem('loseScore');
  winScore = +winArray;
  loseScore = +loseArray;



      
function score() {
  const scoreContainer = document.getElementById('scoreContainer');
  const scoreDisplay = document.createElement('div');
  scoreDisplay.innerText = 'W: ' + winScore + ' - L: ' + loseScore;
  scoreContainer.appendChild(scoreDisplay);
}

function saveScore() {
  localStorage.setItem('winScore', JSON.stringify(winScore));
  localStorage.setItem('loseScore', JSON.stringify(loseScore));
}
  

function gameOver() {
  scoreContainer.innerHTML = '';
  wordContainer.innerHTML = '';
  wrongContainer.innerHTML = '';
  chosenWord = word[Math.floor(Math.random() * word.length)];
  wordArray = chosenWord.split('');
  correctLetters = [];
  wrongLetters =[];
  context.clearRect(0, 0, gallows.width, gallows.height);
  overlayOff();
  score();
  drawGallows();
  render();
}




// Veiw

const gallows = document.getElementById('gallows');
const context = gallows.getContext('2d');

function drawGallows() {
  if(gallows.getContext) {
    
    context.lineWidth = 2;
    // Gallows
    context.beginPath();
    // top
    context.moveTo(80, 10);
    context.lineTo(170, 10);
    //side
    context.moveTo(170, 10);
    context.lineTo(170, 147);
    //floor
    context.moveTo(0, 147);
    context.lineTo(300, 147);
    // rope
    context.moveTo(100, 10);
    context.lineTo(100, 40);
    context.stroke();
  }
}

function drawHead() {
  if(gallows.getContext) {
    context.beginPath();
    context.arc(100, 45, 15, 0, Math.PI * 2, true)
    context.fill();
  }
}

function drawBody() {
  if(gallows.getContext) {
    context.beginPath();
    context.moveTo(100, 55);
    context.lineTo(100, 100);
    context.stroke();
  }
}
function drawLeftArm() {
  if(gallows.getContext) {
    context.beginPath();
    context.moveTo(100, 65);
    context.lineTo(75, 80);
    context.stroke();
  }
}
function drawRightArm() {
  if(gallows.getContext) {
    context.beginPath();
    context.moveTo(100, 65);
    context.lineTo(125, 80);
    context.stroke();
  }
}
function drawLeftLeg() {
  if(gallows.getContext) {
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(80, 140);
    context.stroke();
  }
}
function drawRightLeg() {
  if(gallows.getContext) {
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(120, 140);
    context.stroke();
  }
}

function render() {
  wordContainer.innerHTML = '';
  wrongContainer.innerHTML = '';
  document.getElementById('userInput').value = '';
  correctLetters = [...new Set(correctLetters)];
  wrongLetters = [...new Set(wrongLetters)];



  wrongLetters.forEach(letter => {
    if(correctLetters.includes(letter)) {
      wrongLetters.pop(letter);
      
    }
  });
  wrongLetters.forEach(letter => {
    wrongContainer = document.getElementById('wrongContainer');
    let letterContainer = document.createElement('div');
    letterContainer.innerText = letter;
    letterContainer.className = 'letterContainer';
    wrongContainer.appendChild(letterContainer);   
  });
  
  wordArray.forEach(letter => {  
    wordContainer = document.getElementById('wordContainer');
    let letterContainer = document.createElement('div');
    letterContainer.innerText = '_';
      if (correctLetters.includes(letter)) {
        letterContainer.innerText = letter;
      }
    letterContainer.className = 'letterContainer';
    wordContainer.appendChild(letterContainer);

  });    
  // Win Tracker
  if ([...new Set(wordArray)].length === correctLetters.length) {
    winScore = winScore + 1;
     let condition = document.getElementById('condition');
     condition.innerText = 'You win!';
    saveScore();
    overlayOn();

  }
  else if (wrongLetters.length === 6) {
    condition.innerText = 'The word was ' + chosenWord;
    loseScore = loseScore + 1;
    saveScore();
    overlayOn();

  }
  
  
  if(wrongLetters.length >= 1) {
    drawHead();
  
  }
  if(wrongLetters.length >= 2) {
    drawBody();
   
  }
  if(wrongLetters.length >= 3) {
    drawLeftArm();
    
  }
  if(wrongLetters.length >= 4) {
    drawRightArm();

  }
  if(wrongLetters.length >= 5) {
    drawLeftLeg();
    
  }
  if(wrongLetters.length >= 6) {
    drawRightLeg();
   
  }
  
}

// Controller


document.addEventListener('keypress', (event) => {
  let keyCode = event.keyCody ? event.keyCode : event.which;
  if(keyCode === 13) {
    wordArray.forEach(letter => { 
      if(document.getElementById('userInput').value === letter) {
        correctLetters.push(letter);
        return;
      }
    });
    wrongLetters.push(document.getElementById('userInput').value);
    render();
  }
})





function overlayOn() {
  document.getElementById('overlay').style.display = 'block';
}


function overlayOff() {
  document.getElementById('overlay').style.display = 'none';
}