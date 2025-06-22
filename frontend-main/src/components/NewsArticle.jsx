import React, { useState } from 'react';
import axios from 'axios';

const NewsArticle = ({ article }) => {
  const [likes, setLikes] = useState(article.likes);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(article.comments);

  const handleLike = async () => {
    try {
      const response = await axios.post(`/news/${article._id}/like`);
      setLikes(response.data.likes);
    } catch (error) {
      console.error('Error liking article:', error);
    }
  };

  const handleComment = async () => {
    try {
      const response = await axios.post(`/news/${article._id}/comment`, {
        userId: 'USER_ID', // Replace with actual user ID
        content: comment,
      });
      setComments(response.data);
      setComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div className="news-article">
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <div>
        <button onClick={handleLike}>Like ({likes})</button>
        <button onClick={() => alert('Sharing...')}>Share</button>
      </div>
      <div>
        <h4>Comments:</h4>
        {comments.map((c, index) => (
          <div key={index}>
            <strong>{c.userId}</strong>: {c.content}
          </div>
        ))}
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button onClick={handleComment}>Submit</button>
      </div>
    </div>
  );
};

export default NewsArticle;
