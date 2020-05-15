import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core/";
import UserStats from "./UserStats";

class LeaderBoard extends Component {
  render() {
    const { users, authedUser } = this.props;
    return authedUser ? (
      <Grid>
        {users
          .sort((a, b) => b.answered + b.created - (a.answered + a.created))
          .map(user => (
            <Grid item key={user.name}>
              <UserStats
                avatarURL={user.avatarURL}
                name={user.name}
                answered={user.answered}
                created={user.created}
              />
            </Grid>
          ))}
      </Grid>
    ) : (
      <p>Log in to view this page</p>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users: Object.values(users).map(user => ({
      ...user,
      answered: user.answers ? Object.keys(user.answers).length : 0,
      created: user.questions ? user.questions.length : 0
    })),
    authedUser
  };
}

export default connect(mapStateToProps)(LeaderBoard);
