import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Scissors } from 'lucide-react'

const Navigation = ({ onBookAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const goToHome = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={goToHome} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Scissors className="w-8 h-8 text-gold" />
            <span className="text-xl font-heading font-bold text-gold">LEGENDARY BARBERS CLUB</span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-gold transition-colors">
              ANA SƏHİFƏ
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-gold transition-colors">
              HAQQIMIZDA
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-gold transition-colors">
              XİDMƏTLƏR
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-gold transition-colors">
              ƏLAQƏ
            </button>
          </div>

          <div className="hidden md:block">
            <button 
              onClick={onBookAppointment}
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-6 py-3 rounded transition-colors"
            >
              RANDEVU AL
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm pb-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-gold transition-colors text-left px-4">
                ANA SƏHİFƏ
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-gold transition-colors text-left px-4">
                HAQQIMIZDA
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-gold transition-colors text-left px-4">
                XİDMƏTLƏR
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-gold transition-colors text-left px-4">
                ƏLAQƏ
              </button>
              <button 
                onClick={onBookAppointment}
                className="bg-gold hover:bg-gold-dark text-black font-semibold px-6 py-3 rounded transition-colors mx-4"
              >
                RANDEVU AL
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
