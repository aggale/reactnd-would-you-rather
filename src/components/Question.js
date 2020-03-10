import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import AskQuestion from "./AskQuestion";
import QuestionResults from "./QuestionResults";

class Question extends Component {
  render() {
    const { question, user, authedUser } = this.props;
    const answered =
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser);
    console.log(question.optionTwo.votes);

    // Styled components
    const Image = styled.img`
      object-fit: cover;
      width: 100px;
      height: 100px;
    `;
    const CenteredContainer = styled.div`
      margin: auto;
      width: 50%;
      padding: 10px;
    `;

    return (
      <div>
        {user && (
          <CenteredContainer>
            <p>Asked by {user.name}</p>
            <div className="question-asker-info">
              <Image src={user.avatarURL} alt={user.name} />
            </div>
            <div>
              {answered ? (
                <QuestionResults id={question.id} />
              ) : (
                <AskQuestion id={question.id} />
              )}
            </div>
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
