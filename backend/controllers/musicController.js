const axios = require('axios');

const getSpotifyToken = async () => {
  const response = await axios.post('https://accounts.spotify.com/api/token', 
    'grant_type=client_credentials', {
    headers: {
      'Authorization': `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  return response.data.access_token;
};

exports.getRecommendations = async (req, res) => {
  try {
    const token = await getSpotifyToken();
    const response = await axios.get('https://api.spotify.com/v1/recommendations', {
      headers: { 'Authorization': `Bearer ${token}` },
      params: {
        seed_genres: 'pop,rock,hip-hop',
        limit: 20
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTrending = async (req, res) => {
  try {
    const token = await getSpotifyToken();
    const response = await axios.get('https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks', {
      headers: { 'Authorization': `Bearer ${token}` },
      params: { limit: 50 }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.searchMusic = async (req, res) => {
  try {
    const { q } = req.query;
    const token = await getSpotifyToken();
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: { 'Authorization': `Bearer ${token}` },
      params: {
        q,
        type: 'track,artist,album',
        limit: 20
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getGenres = async (req, res) => {
  try {
    const token = await getSpotifyToken();
    const response = await axios.get('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};