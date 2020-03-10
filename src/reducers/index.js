import { combineReducers } from "redux";
import questions from "./questions";
import users from "./users";
import authedUser from "./authedUser";
import { loadingBarReducer } from "react-redux-loading";
import "typeface-roboto";

export default combineReducers({
  authedUser,
  questions,
  users,
  loadingBar: loadingBarReducer
});
