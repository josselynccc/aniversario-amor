import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import confetti from 'canvas-confetti'

const Home = () => {
  const [currentMemory, setCurrentMemory] = useState(0)
  const [showSecret, setShowSecret] = useState(false)
  const [timeTogether, setTimeTogether] = useState({
    years: 0,
    months: 0,
    days: 0,
    totalDays: 0,
    hours: 0
  })

  // Calcular tiempo juntos
  const calculateTimeTogether = () => {
    const startDate = new Date('2020-12-25T00:00:00')
    const now = new Date('2024-11-25T00:00:00') // ← Fuerza 25 de noviembre
    
    let years = now.getFullYear() - startDate.getFullYear()
    let months = now.getMonth() - startDate.getMonth()
    let days = now.getDate() - startDate.getDate()

    if (days < 0) {
      months--
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0)
      days += lastMonth.getDate()
    }

    if (months < 0) {
      years--
      months += 12
    }

    const diffTime = Math.abs(now - startDate)
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    
    return { years, months, days, totalDays: diffDays }
  }

  useEffect(() => {
    // Solución al error: Usar setTimeout para evitar setState sincrónico
    const timer = setTimeout(() => {
      setTimeTogether(calculateTimeTogether())
    }, 0)
    
    // Confetti de bienvenida
    const confettiTimer = setTimeout(() => {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.6 }
      })
    }, 1000)

    return () => {
      clearTimeout(timer)
      clearTimeout(confettiTimer)
    }
  }, [])

  const memories = [
    {
      date: "25 Dic 2021",
      title: "Nuestro Primer Día",
      description: "El día que empezó esta hermosa historia juntos 💫",
      emoji: "✨",
      bgColor: "from-pink-500 to-rose-500"
    },
    {
      date: "25 Nov 2024",
      title: "Casi 4 Años Juntos",
      description: `${timeTogether.years} años, ${timeTogether.months} meses y ${timeTogether.days} días de pura felicidad 💖`,
      emoji: "🌠",
      bgColor: "from-purple-500 to-indigo-500"
    },
    {
      date: "25 Dic 2024",
      title: "Nuestro Futuro",
      description: "Y muchos capítulos más por escribir juntos 📖",
      emoji: "🚀",
      bgColor: "from-blue-500 to-cyan-500"
    }
  ]

  const handleSecretClick = () => {
    setShowSecret(true)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 relative overflow-hidden">
      {/* Fondo animado - optimizado para móvil */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute top-10 left-10 w-4 h-4 bg-white/30 rounded-full animate-ping hidden sm:block"></div>
        <div className="absolute top-1/4 right-20 w-3 h-3 bg-white/20 rounded-full animate-pulse hidden md:block"></div>
        <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-white/25 rounded-full animate-bounce hidden lg:block"></div>
      </div>

      {/* Navegación responsive */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 gap-4 sm:gap-0">
          {/* Logo/Título */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto text-center">
            <h1 className="text-white font-bold text-lg sm:text-xl">Nuestra Historia 💖</h1>
          </div>
          
          {/* Botones de navegación */}
          <div className="flex gap-2 sm:gap-3 w-full sm:w-auto justify-center">
            <Link 
              to="/secret-message"
              className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 sm:px-6 sm:py-3 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl border border-white/10 text-sm sm:text-base flex-1 sm:flex-none justify-center"
            >
              <span className="text-xl sm:text-2xl">💌</span>
              <span className="hidden xs:inline">Mensaje</span>
            </Link>
            <Link 
              to="/gallery"
              className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 sm:px-6 sm:py-3 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl border border-white/10 text-sm sm:text-base flex-1 sm:flex-none justify-center"
            >
              <span className="text-xl sm:text-2xl">📸</span>
              <span className="hidden xs:inline">Galería</span>
            </Link>
            <Link 
              to="/ludo"
              className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 sm:px-6 sm:py-3 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl border border-white/10 text-sm sm:text-base flex-1 sm:flex-none justify-center"
            >
              <span className="text-xl sm:text-2xl">🎮</span>
              <span className="hidden xs:inline">Adivina</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Contenido principal - optimizado para móvil */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-10 px-4 sm:px-6">
        <div className="max-w-4xl w-full">
          {/* Header espectacular - responsive */}
          <div className="text-center mb-8 sm:mb-16">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 sm:p-8 inline-block mx-auto border border-white/10 shadow-2xl w-full max-w-2xl">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                Bienvenido
              </h1>
              
              {/* Grid de estadísticas - responsive */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-white/15 rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
                  <div className="text-xl sm:text-3xl font-bold text-white">{timeTogether.totalDays || 0}</div>
                  <div className="text-white/80 text-xs sm:text-sm">Días Juntos</div>
                </div>
                <div className="bg-white/15 rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
                  <div className="text-xl sm:text-3xl font-bold text-white">{timeTogether.years || 0}</div>
                  <div className="text-white/80 text-xs sm:text-sm">Años</div>
                </div>
                <div className="bg-white/15 rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
                  <div className="text-xl sm:text-3xl font-bold text-white">{timeTogether.months || 0}</div>
                  <div className="text-white/80 text-xs sm:text-sm">Meses</div>
                </div>
                <div className="bg-white/15 rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
                  <div className="text-xl sm:text-3xl font-bold text-white">{timeTogether.days || 0}</div>
                  <div className="text-white/80 text-xs sm:text-sm">Días</div>
                </div>
              </div>

              <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto">
                Cada día a tu lado es un nuevo capítulo en nuestra historia de amor ✨
              </p>
            </div>
          </div>

          {/* Timeline interactiva - responsive */}
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            {memories.map((memory, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${memory.bgColor} text-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 cursor-pointer backdrop-blur-sm border border-white/20 ${
                  currentMemory === index ? 'ring-2 sm:ring-4 ring-white ring-opacity-50 scale-105' : ''
                }`}
                onClick={() => setCurrentMemory(index)}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="text-3xl sm:text-5xl bg-white/20 rounded-2xl p-3 sm:p-4 mx-auto sm:mx-0">
                    {memory.emoji}
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-3">
                      <span className="text-sm sm:text-2xl font-bold bg-white/20 px-3 py-1 rounded-full">
                        {memory.date}
                      </span>
                      <h3 className="text-xl sm:text-3xl font-black">{memory.title}</h3>
                    </div>
                    <p className="text-sm sm:text-xl opacity-95 leading-relaxed">{memory.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sección de sorpresa - responsive */}
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
              <div className="text-3xl sm:text-4xl mb-4">🎁</div>
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                ¿Listo para una sorpresa especial?
              </h2>
              
              {!showSecret ? (
                <button
                  onClick={handleSecretClick}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-4 sm:px-12 sm:py-6 rounded-2xl font-bold text-base sm:text-xl shadow-2xl transform transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-3xl flex items-center gap-2 sm:gap-4 mx-auto w-full sm:w-auto justify-center"
                >
                  <span className="text-xl sm:text-2xl">🎀</span>
                  <span className="text-sm sm:text-base">Descubre Mi Sorpresa</span>
                  <span className="text-xl sm:text-2xl">🎀</span>
                </button>
              ) : (
                <div className="bg-white rounded-2xl p-4 sm:p-8 animate-pulse max-w-2xl mx-auto">
                  <div className="text-3xl sm:text-4xl mb-4">💝</div>
                  <p className="text-gray-800 text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                    ¡Feliz casi 4 años, mi amor! 🎉
                  </p>
                  <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
                    Estos {timeTogether.totalDays} días a tu lado han sido la mejor aventura de mi vida. 
                    Eres mi persona favorita en todo el universo. 
                    <span className="block mt-3 sm:mt-4 font-bold text-pink-600 text-base sm:text-lg">
                      Te amo más de lo que se puede expresar 💖
                    </span>
                  </p>
                  <div className="mt-4 sm:mt-6 text-2xl sm:text-3xl flex justify-center gap-2 sm:gap-4">
                    💫 🌙 ✨ 🚀 💖
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer romántico - responsive */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 inline-block max-w-md">
              <p className="text-white/80 text-sm sm:text-lg">
                "Nuestro amor es como las mejores historias de anime: 
                <span className="block text-white font-semibold text-base sm:text-lg mt-1">
                  épico, emotivo y con un final que nunca llega ✨"
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decoración flotante - solo en desktop */}
      <div className="absolute bottom-10 left-10 text-4xl animate-bounce hidden lg:block">💖</div>
      <div className="absolute top-1/3 right-16 text-3xl animate-pulse hidden lg:block">✨</div>
      <div className="absolute bottom-32 right-20 text-5xl animate-ping hidden xl:block">🌙</div>
    </div>
  )
}

export default Home