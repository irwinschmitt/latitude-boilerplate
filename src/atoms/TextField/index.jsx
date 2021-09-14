import React from "react";
import PropTypes from "prop-types";
import MuiTextField from "@material-ui/core/TextField";

function TextField({ placeholder, variant, ...rest }) {
  return <MuiTextField variant={variant} placeholder={placeholder} {...rest} />;
}

TextField.propTypes = {
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(["outlined", "Standard", "filled"]),
};

TextField.defaultProps = {
  placeholder: "",
  variant: "outlined",
};

export default TextField;
