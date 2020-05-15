import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import UserStats from "../UserStats";

// Props
let answered, created, score;

beforeAll(() => {
  answered = 4;
  created = 7;
  score = answered + created;
});

test("renders without crashing", () => {
  // Arrange
  const div = document.createElement("div");

  ReactDOM.render(
    <UserStats
      avatarURL="faldkj.jpg"
      name="sjlkh"
      answered={answered}
      created={created}
    />,
    div
  );
});

test("renders number of answered questions", () => {
  // Act
  const { getByText } = render(
    <UserStats
      avatarURL="faldkj.jpg"
      name="sjlkh"
      answered={answered}
      created={created}
    />
  );

  // Assert
  expect(getByText(`Answered questions: ${answered}`)).toBeInTheDocument();
});

test("renders number of created questions", () => {
  // Act
  const { getByText } = render(
    <UserStats
      avatarURL="faldkj.jpg"
      name="sjlkh"
      answered={answered}
      created={created}
    />
  );

  // Assert
  expect(getByText(`Created questions: ${created}`)).toBeInTheDocument();
});

test("renders score", () => {
  // Act
  const { getByText } = render(
    <UserStats
      avatarURL="faldkj.jpg"
      name="sjlkh"
      answered={answered}
      created={created}
    />
  );

  // Assert
  expect(getByText(`Score: ${score}`)).toBeInTheDocument();
});
