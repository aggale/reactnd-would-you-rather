import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import QuestionSummary from "./QuestionSummary";

class Home extends Component {
  render() {
    const { questionIds } = this.props;

    const List = styled.ul`
      list-style-type: none;
    `;

    return (
      <div style={{ padding: 20 }}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          {questionIds.map(id => (
            <QuestionSummary id={id} />
          ))}
        </Grid>
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
