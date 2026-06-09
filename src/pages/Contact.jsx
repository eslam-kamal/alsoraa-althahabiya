import { useState } from 'react'
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react'
import PageHero from '../components/PageHero'
import { useLang } from '../i18n/LangContext'

export default function Contact() {
  const { t, lang } = useLang()
  const [form, setForm] = useState({ name: '', message: '', privacy: false })
  const [sent, setSent] = useState(false)

  const locationName = lang === 'ar' ? 'معرض نفق الشرطة، بغداد' : 'Police Tunnel Showroom, Baghdad'
  const locationAddress = lang === 'ar' ? 'نفق الشرطة، بغداد، العراق' : 'Police Tunnel, Baghdad, Iraq'

  const submit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:Contact@golden-speed.com?subject=Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}`
    setSent(true)
  }

  return (
    <div>
      <PageHero title={t.contactTitle} subtitle={t.contactSub} />

      {/* Primary contacts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a href="tel:07822000028"
              className="flex flex-col items-center gap-2 p-6 border-2 border-gray-100 rounded-xl hover:border-gold transition-colors group text-center">
              <Phone size={24} className="text-gold" />
              <span className="text-sm text-gray-500">{lang === 'ar' ? 'بغداد' : 'Baghdad'}</span>
              <span className="font-bold text-navy group-hover:text-gold transition-colors">07822000028</span>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=96407822000028"
              target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-6 border-2 border-gray-100 rounded-xl hover:border-gold transition-colors group text-center">
              <MessageCircle size={24} className="text-gold" />
              <span className="text-sm text-gray-500">WhatsApp</span>
              <span className="font-bold text-navy group-hover:text-gold transition-colors">07822000028</span>
            </a>
            <a href="mailto:Contact@golden-speed.com"
              className="flex flex-col items-center gap-2 p-6 border-2 border-gray-100 rounded-xl hover:border-gold transition-colors group text-center">
              <Mail size={24} className="text-gold" />
              <span className="text-sm text-gray-500">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</span>
              <span className="font-bold text-navy group-hover:text-gold transition-colors text-xs">Contact@golden-speed.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Showroom */}
      <section className="py-12 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className={`text-2xl font-bold text-navy text-center mb-8`}>{t.ourShowrooms}</h2>
          <div className={`bg-white rounded-2xl p-8 shadow-sm ${lang === 'ar' ? 'text-right' : ''}`}>
            <h3 className="font-bold text-navy text-xl mb-3">{locationName}</h3>
            <p className={`flex items-start gap-2 text-gray-500 text-sm mb-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
              <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" /> {locationAddress}
            </p>
            <a href="tel:07822000028"
              className={`flex items-center gap-2 text-sm hover:text-gold transition-colors mb-4 ${lang === 'ar' ? 'flex-row-reverse justify-end' : ''}`}>
              <Phone size={13} className="text-gold" />
              <span className="font-semibold text-navy">07822000028</span>
            </a>
            <a href="https://maps.google.com/?q=نفق+الشرطة+بغداد"
              target="_blank" rel="noopener noreferrer"
              className="inline-block gold-gradient text-white text-xs px-5 py-2 rounded-full hover:opacity-90 transition-opacity font-semibold">
              {t.getDirections}
            </a>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className={`text-2xl font-bold text-navy text-center mb-8`}>{t.sendMessage}</h2>
          {sent ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-navy font-bold text-xl">{t.messageSent}</h3>
              <p className="text-gray-500 text-sm mt-2">{t.messageSentDesc}</p>
            </div>
          ) : (
            <form onSubmit={submit} className="bg-[#f8f8f8] rounded-2xl p-8 shadow-sm space-y-4">
              <input required placeholder={t.namePh} value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className={`w-full border bg-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold ${lang === 'ar' ? 'text-right' : ''}`} />
              <textarea required placeholder={t.messagePh} rows={5} value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className={`w-full border bg-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none ${lang === 'ar' ? 'text-right' : ''}`} />
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" required checked={form.privacy}
                  onChange={e => setForm({ ...form, privacy: e.target.checked })} />
                {t.privacyLabel}
              </label>
              <button type="submit"
                className="w-full gold-gradient text-white py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
                {t.sendBtn}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
