import React from "react";
import { PizzaData } from "../PizzaData";

const PizzaCard = () => {
  return (
    <ul className="pizzas">
      {PizzaData.map((PizzaCard, index) => (
        <li
          key={index}
          className={`pizza ${PizzaCard.soldOut ? "sold-out" : ""}`}
        >
          <img src={PizzaCard.photoName} alt="" />
          <div>
            <h3>{PizzaCard.name}</h3>

            <p>{PizzaCard.ingredients}</p>
            <span className="pizza">
              {PizzaCard.soldOut ? "SOLD-OUT" : PizzaCard.price}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PizzaCard;
