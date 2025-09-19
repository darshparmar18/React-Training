// src/UserCardDemo.jsx
import React from "react";
import UserCard from "./UserCard";

function UserCardDemo() {
  return (
    <div className="min-h-screen min-w-screen bg-gray-50 p-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center">
          CSS Modules & Tailwind
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        <UserCard
          name="Alex Johnson"
          role="Full Stack Developer"
          age={28}
          description="Experienced developer with expertise in React, Node.js, and cloud technologies."
        />
        <UserCard
          name="Samantha Lee"
          role="UX Researcher"
          age={32}
          description="Passionate about creating user-centered designs through research and testing."
        />
        <UserCard
          name="Miguel Rodriguez"
          role="DevOps Engineer"
          age={26}
          description="Specializes in CI/CD pipelines, container orchestration, and infrastructure as code."
        />
      </div>
    </div>
  );
}

export default UserCardDemo;
