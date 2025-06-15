import React from "react";
import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  // Always try to subscribe the specific portion of the store
  // instead of the whole store
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    // Logic to clear the cart
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      <button onClick={handleClearCart}>Clear Cart</button>
      <h1>Cart</h1>
      <div>
        <ItemList items={cartItems} />
      </div>
      {cartItems.length === 0 && (
        <h1>Cart is Empty. Add Items to the Cart !</h1>
      )}
    </div>
  );
};

export default Cart;
