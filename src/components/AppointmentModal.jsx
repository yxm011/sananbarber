import React, { useEffect, useState } from 'react'
import { X, Clock, ArrowLeft, Scissors, Sparkles } from 'lucide-react'

const AppointmentModal = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState(null)
  const [calLoaded, setCalLoaded] = useState(false)

  const services = [
    {
      id: 'sac-kesimi',
      name: 'Saç Kəsimi',
      nameAz: 'saç kəsimi',
      duration: '30 dəq',
      price: '10 AZN',
      calLink: 'sananaliyev/30min',
      icon: Scissors,
      color: 'bg-gradient-to-br from-amber-700 to-amber-900'
    },
    {
      id: 'texniki-sac',
      name: 'Texniki Saç Kəsimi',
      nameAz: 'texniki saç kəsimi',
      duration: '30 dəq',
      price: '15 AZN',
      calLink: 'sananaliyev/texniki',
      icon: Scissors,
      color: 'bg-gradient-to-br from-amber-600 to-amber-800'
    },
    {
      id: 'saqqal',
      name: 'Saqqal Kəsimi',
      nameAz: 'saqqal kəsimi',
      duration: '30 dəq',
      price: '5 AZN',
      calLink: 'sananaliyev/5min',
      icon: Scissors,
      color: 'bg-gradient-to-br from-amber-700 to-amber-900'
    },
    {
      id: 'sac-yuma',
      name: 'Saç Yuma',
      nameAz: 'saç yuma',
      duration: '30 dəq',
      price: '5 AZN',
      calLink: 'sananaliyev/sac-yuma',
      icon: Sparkles,
      color: 'bg-gradient-to-br from-amber-600 to-amber-800'
    },
    {
      id: 'lepucka',
      name: 'Lepucka',
      nameAz: 'lepucka',
      duration: '30 dəq',
      price: '5-7 AZN',
      calLink: 'sananaliyev/lepucka',
      icon: Sparkles,
      color: 'bg-gradient-to-br from-amber-700 to-amber-900'
    },
    {
      id: 'kenar-xetler',
      name: 'Kənar Xətlərin Təmizlənməsi',
      nameAz: 'kənar xətlərin təmizlənməsi',
      duration: '30 dəq',
      price: '5 AZN',
      calLink: 'sananaliyev/kenar-xetlerin-temizlenmesi',
      icon: Scissors,
      color: 'bg-gradient-to-br from-amber-600 to-amber-800'
    }
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setSelectedService(null)
      setCalLoaded(false)
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    if (selectedService && !calLoaded) {
      const script = document.createElement('script')
      script.src = 'https://app.cal.com/embed/embed.js'
      script.async = true
      document.head.appendChild(script)

      script.onload = () => {
        if (window.Cal) {
          window.Cal('init', { origin: 'https://cal.com' })
          
          window.Cal('inline', {
            elementOrSelector: '#cal-booking-inline',
            calLink: selectedService.calLink,
            layout: 'month_view'
          })
          
          window.Cal('ui', {
            theme: 'light',
            styles: { branding: { brandColor: '#cd9a5b' } },
            hideEventTypeDetails: false,
            layout: 'month_view'
          })
          
          setCalLoaded(true)
        }
      }

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script)
        }
      }
    }
  }, [selectedService, calLoaded])

  const handleServiceSelect = (service) => {
    setSelectedService(service)
    setCalLoaded(false)
  }

  const handleBack = () => {
    setSelectedService(null)
    setCalLoaded(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            {selectedService && (
              <button 
                onClick={handleBack}
                className="text-gray-500 hover:text-black transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            )}
            <h2 className="text-2xl font-heading font-bold text-black">
              {selectedService ? selectedService.name : 'Xidmət Seçin'}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-black transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="overflow-y-auto" style={{ height: 'calc(90vh - 80px)' }}>
          {!selectedService ? (
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-heading font-bold text-black mb-2">Xidmətlərimiz</h3>
                <p className="text-gray-600">Premium berbərlik xidmətlərindən birini seçin</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <div 
                    key={service.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer border-2 border-gray-100 hover:border-gold"
                    onClick={() => handleServiceSelect(service)}
                  >
                    <div className={`${service.color} h-48 flex items-center justify-center`}>
                      <service.icon className="w-20 h-20 text-white" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-heading font-bold text-black mb-2">
                        {service.name}
                      </h4>
                      <p className="text-sm text-gray-600 italic mb-4">{service.nameAz}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{service.duration}</span>
                        </div>
                        <div className="text-2xl font-heading font-bold text-gold">
                          {service.price}
                        </div>
                      </div>
                      <button className="w-full bg-gold hover:bg-gold-dark text-black font-semibold py-3 rounded transition-colors">
                        Randevu Al
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div 
              id="cal-booking-inline" 
              style={{ width: '100%', height: '100%', overflow: 'scroll' }}
            ></div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AppointmentModal
