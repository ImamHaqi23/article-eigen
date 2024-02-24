import React, { useEffect, useState } from 'react';
import { Typography, Image } from 'antd';
import ApiService from '../services/ApiService';
import { Article } from '../types/Article';
import { useParams } from 'react-router-dom';

const { Title, Text } = Typography;

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const articleData = await ApiService.fetchArticleById(id);
        setArticle(articleData);
      } catch (error) {
        console.log('Error fetching article detail');
      }
    };
    fetchArticle();
  }, [id]);

  return (
    <div style={{ padding: '20px' }}>
      <Title level={1}>{article?.title}</Title>
      <div style={{ marginBottom: '20px' }}>
        <Text strong>Published at:</Text> {article?.publishedAt}
        <br />
        <Text strong>Author:</Text> {article?.author}
      </div>
      <Image
        src={article?.urlToImage}
        alt={article?.title}
        style={{ marginBottom: '20px' }}
      />
      <div>
        <Text>{article?.content}</Text>
      </div>
    </div>
  );
};

export default ArticleDetail;
