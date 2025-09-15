import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <h1>Props, State & Events</h1>
      </div>
      <div style={{ 
        textAlign: "center", 
        marginTop: "30px", 
        display: "flex",
        justifyContent: "center",
        gap: "20px"
      }}> 
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
        <ProfileCard name="Priya Jain" 
        role="UI/UX Designer" 
        age = {20} 
        description = "I am a UI/UX Designer" 
        />
      </div>
    </>
  );
}

export default App;
