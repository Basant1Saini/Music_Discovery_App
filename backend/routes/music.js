const express = require('express');
const { getRecommendations, getTrending, searchMusic, getGenres } = require('../controllers/musicController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/recommendations', protect, getRecommendations);
router.get('/trending', getTrending);
router.get('/search', searchMusic);
router.get('/genres', getGenres);

module.exports = router;