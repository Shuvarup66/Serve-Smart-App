// src/pages/LandingPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Animated App Name */}
      <h1 className="app-name">
        {"ServeSmart".split("").map((letter, idx) => (
          <span key={idx}>{letter}</span>
        ))}
      </h1>

      {/* Two big centered tiles */}
      <div className="tiles">
        <div className="tile customer" onClick={() => navigate("/kiosk")}>
          Customer
        </div>
        <div className="tile staff" onClick={() => navigate("/dashboard")}>
          Staff
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
