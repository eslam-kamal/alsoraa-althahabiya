import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ArrowRight, Shield, Car, DollarSign, Phone, MessageCircle } from 'lucide-react'
import CarCard from '../components/CarCard'
import { SedanIcon, CoupeIcon, SUVIcon, HatchbackIcon, ConvertibleIcon } from '../components/VehicleTypeIcons'
import { cars, fallbackCarImage, makes } from '../data/cars'
import { useLang } from '../i18n/LangContext'

// Car brand logos from car-logos.org (public CDN, reliable)
const brandLogos = [
  { brand: 'GMC',          logo: 'https://www.carlogos.org/car-logos/gmc-logo-2012.png' },
  { brand: 'Cadillac',     logo: 'https://www.carlogos.org/car-logos/cadillac-logo-2021.png' },
  { brand: 'Mercedes-Benz',logo: 'https://www.carlogos.org/car-logos/mercedes-benz-logo-2011.png' },
  { brand: 'Chevrolet',    logo: 'https://www.carlogos.org/car-logos/chevrolet-logo-2013.png' },
  { brand: 'Range Rover',  logo: 'https://www.carlogos.org/car-logos/land-rover-logo-2011.png' },
  { brand: 'Toyota',       logo: 'https://www.carlogos.org/car-logos/toyota-logo-2020.png' },
  { brand: 'KIA',          logo: 'https://www.carlogos.org/car-logos/kia-logo-2021.png' },
  { brand: 'Jeep',         logo: 'https://www.carlogos.org/car-logos/jeep-logo-2007.png' },
  { brand: 'Hyundai',      logo: 'https://www.carlogos.org/car-logos/hyundai-logo-2011.png' },
]

