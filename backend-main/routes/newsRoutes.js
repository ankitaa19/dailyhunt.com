const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

router.post('/:id/like', newsController.likeNews);
router.post('/:id/comment', newsController.commentOnNews);

module.exports = router;
