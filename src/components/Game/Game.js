import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import AllGuesses from './AllGuesses';
import Guess from './Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [inputArr, setInputArr] = React.useState([]);
  const [input, setInput] = React.useState('');
  const userInput = input.toUpperCase();
  return (
    <div>
      <Guess userInput={inputArr} answer={answer} />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(userInput);
          setInputArr([...inputArr, userInput]);
          setInput('');
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
        />
      </form>
      <AllGuesses inputArr={inputArr} />
    </div>
  );
}

export default Game;
