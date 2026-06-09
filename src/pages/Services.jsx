import { useState } from 'react'
import PageHero from '../components/PageHero'
import { useLang } from '../i18n/LangContext'

const days = Array.from({ length: 31 }, (_, i) => i + 1)
const monthsEn = ['January','February','March','April','May','June','July','August','September','October','November','December']
const monthsAr = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']
const years = [2025, 2026, 2027]
const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))
const mins = ['00', '15', '30', '45']

export default function Services() {
  const { t, lang } = useLang()
  const [form, setForm] = useState({ day: '', month: '', year: '', hour: '', min: '', ampm: 'AM', branch: '' })
  const [sent, setSent] = useState(false)
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const months = lang === 'ar' ? monthsAr : monthsEn

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>
      <PageHero title={t.servicesTitle} subtitle={t.servicesSub} />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <img src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&auto=format&fit=crop&q=80"
                alt="Car Service" className="w-full rounded-2xl shadow-lg object-cover h-72" />
              <p className={`text-gray-600 mt-6 leading-relaxed ${lang === 'ar' ? 'text-right' : ''}`}>{t.servicesDesc}</p>
            </div>

            <div className="bg-[#f8f8f8] rounded-2xl p-8">
              <h2 className={`text-2xl font-bold text-navy mb-6 ${lang === 'ar' ? 'text-right' : ''}`}>{t.bookTitle}</h2>
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-navy font-bold text-xl mb-2">{t.bookingSuccess}</h3>
                  <p className="text-gray-600 text-sm">{t.bookingSuccessDesc}</p>
                  <button onClick={() => setSent(false)}
                    className="mt-6 gold-gradient text-white px-6 py-2 rounded-full text-sm font-semibold">
                    {t.bookAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div>
                    <label className={`block text-sm font-semibold text-navy mb-2 ${lang === 'ar' ? 'text-right' : ''}`}>{t.dateLabel}</label>
                    <div className="grid grid-cols-3 gap-2">
                      <select required value={form.day} onChange={e => set('day', e.target.value)}
                        className="border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold">
                        <option value="">{t.dayPh}</option>
                        {days.map(d => <option key={d}>{d}</option>)}
                      </select>
                      <select required value={form.month} onChange={e => set('month', e.target.value)}
                        className="border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold">
                        <option value="">{t.monthPh}</option>
                        {months.map(m => <option key={m}>{m}</option>)}
                      </select>
                      <select required value={form.year} onChange={e => set('year', e.target.value)}
                        className="border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold">
                        <option value="">{t.yearPh}</option>
                        {years.map(y => <option key={y}>{y}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-semibold text-navy mb-2 ${lang === 'ar' ? 'text-right' : ''}`}>{t.timeLabel}</label>
                    <div className="grid grid-cols-3 gap-2">
                      <select required value={form.hour} onChange={e => set('hour', e.target.value)}
                        className="border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold">
                        <option value="">{t.hourPh}</option>
                        {hours.map(h => <option key={h}>{h}</option>)}
                      </select>
                      <select required value={form.min} onChange={e => set('min', e.target.value)}
                        className="border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold">
                        <option value="">{t.minPh}</option>
                        {mins.map(m => <option key={m}>{m}</option>)}
                      </select>
                      <select value={form.ampm} onChange={e => set('ampm', e.target.value)}
                        className="border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold">
                        <option>AM</option>
                        <option>PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-semibold text-navy mb-2 ${lang === 'ar' ? 'text-right' : ''}`}>{t.branchLabel}</label>
                    <select required value={form.branch} onChange={e => set('branch', e.target.value)}
                      className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold">
                      <option value="">{t.selectBranch}</option>
                      <option>{lang === 'ar' ? 'معرض نفق الشرطة، بغداد' : 'Police Tunnel Showroom, Baghdad'}</option>
                    </select>
                  </div>

                  <button type="submit"
                    className="w-full gold-gradient text-white py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
                    {t.bookBtn}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
