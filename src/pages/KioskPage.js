import React, { useState, useEffect } from "react";
import MenuItemCard from "../components/MenuItemCard";
import Cart from "../components/Cart";
import axios from "axios";
import "./KioskPage.css";

function KioskPage() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const res = await axios.get("http://localhost:5000/menu");
        setMenu(res.data);
      } catch (err) {
        console.error("Error fetching menu:", err);
      }
    }
    fetchMenu();
  }, []);

  const categories = ["All", ...new Set(menu.map((item) => item.category))];

  const filteredMenu =
    selectedCategory === "All"
      ? menu
      : menu.filter((item) => item.category === selectedCategory);

  const addToCart = (item) => setCart((prev) => [...prev, item]);
  const removeFromCart = (item) =>
    setCart((prev) => prev.filter((i) => i.id !== item.id));

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayNow = async () => {
    try {
      await Promise.all(
        cart.map((item) =>
          axios.post("http://localhost:5000/orders", {
            items: [item],
            createdAt: new Date().toISOString(),
            status: "Preparing",
          })
        )
      );
      setCart([]);
      setShowModal(false);
      alert("Order placed! Check Kitchen Dashboard.");
    } catch (err) {
      console.error("Error placing order:", err);
    }
  };

  return (
    <div className="kiosk-container">
      <h1 className="kiosk-heading">Browse Menu</h1>

      {/* Category Buttons */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="menu-grid">
        {filteredMenu.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            inCart={cart.some((i) => i.id === item.id)}
          />
        ))}
      </div>

      {/* Cart */}
      <Cart cart={cart} onOrder={() => setShowModal(true)} />

      {/* Back Button */}
      <div className="back-btn-container">
        <button
          className="back-btn"
          onClick={() => (window.location.href = "/")}
        >
          ⬅ Home
        </button>
      </div>

      {/* Order Now Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Confirm Order</h2>
            <p>Total Amount: ₹{totalAmount}</p>
            <button className="pay-btn" onClick={handlePayNow}>
              Pay Now
            </button>
            <button
              className="cancel-btn"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default KioskPage;
