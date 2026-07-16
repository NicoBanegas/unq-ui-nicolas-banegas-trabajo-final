import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GameView } from './views/GameView';
import { GameOverView } from './views/GameOverView';
import { LeaderboardView } from './views/LeaderboardView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameView />} />
        <Route path="/game-over" element={<GameOverView />} />
        <Route path="/leaderboard" element={<LeaderboardView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
