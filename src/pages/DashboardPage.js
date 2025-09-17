import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DashboardPage.css";

function DashboardPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 4000); // Refresh every 4s
    return () => clearInterval(interval);
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/orders");
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  const updateStatus = async (orderId, newStatus) => {
    try {
      await axios.patch(`http://localhost:5000/orders/${orderId}`, {
        status: newStatus,
      });
      fetchOrders();
    } catch (err) {
      console.error("Error updating order:", err);
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:5000/orders/${orderId}`);
      fetchOrders();
    } catch (err) {
      console.error("Error deleting order:", err);
    }
  };

  const getElapsedTime = (createdAt) => {
    const diff = Math.floor((Date.now() - new Date(createdAt)) / 1000);
    const mins = Math.floor(diff / 60);
    const secs = diff % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="dashboard-container">
      {/* Back Button */}
      <div className="back-btn-container">
        <button className="back-btn" onClick={() => (window.location.href = "/")}>
          ⬅ Home
        </button>
      </div>

      <h1 className="dashboard-heading">Kitchen Dashboard</h1>

      <div className="order-grid">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-meta">
              <h4>Order #{order.id}</h4>
              <span className="timer">{getElapsedTime(order.createdAt)}</span>
            </div>
            {order.items.map((item, idx) => (
              <div key={idx} className="order-item-line">
                {item.name} x{item.qty || 1}
              </div>
            ))}
            <div className="actions">
              {order.status === "Preparing" && (
                <button
                  className="btn ready-btn"
                  onClick={() => updateStatus(order.id, "Ready")}
                >
                  Ready
                </button>
              )}
              {order.status === "Ready" && (
                <>
                  <button className="btn ready-btn" disabled>
                    Ready
                  </button>
                  <button
                    className="btn served-btn"
                    onClick={() => deleteOrder(order.id)}
                  >
                    Served
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
