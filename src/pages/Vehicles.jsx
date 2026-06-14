import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import CarCard from '../components/CarCard'
import PageHero from '../components/PageHero'
import { cars, makes, vehicleTypes } from '../data/cars'
import { useLang } from '../i18n/LangContext'

const fuelTypes = ['Petrol', 'Gasoline', 'Diesel', 'Hybrid', 'Electric']
const driveTypes = ['AWD/4WD', '2WD', 'FWD', 'RWD']
const transmissions = ['Automatic', 'Manual']

function FilterSelect({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-navy mb-1">{label}</label>
      <select value={value} onChange={e => onChange(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold bg-white">
        <option value="">All</option>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  )
}

export default function Vehicles() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { t, lang } = useLang()

  const getParam = k => searchParams.get(k) || ''

  const filters = {
    condition: getParam('condition'),
    make: getParam('make'),
    type: getParam('type'),
    fuel: getParam('fuel'),
    drive: getParam('drive'),
    transmission: getParam('transmission'),
    sort: getParam('sort') || 'newest',
  }

  const setFilter = (k, v) => {
    const p = new URLSearchParams(searchParams)
    if (v) p.set(k, v)
    else p.delete(k)
    setSearchParams(p)
  }

  const clearAll = () => setSearchParams({})

  const filtered = useMemo(() => {
    let result = [...cars]
    if (filters.condition) result = result.filter(c => c.condition.toLowerCase() === filters.condition.toLowerCase())
    if (filters.make) result = result.filter(c => c.make.toLowerCase() === filters.make.toLowerCase())
    if (filters.type) result = result.filter(c => c.type.toLowerCase().includes(filters.type.toLowerCase()))
    if (filters.fuel) result = result.filter(c => c.fuel.toLowerCase() === filters.fuel.toLowerCase())
    if (filters.drive) result = result.filter(c => c.drive.toLowerCase() === filters.drive.toLowerCase())
    if (filters.transmission) result = result.filter(c => c.transmission.toLowerCase() === filters.transmission.toLowerCase())
    result.sort((a, b) => filters.sort === 'oldest' ? a.year - b.year : b.year - a.year)
    return result
  }, [filters])

  const activeCount = Object.entries(filters).filter(([k, v]) => v && k !== 'sort' && k !== 'location').length

  function Sidebar() {
    return (
      <aside className="space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-navy text-sm">
            {t.filters} {activeCount > 0 && <span className="text-gold">({activeCount})</span>}
          </h3>
          {activeCount > 0 && (
            <button onClick={clearAll} className="text-xs text-accent hover:underline flex items-center gap-1">
              <X size={12} /> {t.clearAll}
            </button>
          )}
        </div>
        <FilterSelect label={t.condition} value={filters.condition} onChange={v => setFilter('condition', v)} options={['New', 'Used']} />
        <FilterSelect label={t.make} value={filters.make} onChange={v => setFilter('make', v)} options={makes} />
        <FilterSelect label={t.bodyType} value={filters.type} onChange={v => setFilter('type', v)} options={vehicleTypes} />
        <FilterSelect label={t.fuelType} value={filters.fuel} onChange={v => setFilter('fuel', v)} options={fuelTypes} />
        <FilterSelect label={t.driveType} value={filters.drive} onChange={v => setFilter('drive', v)} options={driveTypes} />
        <FilterSelect label={t.transmission} value={filters.transmission} onChange={v => setFilter('transmission', v)} options={transmissions} />
      </aside>
    )
  }

  return (
    <div>
      <PageHero title={t.vehiclesTitle} subtitle={t.vehiclesSub} />

      <div className="container mx-auto px-4 py-10">
        <div className={`flex items-center justify-between mb-6 flex-wrap gap-3 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
          <p className="text-gray-500 text-sm">
            {t.showing} <span className="font-bold text-navy">{filtered.length}</span> {t.results}
          </p>
          <div className="flex items-center gap-3">
            <select value={filters.sort} onChange={e => setFilter('sort', e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold">
              <option value="newest">{t.newestFirst}</option>
              <option value="oldest">{t.oldestFirst}</option>
            </select>
            <button onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden flex items-center gap-2 border rounded-lg px-3 py-2 text-sm hover:border-gold transition-colors">
              <SlidersHorizontal size={16} /> {t.filters} {activeCount > 0 && `(${activeCount})`}
            </button>
          </div>
        </div>

        <div className={`flex gap-8 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-60 flex-shrink-0">
            <div className="bg-white rounded-2xl p-5 shadow-sm sticky top-28">
              <Sidebar />
            </div>
          </div>

          {/* Mobile Sidebar overlay */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-50 flex lg:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
              <div className={`relative ${lang === 'ar' ? 'mr-auto' : 'ml-auto'} w-72 bg-white h-full overflow-y-auto p-6 shadow-xl`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-navy">{t.filters}</h3>
                  <button onClick={() => setSidebarOpen(false)}><X size={20} /></button>
                </div>
                <Sidebar />
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-24 text-gray-400">
                <p className="text-4xl mb-4">🚗</p>
                <p className="font-semibold text-lg">{t.noVehicles}</p>
                <button onClick={clearAll} className="mt-4 text-gold hover:underline text-sm">{t.clearFilters}</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map(car => <CarCard key={car.id} car={car} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
