import React, { useState } from "react";
import { shuffle } from "../utils/function";
import { cards as cardData } from "../utils/cards";
import { Card } from "../models/Card";

interface CardListProp {
  handleClick: (id: number) => void;
}

interface CardProp extends Card {
  handleShuffle: (id: number) => void;
}

export default function CardList({ handleClick }: CardListProp) {
  const [cards, setCards] = useState(shuffle(cardData));

  function handleShuffle(cardId: number) {
    setCards((prevCards) => shuffle([...prevCards]));
    handleClick(cardId);
  }

  const cardsList = cards.map((card) => (
    <Card key={card.id} {...card} handleShuffle={handleShuffle} />
  ));
  return <div>{cardsList}</div>;
}

function Card({ id, description, image, handleShuffle }: CardProp) {
  return (
    <div onClick={() => handleShuffle(id)}>
      <img src={image} alt="" />
      <p>{description}</p>
    </div>
  );
}
