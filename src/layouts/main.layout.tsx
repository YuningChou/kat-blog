import React from "react";
import PropTypes from "prop-types";
import { Layout, Row, Col, Card } from 'antd';
import Components from "./../components";
import "./../styles/main.scss";

const MainLayout = ({ children }) => (
    <Layout className="layout">
      <Layout.Header><Components.Nav /></Layout.Header>
      <Layout.Content className="content">
        <Row gutter={16}>
          <Col xs={{span: 24}} lg={{span: 6}}>
            <Components.MeCard />
          </Col>
          <Col xs={{span: 24}} lg={{span: 18}}>
            { children }  
          </Col>
        </Row>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>©2020 Kat Chou</Layout.Footer>
    </Layout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;