import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import ResultDisplay from "../ResultDisplay";

// Props
let questionText, votesFor, totalVotes, yourVote;

beforeAll(() => {
  questionText = "fldk";
  votesFor = 3;
  totalVotes = 7;
  yourVote = true;
});

test("renders without crashing", () => {
  // Arrange
  const div = document.createElement("div");

  ReactDOM.render(
    <ResultDisplay
      questionText={questionText}
      votesFor={votesFor}
      totalVotes={totalVotes}
      yourVote={yourVote}
    />,
    div
  );
});

test("renders question text", () => {
  // Act
  const { getByText } = render(
    <ResultDisplay
      questionText={questionText}
      votesFor={votesFor}
      totalVotes={totalVotes}
      yourVote={yourVote}
    />
  );

  // Assert
  expect(getByText(`Would you rather ${questionText}?`)).toBeInTheDocument();
});

test("marks your vote", () => {
  // Arrange
  const yourVote = true;

  // Act
  const { getByText } = render(
    <ResultDisplay
      questionText={questionText}
      votesFor={votesFor}
      totalVotes={totalVotes}
      yourVote={yourVote}
    />
  );

  // Assert
  expect(getByText("(Your vote)")).toBeInTheDocument();
});

test("does not mark if not your vote", () => {
  // Arrange
  const yourVote = false;

  // Act
  render(
    <ResultDisplay
      questionText={questionText}
      votesFor={votesFor}
      totalVotes={totalVotes}
      yourVote={yourVote}
    />
  );

  // Assert
  const voteMarker = screen.queryByText("(Your vote)");
  expect(voteMarker).not.toBeInTheDocument();
});

test("renders question stats", () => {
  // Arrange
  const votesFor = 2,
    totalVotes = 4,
    percentage = 50;

  // Act
  const { getByText } = render(
    <ResultDisplay
      questionText={questionText}
      votesFor={votesFor}
      totalVotes={totalVotes}
      yourVote={yourVote}
    />
  );

  // Assert
  expect(
    getByText(`${percentage}% (${votesFor} out of ${totalVotes} votes)`)
  ).toBeInTheDocument();
});
