import React from "react";
import PropTypes from "prop-types";
import { Layout, Row, Col, BackTop, Tag } from 'antd';
import Components from "./../components";
import "./../styles/main.scss";

const MainLayout = ({ children }) => (
  <>
    <BackTop visibilityHeight={100} >
      <div>
        <img src="/onigiri_ume.png" style={{width: 40, height: 40}} />
        <Tag color="#1c2123" style={{width: 40, textAlign: 'center', margin: 0}}>Top</Tag>
      </div>
    </BackTop>
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