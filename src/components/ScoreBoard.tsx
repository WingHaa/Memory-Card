interface Prop {
  highestScore: number;
  currentScore: number;
}
export function ScoreBoard({ highestScore, currentScore }: Prop) {
  return (
    <div>
      <p>Highest Score: {highestScore}</p>
      <p>Current Score: {currentScore}</p>
    </div>
  );
}
