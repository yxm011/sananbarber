import React from 'react'
import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-cream text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            BİZİMLƏ ƏLAQƏ
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Bakının mərkəzində yerləşirik. Randevu üçün bizimlə əlaqə saxlayın
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Ünvan</h3>
                  <p className="text-gray-700">
                    Əhmədli metrosu<br />
                    Seyid Ə. Şirvani 23/19<br />
                    Bakı, Azərbaycan
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">İş Saatları</h3>
                  <p className="text-gray-700">
                    Bazar ertəsi: Bağlı<br />
                    Çərşənbə axşamı - Bazar: 11:00 - 21:00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Əlaqə</h3>
                  <p className="text-gray-700">
                    Telefon: <a href="tel:+994554239094" className="hover:text-gold transition-colors">+994 55 423 90 94</a><br />
                    WhatsApp: <a href="https://wa.me/994554239094" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">+994 55 423 90 94</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <Instagram className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Sosial Media</h3>
                  <a 
                    href="https://instagram.com/sanan.barber" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-dark transition-colors"
                  >
                    @sanan.barber
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3039.1!2d49.961067!3d40.392222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzMyLjAiTiA0OcKwNTcnMzkuOCJF!5e0!3m2!1sen!2saz!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact
