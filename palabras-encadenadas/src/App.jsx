import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GameView } from './views/GameView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameView />} />
        <Route path="/game-over" element={<h1>Partida Finalizada</h1>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
