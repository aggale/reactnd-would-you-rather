import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import NewQuestion from "../NewQuestion";

// Props
const mockStore = configureStore([]); // Pass empty list of middleware
let store;

beforeAll(() => {
  // Initialize store
  store = mockStore({
    authedUser: "jeffff"
  });
});

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NewQuestion />
      </BrowserRouter>
    </Provider>
  );
});

test("shows message if no one is logged in", () => {
  // Create store with no authedUser
  const emptyStore = mockStore({ authedUser: null });

  const { getByText } = render(
    <Provider store={emptyStore}>
      <BrowserRouter>
        <NewQuestion />
      </BrowserRouter>
    </Provider>
  );

  expect(getByText("Log in to view this page")).toBeInTheDocument();
});

test("shows title and question lead-in", () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <NewQuestion />
      </BrowserRouter>
    </Provider>
  );

  expect(getByText("Create New Question")).toBeInTheDocument();
  expect(getByText("Would you rather...")).toBeInTheDocument();
});
