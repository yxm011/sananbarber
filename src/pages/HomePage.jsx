import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomePage = () => {
  const navigate = useNavigate()

  const handleBookAppointment = () => {
    navigate('/randevu')
  }

  return (
    <>
      <Navigation onBookAppointment={handleBookAppointment} />
      <Hero onBookAppointment={handleBookAppointment} />
      <About />
      <Services onBookAppointment={handleBookAppointment} />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage
