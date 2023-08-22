import React, { useState, useEffect } from 'react';
import axios from 'axios';
// const axios = require('axios');

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timer, setTimer] = useState(20);

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(()=>{
    const interval = setInterval(()=>{
        setTimer(timer - 1);
    },1000)

    if(timer === 0)
        moveToNextQuestion("reset");

    return ()=>{
        clearInterval(interval)
    }

  },[timer])

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/questions');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };
  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.answer_index) {
        score++;
      }
    });
    return score;
  };

  const selectAnswer = (answerIndex) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: answerIndex,
    }));
    moveToNextQuestion();
  };

  const moveToNextQuestion = (from = null) => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setTimer(20);
  };


  const currentQuestion = questions[currentQuestionIndex];

  return (
    currentQuestionIndex < questions.length 
    ?(
    <div>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{currentQuestion.question}</p>
      <div className="choices">
        {currentQuestion.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => selectAnswer(index)}
            disabled={userAnswers[currentQuestionIndex] !== undefined}
          >
            {choice}
          </button>
        ))}
      </div>
      <p>Hint: {currentQuestion.hint}</p>
      <p>Time Remaining: {timer} seconds</p>
    </div>)
    :(
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {calculateScore()} / {questions.length}</p>
        </div>
    )
  );
};

export default Quiz;
