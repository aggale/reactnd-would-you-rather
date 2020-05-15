import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Grid, Typography, Button } from "@material-ui/core/";

class QuestionSummary extends Component {
  render() {
    const { question, user } = this.props;

    // Styled components
    const Image = styled.img`
      object-fit: cover;
      width: 100px;
      height: 100px;
    `;

    const PaddedContainer = styled.div`
      padding-bottom: 20px;
    `;

    return (
      <PaddedContainer>
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
              <Grid item key>
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
      </PaddedContainer>
    );
  }
}

function mapStateToProps({ users, questions }, { id }) {
  console.log("users: ", users);
  const question = questions[id];
  const user = question ? users[question.author] : null;

  return {
    question,
    user
  };
}

export default connect(mapStateToProps)(QuestionSummary);
