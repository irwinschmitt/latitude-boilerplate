import React from "react";
import PropTypes from "prop-types";
import { BodyContainer } from "./styles";

function BodyHeight({ children }) {
  return <BodyContainer>{children}</BodyContainer>;
}

BodyHeight.propTypes = {
  children: PropTypes.node,
};

BodyHeight.defaultProps = {
  children: undefined,
};

export default BodyHeight;
