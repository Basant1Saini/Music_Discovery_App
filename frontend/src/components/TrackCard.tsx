interface Track {
  id: string
  name: string
  artists: { name: string }[]
  album: { name: string; images: { url: string }[] }
  duration_ms: number
}

interface TrackCardProps {
  track: Track
  onPlay?: () => void
}

const TrackCard = ({ track, onPlay }: TrackCardProps) => {
  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = ((ms % 60000) / 1000).toFixed(0)
    return `${minutes}:${parseInt(seconds) < 10 ? '0' : ''}${seconds}`
  }

  return (
    <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
      <div className="flex items-center space-x-4">
        {track.album.images[0] && (
          <img
            src={track.album.images[0].url}
            alt={track.album.name}
            className="w-16 h-16 rounded"
          />
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-white">{track.name}</h3>
          <p className="text-gray-400">
            {track.artists.map(artist => artist.name).join(', ')}
          </p>
          <p className="text-gray-500 text-sm">{track.album.name}</p>
        </div>
        <div className="text-gray-400 text-sm">
          {formatDuration(track.duration_ms)}
        </div>
        {onPlay && (
          <button
            onClick={onPlay}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
          >
            Play
          </button>
        )}
      </div>
    </div>
  )
}

export default TrackCard