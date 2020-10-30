import React from "react";
import { Link } from "gatsby";
import { Card, Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

const MeCard = () => (
  <Card>
    <Avatar
      style={{display:'block', margin: '0 auto 30px'}}
      size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
      icon={<AntDesignOutlined />}
    />
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);

export default MeCard;