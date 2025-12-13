import { useEffect, useState } from 'react'
import { useMusicStore } from '../store/musicStore'
import { api } from '../utils/api'
import TrackCard from '../components/TrackCard'

const Dashboard = () => {
  const { recommendations, trending, setRecommendations, setTrending } = useMusicStore()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [recResponse, trendingResponse] = await Promise.all([
          api.get('/music/recommendations'),
          api.get('/music/trending')
        ])
        
        setRecommendations(recResponse.data.tracks || [])
        setTrending(trendingResponse.data.items?.map((item: any) => item.track) || [])
      } catch (error) {
        console.error('Error fetching music data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [setRecommendations, setTrending])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading your music...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Music Dashboard</h1>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recommended for You</h2>
          <div className="space-y-4">
            {recommendations.slice(0, 5).map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Trending Now</h2>
          <div className="space-y-4">
            {trending.slice(0, 5).map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard