import React from "react";
import { array } from "prop-types";
import { Link } from "react-router-dom";
import { slice } from "lodash";

const HomeComponent = props => {
  return (
    <div className="HomeComponent">
      <h1>Top 5 GitHub Users</h1>
      <p>Tap the username to see more information</p>
      <div className="clearfix">
        {slice(props.users, 0, 5).map(user => {
          return (
            <Link
              key={user.id}
              to={`/user/${user.login}`}
              className="Person__link"
            >
              {user.login}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

HomeComponent.propTypes = {
  users: array.isRequired,
};

export default HomeComponent;
