import { useJuego } from '../hooks/useJuego';
import { Timer } from '../components/Timer';
import { WordForm } from '../components/WordForm';
import { WordChain } from '../components/WordChain';
import { ScoreBoard } from '../components/ScoreBoard';
import { Navigate } from 'react-router-dom';

export const GameView = () => {
  const { cadena, puntaje, tiempo, gameOver, mensajeError, agregarPalabra } = useJuego();

  if (gameOver) {
    return <Navigate to="/game-over" state={{ puntaje, palabras: cadena.length }} />;
  }

  return (
    <div className="game-view">
      <h1>Encadenadas</h1>
      <Timer tiempo={tiempo} />
      <ScoreBoard puntaje={puntaje} />
      <WordForm onAgregarPalabra={agregarPalabra} shake={!!mensajeError} />
      {mensajeError && <p style={{ color: '#d63031', fontWeight: 'bold' }}>{mensajeError}</p>}
      <WordChain cadena={cadena} />
    </div>
  );
};
