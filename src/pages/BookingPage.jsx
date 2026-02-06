import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Clock, Scissors, Sparkles } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const BookingPage = () => {
  const navigate = useNavigate()
  const { serviceId } = useParams()
  const [selectedService, setSelectedService] = useState(null)
  const [calLoaded, setCalLoaded] = useState(false)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const [countdown, setCountdown] = useState(10)

  const services = [
    {
      id: 'sac-kesimi',
      name: 'Saç Kəsimi',
      nameAz: 'saç kəsimi',
      duration: '30 dəq',
      price: '10 AZN',
      calLink: 'sananaliyev/sac-kesimi',
      icon: Scissors,
      color: 'bg-gradient-to-br from-oxford to-oxford-dark'
    },
    {
      id: 'texniki-sac',
      name: 'Texniki Saç Kəsimi',
      nameAz: 'texniki saç kəsimi',
      duration: '30 dəq',
      price: '15 AZN',
      calLink: 'sananaliyev/texniki-sac-kesimi',
      icon: Scissors,
      color: 'bg-gradient-to-br from-oxford-light to-oxford'
    },
    {
      id: 'saqqal',
      name: 'Saqqal Kəsimi',
      nameAz: 'saqqal kəsimi',
      duration: '30 dəq',
      price: '5 AZN',
      calLink: 'sananaliyev/saqqal-kesimi',
      icon: Scissors,
      color: 'bg-gradient-to-br from-oxford to-oxford-dark'
    },
    {
      id: 'sac-yuma',
      name: 'Saç Yuma',
      nameAz: 'saç yuma',
      duration: '30 dəq',
      price: '5 AZN',
      calLink: 'sananaliyev/sac-yuma',
      icon: Sparkles,
      color: 'bg-gradient-to-br from-oxford-light to-oxford'
    },
    {
      id: 'lepucka',
      name: 'Lepucka',
      nameAz: 'lepucka',
      duration: '30 dəq',
      price: '5-7 AZN',
      calLink: 'sananaliyev/lepucka',
      icon: Sparkles,
      color: 'bg-gradient-to-br from-oxford to-oxford-dark'
    },
    {
      id: 'kenar-xetler',
      name: 'Kənar Xətlərin Təmizlənməsi',
      nameAz: 'kənar xətlərin təmizlənməsi',
      duration: '30 dəq',
      price: '5 AZN',
      calLink: 'sananaliyev/kenar-xetlerin-temizlenmesi',
      icon: Scissors,
      color: 'bg-gradient-to-br from-oxford-light to-oxford'
    }
  ]

  useEffect(() => {
    if (serviceId) {
      const service = services.find(s => s.id === serviceId)
      if (service) {
        setSelectedService(service)
      }
    } else {
      setSelectedService(null)
      setCalLoaded(false)
    }
  }, [serviceId])

  useEffect(() => {
    if (selectedService) {
      setCalLoaded(true)
      
      // Listen for Cal.com booking confirmation
      const handleCalMessage = (e) => {
        // Cal.com sends different event types, check for booking success
        if (e.data && e.origin === 'https://cal.eu') {
          if (e.data.type === 'cal:bookingSuccessful' || 
              e.data.type === 'booking:success' ||
              (e.data.event === 'booking' && e.data.status === 'success')) {
            setBookingConfirmed(true)
          }
        }
      }
      
      window.addEventListener('message', handleCalMessage)
      
      return () => {
        window.removeEventListener('message', handleCalMessage)
      }
    }
  }, [selectedService])

  // Countdown and redirect after booking confirmation
  useEffect(() => {
    if (bookingConfirmed && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      
      return () => clearTimeout(timer)
    } else if (bookingConfirmed && countdown === 0) {
      navigate('/')
    }
  }, [bookingConfirmed, countdown, navigate])

  const handleServiceSelect = (service) => {
    navigate(`/randevu/${service.id}`)
  }

  const handleBack = () => {
    navigate('/randevu')
  }

  const handleBookAppointment = () => {
    navigate('/randevu')
  }

  return (
    <>
      <Navigation onBookAppointment={handleBookAppointment} />
      <div className="min-h-screen bg-gradient-to-br from-oxford-dark via-oxford to-oxford-light pt-20">
        {/* Page Header */}
        <div className="relative bg-black/30 backdrop-blur-md border-b border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent"></div>
          <div className="container mx-auto px-4 py-8 relative z-10">
            <div className="flex items-center gap-4 mb-4">
              {selectedService && (
                <button 
                  onClick={handleBack}
                  className="text-white/80 hover:text-gold transition-all duration-300 hover:scale-110"
                >
                  <ArrowLeft className="w-7 h-7" />
                </button>
              )}
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                  {selectedService ? selectedService.name : 'Xidmət Seçin'}
                </h1>
                <div className="h-1 w-20 bg-gradient-to-r from-gold to-gold-dark rounded-full"></div>
              </div>
            </div>
            <p className="text-white/80 text-lg ml-11">
              {selectedService 
                ? 'Uyğun vaxt seçin və randevunuzu təsdiqləyin' 
                : 'Premium berbərlik xidmətlərindən birini seçin'}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
        {!selectedService ? (
          <div>
            {/* Premium Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Premium Xidmətlərimiz
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4"></div>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Peşəkar berbərlik xidmətləri ilə sizə ən yaxşı görünüşü təqdim edirik
              </p>
            </div>

            {/* Premium Service Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 cursor-pointer border border-white/10 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/20"
                  onClick={() => handleServiceSelect(service)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold/20 to-transparent rounded-bl-full"></div>
                  
                  {/* Service Icon Section */}
                  <div className={`${service.color} h-56 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <service.icon className="w-24 h-24 text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  {/* Service Details */}
                  <div className="p-6 relative">
                    <h4 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-gold transition-colors">
                      {service.name}
                    </h4>
                    <p className="text-sm text-white/60 italic mb-6">{service.nameAz}</p>
                    
                    {/* Info Row */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2 text-white/70">
                        <Clock className="w-5 h-5 text-gold" />
                        <span className="text-sm font-medium">{service.duration}</span>
                      </div>
                      <div className="text-3xl font-heading font-bold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                        {service.price}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-black font-bold py-4 rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-gold/50">
                      Randevu Al
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            {bookingConfirmed && (
              <div className="mb-6 bg-green-500 text-white p-6 rounded-2xl shadow-2xl text-center">
                <h3 className="text-2xl font-heading font-bold mb-2">✅ Randevu Təsdiqləndi!</h3>
                <p className="text-lg">Ana səhifəyə yönləndirilirsiniz... {countdown} saniyə</p>
              </div>
            )}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="p-6 bg-gradient-to-r from-oxford/50 to-oxford-light/50 border-b border-white/10">
                <div className="flex items-center gap-3 text-white">
                  <span className="text-2xl font-heading font-bold">{selectedService.name}</span>
                  <span className="text-white/50">•</span>
                  <span className="text-gold font-semibold">{selectedService.price}</span>
                  <span className="text-white/50">•</span>
                  <span className="text-white/70">{selectedService.duration}</span>
                </div>
              </div>
              <div className="bg-white">
                <iframe
                  src={`https://cal.eu/${selectedService.calLink}?embed=true&theme=light&locale=az`}
                  width="100%"
                  height="700px"
                  frameBorder="0"
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BookingPage
