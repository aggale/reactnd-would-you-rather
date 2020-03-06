import { receiveQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";
import { _getQuestions } from "../_DATA.js";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return _getQuestions().then(questions => {
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading);
    });
  };
}
