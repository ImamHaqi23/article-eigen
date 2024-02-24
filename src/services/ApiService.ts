import axios from 'axios';
import { Article } from '../types/Article';

const API_KEY = '3e856de4ca714e06af0f4e411fc05f7c';
const BASE_URL = 'https://newsapi.org/v2';

const ApiService = {
  fetchLatestArticles: async (): Promise<Article[]> => {
    try {
      const response = await axios.get(
        `${BASE_URL}/everything?q=indonesia&apiKey=${API_KEY}`
      );
      console.log(response.data);
      return response.data.articles;
    } catch (error) {
      console.error('Error fetching latest articles:', error);
      return [];
    }
  },

  fetchArticlesByCategory: async (category: string): Promise<Article[]> => {
    try {
      const response = await axios.get(
        `${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
      );
      return response.data.articles;
    } catch (error) {
      console.error(
        `Error fetching articles for category '${category}':`,
        error
      );
      return [];
    }
  },

  fetchArticleById: async (id: string): Promise<Article | null> => {
    try {
      const response = await axios.get(
        `${BASE_URL}/everything?apiKey=${API_KEY}&searchIn=title&q="${id}"`
      );
      // Response dari API News mungkin berisi beberapa artikel, maka kita ambil artikel pertama
      return response.data.articles[0];
    } catch (error) {
      console.error(`Error fetching article with ID '${id}':`, error);
      return null;
    }
  },
};

export default ApiService;

// https://newsapi.org/v2/everything?apiKey=3e856de4ca714e06af0f4e411fc05f7c&q=%22Tuna%20Casserole%22&searchIn=title
