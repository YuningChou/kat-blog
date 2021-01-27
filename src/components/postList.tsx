import React from "react";
import { Link } from "gatsby";
import { List, Tag } from 'antd';
import { Post } from './../types/post.type';

const PostList = ({ data }) => (
  <>
    <List
        itemLayout="vertical"
        size="large"
        dataSource={data?.allMarkdownRemark.edges}
        renderItem={(post: Post) => {
          const { title, author, date, description, path, tags } = post.node.frontmatter;
          return (
            <List.Item
              key={path}
              actions={[author, `發佈於 ${date}`]}
          >
            <List.Item.Meta 
              title={<Link to={path}>{title}</Link>}
              description={tags.map((item) => {return <Tag key={item}>{item}</Tag>})}
            />
            {description}
          </List.Item>
          )
        }
      }
      pagination={{pageSize: 5, size: 'small'}}
    />
  </>
);

export default PostList;