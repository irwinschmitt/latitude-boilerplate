import React from "react";
import PropTypes from "prop-types";

import Header from "../../organisms/Header";
import Container from "../../atoms/Container";
import Footer from "../../organisms/Footer";

function Default({ children, ...rest }) {
  return (
    <>
      <Header />

      <Container>{children}</Container>

      <Footer />
    </>
  );
}

Default.propTypes = {
  children: PropTypes.any,
};

export default Default;
