import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styles";

function Button({ color, disableElevation, variant, children, ...rest }) {
  return (
    <StyledButton
      color={color}
      disableElevation={disableElevation}
      variant={variant}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  variant: PropTypes.string,
  color: PropTypes.oneOf(["default", "inherit", "primary", "secondary"]),
  disableElevation: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  children: undefined,
  variant: "contained",
  color: "primary",
  disableElevation: true,
};

export default Button;
