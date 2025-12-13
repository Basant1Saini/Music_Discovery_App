import { useEffect, useState } from 'react'
import { api } from '../utils/api'

interface Playlist {
  _id: string
  name: string
  description: string
  tracks: any[]
  isPublic: boolean
  createdAt: string
}

const Playlists = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([])
  const [loading, setLoading] = useState(true)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newPlaylist, setNewPlaylist] = useState({ name: '', description: '', isPublic: false })

  useEffect(() => {
    fetchPlaylists()
  }, [])

  const fetchPlaylists = async () => {
    try {
      const response = await api.get('/playlists')
      setPlaylists(response.data)
    } catch (error) {
      console.error('Error fetching playlists:', error)
    } finally {
      setLoading(false)
    }
  }

  const createPlaylist = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await api.post('/playlists', newPlaylist)
      setNewPlaylist({ name: '', description: '', isPublic: false })
      setShowCreateForm(false)
      fetchPlaylists()
    } catch (error) {
      console.error('Error creating playlist:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading playlists...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Playlists</h1>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
        >
          Create Playlist
        </button>
      </div>

      {showCreateForm && (
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Create New Playlist</h2>
          <form onSubmit={createPlaylist}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={newPlaylist.name}
                onChange={(e) => setNewPlaylist({ ...newPlaylist, name: e.target.value })}
                className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={newPlaylist.description}
                onChange={(e) => setNewPlaylist({ ...newPlaylist, description: e.target.value })}
                className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={newPlaylist.isPublic}
                  onChange={(e) => setNewPlaylist({ ...newPlaylist, isPublic: e.target.checked })}
                  className="mr-2"
                />
                Make playlist public
              </label>
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
              >
                Create
              </button>
              <button
                type="button"
                onClick={() => setShowCreateForm(false)}
                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playlists.map((playlist) => (
          <div key={playlist._id} className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{playlist.name}</h3>
            <p className="text-gray-400 mb-4">{playlist.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{playlist.tracks.length} tracks</span>
              <span>{playlist.isPublic ? 'Public' : 'Private'}</span>
            </div>
          </div>
        ))}
      </div>

      {playlists.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No playlists yet. Create your first playlist!</p>
        </div>
      )}
    </div>
  )
}

export default Playlists