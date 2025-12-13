const express = require('express');
const { getPlaylists, createPlaylist, updatePlaylist, deletePlaylist } = require('../controllers/playlistController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.route('/')
  .get(getPlaylists)
  .post(createPlaylist);

router.route('/:id')
  .put(updatePlaylist)
  .delete(deletePlaylist);

module.exports = router;