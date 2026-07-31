import React, { useState } from 'react';

function Greeting() {
  // State to store the user's name
  const [name, setName] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="greeting-container">
      <div className="input-wrapper">
        <label htmlFor="nameInput" className="input-label">
          Enter your name:
        </label>
        <input
          type="text"
          id="nameInput"
          className="name-input"
          value={name}
          onChange={handleChange}
          placeholder="Type your name here..."
          autoFocus
        />
      </div>

      <div className="greeting-display">
        {name.trim() ? (
          <div className="greeting-message">
            <span className="greeting-icon">✨</span>
            <h2>Hello, {name.trim()}!</h2>
          </div>
        ) : (
          <div className="greeting-empty">
            <p>👤 Please enter your name above</p>
            <p className="empty-hint">Your greeting will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Greeting;
