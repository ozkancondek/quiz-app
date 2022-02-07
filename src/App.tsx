import React from "react";
import { QuestionCard } from "./components/QuestionCard";

const App = () => {
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
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
};

export default App;
