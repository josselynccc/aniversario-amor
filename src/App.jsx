import React, { useState, useRef, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home/Home'
import SecretMessage from './SecretMessage/SecretMessage'
import PhotoGallery from './PhotoGallery/PhotoGallery'
import Login from './Login/login'
import amen from './assets/AMENTEQUIERO.mp3'
import kimi from './assets/kimi.mp3'
import hoshi from './assets/hoshi.mp3'

function App() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [volume, setVolume] = useState(0.3)
  const [showPlaylist, setShowPlaylist] = useState(false)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const audioRef = useRef(null)

  const playlist = [
    { src: amen, name: "Te quiero" },
    { src: kimi, name: "君のとなりに" },
    { src: hoshi, name: "Hoshi" },
  ]

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.play().catch(error => {
        console.log('Auto-play prevenido:', error)
        setIsPlaying(false)
      })
    }
  }, [currentSongIndex, volume])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(error => {
          console.log('Error al reproducir:', error)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => 
      prevIndex === playlist.length - 1 ? 0 : prevIndex + 1
    )
  }

  const previousSong = () => {
    setCurrentSongIndex((prevIndex) => 
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const audio = audioRef.current
    
    const handleEnded = () => {
      console.log('🎵 Canción terminada - Pasando a la siguiente')
      nextSong()
    }

    if (audio) {
      audio.addEventListener('ended', handleEnded)
    }

    return () => {
      if (audio) {
        audio.removeEventListener('ended', handleEnded)
      }
    }
  }, [])

  return (
    <>
      {/* ✅ ELEMENTO AUDIO FALTANTE - Esto es lo que hace que suene */}
      <audio 
        ref={audioRef} 
        key={currentSongIndex}
        onError={(e) => console.log('Error de audio:', e)}
      >
        <source src={playlist[currentSongIndex].src} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>

      {/* Controles de música */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        <div className="flex flex-col items-end gap-3">
          
          {/* Botón principal flotante */}
          <button
            onClick={() => setShowPlaylist(!showPlaylist)}
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-2xl hover:bg-white/30 transition-all duration-300 shadow-2xl"
          >
            🎵
          </button>

          {/* Panel lateral desplegable */}
          {showPlaylist && (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30 w-56 space-y-4">
              
              {/* Estado actual */}
              <div className="text-center">
                <p className="text-white font-semibold text-sm mb-1">
                  {isPlaying ? '🔊 Reproduciendo' : '🔇 Pausado'}
                </p>
                <p className="text-white/80 text-xs truncate">
                  {playlist[currentSongIndex].name}
                </p>
                <p className="text-white/60 text-xs mt-1">
                  {currentSongIndex + 1} de {playlist.length}
                </p>
              </div>

              {/* Controles principales */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={previousSong}
                  className="bg-purple-500/30 hover:bg-purple-500/50 p-2 rounded-full transition-all text-white"
                >
                  ⏮
                </button>
                <button
                  onClick={toggleMusic}
                  className={`p-3 rounded-full text-lg ${
                    isPlaying 
                      ? 'bg-red-500/30 hover:bg-red-500/50 text-white' 
                      : 'bg-green-500/30 hover:bg-green-500/50 text-white'
                  }`}
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </button>
                <button
                  onClick={nextSong}
                  className="bg-purple-500/30 hover:bg-purple-500/50 p-2 rounded-full transition-all text-white"
                >
                  ⏭
                </button>
              </div>

              {/* Volumen */}
              <div>
                <div className="flex justify-between text-white text-xs mb-1">
                  <span>🔊 Volumen</span>
                  <span>{Math.round(volume * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => {
                    const newVolume = parseFloat(e.target.value)
                    setVolume(newVolume)
                    if (audioRef.current) {
                      audioRef.current.volume = newVolume
                    }
                  }}
                  className="w-full accent-white"
                />
              </div>

              {/* Lista rápida */}
              <div>
                <p className="text-white text-xs font-bold mb-2 text-center">Canciones</p>
                <div className="space-y-1 max-h-20 overflow-y-auto">
                  {playlist.map((song, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentSongIndex(index)
                        setShowPlaylist(false)
                      }}
                      className={`w-full text-left p-1 px-2 rounded text-xs transition-all ${
                        index === currentSongIndex
                          ? 'bg-white/30 text-white font-semibold'
                          : 'text-white/70 hover:bg-white/20'
                      }`}
                    >
                      • {song.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Rutas de la aplicación */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/secret-message" element={<SecretMessage />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  )
}

export default App