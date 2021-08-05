import React from "react";
import PropTypes from "prop-types";
import { renderRoutes } from "react-router-config";
import Header from "../../components/Header";

const MenuContainer = ({ route }) => {
  return (
    <>
      <Header />
      <div style={{ marginTop: "70px" }}>{renderRoutes(route.routes)}</div>
    </>
  );
};

MenuContainer.propTypes = {
  route: PropTypes.object.isRequired,
};

export default MenuContainer;
