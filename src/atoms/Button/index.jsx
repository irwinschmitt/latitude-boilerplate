import React from "react";
import PropTypes from "prop-types";
import { StyledButton, StyledBox } from "./styles";

function Button(props) {
  return (
    <StyledButton {...props}>
      <StyledBox>{props.children}</StyledBox>
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
