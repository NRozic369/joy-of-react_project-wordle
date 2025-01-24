import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guess({ userInput }) {
  const isEmpty = userInput.length === 0;
  function checkGuess({ userInput }, answer) {}

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => (
        <p key={rowIndex} className="guess">
          {range(5).map((index) => (
            <span key={index} className="cell">
              {isEmpty || userInput[rowIndex] === undefined
                ? ''
                : userInput[rowIndex].charAt(index)}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;
