import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import ResultDisplay from "./ResultDisplay";

class QuestionResults extends Component {
  render() {
    const { question, authedUser } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    const yourVoteOptionOne = question.optionOne.votes.includes(authedUser);

    return (
      <div>
        <ResultDisplay
          questionText={question.optionOne.text}
          votesFor={optionOneVotes}
          totalVotes={totalVotes}
          yourVote={yourVoteOptionOne}
        />
        <ResultDisplay
          questionText={question.optionTwo.text}
          votesFor={optionTwoVotes}
          totalVotes={totalVotes}
          yourVote={!yourVoteOptionOne}
        />
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }, { id }) {
  const question = questions[id];

  return {
    question,
    authedUser
  };
}

export default connect(mapStateToProps)(QuestionResults);
