import React, { Component } from "react";
import Home from "./Home.js";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="container">
        <Home />
      </div>
    );
  }
}

export default connect()(App);
