import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import ApiService from '../services/ApiService';
import { Article } from '../types/Article';

const { Title } = Typography;

const ArticleByCategory: React.FC = () => {
  const location = useLocation();
  const category = location.pathname.split('/').pop() || ''; // Mendapatkan kategori dari path
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticlesByCategory = async () => {
      const articlesData = await ApiService.fetchArticlesByCategory(category);
      setArticles(articlesData);
    };
    fetchArticlesByCategory();
  }, [category]);

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2} style={{ textAlign: 'center', margin: '20px 0' }}>
        {category.charAt(0).toUpperCase() + category.slice(1)}{' '}
        <span style={{ color: 'red' }}>News</span>
      </Title>
      <Row gutter={[16, 16]}>
        {articles.map((article, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Link to={`/articles/${article.id}`}>
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

export default ArticleByCategory;
