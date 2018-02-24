import React from "react";
import { array, func } from "prop-types";
import { connect } from "react-redux";

import { HomeComponent } from "app/components/home";
import { getUsers } from "app/actions/users";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.getUsers();
  }

  render() {
    return (
      <div className="Home">
        <HomeComponent users={this.props.users} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    users: store.users.list,
  };
};

Home.defaultProps = {
  users: [],
};

Home.propTypes = {
  users: array.isRequired,
  getUsers: func.isRequired,
};

export default connect(mapStateToProps, {
  getUsers,
})(Home);
