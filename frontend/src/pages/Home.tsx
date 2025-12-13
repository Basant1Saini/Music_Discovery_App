import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Discover Your Next Favorite Song
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            AI-powered music recommendations tailored to your taste
          </p>
          <div className="space-x-4">
            <Link
              to="/register"
              className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg text-lg font-semibold"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="border border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold"
            >
              Sign In
            </Link>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Personalized</h3>
              <p className="text-gray-300">
                Get recommendations based on your listening history and preferences
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Trending</h3>
              <p className="text-gray-300">
                Stay updated with the latest popular tracks and artists
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Social</h3>
              <p className="text-gray-300">
                Discover what your friends are listening to and share playlists
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home