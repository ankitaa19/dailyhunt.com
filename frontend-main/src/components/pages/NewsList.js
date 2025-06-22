import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsArticle from '../components/NewsArticle';

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get('/news');
      setArticles(response.data);
    };
    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <NewsArticle key={article._id} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
