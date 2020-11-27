let min = 1 
let max = 7 
let winningNum = getRandomNum(min,max)
let guessesLeft = 3

const game = document.getElementById("game")
const minNum = document.querySelector(".min-num")
const maxNum = document.querySelector(".max-num")
const guessInput = document.querySelector("#guess-input")
const guessBtn = document.getElementById('guess-btn')
const message = document.querySelector(".message")

minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again'){
    console.log('asd')
    window.location.reload()
  }
});

guessBtn.addEventListener('click', function(){
let guess = parseInt(guessInput.value)

if(isNaN || guess < min || guess > max ){
  setMessage(`Please enter a number between ${min} and ${max}`, 'red')
}
if(guess === winningNum){
// guessInput.disabled = true;
// guessInput.style.borderColor = 'green';
// setMessage(`${winningNum} is correct, you win!`, 'green')
gameOver(true, `${winningNum} is correct, you win!`)
} else {
guessesLeft -= 1;

if(guessesLeft === 0){
  // guessInput.disabled = true;
  // guessInput.style.borderColor = 'green';
  // setMessage(`Game Over, the correct number was ${winningNum}`, 'red')
  gameOver(false, `Game Over, the correct number was ${winningNum}`)
} else{
  //game continues - answer wrong
  guessInput.value = ''
  guessInput.style.borderColor = 'red';
  setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
}

}

}); 



function gameOver(won,msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg)
  guessBtn.value = 'Play Again';
  guessBtn.className = 'play-again'
}

function getRandomNum(min,max){
return Math.floor(Math.random()*(max-min+1)+min)
}


function setMessage(msg, color){
  message.style.color = color
  message.textContent = msg;


  // play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again'
}