import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import NewsletterPopup from './components/NewsletterPopup'

import Home from './pages/Home'
import About from './pages/About'
import History from './pages/History'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Vehicles from './pages/Vehicles'
import CarDetail from './pages/CarDetail'
import Offers from './pages/Offers'
import Locations from './pages/Locations'
import { useLang } from './i18n/LangContext'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout({ children }) {
  const { lang } = useLang()
  return (
    <div className={`flex flex-col min-h-screen ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      <TopBar />
      <div className="pt-9">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <NewsletterPopup />
      </div>
    </div>
  )
}

function AppRoutes() {
  const { t } = useLang()
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/history" element={<History />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicles/:slug" element={<CarDetail />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="*" element={
          <div className="min-h-[60vh] flex flex-col items-center justify-center">
            <p className="text-6xl mb-4">404</p>
            <h2 className="text-2xl font-bold text-navy mb-2">{t.pageNotFound || 'Page Not Found'}</h2>
            <a href="/" className="text-gold hover:underline">{t.goHome || 'Go Home'}</a>
          </div>
        } />
      </Routes>
    </Layout>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
