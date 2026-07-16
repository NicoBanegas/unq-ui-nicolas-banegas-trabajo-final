import { useLocation, useNavigate } from 'react-router-dom';

export const GameOverView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { puntaje, palabras } = location.state || { puntaje: 0, palabras: 0 };

  return (
    <div className="game-over-view">
      <h1>Partida Finalizada</h1>
      <p>Puntaje final: {puntaje}</p>
      <p>Cantidad de palabras: {palabras}</p>
      <button onClick={() => navigate('/')}>Jugar de nuevo</button>
    </div>
  );
};
