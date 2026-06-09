import { useState } from 'react'
import PageHero from '../components/PageHero'
import { useLang } from '../i18n/LangContext'

export default function Careers() {
  const { t } = useLang()
  const [form, setForm] = useState({
    firstName: '', lastName: '', whatsapp: '', phone: '', email: '',
    age: '', jobTitle: '', experience: '', cv: null, consent: false,
  })
  const [sent, setSent] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div>
        <PageHero title={t.careersTitle} />
        <div className="py-24 text-center">
          <div className="text-5xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-navy mb-2">{t.appSuccess}</h2>
          <p className="text-gray-500">{t.appSuccessDesc}</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <PageHero title={t.careersTitle} subtitle={t.careersSub} />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <p className="text-gray-600 text-center mb-10">
            {t.careersIntro}
          </p>
          <form onSubmit={submit} className="bg-[#f8f8f8] rounded-2xl p-8 space-y-4 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-navy mb-1">{t.firstNameLabel}</label>
                <input required value={form.firstName} onChange={e => set('firstName', e.target.value)}
                  placeholder="First name"
                  className="w-full border bg-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy mb-1">{t.lastNameLabel}</label>
                <input required value={form.lastName} onChange={e => set('lastName', e.target.value)}
                  placeholder="Last name"
                  className="w-full border bg-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy mb-1">{t.whatsappLabel}</label>
              <input required type="tel" value={form.whatsapp} onChange={e => set('whatsapp', e.target.value)}
                placeholder="+964 xxx xxx xxxx"
                className="w-full border bg-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-navy mb-1">{t.phoneLabel}</label>
                <input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)}
                  placeholder="Phone number"
                  className="w-full border bg-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy mb-1">{t.emailLabel}</label>
                <input type="email" value={form.email} onChange={e => set('email', e.target.value)}
                  placeholder="Email address"
                  className="w-full border bg-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-navy mb-1">{t.ageLabel}</label>
                <input type="number" min="18" max="65" value={form.age} onChange={e => set('age', e.target.value)}
                  placeholder="Your age"
                  className="w-full border bg-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy mb-1">{t.expLabel}</label>
                <input type="number" min="0" value={form.experience} onChange={e => set('experience', e.target.value)}
                  placeholder="e.g. 3"
                  className="w-full border bg-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy mb-1">{t.jobTitleLabel}</label>
              <input value={form.jobTitle} onChange={e => set('jobTitle', e.target.value)}
                placeholder="Desired position"
                className="w-full border bg-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy mb-1">{t.cvLabel}</label>
              <input required type="file" accept=".pdf,.doc,.docx"
                onChange={e => set('cv', e.target.files[0])}
                className="w-full border bg-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
            </div>
            <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
              <input type="checkbox" required checked={form.consent}
                onChange={e => set('consent', e.target.checked)} className="mt-0.5" />
              {t.consentLabel}
            </label>
            <button type="submit"
              className="w-full gold-gradient text-white py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
              {t.sendApp}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
