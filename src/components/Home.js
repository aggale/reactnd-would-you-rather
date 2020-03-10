import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import QuestionSummary from "./QuestionSummary";

class Home extends Component {
  render() {
    const { questionIds } = this.props;

    const List = styled.ul`
      list-style-type: none;
    `;

    return (
      <div>
        <List>
          {questionIds.map(id => (
            <li key={id}>
              <QuestionSummary id={id} />
            </li>
          ))}
        </List>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Home);
