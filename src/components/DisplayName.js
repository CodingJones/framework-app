import React from "react";
import PropTypes from "prop-types";

export const DisplayName = (props) => {
  return <>{props.name}</>;
};
DisplayName.propTypes = {
  name: PropTypes.string.isRequired,
};
