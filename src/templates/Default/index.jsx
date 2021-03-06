import React from "react";
import PropTypes from "prop-types";

import Header from "../../organisms/Header";
import Container from "../../atoms/Container";
import Footer from "../../organisms/Footer";
import BodyHeight from "../../atoms/BodyHeight";

function Default({ children, ...rest }) {
  return (
    <>
      <Header />
      <BodyHeight>
        <Container>{children}</Container>
      </BodyHeight>
      <Footer />
    </>
  );
}

Default.propTypes = {
  children: PropTypes.node,
};

Default.defaultProps = {
  children: undefined,
};

export default Default;
