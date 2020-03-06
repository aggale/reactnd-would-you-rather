import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    console.log(this.props);
    const { questionIds } = this.props;

    return (
      <div>
        <ul>
          {questionIds.map(id => (
            <li key={id}>{id}</li>
          ))}
        </ul>
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
