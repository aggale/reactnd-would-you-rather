import React, { Component } from "react";
import "../App.css";
import Home from "./Home.js";
import LoadingBar from "react-redux-loading";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="container">
        <LoadingBar />
        <Home />
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect()(App);
