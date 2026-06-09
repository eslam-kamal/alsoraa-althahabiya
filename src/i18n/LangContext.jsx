import { createContext, useContext, useState } from 'react'
import en from './en'
import ar from './ar'

const translations = { en, ar }

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')

  const switchLang = (l) => {
    setLang(l)
    localStorage.setItem('lang', l)
    document.documentElement.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', l)
  }

  // Apply on mount
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', lang)
  }

  const t = translations[lang]

  return (
    <LangContext.Provider value={{ lang, switchLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
