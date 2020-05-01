import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  return <button className="btn btn-warning">{props.children}</button>;
}

export default Button;
