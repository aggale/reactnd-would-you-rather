import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";
import { Grid, Typography, TextField, Button } from "@material-ui/core/";

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
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item margin={{ bottom: 20 }}>
          <Typography variant="h4" component="h1">
            Create New Question
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" component="h3">
            Would you rather...
          </Typography>
        </Grid>
        <Grid item>
          <form onSubmit={this.handleSubmit}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <TextField
                  type="text"
                  id="optionOne"
                  name="optionOne"
                  value={this.state.optionOne}
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item>
                <Typography align="center" style={{ marginTop: 20 }}>
                  OR
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  type="text"
                  id="optionTwo"
                  name="optionTwo"
                  value={this.state.optionTwo}
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullwidth="true"
                  style={{ marginTop: 20 }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
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
