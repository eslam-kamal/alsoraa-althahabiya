import PageHero from '../components/PageHero'
import { cars, fallbackCarImage } from '../data/cars'
import { useLang } from '../i18n/LangContext'

const carImage = slug => cars.find(car => car.slug === slug)?.hero || fallbackCarImage
const tahoeImage = carImage('chevrolet-tahoe-premier-awd-5-3l-v8-2026')
const escaladeImage = carImage('cadillac-escalade-sport-platinum-2025')
const jacImage = carImage('jac-n90-2025')

const articles = {
  en: [
    {
      id: 1,
      title: 'Golden Speed Motors Welcomes the 2026 Chevrolet Tahoe Premier AWD',
      date: 'February 2026',
      excerpt: 'The 2026 Chevrolet Tahoe Premier AWD has arrived at our Baghdad and Erbil showrooms, bringing full-size SUV capability together with refined comfort.',
      img: tahoeImage,
    },
    {
      id: 2,
      title: 'Cadillac Escalade Sport Platinum 2025 Arrives in Iraq',
      date: 'July 2025',
      excerpt: 'Golden Speed Motors now offers the Cadillac Escalade Sport Platinum 2025, complete with a 38-inch curved OLED display and a 19-speaker AKG sound system.',
      img: escaladeImage,
    },
    {
      id: 3,
      title: 'Dongfeng Presence Grows Across Iraq and Jordan',
      date: 'January 2022',
      excerpt: 'Golden Speed Group is expanding Dongfeng sales in Iraq and Jordan, giving more customers access to quality vehicles at competitive prices.',
      img: jacImage,
    },
  ],
  ar: [
    {
      id: 1,
      title: 'السرعة الذهبية تستقبل شيفروليه تاهو بريمير AWD موديل 2026',
      date: 'فبراير 2026',
      excerpt: 'وصلت شيفروليه تاهو بريمير AWD موديل 2026 إلى معارضنا في بغداد وأربيل، لتجمع بين قوة سيارات الدفع الرباعي الكبيرة والراحة الراقية.',
      img: tahoeImage,
    },
    {
      id: 2,
      title: 'كاديلاك إسكاليد سبورت بلاتينوم 2025 تصل إلى العراق',
      date: 'يوليو 2025',
      excerpt: 'أصبحت كاديلاك إسكاليد سبورت بلاتينوم 2025 متوفرة لدى السرعة الذهبية للسيارات، مع شاشة OLED منحنية قياس 38 بوصة ونظام صوت AKG من 19 مكبرا.',
      img: escaladeImage,
    },
    {
      id: 3,
      title: 'حضور دونغفنغ يتوسع في العراق والأردن',
      date: 'يناير 2022',
      excerpt: 'تعمل مجموعة السرعة الذهبية على توسيع مبيعات دونغفنغ في العراق والأردن، لتمنح المزيد من العملاء خيارات سيارات عالية الجودة بأسعار منافسة.',
      img: jacImage,
    },
  ],
}

export default function News() {
  const { t, lang } = useLang()
  const list = articles[lang] || articles.en

  return (
    <div>
      <PageHero title={t.newsTitle} subtitle={t.newsSub} />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map(a => (
              <article key={a.id} className={`bg-[#f8f8f8] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group ${lang === 'ar' ? 'text-right' : ''}`}>
                <div className="overflow-hidden">
                  <img src={a.img} alt={a.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={e => { e.target.src = fallbackCarImage }} />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gold font-semibold mb-2">{a.date}</p>
                  <h3 className="font-bold text-navy text-base mb-2 leading-tight">{a.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{a.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
