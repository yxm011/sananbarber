import React from 'react'
import { Scissors, Sparkles, Package } from 'lucide-react'

import { useNavigate } from 'react-router-dom'

const Services = ({ onBookAppointment }) => {
  const navigate = useNavigate()
  
  const services = [
    {
      icon: Scissors,
      title: 'Saç Kəsimi',
      price: '10 AZN',
      description: 'Klassik və müasir saç kəsimi'
    },
    {
      icon: Scissors,
      title: 'Texniki Saç Kəsimi',
      price: '15 AZN',
      description: 'Peşəkar texniki saç kəsimi'
    },
    {
      icon: Scissors,
      title: 'Saqqal Kəsimi',
      price: '5 AZN',
      description: 'Saqqal düzümü və kəsimi'
    },
    {
      icon: Sparkles,
      title: 'Saç Yuma',
      price: '5 AZN',
      description: 'Peşəkar saç yuma xidməti'
    },
    {
      icon: Sparkles,
      title: 'Saç Boyama (Xına)',
      price: '7-10 AZN',
      description: 'Təbii xına ilə saç boyama'
    },
    {
      icon: Scissors,
      title: 'Kənar Xətlərin Təmizlənməsi',
      price: '5 AZN',
      description: 'Kənar xətlərin dəqiq təmizlənməsi'
    },
    {
      icon: Sparkles,
      title: 'Lepucka',
      price: '5-7 AZN',
      description: 'Üz maskası və qulluq'
    }
  ]

  const packages = [
    {
      id: 'paket-1',
      icon: Package,
      title: 'Paket 1',
      price: '20 AZN',
      services: ['Saç Kəsimi', 'Saqqal Kəsimi', 'Lepucka'],
      popular: false
    },
    {
      id: 'paket-2',
      icon: Package,
      title: 'Paket 2',
      price: '30 AZN',
      services: ['Saç Kəsimi', 'Saqqal Kəsimi', 'Lepucka', 'Saç Boyama (Xına)'],
      popular: true
    }
  ]

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            XİDMƏTLƏRİMİZ
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Peşəkar berbərlik xidmətləri ilə sizə ən yaxşı görünüşü təqdim edirik
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gold transition-all hover:transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-heading font-bold text-gold">{service.price}</div>
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-heading font-bold text-white text-center mb-8">
            PAKET XİDMƏTLƏR
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-gray-900 p-8 rounded-lg border-2 ${
                  pkg.popular ? 'border-gold' : 'border-gray-800'
                } hover:transform hover:scale-105 transition-all`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold text-black px-4 py-1 rounded-full text-sm font-semibold">
                      ƏN POPULYAR
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <pkg.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h4 className="text-2xl font-heading font-bold text-white mb-2">
                    {pkg.title}
                  </h4>
                  <div className="text-4xl font-heading font-bold text-gold">
                    {pkg.price}
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                      {service}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => navigate(`/randevu/${pkg.id}`)}
                  className={`w-full py-3 rounded font-semibold transition-all ${
                    pkg.popular 
                      ? 'bg-gold hover:bg-gold-dark text-black' 
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                >
                  RANDEVU AL
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
