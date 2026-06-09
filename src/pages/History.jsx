import PageHero from '../components/PageHero'
import { useLang } from '../i18n/LangContext'

const timelineEn = [
  { year: '1968', label: 'First Steps', desc: 'The family vehicle trading business began in Baghdad, Iraq.' },
  { year: '1997', label: 'Jordan', desc: 'The family expanded its automotive trading work into the Jordanian market.' },
  { year: '2003', label: 'UAE & Kuwait', desc: 'The business continued growing by relocating its headquarters to Dubai while also launching operations in Kuwait.' },
  { year: '2009', label: 'Europe', desc: 'European automotive market activity began with the opening of an office in Germany.' },
  { year: '2014', label: 'Erbil-Iraq', desc: 'A multi-franchise showroom was opened in Erbil to serve customers in Iraq.' },
  { year: '2015', label: 'Wider Expansion', desc: 'Representative offices were established in Poland, Hungary, Austria, and Saudi Arabia.' },
  { year: '2018', label: 'General Distributor', desc: 'In 2018, the group was appointed as the general distributor for the FCA brand in Iraq.' },
  { year: '2022', label: 'Dongfeng (DFM & DFSK)', desc: 'The group looked ahead to strengthening Dongfeng brand sales across the Iraqi and Jordanian markets.' },
]

const timelineAr = [
  { year: '1968', label: 'الخطوات الأولى', desc: 'بدأت تجارة السيارات العائلية من بغداد في العراق.' },
  { year: '1997', label: 'الأردن', desc: 'توسع نشاط تجارة السيارات العائلي إلى السوق الأردني.' },
  { year: '2003', label: 'الإمارات والكويت', desc: 'استمر النمو مع نقل المقر الرئيسي إلى دبي وبدء العمليات في الكويت في الوقت نفسه.' },
  { year: '2009', label: 'أوروبا', desc: 'بدأ النشاط في سوق السيارات الأوروبي من خلال افتتاح مكتب في ألمانيا.' },
  { year: '2014', label: 'أربيل - العراق', desc: 'تم افتتاح معرض متعدد الماركات في أربيل لخدمة العملاء في العراق.' },
  { year: '2015', label: 'توسع أوسع', desc: 'تم تأسيس مكاتب تمثيلية في بولندا والمجر والنمسا والمملكة العربية السعودية.' },
  { year: '2018', label: 'موزع عام', desc: 'في عام 2018، تم تعيين المجموعة كموزع عام لعلامة FCA في العراق.' },
  { year: '2022', label: 'دونغفنغ (DFM & DFSK)', desc: 'اتجهت المجموعة إلى تعزيز مبيعات علامة دونغفنغ في أسواق العراق والأردن.' },
]

export default function History() {
  const { t, lang } = useLang()
  const timeline = lang === 'ar' ? timelineAr : timelineEn

  return (
    <div>
      <PageHero title={t.historyTitle} subtitle={t.historySub} />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative">
            <div className={`absolute ${lang === 'ar' ? 'right-8' : 'left-8'} top-0 bottom-0 w-0.5 bg-gold/30`} />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex gap-6 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-16 flex items-start ${lang === 'ar' ? 'justify-start' : 'justify-end'}`}>
                    <div className="w-4 h-4 rounded-full bg-gold border-4 border-white shadow-md mt-1.5 relative z-10" />
                  </div>
                  <div className={`flex-1 pb-2 ${lang === 'ar' ? 'text-right' : ''}`}>
                    <div className="inline-block gold-gradient text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-navy font-bold text-lg mb-1">{item.label}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
