import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

const Ludo = () => {
  const [respuesta, setRespuesta] = useState('');
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [intentos, setIntentos] = useState(0);
  const [mostrarError, setMostrarError] = useState(false);

  const preguntas = [
    {
      pregunta: "¿Dónde fue nuestro primer beso?",
      respuesta: "chosica",
      pista: "No hay jijijija"
    },
    {
      pregunta: "¿Cuál es la fecha de nuestro primer beso?",
      respuesta: "16-01-2022",
      pista: "la fecha es dia-mes-año  📅"
    },
    {
      pregunta: "¿Cuál es la serie más larga que hemos visto?",
      respuesta: "The Walking Dead",
      pista: "Cada primera letra de las palabras en mayuscula : Hola Amorcito"
    }
  ];

  const [preguntaActual, setPreguntaActual] = useState(0);

  const verificarRespuesta = () => {
    setIntentos(intentos + 1);
    
    if (respuesta.toLowerCase() === preguntas[preguntaActual].respuesta.toLowerCase()) {
      setMostrarResultado(true);
      setMostrarError(false);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
      });
      
      setTimeout(() => {
        if (preguntaActual < preguntas.length - 1) {
          setPreguntaActual(preguntaActual + 1);
          setRespuesta('');
          setMostrarResultado(false);
          setIntentos(0);
          setMostrarError(false);
        }
      }, 3000);
    } else {
      // Respuesta incorrecta
      setMostrarError(true);
      // Ocultar el error después de 2 segundos
      setTimeout(() => {
        setMostrarError(false);
      }, 2000);
    }
  };

  if (preguntaActual >= preguntas.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl">
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              ¡Felicidades!
            </h2>
            <p className="text-xl mb-6 opacity-90">Conoces cada detalle de nuestro amor 💝</p>
            
            <div className="space-y-4">
              <button
                onClick={() => setPreguntaActual(0)}
                className="w-full bg-white text-pink-600 px-6 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                🎮 Jugar de Nuevo
              </button>
              
              <Link 
                to="/home"
                className="block w-full bg-white/20 border border-white/30 text-white px-6 py-4 rounded-2xl font-bold hover:bg-white/30 transition-all duration-300 hover:scale-105"
              >
                🏠 Volver al Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        
        {/* Botón de regreso */}
        <Link 
          to="/home"
          className="inline-block mb-6 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/10 shadow-lg"
        >
          ← Volver al Home
        </Link>

        {/* Juego de adivinanzas */}
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-white border border-white/10 shadow-2xl">
          
          {/* Header del juego */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">💕</div>
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              Adivinanza de Amor
            </h2>
            <div className="flex justify-center items-center gap-4 mt-4">
              <div className="bg-white/20 rounded-2xl px-4 py-2">
                <p className="text-sm opacity-80">Pregunta</p>
                <p className="text-xl font-bold">{preguntaActual + 1} / {preguntas.length}</p>
              </div>
              <div className="bg-white/20 rounded-2xl px-4 py-2">
                <p className="text-sm opacity-80">Intentos</p>
                <p className="text-xl font-bold">{intentos}</p>
              </div>
            </div>
          </div>

          {/* Pregunta actual */}
          <div className="text-center mb-8">
            <p className="text-2xl md:text-3xl font-semibold leading-relaxed bg-white/10 rounded-2xl p-6">
              {preguntas[preguntaActual].pregunta}
            </p>
          </div>

          {!mostrarResultado ? (
            <div className="space-y-4">
              
              {/* Mensaje de error */}
              {mostrarError && (
                <div className="bg-red-500/20 border border-red-400/30 rounded-2xl p-4 text-center animate-shake">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xl">❌</span>
                    <p className="text-white font-semibold">
                      {intentos >= 5 ? "Me debes alitas 😋" : "Respuesta incorrecta. ¡Intenta nuevamente!"}
                    </p>
                  </div>
                </div>
              )}

              {/* Input de respuesta */}
              <div className="relative">
                <input
                  type="text"
                  value={respuesta}
                  onChange={(e) => setRespuesta(e.target.value)}
                  placeholder="Escribe tu respuesta aquí..."
                  className="w-full px-6 py-4 rounded-2xl bg-white/15 backdrop-blur-sm border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:ring-4 focus:ring-white/20 transition-all duration-300 text-lg"
                  onKeyPress={(e) => e.key === 'Enter' && verificarRespuesta()}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60">
                  💭
                </div>
              </div>

              {/* Botón de comprobar */}
              <button
                onClick={verificarRespuesta}
                disabled={!respuesta.trim()}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                🔍 Comprobar Respuesta
              </button>
              
              {/* Pista después de 2 intentos */}
              {intentos >= 2 && intentos < 5 && (
                <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-2xl p-4 text-center animate-pulse">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-xl">💡</span>
                    <p className="text-sm font-semibold">Pista:</p>
                  </div>
                  <p className="text-white/90">{preguntas[preguntaActual].pista}</p>
                </div>
              )}

              {/* Mensaje especial después del 5to intento */}
              {intentos >= 5 && (
                <div className="bg-purple-500/20 border border-purple-400/30 rounded-2xl p-4 text-center animate-pulse">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-xl">🍗</span>
                    <p className="text-sm font-semibold">Recordatorio:</p>
                  </div>
                  <p className="text-white/90">¡Me debes unas alitas por todos estos intentos! 😘</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce">✅</div>
              <h3 className="text-3xl font-bold mb-2 text-green-300">¡Correcto!</h3>
              <p className="text-xl mb-4 opacity-90">Eres increíble 💖</p>
              <div className="bg-white/10 rounded-2xl p-4 inline-block">
                <p className="text-sm opacity-80">Siguiente pregunta en 3 segundos...</p>
                <div className="mt-2 w-32 bg-white/30 rounded-full h-2 mx-auto">
                  <div className="bg-white rounded-full h-2 animate-pulse"></div>
                </div>
              </div>
            </div>
          )}

          {/* Progreso */}
          <div className="mt-8">
            <div className="flex justify-between text-white/70 text-sm mb-2">
              <span>Progreso</span>
              <span>{Math.round(((preguntaActual + 1) / preguntas.length) * 100)}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-green-400 to-cyan-400 h-3 rounded-full transition-all duration-500"
                style={{ width: `${((preguntaActual + 1) / preguntas.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ludo;