import React from "react";
import PropTypes from "prop-types";
import { StyledContainer } from "./styles";

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
