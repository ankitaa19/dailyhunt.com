import React, { useEffect, useState } from 'react';
import { fetchSportsArticles, likeSportsArticle, commentOnSportsArticle, shareSportsArticle } from '../services/apiService';

const SportsArticles = () => {
  const [articles, setArticles] = useState([]);
  const [commentText, setCommentText] = useState({}); // To manage comments for each article

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchSportsArticles();
      setArticles(data);
    };
    getArticles();
  }, []);

  const handleLike = async (id) => {
    await likeSportsArticle(id);
    // Update the state or re-fetch articles as needed
    alert('Article liked!');
  };

  const handleComment = async (id) => {
    if (commentText[id]) {
      await commentOnSportsArticle(id, { content: commentText[id] });
      setCommentText({ ...commentText, [id]: '' }); // Clear the comment input after submission
      alert('Comment added!');
    }
  };

  const handleShare = async (id) => {
    await shareSportsArticle(id);
    alert('Article shared!');
  };

  return (
    <div>
      {articles.map((article) => (
        <div key={article._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h2>{article.title}</h2>
          <p>{article.content}</p> {/* Adjust this according to your article structure */}
          
          <div>
            <button onClick={() => handleLike(article._id)}>Like</button>
            <button onClick={() => handleShare(article._id)}>Share</button>
          </div>
          
          <div>
            <input
              type="text"
              placeholder="Add a comment"
              value={commentText[article._id] || ''}
              onChange={(e) => setCommentText({ ...commentText, [article._id]: e.target.value })}
            />
            <button onClick={() => handleComment(article._id)}>Comment</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SportsArticles;
