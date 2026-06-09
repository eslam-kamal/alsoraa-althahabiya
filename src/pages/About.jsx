import { useEffect, useRef, useState } from 'react'
import PageHero from '../components/PageHero'
import { useLang } from '../i18n/LangContext'

function CounterStat({ value, label }) {
  const [show, setShow] = useState(false)
  const ref = useRef()
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShow(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="text-4xl font-extrabold text-gold mb-1">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  )
}

export default function About() {
  const { t } = useLang()
  const stats = [
    { value: '55+', label: t.yearsLabel },
    { value: '200+', label: t.specialistsLabel },
    { value: '10,000+', label: t.carsSoldLabel },
    { value: '8', label: t.locLabel },
  ]
  return (
    <div>
      <PageHero title={t.aboutTitle} subtitle={t.aboutSub} />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">{t.ourStory}</p>
              <h2 className="text-3xl font-bold text-navy mb-6 leading-tight">{t.legacyTitle}</h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>{t.aboutP1}</p>
                <p>{t.aboutP2}</p>
                <p>{t.aboutP3}</p>
              </div>
              <blockquote className="mt-8 border-l-4 border-gold pl-5 text-navy font-semibold italic text-base">
                {t.ceoQuote}
              </blockquote>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gold/10 rounded-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80"
                  alt="About Golden Speed"
                  className="relative max-h-96 w-full object-cover rounded-2xl drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map(s => <CounterStat key={s.label} {...s} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
