import React from 'react';
import Greeting from './Greeting';
import './styles.css';

function App() {
  return (
    <div className="app-container">
      <h1>👋 Personalized Greeting</h1>
      <p className="subtitle">Enter your name to see a personalized greeting</p>
      <Greeting />
    </div>
  );
}

export default App;
