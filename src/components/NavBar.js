import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

class NavBar extends Component {
  //
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
              Home
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/new" activeClassName="active">
              New Tweet
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/leaderboard" activeClassName="active">
              Leader Board
            </NavLink>
          </NavListItem>
          <NavListItem>Hello, {authedUser}</NavListItem>
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
