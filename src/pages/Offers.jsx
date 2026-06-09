import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { cars, fallbackCarImage } from '../data/cars'
import { useLang } from '../i18n/LangContext'

export default function Offers() {
  const { t } = useLang()
  const featured = cars.filter(c => c.featured)

  return (
    <div>
      <PageHero title={t.offersTitle} subtitle={t.offersSub} />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {featured.length === 0 ? (
            <p className="text-center text-gray-400 py-24">{t.noOffers}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map(car => (
                <Link key={car.id} to={`/vehicles/${car.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="relative overflow-hidden">
                    <img src={car.hero} alt={car.title}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={e => { e.target.src = fallbackCarImage }} />
                    <div className="absolute top-3 left-3 gold-gradient text-white text-xs font-bold px-3 py-1 rounded-full">
                      {t.featuredOffer}
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-400 mb-1">{car.make} • {car.year}</p>
                    <h3 className="font-bold text-navy text-base mb-2 group-hover:text-gold transition-colors line-clamp-2">
                      {car.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-3">{car.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold font-bold text-sm">{t.contactForPrice}</span>
                      <span className="text-xs bg-navy text-white px-3 py-1 rounded-full">{t.viewDetails}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
