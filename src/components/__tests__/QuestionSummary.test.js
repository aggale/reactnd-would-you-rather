import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import QuestionSummary from "../QuestionSummary";

// Props
let id, question, user;
const mockStore = configureStore([]); // Pass empty list of middleware
let store;

beforeAll(() => {
  // Fake data
  user = {
    name: "ewoinxz"
  };

  id = "8xf0y6ziyjabvozdd253nd";
  question = {
    id,
    author: user.name,
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
    },
    users: {
      [user.name]: user
    }
  });
});

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(
    <Provider store={store}>
      <BrowserRouter>
        <QuestionSummary id={id} />
      </BrowserRouter>
    </Provider>
  );
});

test("shows asker's name", () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <QuestionSummary id={id} />
      </BrowserRouter>
    </Provider>
  );

  expect(getByText(`Asked by ${user.name}`)).toBeInTheDocument();
});

test("shows question text", () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <QuestionSummary id={id} />
      </BrowserRouter>
    </Provider>
  );

  expect(
    getByText(`...${question.optionOne.text} or ${question.optionTwo.text}`)
  ).toBeInTheDocument();
});
