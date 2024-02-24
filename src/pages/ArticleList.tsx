import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import ApiService from '../services/ApiService';
import { Article } from '../types/Article';

const { Title } = Typography;

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesData = await ApiService.fetchLatestArticles();
      setArticles(articlesData);
      console.log('Data Artikel:', articlesData);
    };
    fetchArticles();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2} style={{ textAlign: 'center', margin: '20px 0' }}>
        Latest <span style={{ color: 'red' }}>News</span>
      </Title>
      <Row gutter={[16, 16]}>
        {articles.map((article, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Link to={`/articles/${article.title}`}>
              {' '}
              {/* Perbaikan 1: Menambahkan id artikel ke URL */}
              <Card
                hoverable
                style={{ height: '100%' }}
                cover={<img alt="example" src={article.urlToImage} />}
              >
                <Card.Meta
                  title={article.title}
                  description={article.description}
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ArticleList;
