import React from "react";
import { object, func } from "prop-types";
import { connect } from "react-redux";
import { Avatar } from "material-ui";

import { getPerson } from "app/actions/users";

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.props.getPerson(this.props.match.params.username);
  }

  render() {
    return (
      <div className="Person">
        <Avatar src={this.props.person.avatar_url} size={60} />
        <div className="Person__info">
          <p className="Person__text Person__text--title">{this.props.person.name}</p>
          <p className="Person__text">{this.props.person.location}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    person: store.users.person,
  };
};

Person.defaultProps = {
  person: {},
};

Person.propTypes = {
  getPerson: func.isRequired,
  match: object.isRequired,
  person: object.isRequired,
};

export default connect(mapStateToProps, {
  getPerson,
})(Person);
