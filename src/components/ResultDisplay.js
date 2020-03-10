import React, { Component } from "react";

class ResultDisplay extends Component {
  render() {
    const { questionText, votesFor, totalVotes, yourVote } = this.props;
    const percentage = (votesFor / totalVotes) * 100;

    return (
      <div>
        {yourVote && <p>Your vote</p>}
        <p>Would you rather {questionText}?</p>
        <p>{`${percentage}%`}</p>
        <p>{`${votesFor} out of ${totalVotes} votes`}</p>
      </div>
    );
  }
}

export default ResultDisplay;
