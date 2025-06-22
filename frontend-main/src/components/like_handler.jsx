export const handleLike = async (postId, userId) => {
    const postRef = firebase.database().ref(`posts/${postId}/likes/${userId}`);
    try {
      const snapshot = await postRef.get();
      if (snapshot.exists()) {
        await postRef.remove(); // Unlike the post
      } else {
        await postRef.set(true); // Like the post
      }
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };
  