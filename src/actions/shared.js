import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { receiveAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading";
import { _getQuestions, _getUsers } from "../_DATA.js";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    _getQuestions().then(questions => {
      dispatch(receiveQuestions(questions));
      return _getUsers().then(users => {
        dispatch(receiveUsers(users));
        dispatch(receiveAuthedUser("tylermcginnis")); // TODO: add OAUTH
        dispatch(hideLoading);
      });
    });
  };
}
