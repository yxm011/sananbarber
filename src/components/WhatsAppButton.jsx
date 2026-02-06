import React from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const phoneNumber = '994554239094'
  const message = 'Salam! Randevu almaq istəyirəm.'

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center group"
      aria-label="WhatsApp ilə əlaqə"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 bg-green-500 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-semibold">
        WhatsApp ilə yaz
      </span>
    </button>
  )
}

export default WhatsAppButton
