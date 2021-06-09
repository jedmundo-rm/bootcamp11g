import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import Home from "./screens/Home";
import Exercise from "./screens/Exercise";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/exercise">
              <Exercise />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
