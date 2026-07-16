import { calcularPuntos } from '../utils/gameLogic';

export const WordChain = ({ cadena }) => {
  return (
    <div className="word-list-container">
      <h3>Cadena:</h3>
      {[...cadena].reverse().map((word, index) => (
        <div key={index} className="word-item">
          <span>{word}</span>
          <span style={{ fontWeight: 'bold' }}>{calcularPuntos(word)} pts</span>
        </div>
      ))}
    </div>
  );
};
