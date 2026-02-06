import React from 'react'
import { Scissors } from 'lucide-react'

const Hero = ({ onBookAppointment }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-gold flex items-center justify-center">
              <Scissors className="w-16 h-16 text-gold" />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black px-4 py-1 rounded-full border-2 border-gold">
              <span className="text-gold font-heading text-sm">LEGENDARY</span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-4 text-shadow">
          UNIKAL BƏRBƏRLİK
        </h1>
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 text-shadow">
          TƏCRÜBƏSİ
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Bakının ən yaxşı berbərlərindən biri olan Sanan Əliyev ilə tanış olun. 
          Peşəkar xidmət və unikal üslub bir yerdə.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onBookAppointment}
            className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-4 rounded text-lg transition-all transform hover:scale-105"
          >
            RANDEVU AL
          </button>
          <button 
            onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white hover:bg-white hover:text-black text-white font-semibold px-8 py-4 rounded text-lg transition-all"
          >
            XİDMƏTLƏRƏ BAX
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
