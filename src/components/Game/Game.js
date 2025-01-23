import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
const [input, setInput] = React.useState('');
const userInput = input.toUpperCase();

  return <form onSubmit={event => {
    event.preventDefault();
    console.log(userInput);
    setInput('');
  }
  }
   className="guess-input-wrapper">
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input"
     type="text" 
     value={input} 
     onChange={event => {
      setInput(event.target.value)
    }}
    pattern="[A-Za-z]{5}" title="Guess should have 5 characters"/>
  </form>;
}

export default Game;
