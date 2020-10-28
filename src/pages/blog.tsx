import React from "react";
import { graphql } from "gatsby";
import MainLayout from './../layouts/main.layout';
import Component from './../components';

export const AllBlogsQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            description
            date
            author
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => (
  <MainLayout>
    <h1>Blog</h1>
    { 
      data.allMarkdownRemark.edges.map(post => {
        const { title, author, date, description, path } = post.node.frontmatter;
        return (
          <Component.PostList
            title={title}
            author={author}
            date={date}
            description={description}
            key={`${date}__${title}`}
            path={path}
          />
        )
      })
    }
  </MainLayout>
);

export default Blog;