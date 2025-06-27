import './App.css';
import { useState } from 'react';
import Result from './Result';

const secretNum = Math.floor(Math.random() * 100) + 1;

function App() {
  const [term, setTerm] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [lastGuess, setLastGuess] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setTerm(value); // Only numbers allowed
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && term && !gameOver) {
      const guess = parseInt(term, 10);
      if (!isNaN(guess)) {
        const newCount = guessCount + 1;
        setGuessCount(newCount);
        setLastGuess(guess);
        setTerm(''); // Clear the input field
        if (newCount >= 15 || guess === secretNum) {
          setGameOver(true);
        }
      }
    }
  };

  return (
    <div className="container">
      <div className="head">
        <label htmlFor="term">
          Guess the number between 1 and 100 <br />
          (Chances left: {15 - guessCount})
        </label>
      </div>

      <input
        id="term"
        type="text"
        name="term"
        value={term}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={gameOver}
      />

      <Result
        secretNum={secretNum}
        guess={lastGuess}
        gameOver={gameOver}
        guessCount={guessCount}
      />

      {gameOver && (
        <p style={{ color: 'red' }}>
          {lastGuess === secretNum
            ? '🎉 You won the game!'
            : '❌ Game Over! You used all 15 chances.'}
        </p>
      )}
    </div>
  );
}

export default App;
