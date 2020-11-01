import React from "react";
import { graphql, Link } from "gatsby";
import MainLayout from './../layouts/main.layout';
import './../styles/blogTemplate.scss';
import { Typography, Divider } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

export const postQuery = graphql`
  query postList($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      frontmatter {
        author
        date
        title
        path
      }
      html
    }
  }
`;

const Template = ({ data }) => {
    const post = data.markdownRemark;
    const { title, author, date } = post.frontmatter;
    return(
        <MainLayout>
            <div className='blogTemplate'>
              <Link to="/"><LeftOutlined /></Link>
              <h1>{title}</h1>
              <Typography.Text type="secondary">{`Posted by ${author} on ${date}`}</Typography.Text>  
              <Divider />       
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </MainLayout>
    )
};

export default Template;