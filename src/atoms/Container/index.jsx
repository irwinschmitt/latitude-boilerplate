import React from "react";
import PropTypes from "prop-types";
import MuiContainer from "@material-ui/core/Container";

function Container({ children, maxWidth, ...rest }) {
  return (
    <MuiContainer maxWidth={maxWidth} {...rest}>
      {children}
    </MuiContainer>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  maxWidth: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs", false]),
};

Container.defaultProps = {
  children: undefined,
  maxWidth: "lg",
};

export default Container;
