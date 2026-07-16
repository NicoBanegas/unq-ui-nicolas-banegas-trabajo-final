import { useJuego } from '../hooks/useJuego';
import { Timer } from '../components/Timer';
import { WordForm } from '../components/WordForm';
import { WordChain } from '../components/WordChain';
import { ScoreBoard } from '../components/ScoreBoard';
import { Navigate } from 'react-router-dom';

export const GameView = () => {
  const { cadena, puntaje, tiempo, gameOver, mensajeError, agregarPalabra } = useJuego();
  const ultimaPalabra = cadena.length > 0 ? cadena[cadena.length - 1] : null;
  const inicialRequerida = ultimaPalabra ? ultimaPalabra.slice(-1).toUpperCase() : null;

  if (gameOver) {
    return <Navigate to="/game-over" state={{ puntaje, cadena }} />;
  }

  return (
    <div className="game-view">
      <h1>Palabras Encadenadas</h1>
      <Timer tiempo={tiempo} />
      <ScoreBoard puntaje={puntaje} />
      {inicialRequerida && (
        <p className="initial-required">
          Inicial requerida: {inicialRequerida}
        </p>
      )}
      <WordForm onAgregarPalabra={agregarPalabra} shake={!!mensajeError} />
      {mensajeError && <p className="error-message">{mensajeError}</p>}
      <WordChain cadena={cadena} />
    </div>
  );
};
