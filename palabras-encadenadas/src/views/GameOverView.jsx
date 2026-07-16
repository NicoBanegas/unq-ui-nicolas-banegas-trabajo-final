import { useLocation, useNavigate } from 'react-router-dom';
import { calcularPuntos } from '../utils/gameLogic';

export const GameOverView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { puntaje, cadena } = location.state || { puntaje: 0, cadena: [] };

  return (
    <div className="game-over-view">
      <h1>Partida Finalizada</h1>
      <p>Puntaje final: <strong>{puntaje}</strong></p>
      
      <div className="word-list-container">
        <h3>Tu cadena:</h3>
        {cadena.map((word, index) => (
          <div key={index} className="word-item">
            <span>{word}</span>
            <span>{calcularPuntos(word)} pts</span>
          </div>
        ))}
      </div>
      
      <button onClick={() => navigate('/')} style={{ marginTop: '20px' }}>Jugar de nuevo</button>
    </div>
  );
};
