import React from "react";
import { ButtonWrapper, Wrapper } from "../styles/QuestionCard.styles";
//types
import { AnswerObject } from "../App";

//define the types
type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

//type of comp is functional component
export const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <Wrapper>
    <p className="number">
      {" "}
      Question : {questionNr}/{totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />{" "}
    {/* important point here is return type of question:  https://betterprogramming.pub/what-is-dangerouslysetinnerhtml-6d6a98cbc187 */}
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
          key={answer}
        >
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            {/*    </button>  <button disabled={userAnswer ? true:false} value={answer} onClick={callback}> */}
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);
