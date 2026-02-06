import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <Router basename="/sananbarber">
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/randevu" element={<BookingPage />} />
          <Route path="/randevu/:serviceId" element={<BookingPage />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
