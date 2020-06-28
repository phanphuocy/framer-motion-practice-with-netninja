import React, { useContext } from "react";
import Link from "next/link";
import { PizzaContext } from "../components/PizzaContext";

const Order = (props) => {
  const { pizza } = useContext(PizzaContext);

  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  );
};

export default Order;
