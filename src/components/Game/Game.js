import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import AllGuesses from './AllGuesses';
import Guess from './Guess';
import Banner from './Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [inputArr, setInputArr] = React.useState([]);
  const [input, setInput] = React.useState('');
  const [count, setCount] = React.useState(0);
  const [isGuessCorrect, setIsGuessCorrect] = React.useState(false);

  const userInput = input.toUpperCase();

  return (
    <div>
      <Banner isGuessCorrect={isGuessCorrect} count={count} answer={answer} />
      <Guess userInput={inputArr} answer={answer} />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event);
          if (userInput === answer) setIsGuessCorrect(true);
          setInputArr([...inputArr, userInput]);
          setInput('');
          setCount((prevCount) => (prevCount += 1));
        }}
        className="guess-input-wrapper"
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
          pattern="[A-Za-z]{5}"
          title="Guess should have 5 characters"
          disabled={isGuessCorrect || count === NUM_OF_GUESSES_ALLOWED}
        />
      </form>
      <AllGuesses inputArr={inputArr} />
    </div>
  );
}

export default Game;
