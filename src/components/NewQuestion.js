import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import styled from "styled-components";
import { Grid, Typography } from "@material-ui/core";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, authedUser } = this.props;
    console.log("authedUser:", authedUser);
    dispatch(
      handleAddQuestion(authedUser, this.state.optionOne, this.state.optionTwo)
    );
    this.props.history.push("/");
  };

  handleInputChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
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
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NewQuestion);
