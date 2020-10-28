import React from "react";
import PropTypes from "prop-types";

import Components from "./../components";
import "./../styles/main.scss";

const Layout = ({ children }) => (
    <div className="layout">
        <Components.Nav />
        <main className="main">{ children }</main>
    </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;