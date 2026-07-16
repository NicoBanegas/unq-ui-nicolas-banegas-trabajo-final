export const WordChain = ({ cadena }) => {
  return (
    <div className="word-chain">
      <h3>Cadena de palabras:</h3>
      <ul>
        {cadena.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};
