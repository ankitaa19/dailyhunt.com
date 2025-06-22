import axios from 'axios';

const apiUrl = 'http://localhost:5005/api/sports'; // Your sports API URL

// Fetch all sports articles
export const fetchSportsArticles = async () => {
  try {
    const response = await axios.get(apiUrl); // GET request to fetch articles
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch sports articles: ' + error.message);
  }
};

// Send a new sports article
export const sendSportsArticle = async (articleData) => {
  try {
    const response = await axios.post(apiUrl, articleData); // POST request to add a new article
    return response.data;
  } catch (error) {
    throw new Error('Failed to send sports article: ' + error.message);
  }
};

// Like a sports article
export const likeSportsArticle = async (id) => {
  try {
    const response = await axios.post(`${apiUrl}/${id}/like`); // POST request to like an article
    return response.data;
  } catch (error) {
    throw new Error('Failed to like sports article: ' + error.message);
  }
};

// Comment on a sports article
export const commentOnSportsArticle = async (id, commentData) => {
  try {
    const response = await axios.post(`${apiUrl}/${id}/comment`, commentData); // POST request to comment on an article
    return response.data;
  } catch (error) {
    throw new Error('Failed to comment on sports article: ' + error.message);
  }
};

// Share a sports article (this could be a placeholder for now)
export const shareSportsArticle = async (id) => {
  try {
    // This can be implemented as needed, e.g., integrating with social media APIs
    console.log(`Sharing sports article with ID: ${id}`);
    return { message: 'Article shared successfully!' }; // Placeholder response
  } catch (error) {
    throw new Error('Failed to share sports article: ' + error.message);
  }
};
