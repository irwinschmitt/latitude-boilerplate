import React from "react";
import PropTypes from "prop-types";
import { StyledContainer } from "./styles";

function Container({ children, ...rest }) {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
}

Container.propTypes = {
  children: PropTypes.any,
  fullHeight: PropTypes.bool,
};

export default Container;
