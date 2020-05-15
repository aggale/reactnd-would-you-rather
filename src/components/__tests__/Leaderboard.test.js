import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import LeaderBoard from "../LeaderBoard";

// Props
let id, question, user;
const mockStore = configureStore([]); // Pass empty list of middleware
let store;

beforeAll(() => {
  // Fake data
  id = "8xf0y6ziyjabvozdd253nd";

  user = {
    name: "ewoinxz"
  };

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
    },
    users: {
      [user.name]: user
    },
    authedUser: user.name
  });
});

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(
    <Provider store={store}>
      <BrowserRouter>
        <LeaderBoard />
      </BrowserRouter>
    </Provider>
  );
});

test("shows message if no one is logged in", () => {
  // Create store with no authedUser
  const emptyStore = mockStore({ users: {}, authedUser: null });

  const { getByText } = render(
    <Provider store={emptyStore}>
      <BrowserRouter>
        <LeaderBoard />
      </BrowserRouter>
    </Provider>
  );

  expect(getByText("Log in to view this page")).toBeInTheDocument();
});
