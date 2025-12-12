# Music Discovery App

A modern music discovery application built with the MERN stack that helps users find new music based on their preferences, listening history, and trending tracks.

## Features

- **Personalized Recommendations**: AI-powered music suggestions based on listening habits
- **Genre Exploration**: Discover new genres and artists
- **Social Discovery**: See what friends are listening to
- **Trending Music**: Stay updated with popular tracks
- **Playlist Creation**: Create and share custom playlists
- **Search & Filter**: Advanced search with multiple filters
- **Real-time Updates**: Live music feed and notifications

## Tech Stack

- **Frontend**: React 18 + Vite + TypeScript
- **Backend**: Node.js + Express.js
- **Database**: MongoDB with Mongoose ODM
- **Music API**: Spotify Web API
- **Authentication**: JWT + bcryptjs
- **Styling**: Tailwind CSS
- **State Management**: Zustand/Redux Toolkit

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- MongoDB (local or Atlas)
- Spotify Developer Account

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/Music_Discovery_App.git
cd Music_Discovery_App
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

4. Set up environment variables
```bash
# Backend (.env in backend folder)
cp .env.example .env

# Frontend (.env in frontend folder)
cp .env.example .env
```

5. Start the development servers
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## Configuration

### Backend Environment Variables
Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/music-discovery
JWT_SECRET=your_super_secret_jwt_key
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
NODE_ENV=development
```

### Frontend Environment Variables
Create a `.env` file in the `frontend` folder:

```env
VITE_API_URL=http://localhost:5000/api
VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
```

## Project Structure

```
Music_Discovery_App/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── store/
│   │   └── utils/
│   ├── vite.config.js
│   └── package.json
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Music
- `GET /api/music/recommendations` - Get personalized recommendations
- `GET /api/music/trending` - Get trending tracks
- `GET /api/music/search` - Search for music
- `GET /api/music/genres` - Get available genres

### Playlists
- `GET /api/playlists` - Get user playlists
- `POST /api/playlists` - Create new playlist
- `PUT /api/playlists/:id` - Update playlist
- `DELETE /api/playlists/:id` - Delete playlist

## Scripts

### Backend
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
npm run test     # Run tests
```

### Frontend
```bash
npm run dev      # Start Vite development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)

## Acknowledgments

- Spotify Web API
- Music recommendation algorithms
- Open source community