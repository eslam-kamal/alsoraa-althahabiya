import { MapPin, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import { useLang } from '../i18n/LangContext'

export default function Locations() {
  const { t, lang } = useLang()

  const name = lang === 'ar' ? 'معرض نفق الشرطة، بغداد' : 'Police Tunnel Showroom, Baghdad'
  const address = lang === 'ar' ? 'نفق الشرطة، بغداد، العراق' : 'Police Tunnel, Baghdad, Iraq'

  return (
    <div>
      <PageHero title={t.locationsTitle} subtitle={t.locationsSub} />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Single location card */}
          <div className={`bg-[#f8f8f8] rounded-2xl p-8 mb-10 shadow-sm ${lang === 'ar' ? 'text-right' : ''}`}>
            <h3 className="font-bold text-navy text-2xl mb-3">{name}</h3>
            <p className={`flex items-start gap-2 text-gray-500 text-sm mb-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
              <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" /> {address}
            </p>
            <a href="tel:07822000028"
              className={`flex items-center gap-2 text-navy hover:text-gold transition-colors text-sm mb-5 ${lang === 'ar' ? 'flex-row-reverse justify-end' : ''}`}>
              <Phone size={14} className="text-gold" /> 07822000028
            </a>
            <a
              href="https://maps.google.com/?q=نفق+الشرطة+بغداد"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block gold-gradient text-white text-sm px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity font-semibold"
            >
              {t.getDirections}
            </a>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <iframe
              title="Golden Speed Motors — Police Tunnel Baghdad"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.8!2d44.3820!3d33.3060!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155784b0b6b6b6b6%3A0x0!2zTmFmYXEgYWwtU2hhcnRhLCBCYWdoZGFk!5e0!3m2!1sen!2siq!4v1"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
