import React, { useContext } from "react";
import Link from "next/link";
import { PizzaContext } from "../components/PizzaContext";

const Toppings = (props) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  const { addTopping, pizza } = useContext(PizzaContext);

  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </li>
          );
        })}
      </ul>

      <Link href="/order">
        <button>Order</button>
      </Link>
    </div>
  );
};

export default Toppings;
