import React, { createContext, useReducer } from "react";
import Mock from "../utilities/mock";

export let Context = createContext(Mock);

const Contextprovider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "onAdd":
          let Cart = [...state.cart, action.payload.value];
          // let Cartupdate = Cart.map((vl) =>
          //   vl.id === action.payload.value.id
          //     ? action.payload.value.count + 1
          //     : vl
          // );
          // console.log(Cartupdate);
          return {
            ...state,
            cart: Cart,
          };
        case "sideDelete": {
          let Sidedelete = state.cart.filter(
            (val) => val.id !== action.payload
          );

          return {
            ...state,
            cart: Sidedelete,
          };
        }
        case "more": {
          let res = state.cart.map((value) =>
            value.id === action.payload
              ? { ...value, count: value.count + 1 }
              : value
          );

          return { ...state, cart: res };
        }
        case "less": {
          let res = state.cart.map((value) =>
            value.id === action.payload && value.count > 1
              ? { ...value, count: value.count - 1 }
              : value
          );

          return { ...state, cart: res };
        }

        case "filter": {
          let res = [];
          if (action.payload.value === "increment") {
            res = Mock?.sort((a, b) => a.price - b.price);
          } else if (action.payload.value === "decrement") {
            res = Mock?.sort((a, b) => b.price - a.price);
          } else if (action.payload.value === "default") {
            res = Mock;
          }
          return { ...state, product: res, cart: [...state.cart] };
        }
        default:
          return state;
      }
    },localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")) : {product: Mock, cart: [] });
  localStorage.setItem("state", JSON.stringify(state));
  
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
export default Contextprovider;
