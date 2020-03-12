import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";

class AskQuestion extends Component {
  state = {
    selectedAnswer: null
  };

  onAnswerChange = e => {
    this.setState({ selectedAnswer: e.target.value });
  };

  answerQuestion = e => {
    e.preventDefault();

    const { dispatch, question } = this.props;

    dispatch(handleAnswerQuestion(question.id, this.state.selectedAnswer));
    // TODO: Redirect to results
  };

  render() {
    const { question } = this.props;
    const OPTION_ONE = "optionOne",
      OPTION_TWO = "optionTwo";

    return question ? (
      <div>
        <form onSubmit={this.answerQuestion}>
          <input
            type="radio"
            id={`${OPTION_ONE}${question.id}`}
            name={`answers${question.id}`}
            value={OPTION_ONE}
            checked={this.state.selectedAnswer === OPTION_ONE}
            onChange={this.onAnswerChange}
          />
          <label htmlFor={OPTION_ONE}>{question.optionOne.text}</label>
          <br />
          <input
            type="radio"
            id={`${OPTION_TWO}${question.id}`}
            name={`answers${question.id}`}
            value={OPTION_TWO}
            checked={this.state.selectedAnswer === OPTION_TWO}
            onChange={this.onAnswerChange}
          />
          <label htmlFor={OPTION_TWO}>{question.optionTwo.text}</label>
          <br />
          <button type="submit" disabled={this.state.selectedAnswer === null}>
            Submit
          </button>
        </form>
      </div>
    ) : (
      <div></div>
    );
  }
}

function mapStateToProps({ questions }, { id }) {
  return {
    question: questions[id]
  };
}

export default connect(mapStateToProps)(AskQuestion);
