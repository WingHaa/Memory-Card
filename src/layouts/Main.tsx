import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import { ScoreBoard } from "../components/ScoreBoard";

export default function Main() {
  const [highestScore, setHighestScore] = useState(0);
  const [chosenCard, setChosenCard] = useState<number[]>([]);

  function handleClick(id: number) {
    if (chosenCard.findIndex((cardId) => cardId === id) === -1) {
      setChosenCard((prevChosenCard) => [...prevChosenCard, id]);
    } else {
      setChosenCard([]);
    }
  }

  useEffect(() => {
    if (chosenCard.length > highestScore) setHighestScore(chosenCard.length);
  }, [chosenCard.length, highestScore]);

  return (
    <div id="main">
      <ScoreBoard
        highestScore={highestScore}
        currentScore={chosenCard.length}
      />
      <CardList handleClick={handleClick} />
    </div>
  );
}
