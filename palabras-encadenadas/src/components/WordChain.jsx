export const WordChain = ({ cadena }) => {
  return (
    <div className="word-bubble-container">
      {cadena.map((word, index) => (
        <span key={index} className="word-bubble">{word}</span>
      ))}
    </div>
  );
};
