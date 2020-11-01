import React from "react";
import { graphql } from "gatsby";
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { Tabs, Tag, Divider } from 'antd';
import { BookOutlined, ExperimentOutlined } from '@ant-design/icons';
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
  return (
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
          <div className="tags">
            {data.allMarkdownRemark.group.map((item) => {
              return <Tag key={item.tag}>{item.tag}</Tag>
            })}
          </div>
          <Divider />
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
  )
};
deckDeckGoHighlightElement();
export default Home;
