import axios from "axios";
import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

// i added an extra prop
export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  /*   show all answers correct or incorrect with shuffle */
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
console.log(fetchQuizQuestions(10, Difficulty.EASY));

/* export const fetchQuizQuestionsWithAxios = async (
  amount: number,
  difficulty: Difficulty
) => {
  try {
    const resp = await axios.get(
      `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    );
    console.log(resp.data.results);
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};
  */
