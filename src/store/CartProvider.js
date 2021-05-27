import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount)
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
}

export default function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  function addItemFromCartHandler(item) {
    dispatchCartAction({ type: "ADD", item });
  }

  function removeItemFromCartHandler(id) {
    dispatchCartAction({ type: "REMOVE", id });
  }

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemFromCartHandler,
        removeItem: removeItemFromCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
