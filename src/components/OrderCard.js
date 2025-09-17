// components/OrderCard.js
import React, { useEffect, useState } from "react";

function OrderCard({ order, onStatusChange }) {
  const [timers, setTimers] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) => {
        const newTimers = { ...prev };
        order.items.forEach((item, idx) => {
          if (!newTimers[idx]) newTimers[idx] = 0;
          newTimers[idx] += 1;
        });
        return newTimers;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [order]);

  const markPrepared = (idx) => {
    setTimers((prev) => ({ ...prev, [idx]: null }));
  };

  return (
    <div className="order-card">
      <h4>Order #{order.id} ({order.status})</h4>
      {order.items.map((item, idx) => (
        <div key={idx} className="order-item">
          <span>{item.name} x {item.qty}</span>
          {timers[idx] !== null && (
            <span className="timer">{Math.floor(timers[idx] / 60)}:{timers[idx] % 60}</span>
          )}
          {timers[idx] !== null && (
            <button onClick={() => markPrepared(idx)}>Mark Prepared</button>
          )}
        </div>
      ))}
      <button onClick={() => onStatusChange(order.id, "Ready")}>Mark Order Ready</button>
    </div>
  );
}

export default OrderCard;
