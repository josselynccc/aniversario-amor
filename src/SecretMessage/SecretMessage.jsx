import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import confetti from 'canvas-confetti'

const SecretMessage = () => {
  useEffect(() => {
    // Efecto de confetti al entrar
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    const interval = setInterval(() => {
      confetti({
        particleCount: 50,
        angle: Math.random() * 180,
        spread: 55,
        origin: { x: Math.random() }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <Link 
          to="/Home"
          className="inline-block mb-6 bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
        >
          ← Volver al Timeline
        </Link>

        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-white text-center">
          <div className="text-6xl mb-6">💝</div>
          <h1 className="text-4xl font-bold mb-6">Para Mi Chiquito</h1>
          
          <div className="bg-white rounded-2xl p-6 text-gray-800 text-left">
            <p className="text-lg mb-4">
              <strong>Mi querido amorcito,</strong>
            </p>
            <p className="mb-3">
              Hoy cumplimos 3 años y 11 meses juntos, y cada día a tu lado ha sido un regalo. 
            </p>
            <p className="mb-3">
              Recuerdo nuestro primer 25 de diciembre como si fuera ayer... y ahora estamos a solo un mes de celebrar 4 años increíbles. 
            </p>
            <p className="mb-3">
              Eres mi compañero de vida, mi mejor amigo, y la persona que hace que cada día valga la pena. 
              Nuestro amor es mi historia de anime favorita, llena de aventuras, risas y momentos inolvidables siempre con un giro dramático emocionante.
            </p>
            <p className="mb-3">
              Nunca me cansaré de repetirte que eres lo mejor que me ha pasado.
            </p>
            <p className="mb-3">
              Gracias por siempre estar a mi lado. Gracias por ser como eres ... detallista, amoroso, divertido, inteligente, consejero ... El mejor compañero que quiero para toda la vida.
            </p>
            <p className="mb-3">
              Eres mi angelito de la guarda que siempre vela por mí, mis sueños y mis aspiraciones.
            </p>
            <p className="font-semibold text-center mt-6">
              Cada día espero para poder ver qué nuevas aventuras y sonrisas nos esperan juntos.
              <br />
              💫 Feliz aniversario mi guapo 💫
            </p>
          </div>

          <div className="mt-8 text-3xl animate-bounce">
            ✨ 🌙 💖 🚀 ✨
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecretMessage