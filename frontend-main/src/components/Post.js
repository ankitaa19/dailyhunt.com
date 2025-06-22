// components/Post.js
import React, { useState } from 'react';

const Post = ({ content }) => {
  const [likes, setLikes] = useState(0);
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const handleLike = () => setLikes(likes + 1);

  const handleCommentToggle = () => {
    setCommentsVisible(!commentsVisible);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  const sharePost = () => {
    const postUrl = window.location.href; // Use current URL for sharing
    const message = "Check out this post!";
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message + " " + postUrl)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="post">
      <div className="post-content">
        <p>{content}</p>
      </div>
      <div className="post-actions">
        <button onClick={handleLike}>Like<span className="like-count">({likes})</span></button>
        <button onClick={handleCommentToggle}>Comment</button>
        <button onClick={sharePost}>Share</button>
      </div>
      {commentsVisible && (
        <div className="comment-section">
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
          />
          <button onClick={handleCommentSubmit}>Post</button>
        </div>
      )}
      <div className="comments">
        {comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
      </div>
      <style jsx>{`
        .post {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
          margin-bottom: 20px;
        }
        .post-content {
          margin-bottom: 15px;
        }
        .post-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .post-actions button {
          padding: 10px 15px;
          border: none;
          background-color: #007bff;
          color: white;
          border-radius: 5px;
          cursor: pointer;
        }
        .post-actions button:hover {
          background-color: #0056b3;
        }
        .comment-section {
          margin-top: 15px;
        }
        .comments {
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default Post;
