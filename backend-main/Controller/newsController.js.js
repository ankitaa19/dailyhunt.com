const News = require('../models/newsModel');

exports.likeNews = async (req, res) => {
  try {
    const newsId = req.params.id;
    const news = await News.findById(newsId);
    if (!news) return res.status(404).send('News article not found');

    news.likes += 1;
    await news.save();
    res.status(200).send({ likes: news.likes });
  } catch (error) {
    res.status(500).send('Error liking news article');
  }
};

exports.commentOnNews = async (req, res) => {
  try {
    const newsId = req.params.id;
    const { userId, content } = req.body;

    const news = await News.findById(newsId);
    if (!news) return res.status(404).send('News article not found');

    const comment = { userId, content };
    news.comments.push(comment);
    await news.save();
    res.status(200).send(news.comments);
  } catch (error) {
    res.status(500).send('Error adding comment');
  }
};
