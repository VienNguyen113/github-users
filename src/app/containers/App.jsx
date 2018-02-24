import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Component Imports
import { Dashboard } from "app/containers";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
