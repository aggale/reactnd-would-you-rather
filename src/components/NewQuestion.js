import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, authedUser } = this.props;
    dispatch(
      handleAddQuestion(authedUser, this.state.optionOne, this.state.optionTwo)
    );
    this.setState({ toHome: true });
  };

  handleInputChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    if (this.state.toHome) {
      return <Redirect to="/" />;
    }

    return this.props.authedUser ? (
      <div>
        <h1>Create New Question</h1>
        <p>Complete the question:</p>
        <h3>Would you rather...</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="optionOne"
            name="optionOne"
            value={this.state.optionOne}
            onChange={this.handleInputChange}
          />
          <p>OR</p>
          <input
            type="text"
            id="optionTwo"
            name="optionTwo"
            value={this.state.optionTwo}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    ) : (
      <p>Log in to view this page</p>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NewQuestion);
