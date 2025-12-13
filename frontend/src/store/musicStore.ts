import { create } from 'zustand'

interface Track {
  id: string
  name: string
  artists: { name: string }[]
  album: { name: string; images: { url: string }[] }
  duration_ms: number
}

interface MusicState {
  recommendations: Track[]
  trending: Track[]
  searchResults: Track[]
  currentTrack: Track | null
  isPlaying: boolean
  setRecommendations: (tracks: Track[]) => void
  setTrending: (tracks: Track[]) => void
  setSearchResults: (tracks: Track[]) => void
  setCurrentTrack: (track: Track | null) => void
  setIsPlaying: (playing: boolean) => void
}

export const useMusicStore = create<MusicState>((set) => ({
  recommendations: [],
  trending: [],
  searchResults: [],
  currentTrack: null,
  isPlaying: false,
  setRecommendations: (tracks) => set({ recommendations: tracks }),
  setTrending: (tracks) => set({ trending: tracks }),
  setSearchResults: (tracks) => set({ searchResults: tracks }),
  setCurrentTrack: (track) => set({ currentTrack: track }),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
}))