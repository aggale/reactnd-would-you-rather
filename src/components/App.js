import React, { Component, Fragment } from "react";
import "../App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Question from "./Question";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import NavBar from "./NavBar";
import Login from "./Login";
import LoadingBar from "react-redux-loading";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Container } from "@material-ui/core";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Container maxWidth="md">
            {!this.props.loading && (
              <div>
                <NavBar />
                <div>
                  <Route path="/" exact component={Home} />
                  <Route path="/questions/:question_id" component={Question} />
                  <Route path="/add" component={NewQuestion} />
                  <Route path="/leaderboard" component={LeaderBoard} />
                  <Route path="/login" component={Login} />
                </div>
              </div>
            )}
          </Container>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    loading: Object.keys(questions).length === 0
  };
}

export default connect(mapStateToProps)(App);
