import React, { useState } from "react";
import { graphql } from "gatsby";
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { Tabs } from 'antd';
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
      <Tabs 
        className="main-tabs" 
        defaultActiveKey={activePage}>
        <Tabs.TabPane
          tab={
            <>  
              <img src="/onigiri_ume.png" style={{width: 30, height: 30, marginRight: 5 }} />
              About
            </>
          }
          key="about"
        >
          <Components.About />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <>  
              <img src="/blog.png" style={{width: 30, height: 30, marginRight: 5 }} />
              Blog
            </>
          }
          key="blog"
        >
          <Components.PostList data={data} />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <>  
              <img src="/project.png" style={{width: 30, height: 30, marginRight: 5 }} />
              Projects
            </>
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
