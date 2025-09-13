import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Props, State & Events</h1>
      <ProfileCard name="Darsh Parmar" 
      role="Node Developer"
      age = {25} 
      description = "I am a Node Developer" 
      />

      <ProfileCard name="Rahul Shah" 
      role="React Developer" 
      age = {30} 
      description = "I am a React Developer" 
      />
    </div>
  );
}

export default App;
