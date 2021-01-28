import React from "react";
import { Link } from "gatsby";
import { Result, Button } from 'antd';
import { BookOutlined, ExperimentOutlined } from '@ant-design/icons';
import MainLayout from './../layouts/main.layout';

const NotFound = () => (
    <Result
        className="http-404"
        icon={<img src="/onigiri_ume.png" style={{width: 250, height: 250 }} />}
        title="404"
        subTitle={<><p>您所造訪的頁面不存在</p><p>Sorry, the page you visited does not exist.</p></>}
        extra={<Link to="/"><Button type="primary">Back Home</Button></Link>}
    />
);

export default NotFound;
