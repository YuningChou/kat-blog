import React from "react";
import { graphql, Link } from "gatsby";
import MainLayout from './../layouts/main.layout';
import { List, Avatar,Tag } from 'antd';
import { Post } from './../types/post.type';

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
            category
          }
        }
      }
    }
  }
`

const Home = ({ data }) => (
  <MainLayout>
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data.allMarkdownRemark.edges}
      renderItem={(post: Post) => {
        const { title, author, date, description, path, category } = post.node.frontmatter;
        return (
          <List.Item
            key={path}
            extra={
              <img
                width={272}
                alt="blog-img"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
            actions={[author, `發佈於 ${date}`]}
        >
          <List.Item.Meta 
            avatar={<Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<Link to={path}>{title}</Link>}
            description={category.map((item) => {return <Tag key={item}>{item}</Tag>})}
          />
          {description}
        </List.Item>
        )
      }
    
       }
    />
  </MainLayout>
);

export default Home;
