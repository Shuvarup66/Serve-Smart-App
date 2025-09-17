import React from "react";
import "./OrderModal.css";

function OrderModal({ cart, onClose, onPay }) {
  const total = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Your Cart</h2>
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="cart-total">
          <strong>Total:</strong> ₹{total}
        </div>

        <div className="modal-actions">
          <button className="close-btn" onClick={onClose}>Cancel</button>
          <button className="pay-btn" onClick={onPay}>Pay Now</button>
        </div>
      </div>
    </div>
  );
}

export default OrderModal;
