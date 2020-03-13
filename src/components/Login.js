import React, { Component } from "react";
import { connect } from "react-redux";
import { loginAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    selectedUser: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.dispatch(loginAuthedUser(this.state.selectedUser));

    this.props.history.push("/");
  };

  handleUserSelected = e => {
    this.setState({ selectedUser: e.target.value });
  };

  render() {
    const { availableUsers } = this.props;
    return (
      <div>
        <p>Please log in:</p>
        <form onSubmit={this.handleSubmit}>
          {availableUsers.map(user => (
            <div key={user}>
              <input
                type="radio"
                id={user}
                name={user}
                value={user}
                checked={this.state.selectedUser === user}
                onChange={this.handleUserSelected}
              />
              <label htmlFor={user}>{user}</label>
            </div>
          ))}
          <button type="submit" disabled={this.state.selectedUser === ""}>
            Log in
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    availableUsers: Object.keys(users)
  };
}

export default connect(mapStateToProps)(Login);
