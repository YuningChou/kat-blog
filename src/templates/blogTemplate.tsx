import React from "react";
import { graphql, Link } from "gatsby";
import MainLayout from './../layouts/main.layout';
import './../styles/blogTemplate.scss';
import { Button } from 'antd';

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

const Template = ({data}) => {
    const post = data.markdownRemark;
    const { title, author, date } = post.frontmatter;
    return(
        <MainLayout>
            <div className='blogTemplate'>
                <Button type="primary"><Link to="/">Back to blogs</Link></Button>
                <h1 className="blogTemplate-title">{title}</h1>
                <p className='blogTemplate-posted-by'>Posted by {author} on {date}</p>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </MainLayout>
    )
};

export default Template;