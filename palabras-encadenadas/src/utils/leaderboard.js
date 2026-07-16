const LEADERBOARD_KEY = 'encadenadas_leaderboard';

export const getLeaderboard = () => {
  const data = localStorage.getItem(LEADERBOARD_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveScore = (name, score) => {
  const leaderboard = getLeaderboard();
  const newEntry = { name, score, date: new Date().toLocaleDateString() };
  
  leaderboard.push(newEntry);
  leaderboard.sort((a, b) => b.score - a.score);
  
  const top10 = leaderboard.slice(0, 10);
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(top10));
};