export default function Home() {
  const navigate = useNavigate()
  const { t, lang } = useLang()
  const [search, setSearch] = useState({ condition: '', make: '' })
  const [tab, setTab] = useState('New')

  const vehicleTypes = [
    { label: t.sedan,       Icon: SedanIcon,       type: 'sedan' },
    { label: t.coupe,       Icon: CoupeIcon,       type: 'coupe' },
    { label: t.suv,         Icon: SUVIcon,         type: 'suv' },
    { label: t.hatchback,   Icon: HatchbackIcon,   type: 'hatchback' },
    { label: t.convertible, Icon: ConvertibleIcon, type: 'convertible' },
  ]

  const whyCards = [
    { Icon: Shield,      title: t.afterSalesTitle, desc: t.afterSalesDesc },
    { Icon: Car,         title: t.wideRangeTitle,  desc: t.wideRangeDesc },
    { Icon: DollarSign,  title: t.affordableTitle, desc: t.affordableDesc },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (search.condition) params.set('condition', search.condition)
    if (search.make)      params.set('make',       search.make)
    navigate(`/vehicles?${params.toString()}`)
  }

  const featured = cars.filter(c => c.condition === tab).slice(0, 6)
  const heroImage = cars.find(c => c.slug === 'chevrolet-tahoe-premier-awd-5-3l-v8-2026')?.hero || fallbackCarImage

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy">
        {/* bg image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />

        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <span className="inline-block bg-gold/20 text-gold text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-gold/30">
              {t.heroTag}
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-6">
              {t.heroTitle}<br />
              <span className="text-gold">{t.heroTitleHighlight}</span>
            </h1>
            <p className="text-gray-300 text-lg mb-10 max-w-lg leading-relaxed">{t.heroSub}</p>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="bg-white rounded-2xl p-2 flex flex-wrap gap-2 shadow-2xl max-w-xl">
              <select value={search.condition} onChange={e => setSearch({ ...search, condition: e.target.value })}
                className="flex-1 min-w-[120px] px-3 py-2.5 text-navy text-sm rounded-xl focus:outline-none bg-gray-50 border border-transparent focus:border-gold">
                <option value="">{t.allConditions}</option>
                <option value="New">{t.conditionNew}</option>
                <option value="Used">{t.conditionUsed}</option>
              </select>
              <select value={search.make} onChange={e => setSearch({ ...search, make: e.target.value })}
                className="flex-1 min-w-[120px] px-3 py-2.5 text-navy text-sm rounded-xl focus:outline-none bg-gray-50 border border-transparent focus:border-gold">
                <option value="">{t.allMakes}</option>
                {makes.map(m => <option key={m}>{m}</option>)}
              </select>
              <button type="submit"
                className="gold-gradient text-white px-6 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap">
                <Search size={15} /> {t.search}
              </button>
            </form>

            {/* Quick contact */}
            <div className="flex items-center gap-4 mt-8">
              <a href="tel:+9647822000028"
                className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors text-sm">
                <Phone size={14} className="text-gold" /> +964 782 200 0028
              </a>
              <span className="text-white/20">|</span>
              <a href="https://api.whatsapp.com/send/?phone=96407822000028"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors text-sm">
                <MessageCircle size={14} className="text-gold" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BROWSE BY TYPE ───────────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{t.vehicles}</p>
            <h2 className="text-3xl font-bold text-navy">{t.browseByType}</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {vehicleTypes.map(({ label, Icon, type }) => (
              <Link key={type} to={`/vehicles?type=${type}`}
                className="group flex flex-col items-center gap-3 px-8 py-6 rounded-2xl border-2 border-gray-100 hover:border-gold hover:shadow-lg transition-all bg-white w-36">
                <Icon className="w-full h-10 text-navy group-hover:text-gold transition-colors" />
                <span className="text-sm font-semibold text-navy group-hover:text-gold transition-colors">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED LISTINGS ────────────────────────────── */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">{t.ourAdvantage}</p>
              <h2 className="text-3xl font-bold text-navy">{t.featuredListings}</h2>
            </div>
            <div className="flex items-center gap-1 bg-white rounded-xl p-1 shadow-sm border border-gray-100">
              {[{ key: 'New', label: t.conditionNew }, { key: 'Used', label: t.conditionUsed }].map(({ key, label }) => (
                <button key={key} onClick={() => setTab(key)}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    tab === key ? 'gold-gradient text-white shadow-sm' : 'text-gray-500 hover:text-navy'
                  }`}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.length > 0
              ? featured.map(car => <CarCard key={car.id} car={car} />)
              : <p className="col-span-3 text-center text-gray-400 py-16">{t.noVehicles}</p>}
          </div>

          <div className="text-center mt-10">
            <Link to="/vehicles"
              className="inline-flex items-center gap-2 border-2 border-navy text-navy px-8 py-3 rounded-full font-semibold text-sm hover:bg-navy hover:text-white transition-all">
              {t.viewAll} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── POPULAR MAKES ────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{t.ourPartners}</p>
            <h2 className="text-3xl font-bold text-navy">{t.popularMakes}</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {brandLogos.map(b => (
              <Link key={b.brand} to={`/vehicles?make=${encodeURIComponent(b.brand)}`}
                className="group bg-white border-2 border-gray-100 hover:border-gold rounded-2xl p-5 transition-all hover:shadow-md flex items-center justify-center w-36 h-20">
                <img
                  src={b.logo}
                  alt={b.brand}
                  className="max-h-10 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'block'
                  }}
                />
                <span className="hidden text-xs font-bold text-navy group-hover:text-gold transition-colors">{b.brand}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ───────────────────────────────────── */}
      <section className="py-16 bg-[#f8f8f8] border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">{t.about}</p>
          <p className="text-gray-600 leading-relaxed text-base">{t.introText}</p>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{t.ourAdvantage}</p>
            <h2 className="text-3xl font-bold text-white">{t.whyChooseUs}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyCards.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors text-center">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mx-auto mb-5">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="text-white font-bold text-base mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────── */}
      <section className="py-14 bg-gold">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-navy font-extrabold text-2xl mb-1">
              {lang === 'ar' ? 'هل حان وقت اختيار سيارتك القادمة؟' : 'Ready to choose your next car?'}
            </h3>
            <p className="text-navy/70 text-sm">
              {lang === 'ar' ? 'تحدث معنا اليوم في نفق الشرطة، بغداد' : 'Speak with us today at Police Tunnel, Baghdad'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+9647822000028"
              className="flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
              <Phone size={15} /> +964 782 200 0028
            </a>
            <a href="https://api.whatsapp.com/send/?phone=96407822000028"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-navy px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
