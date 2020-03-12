import { RECEIVE_USERS, ADD_QUESTION, ANSWER_QUESTION } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ANSWER_QUESTION:
      const questions = state[action.authedUser]["questions"];
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser]["answers"],
            [action.questionId]: action.answer
          }
        }
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat(
            action.question.id
          )
        }
      };
    default:
      return state;
  }
}
