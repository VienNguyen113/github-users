import React from "react";
import { string, func } from "prop-types";
import { IconButton } from "material-ui";

const Navbar = props => {
  return (
    <div className="Navbar">
      <IconButton className="Navbar__back" onClick={props.onBack}>
        <i className="material-icons">arrow_back</i>
      </IconButton>
      <span className="Navbar__title">{props.pageName}</span>
    </div>
  );
};

Navbar.defaultProps = {
  pageName: "Home",
};

Navbar.propTypes = {
  onBack: func.isRequired,
  pageName: string,
};

export default Navbar;
