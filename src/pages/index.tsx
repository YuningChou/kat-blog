import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { Menu } from 'antd';
import {MailOutlined} from '@ant-design/icons';
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
  const handleClick = (e) => {
    setActivePage(e.key);
  }
  return (
    <MainLayout>
      <Menu onClick={handleClick} selectedKeys={[activePage]} mode="horizontal">
        <Menu.Item key="about" icon={<img src="/onigiri_ume.png" style={{width: 30, height: 30, marginRight: 5 }} />}>
          <Link to="/">About</Link> 
        </Menu.Item>
        <Menu.Item key="blog" icon={<img src="/blog.png" style={{width: 30, height: 30, marginRight: 5 }} />}>
          <Link to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key="projects" icon={<img src="/project.png" style={{width: 30, height: 30, marginRight: 5 }} />}>
          <Link to="/projects">Projects</Link>  
        </Menu.Item>
        <Menu.Item key="resume" icon={<img src="/blog.png" style={{width: 30, height: 30, marginRight: 5 }} />}>
          <Link to="/resume">Resume</Link>  
        </Menu.Item>
      </Menu>
      <div style={{padding: '20px', background: 'white'}}>
        {activePage == 'about' && <Components.About />}
        {activePage == 'blog' && <Components.PostList data={data} />}
        {activePage == 'projects' && <Components.ProjectList />}
        {activePage == 'resume' && <Components.Resume />}
      </div>
    </MainLayout>
  )
};
deckDeckGoHighlightElement();
export default Home;
