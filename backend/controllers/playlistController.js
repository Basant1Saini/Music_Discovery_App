const Playlist = require('../models/Playlist');

exports.getPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find({ owner: req.user.id }).populate('owner', 'username');
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPlaylist = async (req, res) => {
  try {
    const { name, description, isPublic } = req.body;
    const playlist = await Playlist.create({
      name,
      description,
      owner: req.user.id,
      isPublic: isPublic || false
    });
    res.status(201).json(playlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      req.body,
      { new: true }
    );
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.json(playlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findOneAndDelete({ _id: req.params.id, owner: req.user.id });
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.json({ message: 'Playlist deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};