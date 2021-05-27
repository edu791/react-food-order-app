import CartContext from "./cart-context";

export default function CartProvider(props) {
  function addItemFromCartHandler(item) {}

  function removeItemFromCartHandler(id) {}

  return (
    <CartContext.Provider
      value={{
        items: [],
        totalAmount: 0,
        addItem: addItemFromCartHandler,
        removeItem: removeItemFromCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
