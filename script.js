'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

score = score--;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // If their is no number entered..
  if (!guess) {
    document.querySelector('.message').textContent = '🚨 No Number...';
  }

  // When player wins.
  else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    score--;
    document.querySelector('.score').textContent = score;
    if (score == 0) {
      document.querySelector('.message').textContent = '💥 You lost! ';
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.number').textContent = number;

      document.querySelector('.number').style.width = '30rem';
    }
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // If the guess is too high.
  } else if (guess > number) {
    document.querySelector('.message').textContent = '📈 Too high!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score == 0) {
      document.querySelector('.message').textContent = '💥 You lost! ';
      document.querySelector('body').style.backgroundColor = '#ff0000';

      document.querySelector('.number').style.width = '30rem';
    }
  } else {
    document.querySelector('.message').textContent = '📉 Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

// Reset again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
