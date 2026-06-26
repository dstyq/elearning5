export const addScore = (name, score) => {
  const currentScores = JSON.parse(localStorage.getItem('leaderboard') || '[]');
  currentScores.push({ name, score, date: new Date().toLocaleDateString() });
  localStorage.setItem('leaderboard', JSON.stringify(currentScores));
};

export const getSortedScores = () => {
  const scores = JSON.parse(localStorage.getItem('leaderboard') || '[]');
  return scores.sort((a, b) => b.score - a.score); // Urutin skor gede ke kecil
};