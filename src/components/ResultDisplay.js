import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

class ResultDisplay extends Component {
  render() {
    const { questionText, votesFor, totalVotes, yourVote } = this.props;
    const percentage = (votesFor / totalVotes) * 100;

    const PaddedContainer = styled.div`
      padding-bottom: 10px;
    `;

    return (
      <PaddedContainer>
        <p>
          <span>
            {yourVote && (
              <Typography color="textSecondary" display="inline">
                (Your vote)
              </Typography>
            )}
          </span>
          <Typography align="center">
            Would you rather {questionText}?
          </Typography>
        </p>
        <p>{`${percentage}% (${votesFor} out of ${totalVotes} votes)`}</p>
      </PaddedContainer>
    );
  }
}

export default ResultDisplay;
