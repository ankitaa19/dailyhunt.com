import React, { useEffect, useState } from 'react';
import { fetchSportsArticles, sendSportsArticle } from './services/api_service';

const SportsComponent = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchSportsArticles();
        setArticles(data);
      } catch (error) {
        console.error(error);
      }
    };

    getArticles();
  }, []);

  const addArticle = async () => {
    const newArticle = {
      title: 'New Sports Article',
      category: 'Sports',
      content: 'Details about the sports article...',
    };

    try {
      const response = await sendSportsArticle(newArticle);
      console.log('Article sent successfully:', response);
      // Optionally, re-fetch articles to include the new one
      const updatedArticles = await fetchSportsArticles();
      setArticles(updatedArticles);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Sports Articles</h1>
      <button onClick={addArticle}>Add Article</button>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SportsComponent;
