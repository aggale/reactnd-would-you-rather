import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core/";
import UserStats from "./UserStats";

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;
    return (
      <Grid>
        {Object.values(users).map(user => (
          <UserStats
            avatarURL={user.avatarURL}
            name={user.name}
            answered={Object.keys(user.answers).length}
            created={user.questions.length}
          />
        ))}
      </Grid>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(LeaderBoard);
