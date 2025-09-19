import React, { useState } from "react";

function ProfileCard({ name, role, age, description }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 duration-300 text-center">
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
        {name.charAt(0)}
      </div>
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">
        {role} • Age {age}
      </p>

      {/* Conditionally show description */}
      {showDescription && <p className="mt-3 text-gray-600">{description}</p>}

      <button
        className="mt-5 px-4 py-2 bg-gray-600 rounded-lg shadow hover:bg-gray-700 transition"
        onClick={() => setShowDescription(!showDescription)}
      >
        {showDescription ? "Hide Info" : "Show Info"}
      </button>
    </div>
  );
}

export default ProfileCard;
