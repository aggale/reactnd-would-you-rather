import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class QuestionSummary extends Component {
  render() {
    const { question, user } = this.props;

    // Styled components
    const Image = styled.img`
      object-fit: cover;
      width: 100px;
      height: 100px;
    `;
    console.log("sum");
    return (
      <div>
        {user && (
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={5}
          >
            <Grid item>
              <p>{user.name} asks:</p>
              <Image src={user.avatarURL} alt={user.name} />
            </Grid>
            <Grid item>
              <Typography variant="h5" component="h1">
                Would you rather...
              </Typography>
              <p>{`...${question.optionOne.text} or ${question.optionTwo.text}`}</p>
              <Button variant="contained" color="primary">
                View Poll
              </Button>
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  const user = question ? users[question.author] : null;
  console.log(question);

  return {
    question,
    user
  };
}

export default connect(mapStateToProps)(QuestionSummary);
