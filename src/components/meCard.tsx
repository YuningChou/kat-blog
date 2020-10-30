import React from "react";
import { Link } from "gatsby";
import { Card, Avatar, Divider } from 'antd';
import { GithubOutlined, LaptopOutlined, EnvironmentOutlined, MailOutlined } from '@ant-design/icons';

const MeCard = () => (
  <Card className="nameCard">
    <Avatar
      className="nameCard-avatar"
      size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 100, xxl: 120 }}
      icon={<GithubOutlined />}
    />
    <h1>Kat Chou</h1>
    <h5>Hey there, I'm Kat! ✨ </h5>
    <p><LaptopOutlined /> Front-end developer</p>
    <p><EnvironmentOutlined /> Taipei</p>
    <p><MailOutlined /> chouyuning@gmail.com</p>
    <Divider dashed />
  </Card>
);

export default MeCard;