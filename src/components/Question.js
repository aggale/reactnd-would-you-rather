import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Grid, Typography } from "@material-ui/core";
import AskQuestion from "./AskQuestion";
import QuestionResults from "./QuestionResults";

class Question extends Component {
  render() {
    const { question, user, authedUser } = this.props;

    if (!authedUser) {
      return <p>Log in to view this page</p>;
    }

    if (!question) {
      return <p> 404 - poll does not exist</p>;
    }

    const answered =
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser);

    // Styled components
    const Image = styled.img`
      object-fit: cover;
      width: 100px;
      height: 100px;
    `;
    const CenteredContainer = styled.div`
      margin: auto;
      width: 75%;
      padding: 10px;
    `;

    return (
      <div>
        {user && (
          <CenteredContainer>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item>
                <Typography align="center" paragraph>
                  Asked by {user.name}
                </Typography>
                <Image src={user.avatarURL} alt={user.name} />
              </Grid>

              <Grid item>
                {answered ? (
                  <QuestionResults id={question.id} />
                ) : (
                  <AskQuestion id={question.id} />
                )}
              </Grid>
            </Grid>
          </CenteredContainer>
        )}
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, props) {
  const { question_id: id } = props.match.params;
  const question = questions[id];
  const user = question ? users[question.author] : null;

  return {
    question,
    user,
    authedUser
  };
}

export default connect(mapStateToProps)(Question);
