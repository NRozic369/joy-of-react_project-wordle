import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Banner({ isGuessCorrect, count, answer }) {
  if (isGuessCorrect && count <= NUM_OF_GUESSES_ALLOWED)
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{count} guesses</strong>.
        </p>
      </div>
    );

  if (!isGuessCorrect && count === NUM_OF_GUESSES_ALLOWED)
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
}

export default Banner;
