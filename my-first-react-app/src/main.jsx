import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserCardDemo from './UserCardDemo.jsx'

function Main() {
  const [showUserCardDemo, setShowUserCardDemo] = useState(false);
  
  return (
    <div>
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={() => setShowUserCardDemo(!showUserCardDemo)}
          className="px-4 py-2 bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
        >
          {showUserCardDemo ? "Show Original App" : "Show UserCard Demo"}
        </button>
      </div>
      
      {showUserCardDemo ? <UserCardDemo /> : <App />}
    </div>
  );
}

export default Main;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
