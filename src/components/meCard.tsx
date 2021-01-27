import React from "react";
import { Link } from "gatsby";
import { Card, Avatar, Divider, Button, Row, Col } from 'antd';
import { GithubOutlined, LaptopOutlined, EnvironmentOutlined, MailOutlined, LinkedinOutlined, CalendarOutlined } from '@ant-design/icons';

const MeCard = () => (
  <Card className="nameCard" bordered={false}>
    <Avatar
      className="nameCard-avatar"
      src='/avatar.png'
      shape="square"
      size={{ xs: 150, sm: 150, md: 150, lg: 150, xl: 150, xxl: 200 }}
    />
    <h1>Kat Chou</h1>
    <h5>Hey there, I'm Kat! ✨ </h5>
    <p><LaptopOutlined /> Front-end developer</p>
    <p><EnvironmentOutlined /> New Taipei City, Taiwan</p>
    <p><CalendarOutlined /> May 12, 1989</p>
    <p><MailOutlined /> chouyuning@gmail.com</p>
    <Divider dashed />
    <Row gutter={8}>
      <Col>
        <Button 
          shape="circle" 
          icon={<GithubOutlined />} 
          href="https://github.com/YuningChou" 
          target="_blank" />
      </Col>
      <Col>
        <Button 
          shape="circle" 
          icon={<LinkedinOutlined />} 
          href="https://www.linkedin.com/in/yu-ning-chou-01957399/"
          target="_blank" />
      </Col>
    </Row>
    <Row>
      <Col sm={{span: 24}}  md={{span: 12}} lg={{span: 24}}>
        <Divider orientation="left">Front-end</Divider>
        <ul>
          <li>HTML</li>
          <li>CSS(SASS)</li>
          <li>Javascript (ES6)</li>
          <li>React.js</li>
          <li>Vue.js</li>
        </ul>
      </Col>
      <Col sm={{span: 24}}  md={{span: 12}} lg={{span: 24}}>
        <Divider orientation="left">User Interface</Divider>
        <ul>
          <li>Responsive Web Design (RWD) </li>
          <li>Bootstrap</li>
          <li>Ant-Design</li>
          <li>Material-UI</li>
        </ul>
      </Col>
      <Col sm={{span: 24}}  md={{span: 12}} lg={{span: 24}}>
        <Divider orientation="left">Cloud Service</Divider>
        <ul>
          <li>Firebase Authentication </li>
          <li>Firebase Storage / Firestore</li>
        </ul>
      </Col>
      <Col sm={{span: 24}}  md={{span: 12}} lg={{span: 24}}>
        <Divider orientation="left">Tools</Divider>
        <ul>
          <li>Git/GitHub/GitLab </li>
          <li>ESLint</li>
          <li>Jest</li>
          <li>Adobe Photoshop</li>
        </ul>
      </Col>
    </Row>
  </Card>
);

export default MeCard;