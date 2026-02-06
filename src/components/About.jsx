import React from 'react'
import { Award, Users, Clock } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-cream text-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop"
                alt="Barber at work"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              PEŞƏKAR TƏHSİL VƏ YÜKSƏK KEYFİYYƏT
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Legendary Barbers Club - Bakının mərkəzində yerləşən premium berbərxanadır. 
              Sahibi və baş berbər Sanan Əliyev Barber Akademiyasında peşəkar təhsil almış 
              sertifikatlı mütəxəssisdir. Hər bir müştəriyə fərdi yanaşma və yüksək səviyyəli 
              xidmət təqdim edir.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Akademiyada əldə etdiyi bilikləri praktikada tətbiq edərək, klassik və müasir 
              berbərlik texnikalarını mükəmməl şəkildə birləşdirir. Hər bir saç kəsimi, saqqal 
              düzümü və digər xidmətlərimiz beynəlxalq standartlara uyğun olaraq yerinə yetirilir.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-5xl font-heading font-bold text-gold mb-2">100%</div>
                <div className="text-sm uppercase tracking-wide text-gray-600">Müştəri Məmnuniyyəti</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-5xl font-heading font-bold text-gold mb-2">★★★★★</div>
                <div className="text-sm uppercase tracking-wide text-gray-600">Premium Xidmət</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow justify-center">
                <Award className="w-5 h-5 text-gold" />
                <span className="text-sm font-semibold">Sertifikatlı Mütəxəssis</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow justify-center">
                <Users className="w-5 h-5 text-gold" />
                <span className="text-sm font-semibold">Fərdi Yanaşma</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow justify-center">
                <Clock className="w-5 h-5 text-gold" />
                <span className="text-sm font-semibold">Rahat Saat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
