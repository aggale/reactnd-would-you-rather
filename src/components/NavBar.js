import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { logoutAuthedUser } from "../actions/authedUser";
import { Button, Typography } from "@material-ui/core/";

class NavBar extends Component {
  handleLogout = () => {
    this.props.dispatch(logoutAuthedUser());
  };

  render() {
    const { authedUser } = this.props;

    const NavList = styled.ul`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      text-decoration: none;
    `;
    const NavListItem = styled.li`
      list-style-type: none;
      padding: 10px;
      text-decoration: none;
    `;

    return (
      <nav className="nav">
        <NavList>
          <NavListItem>
            <NavLink to="/" exact activeClassName="active">
              <Button>Home</Button>
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/add" activeClassName="active">
              <Button>Create Question</Button>
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/leaderboard" activeClassName="active">
              <Button>Leader Board</Button>
            </NavLink>
          </NavListItem>
          {authedUser && (
            <NavListItem>
              <Typography>Hello, {authedUser}</Typography>
            </NavListItem>
          )}
          {authedUser ? (
            <NavListItem>
              <Button onClick={this.handleLogout}>Logout</Button>
            </NavListItem>
          ) : (
            <NavListItem>
              <NavLink to="/login" activeClassName="active">
                <Button>Login</Button>
              </NavLink>
            </NavListItem>
          )}
        </NavList>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NavBar);
