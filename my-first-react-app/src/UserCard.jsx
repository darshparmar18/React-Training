// src/UserCard.jsx
import React, { useState } from "react";
import styles from "./UserCard.module.css";

function UserCard({ name, role, age, description }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className={`${styles.card} bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl text-center`}>
  {/* Avatar */}
  <div 
    className={`${styles.avatar} bg-indigo-600 text-2xl shadow-md mx-auto`}
  >
    {name.charAt(0)}
  </div>

  {/* Name */}
  <h2 className={`${styles.name} text-gray-800 text-md font-bold`}>{name}</h2>

  {/* Info */}
  <p className={`${styles.info} text-gray-500`}>
    {role} • Age {age}
  </p>

  {/* Conditionally show description */}
  {showDescription && (
    <p className={`${styles.description} text-gray-600`}>{description}</p>
  )}

  {/* Button */}
  <button
    className={`${styles.button} px-4 py-2 bg-indigo-600 rounded-lg shadow hover:bg-indigo-700`}
    onClick={() => setShowDescription(!showDescription)}
  >
    {showDescription ? "Hide Info" : "Show Info"}
  </button>
</div>
  );
}

export default UserCard;
