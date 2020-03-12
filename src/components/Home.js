import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Button } from "@material-ui/core/";
import QuestionSummary from "./QuestionSummary";

class Home extends Component {
  state = {
    questions: []
  };

  filterList(type) {
    const { questionIds, user } = this.props;
    if (type === "unanswered")
      return questionIds.filter(id => !Object.keys(user.answers).includes(id));
    else
      return questionIds.filter(id => Object.keys(user.answers).includes(id));
  }

  handleListChange = e => {
    this.setState({
      questions: this.filterList(e.target.name)
    });
  };

  componentDidMount() {
    this.setState({
      questions: this.filterList("unanswered")
    });
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
          <Grid item>
            <Button name="unanswered" onClick={this.handleListChange}>
              Unanswered
            </Button>
            <Button name="answered" onClick={this.handleListChange}>
              Answered
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          {this.state.questions.map(id => (
            <QuestionSummary id={id} />
          ))}
        </Grid>
      </div>
    );
  }
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
