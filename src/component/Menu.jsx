import React from "react";
import PizzaCard from "./PizzaCard";

const menu = () => {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <p>
        Authentic Itanlian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>

      <PizzaCard />
    </div>
  );
};

export default menu;
