import React from "react";
import PropTypes from "prop-types";
import { StyledContainer } from "./styles";

function Container({ children, fullheight, ...rest }) {
  return (
    <StyledContainer fullheight={fullheight} {...rest}>
      {children}
    </StyledContainer>
  );
}

Container.propTypes = {
  children: PropTypes.any,
  fullheight: PropTypes.string,
};

export default Container;
