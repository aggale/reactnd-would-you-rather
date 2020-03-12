import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

class LeaderBoard extends Component {
  render() {
    return <div></div>;
  }
}

function answeredQuestion(question, userId) {
  console.log(
    question.optionOne.votes.includes(userId) ||
      question.optionTwo.votes.includes(userId)
  );
  return (
    question.optionOne.votes.includes(userId) ||
    question.optionTwo.votes.includes(userId)
  );
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
  console.log(users);
  const usersStats = Object.keys(users).map(user => ({
    user,
    answered: Object.values(questions).reduce(
      (total, question) =>
        total + (answeredQuestion(question, user.id) ? 1 : 0),
      0
    ),
    created: Object.values(questions).reduce(
      (total, question) => total + (question.author === user.id ? 1 : 0),
      0
    )
  }));
  console.log(usersStats);
  return {
    question: questions[id],
    authedUser
  };
}

export default connect(mapStateToProps)(LeaderBoard);
