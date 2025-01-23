function AllGuesses({ inputArr }) {
  if (inputArr.length < 1) return null;
  return (
    <div className="guess-results">
      {inputArr.map((input, index) => (
        <p key={index} className="guess">
          {input}
        </p>
      ))}
    </div>
  );
}

export default AllGuesses;
