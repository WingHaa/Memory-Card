import { useRef, useState } from "react";
import CardList from "../components/CardList";
import { ScoreBoard } from "../components/ScoreBoard";

export default function Main() {
  const [chosenCard, setChosenCard] = useState<number[]>([]);

  let highestScore = useRef(0);

  if (chosenCard.length > highestScore.current)
    highestScore.current = chosenCard.length;

  function handleClick(id: number) {
    if (chosenCard.findIndex((cardId) => cardId === id) === -1) {
      setChosenCard((prevChosenCard) => [...prevChosenCard, id]);
    } else {
      setChosenCard([]);
    }
  }

  return (
    <div id="main">
      <ScoreBoard
        highestScore={highestScore.current}
        currentScore={chosenCard.length}
      />
      <CardList handleClick={handleClick} />
    </div>
  );
}
