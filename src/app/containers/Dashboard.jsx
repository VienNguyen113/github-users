import React from "react";
import { object } from "prop-types";
import { Route, Switch } from "react-router-dom";

import { Home, Person } from "app/containers";
import { Navbar } from "app/components/layout";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageName = this.handlePageName.bind(this);
  }

  handlePageName() {
    const pathname = this.props.location.pathname;

    if (pathname.indexOf("/user/") !== -1) {
      return "Person";
    } else if (pathname === "/") {
      return "Home";
    }

    return "";
  }

  render() {
    return (
      <div className="Dashboard">
        <Navbar onBack={this.props.history.goBack} pageName={this.handlePageName()} />
        <div className="Dashboard__content">
          <Switch>
            <Route
              exact
              path={this.props.match.url}
              render={() => {
                return (
                  <Home />
                );
              }}
            />

            <Route
              exact
              path={`${this.props.match.url}user/:username`}
              component={Person}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  history: object.isRequired,
  location: object.isRequired,
  match: object.isRequired,
};

export default Dashboard;
