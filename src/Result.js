import React from 'react';

function Result({ secretNum, guess, gameOver, guessCount }) {
  let result = '';

  if (guess !== null) {
    if (guess < 1 || guess > 100) {
      result = 'Please enter a number between 1 and 100.';
    } else if (guess > secretNum) {
      result = ' Higher!';
    } else if (guess < secretNum) {
      result = ' Lower!';
    } else {
      result = `🎉 Correct! You guessed it in ${guessCount} ${guessCount === 1 ? 'try' : 'tries'}!`;
    }
  }

  return (
    <>
      {guess !== null && <h3>Your Guess Result: {result}</h3>}
    </>
  );
}

export default Result;
