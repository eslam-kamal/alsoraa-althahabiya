import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { useLang } from '../i18n/LangContext'

const DISMISSED_KEY = 'newsletter_popup_dismissed'

const countries = {
  en: ['Iraq','UAE','Jordan','Saudi Arabia','Kuwait','Qatar','Bahrain','Egypt','Other'],
  ar: ['العراق','الإمارات','الأردن','المملكة العربية السعودية','الكويت','قطر','البحرين','مصر','أخرى'],
}

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', country: '', branch: '', offers: false })
  const { lang, t } = useLang()

  useEffect(() => {
    if (sessionStorage.getItem(DISMISSED_KEY) === 'true') return

    const timer = setTimeout(() => {
      if (sessionStorage.getItem(DISMISSED_KEY) !== 'true') {
        setVisible(true)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const close = () => {
    sessionStorage.setItem(DISMISSED_KEY, 'true')
    setVisible(false)
  }

  const submit = (e) => {
    e.preventDefault()
    close()
  }

  if (!visible) return null

  const countryList = countries[lang] || countries.en

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-lg w-full flex flex-col sm:flex-row">
        <div className="sm:w-2/5 relative">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&auto=format&fit=crop&q=80"
            alt={t.nlTitle}
            className="w-full h-48 sm:h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/40" />
        </div>
        <div className="sm:w-3/5 p-6 relative">
          <button
            type="button"
            onClick={close}
            aria-label="Close newsletter popup"
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
          >
            <X size={18} />
          </button>
          <h3 className="text-navy font-bold text-lg mb-1">{t.nlTitle}</h3>
          <p className="text-gray-500 text-xs mb-4">{t.nlSub}</p>
          <form onSubmit={submit} className="space-y-2">
            <input required placeholder={t.nlNamePh} value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-gold" />
            <input type="email" required placeholder={t.nlEmailPh} value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-gold" />
            <input placeholder={t.nlPhonePh} value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-gold" />
            <select value={form.country} onChange={e => setForm({ ...form, country: e.target.value })}
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-gold text-gray-500">
              <option value="">{t.nlCountryPh}</option>
              {countryList.map(c => <option key={c}>{c}</option>)}
            </select>
            <select value={form.branch} onChange={e => setForm({ ...form, branch: e.target.value })}
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-gold text-gray-500">
              <option value="">{t.nlBranchPh}</option>
              <option>{lang === 'ar' ? 'معرض نفق الشرطة، بغداد' : 'Police Tunnel Showroom, Baghdad'}</option>
            </select>
            <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
              <input type="checkbox" checked={form.offers} onChange={e => setForm({ ...form, offers: e.target.checked })} />
              {t.nlOffersLabel}
            </label>
            <button type="submit"
              className="w-full gold-gradient text-white py-2 rounded font-semibold text-sm hover:opacity-90 transition-opacity">
              {t.nlBtn}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
