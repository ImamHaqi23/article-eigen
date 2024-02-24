// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/kategori/sport">Sports</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/kategori/technology">Technology</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/kategori/business">Business</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/kategori/health">Health</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
