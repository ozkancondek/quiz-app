import React, { useState } from "react";
import { Difficulty, fetchQuizQuestions } from "./API";
import { QuestionCard } from "./components/QuestionCard";

const TOTAL_QUESTIONS = 10;

const App = () => {
  //define states
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [number, setnumber] = useState(0);
  const [userAnswers, setUsersanswers] = useState([]);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>TypeScript-React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="scor"> Score:</p>
      <p>Loading Questions...</p>
      {/* give props of the component */}
      {/*    <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
};

export default App;
