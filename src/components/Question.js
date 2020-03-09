import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import AskQuestion from "./AskQuestion";

class Question extends Component {
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
            <div className="question-asker-info">
              <p>{user.name} asks:</p>
              <Image src={user.avatarURL} alt={user.name} />
            </div>
            <div>
              <p>Would you rather...</p>
              <AskQuestion id={question.id} />
            </div>
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

export default connect(mapStateToProps)(Question);
