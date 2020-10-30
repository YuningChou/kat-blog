import React from "react";
import { Link } from "gatsby";
import { Menu } from 'antd';

const Nav = () => (
  <Menu theme="dark" mode="horizontal">
    <Menu.Item key="home">
      <Link to="/">Home</Link>
    </Menu.Item>
  </Menu>
);

export default Nav;