import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import confetti from 'canvas-confetti'
import perritobien from '../assets/perritoBien.png'
import perritomal from '../assets/perritomal.jpg'
import perritomaltwo from '../assets/perritomaltwo.jpg'

const Login = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [hint, setHint] = useState(false)
  const [hintTwo, setHintTwo] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const navigate = useNavigate()

  const correctPassword = '251221'

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (password === correctPassword) {
      setIsSuccess(true)
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
      })

      // Más confeti después de un tiempo
      setTimeout(() => {
        confetti({
          particleCount: 150,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        })
        confetti({
          particleCount: 150,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        })
      }, 300)

      setTimeout(() => {
        navigate('/Home')
      }, 3000)
    } else {
      setError('❌ Contraseña incorrecta')
      setTimeout(() => setError(''), 2000)
    }
  }

  const showHint = () => {
    setHint(true)
    setTimeout(() => setHint(false), 5000)
  }

  const showHintTwo = () => {
    setHintTwo(true)
    setTimeout(() => setHintTwo(false), 5000)
  }

  // Si es éxito, mostrar pantalla de éxito
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-500 via-emerald-400 to-teal-500 flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-white">
            <div className="animate-bounce mb-6">
              <img 
                src={perritobien} 
                alt='perrito feliz' 
                className="w-32 h-32 mx-auto transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            <h1 className="text-4xl font-bold mb-4">¡Correcto! 🎉</h1>
            <p className="text-xl mb-6 opacity-90">
              Contraseña aceptada, mi amor 💖
            </p>
            
            <div className="bg-white/30 rounded-2xl p-4 mb-6">
              <p className="text-lg font-semibold">
                Redirigiendo a nuestro mundo especial...
              </p>
              <div className="mt-4 w-full bg-white/30 rounded-full h-2">
                <div className="bg-white rounded-full h-2 animate-pulse"></div>
              </div>
            </div>

            <div className="text-3xl animate-pulse">
              💫 ¡Te amo! 💫
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-white text-center shadow-2xl border border-white/10">
          {/* Header con animación */}
          <div className="text-6xl mb-4 animate-pulse">🔒💖</div>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
            Bienvenido a Nuestro Mundo
          </h1>
          <p className="mb-6 opacity-90 text-lg">
            Para acceder a nuestra historia de amor, necesitas la clave especial...
          </p>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa nuestra clave secreta..."
                className="w-full px-6 py-4 rounded-2xl bg-white/15 backdrop-blur-sm border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:ring-4 focus:ring-white/20 transition-all duration-300 text-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60">
                🔑
              </div>
            </div>

            {/* Mensaje de error */}
            {error && (
              <div className="bg-red-500/20 border border-red-400/30 rounded-2xl p-4 animate-shake">
                <div className="flex items-center justify-center gap-2 text-red-200 font-semibold">
                  <span className="text-xl">🚫</span>
                  {error}
                </div>
              </div>
            )}

            {/* Botón de enviar */}
            <button
              type="submit"
              disabled={!password}
              className="w-full bg-white text-pink-600 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
            >
              🔓 Desbloquear Nuestro Amor
            </button>
          </form>

          {/* Sección de pistas */}
          <div className="mt-8 space-y-4">
            <button
              onClick={showHint}
              className="w-full bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl py-3 transition-all duration-300 transform hover:scale-102"
            >
              <span className="flex items-center justify-center gap-2">
                💡 ¿Necesitas una pista?
              </span>
            </button>

            {/* Primera pista */}
            {hint && (
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-2xl p-6 animate-fade-in">
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src={perritomal} 
                    alt='perrito pensativo' 
                    className="w-20 h-20 transform hover:scale-110 transition-transform duration-300"
                  />
                  <div className="text-center">
                    <p className="text-sm font-semibold mb-2">Tú sabes :3</p>
                    <button
                      onClick={showHintTwo}
                      className="bg-yellow-500/30 hover:bg-yellow-500/40 px-4 py-2 rounded-full text-sm transition-all duration-300"
                    >
                      💡 ¿Necesitas otra pista?
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Segunda pista */}
            {hintTwo && (
              <div className="bg-orange-500/20 border border-orange-400/30 rounded-2xl p-6 animate-fade-in">
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src={perritomaltwo} 
                    alt='perrito insistente' 
                    className="w-20 h-20 transform hover:scale-110 transition-transform duration-300"
                  />
                  <div className="text-center">
                    <p className="text-sm font-semibold">OE OE OE</p>
                    <p className="text-xs mt-2 opacity-80">Pista: Es una fecha muy especial en números</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-6 text-xs text-white/60">
            💫 Solo tú conoces el código 👀
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login