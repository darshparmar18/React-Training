import React, { useState } from "react";

function ProfileCard({ name, role, age, description }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        margin: "20px auto",
        width: "250px",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2>{name}</h2>
      <p>{role}</p>
      <p>Age: {age}</p>
      <button
        onClick={() => setShowDetails(!showDetails)}
        style={{
          padding: "8px 12px",
          background: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <p style={{ marginTop: "10px", color: "#555" }}>
          {description}
        </p>
      )}
    </div>
  );
}

export default ProfileCard;
