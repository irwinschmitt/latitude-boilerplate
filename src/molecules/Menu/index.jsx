import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button";

function Menu({ title, items }) {
  return (
    <>
      <Button variant="text">{title}</Button>
    </>
  );
}

Menu.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};

export default Menu;
