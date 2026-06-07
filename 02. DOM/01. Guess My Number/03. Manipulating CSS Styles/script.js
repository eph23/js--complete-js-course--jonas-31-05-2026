'use strict';

let highScore;
let score = 20;
const secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // ANCHOR: No guess
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';
  }

  // ANCHOR: Guess
  else if (secretNumber === guess) {
    document.querySelector('.message').textContent = '✅ Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').disabled = true;
  }

  // ANCHOR: Guess is high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  // ANCHOR: Guess is low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
