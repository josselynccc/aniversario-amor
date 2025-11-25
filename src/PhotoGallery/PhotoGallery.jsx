import React from 'react'
import { Link } from 'react-router-dom'
import primeranio from '../assets/galeria/primeranio.jpg'
import travesura from '../assets/galeria/travesura.jpg'
import concierto from '../assets/galeria/concierto.jpg'
import viajecito from '../assets/galeria/viajecito.jpg'
import primerpeluche from '../assets/galeria/primerpeluche.jpg'
import arequipa from '../assets/galeria/arequipa.jpg'
import corazon from '../assets/galeria/corazon.jpg'
import ocurrencia from '../assets/galeria/ocurrencia.jpg'
import viajecito2023 from '../assets/galeria/viajecito2023.jpg'
import concierto2023 from '../assets/galeria/concierto2023.jpg'
import viaje2024 from '../assets/galeria/viaje2024.jpg'
import viaje2025 from '../assets/galeria/viaje2025.jpg'
import ocurrencia2 from '../assets/galeria/ocurrencia2.jpg'

const PhotoGallery = () => {
  const photos = [
    // Aquí puedes poner URLs de tus fotos
    { id: 1, url: primeranio, caption: 'Nuestro primer año 💫' },
    { id: 2, url: travesura, caption: 'Aventuras juntos 🌟' },
    { id: 3, url: concierto, caption: 'Concierto juntos 💖' },
    { id: 4, url: primeranio, caption: 'Nuestro segundo año 💫' },
    { id: 5, url: viajecito, caption: 'Viajecito segundo año check 🌟' },
    { id: 6, url: primerpeluche, caption: 'Primer Peluchito 🌟' },
    { id: 7, url: arequipa, caption: 'Viajecito a Arequipa ✈️' },
    { id: 8, url: corazon, caption: 'Nuetro corazón imperdible en los paseos 💖' },
    { id: 9, url: ocurrencia, caption: 'Nuetras locuras 💖' },
    { id: 10, url: viajecito2023, caption: 'Viajecito 2023 Huancayo 💖' },
    { id: 11, url: concierto2023, caption: 'Concierto 2023 💖' },
    { id: 12, url: viaje2024, caption: 'Viajecito 2024 💖' },
    { id: 13, url: viaje2025, caption: 'Viajecito 2025 💖' },
    { id: 14, url: ocurrencia2, caption: 'Siempre con nuestras ocurrencias 💖' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-blue-500 to-purple-500 p-6">
      <div className="max-w-6xl mx-auto">
        <Link 
          to="/Home"
          className="inline-block mb-6 bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
        >
          ← Volver al Timeline
        </Link>

        <h1 className="text-4xl font-bold text-white text-center mb-8">Nuestra Galería de Recuerdos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map(photo => (
            <div key={photo.id} className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-white">
              <div className="bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                <img src={photo.url} alt="img" />
              </div>
              <p className="text-center font-semibold">{photo.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery