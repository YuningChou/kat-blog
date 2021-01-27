import React from "react";
import PropTypes from "prop-types";
import { Layout, Row, Col, BackTop } from 'antd';
import Components from "./../components";
import "./../styles/main.scss";

const MainLayout = ({ children }) => (
  <>
    <BackTop visibilityHeight={100} />
    <Components.SEO/>
    <Layout className="layout">
      <Layout.Header>
        <h1>K A T</h1>
      </Layout.Header>
      <Layout.Content className="content">
        <Row gutter={16}>
          <Col sm={{span: 24}} md={{span: 24}} lg={{span: 6}}>
            <Components.MeCard />
          </Col>
          <Col sm={{span: 24}} md={{span: 24}} lg={{span: 18}}>
            { children }  
          </Col>
        </Row>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>©2020 Kat Chou</Layout.Footer>
    </Layout>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;