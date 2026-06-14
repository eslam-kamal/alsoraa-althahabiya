import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import logo from '../assets/logo.png'
import { useLang } from '../i18n/LangContext'

const vehicleBrands = [
  { label: 'All Brands', labelAr: 'جميع الماركات', to: '/vehicles' },
  { label: 'ROX', to: '/vehicles?make=Rox' },
  { label: 'Dongfeng', to: '/vehicles?make=Dongfeng' },
  { label: 'Forthing', to: '/vehicles?make=Forthing' },
  { label: 'Chevrolet', to: '/vehicles?make=Chevrolet' },
  { label: 'GMC', to: '/vehicles?make=GMC' },
  { label: 'Mercedes-Benz', to: '/vehicles?make=Mercedes-Benz' },
  { label: 'Cadillac', to: '/vehicles?make=Cadillac' },
  { label: 'Range Rover', to: '/vehicles?make=Range+Rover' },
  { label: 'JEEP', to: '/vehicles?make=Jeep' },
  { label: 'JAC', to: '/vehicles?make=JAC' },
  { label: 'Toyota', to: '/vehicles?make=Toyota' },
  { label: 'Hyundai', to: '/vehicles?make=Hyundai' },
  { label: 'KIA', to: '/vehicles?make=KIA' },
]

export default function Header() {
  const { lang, switchLang, t } = useLang()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdown, setDropdown] = useState(null)

  const navClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-gold ${isActive ? 'text-gold' : 'text-navy'}`

  return (
    <header className="sticky top-9 z-40 bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Golden Speed Motors" className="h-16 object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <NavLink to="/" end className={navClass}>{t.home}</NavLink>

            {/* Vehicles dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown('vehicles')}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-navy hover:text-gold transition-colors">
                {t.vehicles} <ChevronDown size={14} />
              </button>
              {dropdown === 'vehicles' && (
                <div className={`absolute top-full ${lang === 'ar' ? 'right-0' : 'left-0'} mt-1 bg-white rounded-xl shadow-xl border border-gray-100 p-4 min-w-[220px] grid grid-cols-2 gap-1 z-50`}>
                  {vehicleBrands.map(b => (
                    <Link key={b.label} to={b.to}
                      className="text-navy text-sm px-2 py-1.5 rounded hover:bg-gray-50 hover:text-gold transition-colors">
                      {lang === 'ar' && b.labelAr ? b.labelAr : b.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/offers" className={navClass}>{t.offers}</NavLink>
            <NavLink to="/services" className={navClass}>{t.services}</NavLink>
            <NavLink to="/about" className={navClass}>{t.about}</NavLink>
            <NavLink to="/contact" className={navClass}>{t.contact}</NavLink>
          </nav>

          {/* Right side: phone + lang switcher + mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3 text-xs text-gray-500">
              <a href="tel:+9647822000028" className="flex items-center gap-1 hover:text-gold transition-colors font-medium">
                <Phone size={12} className="text-gold" /> <span dir="ltr">+964 782 200 0028</span>
              </a>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center border border-gray-200 rounded-full overflow-hidden text-xs">
              <button
                onClick={() => switchLang('en')}
                className={`px-2.5 py-1 transition-colors ${lang === 'en' ? 'bg-gold text-white' : 'text-gray-500 hover:text-navy'}`}
              >
                EN
              </button>
              <button
                onClick={() => switchLang('ar')}
                className={`px-2.5 py-1 transition-colors ${lang === 'ar' ? 'bg-gold text-white' : 'text-gray-500 hover:text-navy'}`}
              >
                AR
              </button>
            </div>

            <button
              className="lg:hidden text-navy p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          {[
            { to: '/', label: t.home },
            { to: '/vehicles', label: t.vehicles },
            { to: '/offers', label: t.offers },
            { to: '/services', label: t.services },
            { to: '/about', label: t.about },
            { to: '/contact', label: t.contact },
            { to: '/locations', label: t.locations },
          ].map(item => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className="block text-navy hover:text-gold py-2 border-b border-gray-100 text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile lang switcher */}
          <div className="flex gap-2 pt-3">
            <button onClick={() => switchLang('en')}
              className={`px-3 py-1 rounded-full text-xs font-semibold ${lang === 'en' ? 'bg-gold text-white' : 'border border-gray-300 text-navy'}`}>
              English
            </button>
            <button onClick={() => switchLang('ar')}
              className={`px-3 py-1 rounded-full text-xs font-semibold ${lang === 'ar' ? 'bg-gold text-white' : 'border border-gray-300 text-navy'}`}>
              العربية
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
