import React from "react";
import "./Cart.css";

function Cart({ cart, onOrder }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items added.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: ₹{total}</p>
          <button className="order-btn" onClick={onOrder}>
            Order Now
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
