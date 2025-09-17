import React from "react";
import "./MenuItemCard.css";

function MenuItemCard({ item, addToCart, removeFromCart, inCart }) {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} />
      <div className="info">
        <h4>{item.name}</h4>
        <p>₹{item.price}</p>
        {inCart ? (
          <button className="btn remove" onClick={() => removeFromCart(item)}>
            Remove
          </button>
        ) : (
          <button className="btn add" onClick={() => addToCart(item)}>
            Add
          </button>
        )}
      </div>
    </div>
  );
}

export default MenuItemCard;
