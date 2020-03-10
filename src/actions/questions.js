import { showLoading, hideLoading } from "react-redux-loading";
import { _saveQuestionAnswer } from "../_DATA.js";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function answerQuestion(questionId, authedUser, answer) {
  return {
    type: ANSWER_QUESTION,
    questionId,
    authedUser,
    answer
  };
}

export function handleAnswerQuestion(questionId, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return _saveQuestionAnswer({ authedUser, qid: questionId, answer })
      .then(() => dispatch(answerQuestion(questionId, authedUser, answer)))
      .then(() => dispatch(hideLoading()));
  };
}
