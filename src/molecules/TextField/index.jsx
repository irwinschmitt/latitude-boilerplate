import React from "react";
import PropTypes from "prop-types";
import { StyledTextField } from "./styles";

function TextField(props) {
  return <StyledTextField {...props} />;
}

TextField.propTypes = {
  children: PropTypes.any,
};

export default TextField;
