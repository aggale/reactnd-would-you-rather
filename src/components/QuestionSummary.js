import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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

    return (
      <div>
        {user && (
          <div>
            <Typography variant="h5" component="h1">
              {`Asked by ${user.name}`}
            </Typography>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={5}
            >
              <Grid item>
                <Image src={user.avatarURL} alt={user.name} />
              </Grid>
              <Grid item>
                <Typography variant="h5" component="h1">
                  Would you rather...
                </Typography>
                <p>{`...${question.optionOne.text} or ${question.optionTwo.text}`}</p>
                <Link to={`/questions/${question.id}`}>
                  <Button variant="contained" color="primary">
                    View Poll
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
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
