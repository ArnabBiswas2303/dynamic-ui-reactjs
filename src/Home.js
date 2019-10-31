import React, { Component } from "react";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FinalLayout from "./Components/FinalLayout";

class Home extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/layout" component={FinalLayout} />
        </Switch>
      </Router>
    );
  }
}

export default Home;
