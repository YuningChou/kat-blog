import React from "react";
import PropTypes from "prop-types";
import { Layout } from 'antd';
import Components from "./../components";
import "./../styles/main.scss";

const MainLayout = ({ children }) => (
    <Layout className="layout">
      <Layout.Header><Components.Nav /></Layout.Header>
      <Layout.Content style={{ padding: '50px' }}>
        <div className="content">{ children }</div>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>©2020 Kat Chou</Layout.Footer>
    </Layout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;