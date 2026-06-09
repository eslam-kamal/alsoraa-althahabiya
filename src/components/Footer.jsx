import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useLang } from '../i18n/LangContext'

const socials = [
  { label: 'f', href: '#', title: 'Facebook' },
  { label: 'in', href: '#', title: 'Instagram' },
  { label: 'li', href: '#', title: 'LinkedIn' },
  { label: 'x', href: '#', title: 'Twitter / X' },
  { label: '▶', href: '#', title: 'YouTube' },
]

const branches = {
  en: ['Police Tunnel Showroom, Baghdad'],
  ar: ['معرض نفق الشرطة، بغداد'],
}

export default function Footer() {
  const { lang, t } = useLang()

  return (
    <footer className="bg-navy text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="Golden Speed Motors" className="h-20 object-contain mb-4" />
            <p className="text-sm leading-relaxed text-gray-400">{t.footerDesc}</p>
            <div className="flex items-center gap-3 mt-4">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" title={s.title}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors text-xs font-bold">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/about', key: 'about' },
                { to: '/contact', key: 'contact' },
                // { to: '/history', key: 'history' },
                { to: '/vehicles', key: 'vehicles' },
                { to: '/offers', key: 'offers' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold transition-colors">{t[l.key]}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.ourBranches}</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              {(branches[lang] || branches.en).map(b => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.contactUs}</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-500 text-xs uppercase">{lang === 'ar' ? 'بغداد' : 'Baghdad'}</p>
                <a href="tel:+9647822000028" className="hover:text-gold transition-colors">+964 782 200 0028</a>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</p>
                <a href="mailto:Contact@golden-speed.com" className="hover:text-gold transition-colors">
                  Contact@golden-speed.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <span>{t.copyright}</span>
          <Link to="/locations" className="hover:text-gold transition-colors mt-2 sm:mt-0">{t.locations}</Link>
        </div>
      </div>
    </footer>
  )
}
