import React from "react";
import PropTypes from "prop-types";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import BodyHeight from "../../atoms/BodyHeight";

function LoginTemplate({ children }) {
  return (
    <>
      <Header />
      <BodyHeight>{children}</BodyHeight>
      <Footer />
    </>
  );
}

LoginTemplate.propTypes = {
  children: PropTypes.node,
};

LoginTemplate.defaultProps = {
  children: undefined,
};

export default LoginTemplate;
