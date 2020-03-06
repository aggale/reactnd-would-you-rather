import { combineReducers } from "redux";
import questions from "./questions";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  questions,
  loadingBar: loadingBarReducer
});
