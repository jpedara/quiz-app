import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleStartQuiz = () => {
    setStartQuiz(true);
  };

  return (
    <div className="app">
      <h1>Ancient Rome Quiz</h1>
      {!startQuiz ? (
        <button onClick={handleStartQuiz}>Start Quiz</button>
      ) : (
        <p> Load Quiz App</p>
      )}
    </div>
  );
}

export default App;
