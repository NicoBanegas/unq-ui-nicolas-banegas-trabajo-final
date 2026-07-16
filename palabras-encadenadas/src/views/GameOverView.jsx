import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { calcularPuntos } from '../utils/gameLogic';
import { saveScore } from '../utils/leaderboard';

export const GameOverView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const { puntaje, cadena } = location.state || { puntaje: 0, cadena: [] };

  const handleSave = () => {
    if (name.trim()) {
      saveScore(name.trim(), puntaje);
      navigate('/leaderboard');
    }
  };

  return (
    <div className="game-over-view">
      <h1>Partida Finalizada</h1>
      <p>Puntaje final: <strong>{puntaje}</strong></p>
      
      <input 
        type="text" 
        placeholder="Tu nombre" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <button onClick={handleSave} className="margin-top-20">Guardar puntaje</button>
      
      <div className="word-list-container margin-top-20">
        <h3>Tu cadena:</h3>
        {cadena.map((word, index) => (
          <div key={index} className="word-item">
            <span>{word}</span>
            <span>{calcularPuntos(word)} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
};
