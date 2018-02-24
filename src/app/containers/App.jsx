import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Component Imports
import { Home } from "app/containers";
import { Person } from "app/containers";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:username" component={Person} />
      </Switch>
    </Router>
  );
};

export default App;
