import { RECEIVE_QUESTIONS } from "../actions/questions";
import { ANSWER_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ANSWER_QUESTION:
      const votes = state[action.questionId][action.answer].votes.concat(
        action.authedUser
      );

      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.answer]: { ...state[action.questionId][action.answer], votes }
        }
      };
    default:
      return state;
  }
}
