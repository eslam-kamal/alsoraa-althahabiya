import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Phone, MessageCircle, MapPin, Share2, ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { cars, fallbackCarImage } from '../data/cars'
import { useLang } from '../i18n/LangContext'

const specKeysEn = [
  ['make','Make'],['model','Model'],['year','Year'],['drive','Drive Type'],
  ['transmission','Transmission'],['condition','Condition'],['mileage','Mileage'],
  ['fuel','Fuel Type'],['engine','Engine Size'],['doors','Doors'],
  ['cylinders','Cylinders'],['color','Color'],
]
const specKeysAr = [
  ['make','الماركة'],['model','الموديل'],['year','السنة'],['drive','نوع الدفع'],
  ['transmission','ناقل الحركة'],['condition','الحالة'],['mileage','المسافة المقطوعة'],
  ['fuel','نوع الوقود'],['engine','حجم المحرك'],['doors','الأبواب'],
  ['cylinders','الاسطوانات'],['color','اللون'],
]

function Gallery({ images, hero }) {
  const all = [hero, ...images].filter(Boolean)
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => (i - 1 + all.length) % all.length)
  const next = () => setIdx(i => (i + 1) % all.length)

  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden bg-gray-100 mb-3 group">
        <img src={all[idx]} alt="Car" decoding="async" className="w-full h-80 md:h-[480px] object-cover"
          onError={e => { e.target.src = fallbackCarImage }} />
        {all.length > 1 && (
          <>
            <button onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight size={20} />
            </button>
          </>
        )}
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {idx + 1} / {all.length}
        </div>
      </div>
      {all.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {all.map((img, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${i === idx ? 'border-gold' : 'border-transparent'}`}>
              <img src={img} alt="" loading="lazy" decoding="async" className="w-20 h-14 object-cover"
                onError={e => { e.target.src = fallbackCarImage }} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function CarDetail() {
  const { slug } = useParams()
  const { t, lang } = useLang()
  const car = cars.find(c => c.slug === slug)

  if (!car) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <p className="text-4xl mb-4">🚗</p>
        <h2 className="text-2xl font-bold text-navy mb-2">{t.notFound}</h2>
        <Link to="/vehicles" className="text-gold hover:underline">{t.backToListings}</Link>
      </div>
    )
  }

  const waMsg = encodeURIComponent(`Hi, I'm interested in the ${car.title} (${car.year}). Please provide more details.`)
  const shareUrl = window.location.href
  const specKeys = lang === 'ar' ? specKeysAr : specKeysEn

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-navy text-gray-300 text-xs py-3">
        <div className={`container mx-auto px-4 flex items-center gap-2 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
          <Link to="/" className="hover:text-gold">{t.home}</Link>
          <span>/</span>
          <Link to="/vehicles" className="hover:text-gold">{t.vehicles}</Link>
          <span>/</span>
          <span className="text-white truncate max-w-[200px]">{car.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
          {/* Left */}
          <div className="lg:col-span-2 space-y-6">
            <Gallery images={car.gallery} hero={car.hero} />

            {/* Title */}
            <div className={`bg-white rounded-2xl p-6 shadow-sm ${lang === 'ar' ? 'text-right' : ''}`}>
              <div className={`flex items-center gap-2 mb-2 flex-wrap ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${car.condition === 'New' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                  {car.condition === 'New' ? t.conditionNew : t.conditionUsed}
                </span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{car.year}</span>
                {car.location.map(l => (
                  <span key={l} className={`text-xs bg-navy/10 text-navy px-3 py-1 rounded-full flex items-center gap-1 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <MapPin size={10} /> {l}
                  </span>
                ))}
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-navy mb-1">{car.title}</h1>
              <div className="text-2xl font-bold text-gold mt-3">{t.contactForPriceLong}</div>
            </div>

            {/* Description */}
            {car.description && (
              <div className={`bg-white rounded-2xl p-6 shadow-sm ${lang === 'ar' ? 'text-right' : ''}`}>
                <h2 className="font-bold text-navy text-lg mb-3">{t.description}</h2>
                <p className="text-gray-600 leading-relaxed text-sm">{car.description}</p>
              </div>
            )}

            {/* Specs */}
            <div className={`bg-white rounded-2xl p-6 shadow-sm ${lang === 'ar' ? 'text-right' : ''}`}>
              <h2 className="font-bold text-navy text-lg mb-4">{t.specifications}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {specKeys.map(([key, label]) => {
                  const val = car[key]
                  if (!val && val !== 0) return null
                  return (
                    <div key={key} className="bg-[#f8f8f8] rounded-xl p-3">
                      <p className="text-xs text-gray-500 mb-1">{label}</p>
                      <p className="font-semibold text-navy text-sm">
                        {key === 'mileage' ? `${Number(val).toLocaleString()} km` : val}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Features */}
            {car.features?.length > 0 && (
              <div className={`bg-white rounded-2xl p-6 shadow-sm ${lang === 'ar' ? 'text-right' : ''}`}>
                <h2 className="font-bold text-navy text-lg mb-4">{t.features}</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {car.features.map(f => (
                    <li key={f} className={`flex items-center gap-2 text-sm text-gray-700 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <Check size={14} className="text-gold flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Safety */}
            {car.safety?.length > 0 && (
              <div className={`bg-white rounded-2xl p-6 shadow-sm ${lang === 'ar' ? 'text-right' : ''}`}>
                <h2 className="font-bold text-navy text-lg mb-4">{t.safety}</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {car.safety.map(s => (
                    <li key={s} className={`flex items-center gap-2 text-sm text-gray-700 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <Check size={14} className="text-green-600 flex-shrink-0" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Share */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="font-bold text-navy text-sm mb-3 flex items-center gap-2"><Share2 size={16} /> {t.share}</h2>
              <div className="flex gap-3 flex-wrap">
                {[
                  { label: 'Facebook', color: 'bg-blue-600', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
                  { label: 'Twitter', color: 'bg-sky-500', href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(car.title)}` },
                  { label: 'WhatsApp', color: 'bg-green-500', href: `https://api.whatsapp.com/send?text=${encodeURIComponent(car.title + ' ' + shareUrl)}` },
                  { label: 'LinkedIn', color: 'bg-blue-700', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
                  { label: 'Telegram', color: 'bg-sky-600', href: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(car.title)}` },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className={`${s.color} text-white text-xs px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity`}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right CTA */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-28">
              <p className="text-2xl font-extrabold text-gold mb-1">{t.contactForPriceLong}</p>
              <p className="text-gray-400 text-xs mb-5">{t.priceOnRequest}</p>

              <div className="space-y-3">
                <a href={`https://api.whatsapp.com/send/?phone=96407833000038&text=${waMsg}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold text-sm transition-colors">
                  <MessageCircle size={18} /> {t.requestCarPrice}
                </a>

                <a href="tel:+9647822000028"
                  className="flex items-center justify-center gap-2 w-full border-2 border-navy text-navy hover:bg-navy hover:text-white py-3 rounded-xl font-semibold text-sm transition-colors">
                  <Phone size={16} /> +964 782 200 0028
                </a>
              </div>

              <div className={`mt-6 pt-5 border-t space-y-2 text-sm ${lang === 'ar' ? 'text-right' : ''}`}>
                {[['make', lang === 'ar' ? 'الماركة' : 'Make'], ['model', lang === 'ar' ? 'الموديل' : 'Model'], ['year', lang === 'ar' ? 'السنة' : 'Year'], ['condition', lang === 'ar' ? 'الحالة' : 'Condition']].map(([key, label]) => (
                  <div key={key} className={`flex items-center gap-2 text-gray-600 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <span className="font-semibold text-navy w-28">{label}:</span> {car[key]}
                  </div>
                ))}
              </div>
            </div>

            <Link to="/vehicles" className={`flex items-center gap-1 text-sm text-gray-500 hover:text-gold transition-colors px-2 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
              <ChevronLeft size={16} /> {t.backToListings}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
