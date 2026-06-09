import PageHero from '../components/PageHero'
import { useLang } from '../i18n/LangContext'

const members = [
  { nameEn: 'Chairman', nameAr: 'رئيس مجلس الإدارة', photo: 'https://obaidigroup.com/wp-content/uploads/2021/12/laith-al-obaidi-259x300.png' },
  { nameEn: 'Chief Executive Officer & Board Member', nameAr: 'الرئيس التنفيذي وعضو مجلس الإدارة', photo: 'https://obaidigroup.com/wp-content/uploads/2021/12/Ali-alobaidi2-223x300.jpg' },
  { nameEn: 'Jordan General Manager & Board Member', nameAr: 'المدير العام للأردن وعضو مجلس الإدارة', photo: 'https://obaidigroup.com/wp-content/uploads/2021/12/3aada051-7ca2-470f-a7ec-8c456171fdf2-228x300.jpg' },
  { nameEn: 'Board Member', nameAr: 'عضو مجلس الإدارة', photo: 'https://obaidigroup.com/wp-content/uploads/2021/12/muhammad-al-obaidi-259x300.jpg' },
]

const statementEn = `Across the years, one of our greatest achievements has been the trust we have built with our clients. We continue to protect and strengthen those relationships through ethical commitments, professional methods, better quality, lower costs, and faster delivery.`

const statementAr = `على مر السنين، كان بناء الثقة مع عملائنا من أهم إنجازاتنا. ونواصل الحفاظ على هذه العلاقات وتقويتها من خلال الالتزام الأخلاقي والأساليب المهنية وتحسين الجودة وتقليل التكلفة وتسريع التسليم.`

export default function Board() {
  const { t, lang } = useLang()
  return (
    <div>
      <PageHero title={t.boardTitle} subtitle={t.boardSub} />

      {/* Quote */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className={`relative ${lang === 'ar' ? 'text-right' : ''}`}>
            <div className="text-[80px] leading-none text-gold/20 font-serif absolute -top-4 -left-2 select-none">"</div>
            <blockquote className="text-gray-700 text-base leading-relaxed italic pl-6 border-l-4 border-gold">
              {lang === 'ar' ? statementAr : statementEn}
            </blockquote>
            <p className="mt-4 text-navy font-bold text-sm pl-6">— {lang === 'ar' ? 'رئيس مجلس الإدارة' : 'Chairman'}</p>
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm mb-10 max-w-xl mx-auto">{t.boardIntro}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {members.map((m, i) => (
              <div key={i} className="text-center group">
                <div className="relative mx-auto w-32 h-32 mb-4">
                  <div className="absolute inset-0 rounded-2xl bg-gold/10 group-hover:bg-gold/20 transition-colors" />
                  <img src={m.photo} alt={lang === 'ar' ? m.nameAr : m.nameEn}
                    className="relative w-full h-full object-cover object-top rounded-2xl"
                    onError={e => { e.target.src = 'https://obaidigroup.com/wp-content/uploads/2021/12/laith-al-obaidi-259x300.png' }} />
                </div>
                <p className="text-xs font-bold text-gold uppercase tracking-wide">{lang === 'ar' ? m.nameAr : m.nameEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
