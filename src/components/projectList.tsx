import React from "react";
import { Link } from "gatsby";
import { Row, Col, Card, Tag } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';

const ProjectList = () => (
  <Row gutter={[8,8]} className="projectList">
      <Col span={8}>
        <Card
            style={{ width: 300 }}
            cover={
            <img
                alt="fine-website"
                src="/projects/fine-website.png"
            />
            }
            actions={[
                <Link to="https://github.com/YuningChou/fine" target="_blank">
                    <GithubOutlined key="git" />
                </Link>,  
                <Link to="https://yuningchou.github.io/fine/" target="_blank">
                    <LinkOutlined />
                </Link>      
            ]}
        >
            <Card.Meta
                title="Fine 官網製作 (前端)"
                description={
                    <div>
                        <Tag color="#4fc08d">vue.js</Tag>
                        <Tag color="#00c58e">nuxt.js</Tag>
                        <Tag color="#7952b3">bootstrap 4</Tag>
                    </div>
                }
            />
        </Card>
      </Col>
  </Row>
);

export default ProjectList;