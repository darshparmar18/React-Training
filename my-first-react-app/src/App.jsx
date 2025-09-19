import React from "react";
import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen min-w-screen bg-gray-50 p-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Props, State & Events
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        <ProfileCard
          name="Darsh Parmar"
          role="Node Developer"
          age={25}
          description="I am a Node Developer"
        />
        <ProfileCard
          name="Rahul Shah"
          role="React Developer"
          age={30}
          description="I am a React Developer"
        />
        <ProfileCard
          name="Priya Jain"
          role="UI/UX Designer"
          age={20}
          description="I am a UI/UX Designer"
        />
      </div>
    </div>
  );
}

export default App;
