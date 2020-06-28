import React, { createContext, useState } from "react";
export const PizzaContext = createContext();

const PizzaContextProvider = (props) => {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <PizzaContext.Provider value={{ pizza, addBase, addTopping }}>
      {props.children}
    </PizzaContext.Provider>
  );
};

export default PizzaContextProvider;
