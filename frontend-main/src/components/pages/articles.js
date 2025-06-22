// pages/articles.js
import React from 'react';
import Post from '../components/Post';

const ArticlesPage = () => {
  const articles = [
    { content: "This is the first article." },
    { content: "This is the second article." },
    // Add more articles as needed
  ];

  return (
    <div>
      <h1>Articles</h1>
      {articles.map((article, index) => (
        <Post key={index} content={article.content} />
      ))}
    </div>
  );
};

export default ArticlesPage;
