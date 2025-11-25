import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const Ludo = () => {
  const [respuesta, setRespuesta] = useState('');
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [intentos, setIntentos] = useState(0);

  const preguntas = [
    {
      pregunta: "¿Dónde fue nuestro primer beso?",
      respuesta: "casa", // Cambia por tu respuesta real
      pista: "Es el lugar donde empezó todo 💖"
    },
    {
      pregunta: "¿Cuál es mi comida favorita que tú cocinas?",
      respuesta: "lasaña", // Cambia por tu respuesta real
      pista: "Es un plato italiano 🍝"
    },
    {
      pregunta: "¿Qué película vimos en nuestra primera cita?",
      respuesta: "spiderman", // Cambia por tu respuesta real
      pista: "Tu superhéroe favorito 🕷️"
    }
  ];

  const [preguntaActual, setPreguntaActual] = useState(0);

  const verificarRespuesta = () => {
    setIntentos(intentos + 1);
    
    if (respuesta.toLowerCase() === preguntas[preguntaActual].respuesta.toLowerCase()) {
      setMostrarResultado(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      // Pasar a siguiente pregunta después de 3 segundos
      setTimeout(() => {
        if (preguntaActual < preguntas.length - 1) {
          setPreguntaActual(preguntaActual + 1);
          setRespuesta('');
          setMostrarResultado(false);
          setIntentos(0);
        }
      }, 3000);
    }
  };

  if (preguntaActual >= preguntas.length) {
    return (
      <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-center text-white">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold mb-4">¡Felicidades!</h2>
        <p className="text-xl mb-6">Conoces cada detalle de nuestro amor 💝</p>
        <button
          onClick={() => setPreguntaActual(0)}
          className="bg-white text-pink-600 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-all"
        >
          Jugar de nuevo
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Adivinanza de Amor 💕</h2>
      
      <div className="text-center mb-6">
        <p className="text-xl mb-2">Pregunta {preguntaActual + 1} de {preguntas.length}</p>
        <p className="text-2xl font-semibold">{preguntas[preguntaActual].pregunta}</p>
      </div>

      {!mostrarResultado ? (
        <div className="space-y-4">
          <input
            type="text"
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)}
            placeholder="Escribe tu respuesta..."
            className="w-full px-4 py-3 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/50"
          />
          <button
            onClick={verificarRespuesta}
            className="w-full bg-white text-pink-600 py-3 rounded-2xl font-bold hover:scale-105 transition-all"
          >
            Comprobar Respuesta
          </button>
          
          {intentos > 1 && (
            <div className="bg-yellow-500/20 rounded-2xl p-4 text-center">
              <p className="text-sm">💡 Pista: {preguntas[preguntaActual].pista}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <div className="text-4xl mb-4">✅</div>
          <p className="text-2xl font-bold mb-2">¡Correcto!</p>
          <p className="text-lg">Eres el/la mejor 💖</p>
          <p className="text-sm mt-2 opacity-80">Siguiente pregunta en 3 segundos...</p>
        </div>
      )}
    </div>
  );
};

export default Ludo;