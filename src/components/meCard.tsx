import React from "react";
import { Link } from "gatsby";
import { Card, Avatar, Divider, Button, Row, Col } from 'antd';
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
  </Card>
);

export default MeCard;