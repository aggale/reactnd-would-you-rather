import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Button } from "@material-ui/core/";
import QuestionSummary from "./QuestionSummary";

class Home extends Component {
  state = {
    type: "unanswered"
  };

  handleListChange = e => {
    const { questionIds, user } = this.props;
    this.setState({
      type: e.currentTarget.value
    });
  };

  render() {
    const { questionIds, user } = this.props;
    const questions = filterList(this.state.type, questionIds, user);

    return (
      <div style={{ padding: 20 }}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          {this.props.user && (
            <Grid item>
              <Button value="unanswered" onClick={this.handleListChange}>
                Unanswered
              </Button>
              <Button value="answered" onClick={this.handleListChange}>
                Answered
              </Button>
            </Grid>
          )}
        </Grid>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          {questions.map(id => (
            <Grid item key={id}>
              <QuestionSummary id={id} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

function filterList(type, questionIds, user) {
  // Not logged in
  if (!user) {
    return questionIds;
  }

  if (type === "unanswered")
    return questionIds.filter(id => !Object.keys(user.answers).includes(id));
  else return questionIds.filter(id => Object.keys(user.answers).includes(id));
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    user: users[authedUser]
  };
}

export default connect(mapStateToProps)(Home);
