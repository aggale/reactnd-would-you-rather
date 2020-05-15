import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import AskQuestion from "../AskQuestion";

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
      text: "djslkfajlk"
    },
    optionTwo: {
      text: "cxgdfzn"
    }
  };

  // Initialize store
  store = mockStore({
    questions: {
      [id]: question
    }
  });
});

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(
    <Provider store={store}>
      <BrowserRouter>
        <AskQuestion id={id} />
      </BrowserRouter>
    </Provider>
  );
});

test("shows question options", () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <AskQuestion id={id} />
      </BrowserRouter>
    </Provider>
  );

  expect(getByText(question.optionOne.text)).toBeInTheDocument();
  expect(getByText(question.optionTwo.text)).toBeInTheDocument();
});
