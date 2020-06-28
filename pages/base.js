import React, { useContext } from "react";
import Link from "next/link";
import { PizzaContext } from "../components/PizzaContext";

const Base = (props) => {
  const { addBase, pizza } = useContext(PizzaContext);
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <div className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link href="/toppings">
            <button>Next</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Base;
