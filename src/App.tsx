import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import ArticleList from './pages/ArticleList';
import ArticleDetail from './pages/ArticleDetail';
import ArticleByCategory from './pages/ArticleByCategory';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Routes>
              <Route path="/" element={<ArticleList />} />
              <Route path="/articles/:id" element={<ArticleDetail />} />
              <Route
                path="/kategori/:category"
                element={<ArticleByCategory />}
              />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
