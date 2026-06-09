import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { useLang } from '../i18n/LangContext'

const WHATSAPP_NUMBER = '96407822000028'
const PHONE = '07822000028'

export default function TopBar() {
  const [open, setOpen] = useState(false)
  const { lang, t } = useLang()

  const branchName = lang === 'ar' ? 'معرض نفق الشرطة، بغداد' : 'Police Tunnel Showroom, Baghdad'

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-navy text-white text-xs">
      <div className="container mx-auto px-4 flex items-center justify-between h-9">
        <span className="text-gold font-semibold hidden sm:block">
          {lang === 'ar' ? 'السرعة الذهبية' : 'Golden Speed'}
        </span>

        <div className="flex items-center gap-3">
          <a href={`tel:${PHONE}`} className="hover:text-gold transition-colors hidden sm:block">
            {PHONE}
          </a>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 hover:bg-white/20 transition-colors whitespace-nowrap"
            >
              <MessageCircle size={12} className="text-gold" />
              <span>{lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</span>
            </button>

            {open && (
              <div className={`absolute top-full ${lang === 'ar' ? 'left-0' : 'right-0'} mt-1 bg-white text-navy rounded-xl shadow-xl p-4 min-w-[220px] z-50`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-sm text-navy">{branchName}</span>
                  <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-700"><X size={14} /></button>
                </div>
                <p className="text-gray-500 text-xs mb-3">+{WHATSAPP_NUMBER}</p>
                <a
                  href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-green-600 transition-colors w-full"
                >
                  <MessageCircle size={13} />
                  {t.messageWA}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
