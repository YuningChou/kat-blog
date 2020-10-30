import React from "react";
import { graphql } from "gatsby";
import { Tabs, Pagination, Divider } from 'antd';
import { BookOutlined, ExperimentOutlined } from '@ant-design/icons';
import MainLayout from './../layouts/main.layout';
import Components from './../components';

export const AllBlogsQuery = graphql`
  query PostList {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            description
            date(formatString: "YYYY-MM-DD")
            author
            category
          }
        }
      }
    }
  }
`

const Home = ({ data }) => (
  <MainLayout>
    <Tabs className="main-tabs" defaultActiveKey="blog">
      <Tabs.TabPane
        tab={
          <span>
            <BookOutlined />
            Blog
          </span>
        }
        key="blog"
      >
        <Components.PostList data={data}/>
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <span>
            <ExperimentOutlined />
            Projects
          </span>
        }
        key="projects"
      >
        <Components.ProjectList />
      </Tabs.TabPane>
    </Tabs>
    
  </MainLayout>
);

export default Home;
