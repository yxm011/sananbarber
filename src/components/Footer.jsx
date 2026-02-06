import React from 'react'
import { Scissors, Instagram, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="w-8 h-8 text-gold" />
              <span className="text-xl font-heading font-bold text-gold">LEGENDARY BARBERS CLUB</span>
            </div>
            <p className="text-gray-400 mb-4">
              Bakının ən yaxşı berbərxanası. Peşəkar xidmət və unikal üslub.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/sanan.barber" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gold hover:text-black p-2 rounded transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="tel:+994554239094" className="bg-gray-800 hover:bg-gold hover:text-black p-2 rounded transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-gold">Sürətli Keçidlər</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Ana Səhifə
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Haqqımızda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Xidmətlər
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Əlaqə
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-gold">Əlaqə Məlumatları</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Əhmədli metrosu</li>
              <li>Seyid Ə. Şirvani 23/19</li>
              <li>Bakı, Azərbaycan</li>
              <li className="pt-2">Bazar ertəsi: Bağlı</li>
              <li>Çərşənbə axşamı - Bazar: 11:00 - 21:00</li>
              <li>Tel: +994 55 423 90 94</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2026 Legendary Barbers Club. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
