import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import QuestionResults from "../QuestionResults";

// Props
let id, question;
const mockStore = configureStore([]); // Pass empty list of middleware
let store;

beforeAll(() => {
  // Fake data
  id = "8xf0y6ziyjabvozdd253nd";
  question = {
    id,
    optionOne: {
      text: "djslkfajlk",
      votes: ["adflkjl"]
    },
    optionTwo: {
      text: "cxgdfzn",
      votes: []
    }
  };

  // Initialize store
  store = mockStore({
    questions: {
      [id]: question
    },
    users: {},
    authedUser: "jdfsalkjl"
  });
});

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(
    <Provider store={store}>
      <BrowserRouter>
        <QuestionResults id={id} />
      </BrowserRouter>
    </Provider>
  );
});
