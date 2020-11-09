import React from "react";
import { Link } from "gatsby";
import { Card, Avatar, Divider, Button, Row, Col, Progress } from 'antd';
import { GithubOutlined, LaptopOutlined, EnvironmentOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons';

const MeCard = () => (
  <Card className="nameCard" bordered={false}>
    <Avatar
      className="nameCard-avatar"
      src='/avatar.png'
      size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 100, xxl: 120 }}
    />
    <h1>Kat Chou</h1>
    <h5>Hey there, I'm Kat! ✨ </h5>
    <p><LaptopOutlined /> Front-end developer</p>
    <p><EnvironmentOutlined /> Taipei</p>
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
    <Divider orientation="left">Front-end</Divider>
      <ul>
        <li>HTML</li>
        <li>CSS(SASS)</li>
        <li>Javascript (ES6)</li>
        <li>React.js</li>
        <li>Vue.js</li>
      </ul>
    <Divider orientation="left">User Interface</Divider>
      <ul>
        <li>Responsive Web Design (RWD) </li>
        <li>Bootstrap</li>
        <li>Ant-Design</li>
        <li>Material-UI</li>
      </ul>
    <Divider orientation="left">Cloud Service</Divider>
      <ul>
        <li>Firebase Authentication </li>
        <li>Firebase Storage / Firestore</li>
      </ul>
    <Divider orientation="left">Tools</Divider>
      <ul>
        <li>Git/GitHub/GitLab </li>
        <li>ESLint</li>
        <li>Jest</li>
        <li>Adobe Photoshop</li>
      </ul>
  </Card>
);

export default MeCard;