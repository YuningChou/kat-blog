import React from "react";
import { Link } from "gatsby";
import { Result, Button } from 'antd';
import { BookOutlined, ExperimentOutlined } from '@ant-design/icons';
import MainLayout from './../layouts/main.layout';

const NotFound = () => (
    <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Link to="/"><Button type="primary">Back Home</Button></Link>}
    />
);

export default NotFound;