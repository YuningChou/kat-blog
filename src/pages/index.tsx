import React, { useState } from "react";
import { graphql } from "gatsby";
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { Tabs, Tag, Divider } from 'antd';
import { BookOutlined, ExperimentOutlined, IdcardOutlined } from '@ant-design/icons';
import MainLayout from './../layouts/main.layout';
import Components from './../components';

export const AllBlogsQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
      edges {
        node {
          frontmatter {
            title
            path
            description
            date(formatString: "YYYY-MM-DD")
            author
            tags
          }
        }
      }
    }
  }
`

const Home = ({ data }) => {
  const [activePage, setActivePage] = useState('about');
  return (
    <MainLayout>
      <Tabs className="main-tabs" defaultActiveKey={activePage}>
        <Tabs.TabPane
          tab={
            <span>
              <IdcardOutlined />
              About
            </span>
          }
          key="about"
        >
          <Components.About />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <span>
              <BookOutlined />
              Blog
            </span>
          }
          key="blog"
        >
          <Components.PostList data={data} />
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
  )
};
deckDeckGoHighlightElement();
export default Home;
