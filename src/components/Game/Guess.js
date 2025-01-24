import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Guess({ userInput, answer }) {
  const isArrayEmpty = userInput.length === 0;

  const result = userInput.map((input) => checkGuess(input, answer));

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => (
        <p key={rowIndex} className="guess">
          {range(5).map((index) => (
            <span
              key={index}
              className={
                isArrayEmpty || result[rowIndex] === undefined
                  ? 'cell'
                  : 'cell ' + result[rowIndex][index].status
              }
            >
              {isArrayEmpty || result[rowIndex] === undefined
                ? ''
                : result[rowIndex][index].letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;
