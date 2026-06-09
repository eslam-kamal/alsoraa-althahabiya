import { Link } from 'react-router-dom'
import { MapPin, Gauge, Fuel, ArrowRight } from 'lucide-react'
import { useLang } from '../i18n/LangContext'
import { fallbackCarImage } from '../data/cars'

export default function CarCard({ car }) {
  const { t } = useLang()
  const coverImage = car.thumb || car.hero || car.gallery?.[0]

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold hover:shadow-xl transition-all group">
      {/* Image */}
      <Link to={`/vehicles/${car.slug}`} className="block relative overflow-hidden aspect-[16/9]">
        <img
          src={coverImage}
          alt={car.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={e => {
            e.currentTarget.onerror = null
            e.currentTarget.src = car.hero || car.gallery?.[0] || fallbackCarImage
          }}
        />
        {/* Condition badge */}
        <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${
          car.condition === 'New'
            ? 'bg-green-500 text-white'
            : 'bg-amber-500 text-white'
        }`}>
          {car.condition === 'New' ? t.conditionNew : t.conditionUsed}
        </span>
      </Link>

      {/* Body */}
      <div className="p-5">
        <p className="text-xs text-gray-400 mb-1">{car.make} - {car.year}</p>
        <Link to={`/vehicles/${car.slug}`}>
          <h3 className="font-bold text-navy text-sm leading-snug mb-4 hover:text-gold transition-colors line-clamp-2">
            {car.title}
          </h3>
        </Link>

        {/* Specs row */}
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-5 flex-wrap">
          <span className="flex items-center gap-1"><Fuel size={12} className="text-gold" />{car.fuel}</span>
          <span className="w-px h-3 bg-gray-200" />
          <span className="flex items-center gap-1"><Gauge size={12} className="text-gold" />{car.mileage.toLocaleString()} km</span>
          <span className="w-px h-3 bg-gray-200" />
          <span className="flex items-center gap-1"><MapPin size={12} className="text-gold" />{car.location[0]}</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-gold font-bold text-sm">{t.contactForPrice}</span>
          <Link to={`/vehicles/${car.slug}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-gold transition-colors">
            {t.requestPrice} <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  )
}
