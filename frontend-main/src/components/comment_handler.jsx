export const handleAddComment = async (postId, userId, text) => {
    const commentsRef = firebase.database().ref(`posts/${postId}/comments`);
    const newCommentRef = commentsRef.push(); // Create a new comment ID
    try {
      await newCommentRef.set({
        userId,
        text,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  