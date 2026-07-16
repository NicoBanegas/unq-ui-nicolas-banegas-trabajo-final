import { useNavigate } from 'react-router-dom';
import { getLeaderboard } from '../utils/leaderboard';

export const LeaderboardView = () => {
  const navigate = useNavigate();
  const scores = getLeaderboard();

  return (
    <div className="game-over-view">
      <h1>Top 10 Puntajes</h1>
      <div className="word-list-container">
        {scores.length === 0 ? (
          <p>No hay puntajes aún.</p>
        ) : (
          scores.map((entry, index) => (
            <div key={index} className="word-item">
              <span>{index + 1}. {entry.name}</span>
              {entry.score} pts
            </div>
          ))
        )}
      </div>
      <button onClick={() => navigate('/')} style={{ marginTop: '20px' }}>Volver al Inicio</button>
    </div>
  );
};
