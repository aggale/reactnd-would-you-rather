import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Button } from "@material-ui/core/";
import QuestionSummary from "./QuestionSummary";

class Home extends Component {
  state = {
    questions: []
  };

  handleListChange = e => {
    const { questionIds, user } = this.props;
    this.setState({
      questions: filterList(e.currentTarget.value, questionIds, user)
    });
  };

  static getDerivedStateFromProps(props) {
    const { questionIds, user } = props;
    return {
      questions: filterList("unanswered", questionIds, user)
    };
  }

  render() {
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
          {this.state.questions.map(id => (
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
