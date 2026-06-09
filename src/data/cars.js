// Unsplash images — global CDN, fast worldwide, resized via ?w= param
// Each photo ID is a specific car matching the model. Replace with real photos when available.
import cadillacCt5PremiumLuxury2024 from '../assets/Cadillac CT5 Premium Luxury2024.avif'
import cadillacEscaladeEsvSport2024 from '../assets/Cadillac Escalade ESV Sport2024.avif'
import cadillacEscaladeSportPlatinum from '../assets/Cadillac Escalade Sport Platinum.avif'
import cadillacXt6Sport2024 from '../assets/Cadillac XT6 Sport AWD2024.png'
import chevroletSilverado2024 from '../assets/Chevrolet Silverado 1500 LTZ 4WD2024.avif'
import chevroletTahoe2025 from '../assets/Chevrolet Tahoe Premier 4WD2025.jpg'
import chevroletTahoe2026 from '../assets/CHEVROLET TAHOE Premier AWD 5.3L V82026.webp'
import chevroletTrailblazer2024 from '../assets/Chevrolet Trailblazer RS2024.avif'
import chevroletTraverse2024 from '../assets/Chevrolet Traverse Premier AWD2024.avif'
import gmcSierraDenali2024 from '../assets/GMC Sierra 1500 Denali 4WD 2024.avif'
import gmcYukonElevation2025 from '../assets/GMC Yukon Elevation 2WD2025.avif'
import mercedesG350d2024 from '../assets/Mercedes-Benz G 350d AMG Line 2024.jpg'
import mercedesGlb2002024 from '../assets/Mercedes-Benz GLB 200 AMG2024.jpg'
import mercedesGle450Coupe2024 from '../assets/Mercedes-Benz GLE 450 4MATIC Coupe 2024.webp'
import mercedesS4502024 from '../assets/Mercedes-Benz S 450 4MATIC2024.avif'
import rangeRoverSportSvr2024 from '../assets/Range Rover Sport SVR2024.jpg'
import rangeRoverVelarD2402024 from '../assets/Range Rover Velar D2402024.avif'
import landRoverDefender1102024 from '../assets/Land Rover Defender 1102024.jpg'
import toyotaLandCruiser3002024 from '../assets/Toyota Land Cruiser 3002024.webp'

const IMG = {
  // Chevrolet Tahoe / full-size SUV (black SUV)
  tahoe2026:     chevroletTahoe2026,
  tahoe2026t:    chevroletTahoe2026,
  tahoe2025:     chevroletTahoe2025,
  // Chevrolet Silverado pickup
  silverado:     chevroletSilverado2024,
  // Chevrolet Trailblazer / compact crossover
  trailblazer:   chevroletTrailblazer2024,
  // Chevrolet Traverse / 3-row SUV
  traverse:      chevroletTraverse2024,

  // Cadillac Escalade — large luxury SUV
  escalade2025:  cadillacEscaladeSportPlatinum,
  escalade2025t: cadillacEscaladeSportPlatinum,
  escaladeEsv:   cadillacEscaladeEsvSport2024,
  // Cadillac XT6 — mid-size luxury SUV
  xt6:           cadillacXt6Sport2024,
  // Cadillac CT5 — luxury sedan
  ct5:           cadillacCt5PremiumLuxury2024,

  // GMC Yukon — full-size SUV
  yukon2025:     gmcYukonElevation2025,
  // GMC Sierra — pickup truck
  sierra:        gmcSierraDenali2024,
  // GMC Canyon — midsize pickup

  // Mercedes-Benz GLE Coupe
  gleCoupe:      mercedesGle450Coupe2024,
  // Mercedes-Benz G-Class
  gClass:        mercedesG350d2024,
  // Mercedes-Benz S-Class sedan
  sClass:        mercedesS4502024,
  // Mercedes-Benz GLB
  glb:           mercedesGlb2002024,

  // Range Rover Sport
  sport:         rangeRoverSportSvr2024,
  // Range Rover Velar
  velar:         rangeRoverVelarD2402024,
  // Land Rover Defender
  defender:      landRoverDefender1102024,

  // Toyota Land Cruiser
  landCruiser:   toyotaLandCruiser3002024,
  // Toyota Fortuner
  // Toyota Camry
  // Toyota RAV4

  // Hyundai Palisade
  // Hyundai Santa Fe
  // Hyundai Tucson

  // Kia Telluride
  // Kia Sportage
  // Kia Sorento

  // Jeep Gladiator pickup
  // Jeep Wrangler
  // Jeep Grand Cherokee

  // JAC trucks — commercial white truck
}

export const fallbackCarImage = IMG.tahoe2026

const uniqueImages = images => [...new Set(images.filter(Boolean))]

const carModelKey = car => `${car.make}|${car.model}`.toLowerCase()

const enrichGallery = (car, allCars) => {
  const current = car.gallery || []
  if (current.length >= 4) return current

  const sameModelImages = allCars
    .filter(other => other.id !== car.id && carModelKey(other) === carModelKey(car))
    .flatMap(other => [other.hero, other.thumb, ...(other.gallery || [])])

  return uniqueImages([
    ...current,
    ...sameModelImages,
  ]).filter(img => img !== car.hero && img !== car.thumb).slice(0, 6)
}

const selectThumbnail = car => car.hero || car.thumb || car.gallery?.[0] || IMG.tahoe2026

const rawCars = [
  // ── CHEVROLET ─────────────────────────────
  {
    id: 1,
    offerId: 28367,
    slug: 'chevrolet-tahoe-premier-awd-5-3l-v8-2026',
    title: 'CHEVROLET TAHOE Premier AWD 5.3L V8',
    make: 'Chevrolet',
    model: 'Tahoe Premier',
    year: 2026,
    condition: 'New',
    fuel: 'Petrol',
    drive: 'AWD/4WD',
    transmission: 'Automatic',
    engine: '5.3L',
    cylinders: 8,
    doors: 4,
    color: 'Black',
    mileage: 0,
    type: 'SUV',
    location: ['Baghdad'],
    featured: true,
    hero: IMG.tahoe2026,
    thumb: IMG.tahoe2026t,
    gallery: [],
    description: 'The 2026 Chevrolet Tahoe 4WD Premier is a full-size SUV built for strength, comfort, and confidence. Its four-wheel drive system supports dependable handling in different conditions, while the roomy cabin, premium materials, modern infotainment, and safety technologies make it a refined family choice.',
    features: ['Heated seats','Cooled seats','Navigation System','Wireless Apple CarPlay','Wireless Android Auto','Bose Sound System','Power Liftgate','Tri-Zone Climate Control','LED headlights'],
    safety: ['ABS','Traction Control','Stability Control','Forward Collision Alert','Lane Keep Assist','Rear Park Assist','Surround Vision'],
    contacts: { baghdad: '07833000038' },
  },
  {
    id: 2,
    slug: 'chevrolet-tahoe-premier-2025-4wd',
    title: 'Chevrolet Tahoe Premier 4WD',
    make: 'Chevrolet',
    model: 'Tahoe Premier',
    year: 2025,
    condition: 'New',
    fuel: 'Gasoline',
    drive: 'AWD/4WD',
    transmission: 'Automatic',
    engine: '5.3L',
    cylinders: 8,
    doors: 4,
    color: 'White',
    mileage: 0,
    type: 'SUV',
    location: ['Baghdad'],
    featured: true,
    hero: IMG.tahoe2025,
    thumb: IMG.tahoe2025,
    gallery: [],
    description: "The 2025 Chevrolet Tahoe Premier 4WD pairs strong capability with upscale comfort. Its 5.3L V8 engine and generous three-row cabin make it well suited for families, daily city driving, and weekend adventures.",
    features: ['360-degree camera','AUX','Bluetooth','Heated seats','Keyless start','Leather seats','LED headlights','Navigation System','Side airbags','Sound system','Traction Control'],
    safety: ['ABS','Side airbags','Traction Control','Lane Keep Assist'],
    contacts: { baghdad: '07833000038' },
  },
  {
    id: 3,
    slug: 'chevrolet-silverado-1500-ltz-2024',
    title: 'Chevrolet Silverado 1500 LTZ 4WD',
    make: 'Chevrolet',
    model: 'Silverado 1500',
    year: 2024,
    condition: 'New',
    fuel: 'Gasoline',
    drive: 'AWD/4WD',
    transmission: 'Automatic',
    engine: '5.3L',
    cylinders: 8,
    doors: 4,
    color: 'Summit White',
    mileage: 0,
    type: 'Pickup Truck',
    location: ['Baghdad'],
    featured: false,
    hero: IMG.silverado,
    thumb: IMG.silverado,
    gallery: [],
    description: 'The 2024 Chevrolet Silverado 1500 LTZ delivers serious towing strength with a comfortable, polished interior. It is designed for demanding hauling while still feeling easy to live with every day.',
    features: ['Heated and cooled seats','Navigation','Apple CarPlay','Bose Audio','Leather interior','Spray-in bedliner','Trailer brake controller','LED lighting'],
    safety: ['ABS','Traction Control','Forward Collision Alert','Lane Departure Warning','Rear Cross Traffic Alert'],
    contacts: { baghdad: '07833000038' },
  },
  {
    id: 4,
    slug: 'chevrolet-traverse-premier-2024',
    title: 'Chevrolet Traverse Premier AWD',
    make: 'Chevrolet',
    model: 'Traverse Premier',
    year: 2024,
    condition: 'New',
    fuel: 'Gasoline',
    drive: 'AWD/4WD',
    transmission: 'Automatic',
    engine: '3.6L',
    cylinders: 6,
    doors: 4,
    color: 'Midnight Blue',
    mileage: 0,
    type: 'SUV',
    location: ['Baghdad'],
    featured: false,
    hero: IMG.traverse,
    thumb: IMG.traverse,
    gallery: [],
    description: 'The 2024 Chevrolet Traverse Premier is a three-row family SUV with plenty of cargo room, smooth V6 performance, and advanced safety features.',
    features: ['Panoramic sunroof','Heated seats','Apple CarPlay','Android Auto','Bose Audio','Navigation','Power liftgate'],
    safety: ['ABS','Traction Control','Lane Keep Assist','Forward Collision Alert','Rear Park Assist'],
    contacts: { baghdad: '07833000038' },
  },
  {
    id: 5,
    slug: 'chevrolet-trailblazer-rs-2024',
    title: 'Chevrolet Trailblazer RS',
    make: 'Chevrolet',
    model: 'Trailblazer RS',
    year: 2024,
    condition: 'New',
    fuel: 'Gasoline',
    drive: 'AWD/4WD',
    transmission: 'Automatic',
    engine: '1.3L Turbo',
    cylinders: 3,
    doors: 4,
    color: 'Cayenne Orange',
    mileage: 0,
    type: 'SUV',
    location: ['Baghdad'],
    featured: false,
    hero: IMG.trailblazer,
    thumb: IMG.trailblazer,
    gallery: [],
    description: 'The 2024 Chevrolet Trailblazer RS brings sporty styling and turbocharged power to a compact crossover. It is practical for city use while still offering added confidence beyond paved roads.',
    features: ['Apple CarPlay','Android Auto','Wireless charging','LED lighting','Heated seats','Sport suspension'],
    safety: ['ABS','Stability Control','Traction Control','Rear Park Assist'],
    contacts: { baghdad: '07833000038' },
  },

  // ── CADILLAC ──────────────────────────────
  {
    id: 6,
    offerId: 28323,
    slug: 'cadillac-escalade-sport-platinum-2025',
    title: 'Cadillac Escalade Sport Platinum',
    make: 'Cadillac',
    model: 'Escalade Sport',
    year: 2025,
    condition: 'New',
    fuel: 'Gasoline',
    drive: 'AWD/4WD',
    transmission: 'Automatic',
    engine: '6.2L',
    cylinders: 8,
    doors: 4,
    color: 'Black Raven',
    mileage: 0,
    type: 'SUV',
    location: ['Baghdad'],
    featured: true,
    hero: IMG.escalade2025,
    thumb: IMG.escalade2025t,
    gallery: [],
    description: 'The 2025 Cadillac Escalade Sport Platinum comes with a 6.2L V8 producing 420 horsepower and 460 Nm of torque. It also includes a 38-inch curved OLED display, 19-speaker AKG premium audio, heated and ventilated seats, panoramic sunroof, wireless charging, Apple CarPlay, Android Auto, and a high-resolution surround-view camera.',
    features: ['Adaptive cruise control','AKG premium speakers','Wireless Apple CarPlay/Android Auto','Wireless charging','38-inch curved OLED display','Heated and ventilated seats','Panoramic sunroof','Surround-view camera','Keyless entry','Power Steering','Leather steering wheel'],
    safety: ['ABS','Stability control','Traction Control','Adaptive Cruise Control','Automatic Emergency Braking','Lane Keep Assist','Blind Spot Steering Assist'],
    contacts: { baghdad: '07833000038' },
  },
  {
    id: 7,
    slug: 'cadillac-escalade-sport-2026',
    title: 'Cadillac Escalade Sport 2026',
    make: 'Cadillac',
    model: 'Escalade Sport',
    year: 2026,
    condition: 'New',
    fuel: 'Gasoline',
    drive: 'AWD/4WD',
    transmission: 'Automatic',
    engine: '6.2L',
    cylinders: 8,
    doors: 4,
    color: 'Black',
    mileage: 0,
    type: 'SUV',
    location: ['Baghdad'],
    featured: true,
    hero: IMG.escalade2025,
    thumb: IMG.escalade2025,
    gallery: [],
    description: 'The 2026 Cadillac Escalade Sport combines premium luxury with confident performance through its 6.2L V8 engine and advanced AWD system. It is built to feel prestigious, capable, and refined.',
    features: ['Adaptive cruise control','AKG premium speakers','Wireless Apple CarPlay/Android Auto','Wireless charging','Keyless entry','Leather steering wheel'],
    safety: ['ABS','Stability control','Traction Control','Adaptive Cruise Control'],
    contacts: { baghdad: '07833000038' },
  },
  {
    id: 8,
    slug: 'cadillac-escalade-esv-2024',
    title: 'Cadillac Escalade ESV Sport',
    make: 'Cadillac',
    model: 'Escalade ESV',
    year: 2024,
    condition: 'New',
    fuel: 'Gasoline',
    drive: 'AWD/4WD',
    transmission: 'Automatic',
    engine: '6.2L',
    cylinders: 8,
    doors: 4,
    color: 'Midnight Sky',
    mileage: 0,
    type: 'SUV',
    location: ['Baghdad'],
    featured: false,
    hero: IMG.escaladeEsv,
    thumb: IMG.escaladeEsv,
    gallery: [],
    description: 'The 2024 Cadillac Escalade ESV Sport uses an extended wheelbase to maximize passenger and cargo space while preserving Cadillac luxury and advanced technology.',
    features: ['AKG audio','Panoramic sunroof','Wireless charging','Heated seats','Navigation','Surround-view camera'],
    safety: ['ABS','Traction Control','Lane Keep Assist','Blind Spot Alert','Rear Park Assist'],
    contacts: { baghdad: '07833000038' },
  },
  {
    id: 9,
    slug: 'cadillac-xt6-sport-2024',
    title: 'Cadillac XT6 Sport AWD',
    make: 'Cadillac',
    model: 'XT6 Sport',
    year: 2024,
    condition: 'New',
    fuel: 'Gasoline',
    drive: 'AWD/4WD',
    transmission: 'Automatic',
    engine: '3.6L',
    cylinders: 6,
    doors: 4,
    color: 'Satin Steel',
    mileage: 0,
    type: 'SUV',
    location: ['Baghdad'],
    featured: false,
    hero: IMG.xt6,
    thumb: IMG.xt6,
    gallery: [],
    description: 'The 2024 Cadillac XT6 Sport AWD is a premium three-row SUV with athletic styling, smooth road manners, and the refined interior expected from Cadillac.',
    features: ['Panoramic sunroof','Heated and ventilated seats','Apple CarPlay','Android Auto','Navigation','Bose Audio','Power liftgate'],
    safety: ['ABS','Traction Control','Automatic Emergency Braking','Lane Departure Warning','Rear Cross Traffic Alert'],
    contacts: { baghdad: '07833000038' },
  },
  {
    id: 10,
    slug: 'cadillac-ct5-premium-luxury-2024',
    title: 'Cadillac CT5 Premium Luxury',
    make: 'Cadillac',
    model: 'CT5',
    year: 2024,
    condition: 'New',
    fuel: 'Gasoline',
    drive: 'AWD/4WD',
    transmission: 'Automatic',
    engine: '3.0L Twin-Turbo',
    cylinders: 6,
    doors: 4,
    color: 'Rift Metallic',
    mileage: 0,
    type: 'Sedan',
    location: ['Baghdad'],
    featured: false,
    hero: IMG.ct5,
    thumb: IMG.ct5,
    gallery: [],
    description: 'The 2024 Cadillac CT5 Premium Luxury offers polished performance from a twin-turbo V6, supported by sport-tuned suspension and a finely finished cabin.',
    features: ['Super Cruise driver assistance','Panoramic sunroof','Heated and cooled seats','Bose Performance Audio','Navigation','Wireless charging'],
    safety: ['ABS','Traction Control','Automatic Emergency Braking','Lane Keep Assist','Adaptive Cruise Control'],
    contacts: { baghdad: '07833000038' },
  },

  // ── GMC ──────────────────────────────────
  {
    id: 11,
    slug: 'gmc-yukon-elevation-2025',
    title: 'GMC Yukon Elevation 2WD',
    make: 'GMC',
    model: 'Yukon Elevation',
    year: 2025,
    condition: 'New',
    fuel: 'Gasoline',
    drive: '2WD',
    transmission: 'Automatic',
    engine: '5.3L',
    cylinders: 8,
    doors: 4,
    color: 'White',
    mileage: 0,
    type: 'SUV',
    location: ['Baghdad'],
    featured: false,
    hero: IMG.yukon2025,
    thumb: IMG.yukon2025,
    gallery: [],
    description: 'The 2025 GMC Yukon Elevation brings bold design, modern technology, and a comfortable ride together in a refined full-size SUV for family use and longer trips.',
    features: ['360-degree camera','Bluetooth','Heated seats','Keyless start','Leather seats','LED headlights','Navigation System','Side airbags','Sound system','TPMS','Traction Control','USB port'],
    safety: ['ABS','Side airbags','Traction Control','TPMS'],
    contacts: { baghdad: '07833000038' },
  },
  {
    id: 13,
    slug: 'gmc-sierra-1500-denali-2024',
    title: 'GMC Sierra 1500 Denali 4WD',
    make: 'GMC',
    model: 'Sierra 1500',
    year: 2024,
    condition: 'New',
    fuel: 'Gasoline',
    drive: 'AWD/4WD',
    transmission: 'Automatic',
    engine: '6.2L',
    cylinders: 8,
    doors: 4,
    color: 'Onyx Black',
    mileage: 0,
    type: 'Pickup Truck',
    location: ['Baghdad'],
    featured: false,
    hero: IMG.sierra,
    thumb: IMG.sierra,
    gallery: [],
    description: 'The 2024 GMC Sierra 1500 Denali blends serious capability with upscale craftsmanship. It features a powerful 6.2L V8, adaptive suspension, and a luxurious interior.',
    features: ['Heads-Up Display','Heated and cooled seats','Navigation','Apple CarPlay','Bose Audio','Power running boards','Spray-on bedliner'],
    safety: ['ABS','Traction Control','Lane Departure Warning','Rear Vision Camera','Park Assist'],
    contacts: { baghdad: '07833000038' },
  },

  // ── MERCEDES-BENZ ─────────────────────────
  {
    id: 15,
    slug: 'mercedes-benz-gle-coupe-450-2024',
    title: 'Mercedes-Benz GLE 450 4MATIC Coupe',
    make: 'Mercedes-Benz',
    model: 'GLE Coupe',
    year: 2024,
    condition: 'New',
    fuel: 'Petrol',
    drive: 'AWD/4WD',
    transmission: 'Automatic',
    engine: '3.0L Turbo',
    cylinders: 6,
    doors: 4,
    color: 'Obsidian Black',
    mileage: 0,
    type: 'Coupe',
    location: ['Baghdad'],
    featured: true,
    hero: IMG.gleCoupe,
    thumb: IMG.gleCoupe,
    gallery: [],
    description: 'The 2024 Mercedes-Benz GLE 450 4MATIC Coupe combines coupe-inspired styling with SUV practicality. Its 3.0L inline-6 turbo produces 362 hp, giving it energetic performance and a composed ride.',
    features: ['MBUX infotainment','Burmester 3D audio','Heated and ventilated seats','Panoramic sunroof','Digital instrument cluster','Wireless charging','Apple CarPlay','Air suspension'],
    safety: ['ABS','Traction Control','Active Brake Assist','Lane Keeping Assist','Blind Spot Assist','Parking Package'],
    contacts: { baghdad: '07833000038' },
  },
  {
    id: 16,
    slug: 'mercedes-benz-g-class-350d-2024',
    title: 'Mercedes-Benz G 350d AMG Line',
    make: 'Mercedes-Benz',
    model: 'G-Class',
    year: 2024,
    condition: 'New',
    fuel: 'Diesel',
    drive: 'AWD/4WD',
    transmission: 'Automatic',
    engine: '3.0L Diesel',
    cylinders: 6,
    doors: 4,
    color: 'Obsidian Black',
    mileage: 0,
    type: 'SUV',
    location: ['Baghdad'],
    featured: true,
    hero: IMG.gClass,
    thumb: IMG.gClass,
    gallery: [],
    description: 'The 2024 Mercedes-Benz G-Class is a luxury off-road icon. It brings together legendary four-wheel drive capability, AMG-inspired styling, and a premium cabin.',
    features: ['Nappa leather','Burmester audio','Digital cockpit','Panoramic roof','Three locking differentials','Heated seats','MBUX navigation'],
    safety: ['ABS','ESP','Active Brake Assist','Blind Spot Assist','PRESAFE'],
    contacts: { baghdad: '07833000038' },
  },
  {
    id: 17,
    slug: 'mercedes-benz-s450-2024',
    title: 'Mercedes-Benz S 450 4MATIC',
    make: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2024,
    condition: 'New',
    fuel: 'Petrol',
    drive: 'AWD/4WD',
    transmission: 'Automatic',
    engine: '3.0L Turbo',
    cylinders: 6,
    doors: 4,
    color: 'Selenite Grey',
    mileage: 0,
    type: 'Sedan',
    location: ['Baghdad'],
    featured: false,
    hero: IMG.sClass,
    thumb: IMG.sClass,
    gallery: [],
    description: 'The 2024 Mercedes-Benz S 450 4MATIC represents flagship-level luxury with advanced MBUX technology, an elegant interior, massaging seats, and leading safety systems.',
    features: ['MBUX Hyperscreen','Burmester 4D surround audio','Massaging seats','Rear-axle steering','Air body control','Ambient lighting','Wireless charging','Augmented reality navigation'],
    safety: ['ABS','PRE-SAFE','Active Steering Assist','Active Lane Change Assist','Traffic Sign Assist'],
    contacts: { baghdad: '07833000038' },
  },
  {
    id: 18,
    slug: 'mercedes-benz-glb-200-2024',
    title: 'Mercedes-Benz GLB 200 AMG',
    make: 'Mercedes-Benz',
    model: 'GLB',
    year: 2024,
    condition: 'New',
    fuel: 'Petrol',
    drive: 'FWD',
    transmission: 'Automatic',
    engine: '1.3L Turbo',
    cylinders: 4,
    doors: 4,
    color: 'Mountain Grey',
    mileage: 0,
    type: 'SUV',
    location: ['Baghdad'],
    featured: false,
    hero: IMG.glb,
    thumb: IMG.glb,
    gallery: [],
    description: 'The 2024 Mercedes-Benz GLB 200 AMG offers compact SUV convenience, available seven-seat practicality, and Mercedes-Benz comfort. It is a premium companion for city driving.',
    features: ['MBUX infotainment','Heated seats','Panoramic sunroof','Apple CarPlay','Android Auto','LED headlights'],
    safety: ['ABS','Traction Control','Crosswind Assist','Lane Keeping Assist','Active Brake Assist'],
    contacts: { baghdad: '07833000038' },
  },

  // ── RANGE ROVER ───────────────────────────
  {
    id: 19,
    slug: 'range-rover-sport-svr-2024',
    title: 'Range Rover Sport SVR',
    make: 'Range Rover',
    model: 'Sport SVR',
    year: 2024,
    condition: 'New',
    fuel: 'Petrol',
    drive: 'AWD/4WD',
    transmission: 'Automatic',
    engine: '5.0L Supercharged',
    cylinders: 8,
    doors: 4,
    color: 'Santorini Black',
    mileage: 0,
    type: 'SUV',
    location: ['Baghdad'],
    featured: true,
    hero: IMG.sport,
    thumb: IMG.sport,
    gallery: [],
    description: 'The 2024 Range Rover Sport SVR is a high-performance luxury SUV powered by a 575 hp supercharged V8. It can accelerate from 0 to 100 km/h in 4.5 seconds while staying comfortable on-road and off-road.',
    features: ['Terrain Response 2','Meridian surround sound','Pivi Pro infotainment','Head-Up Display','Massaging seats','Air suspension','Panoramic sunroof','Adaptive dynamics'],
    safety: ['ABS','DSC','Emergency Brake Assist','Lane Keep Assist','Blind Spot Monitor','Park Assist'],
    contacts: { baghdad: '07833000038' },
  },
  {
    id: 20,
    slug: 'range-rover-velar-d240-2024',
    title: 'Range Rover Velar D240',
    make: 'Range Rover',
    model: 'Velar',
    year: 2024,
    condition: 'New',
    fuel: 'Diesel',
    drive: 'AWD/4WD',
    transmission: 'Automatic',
    engine: '2.0L Diesel',
    cylinders: 4,
    doors: 4,
    color: 'Silicon Silver',
    mileage: 0,
    type: 'SUV',
    location: ['Baghdad'],
    featured: false,
    hero: IMG.velar,
    thumb: IMG.velar,
    gallery: [],
    description: 'The 2024 Range Rover Velar D240 pairs clean, minimalist design with advanced luxury features. Flush door handles and smooth body surfaces give it a distinctive premium SUV look.',
    features: ['Touch Pro Duo infotainment','Meridian 3D audio','Air suspension','Panoramic sunroof','Heated seats','Wireless charging','Apple CarPlay'],
    safety: ['ABS','Emergency Braking','Lane Keep Assist','Blind Spot Monitor','360-degree parking'],
    contacts: { baghdad: '07833000038' },
  },
  {
    id: 21,
    slug: 'land-rover-defender-110-2024',
    title: 'Land Rover Defender 110',
    make: 'Range Rover',
    model: 'Defender 110',
    year: 2024,
    condition: 'New',
    fuel: 'Diesel',
    drive: 'AWD/4WD',
    transmission: 'Automatic',
    engine: '3.0L Diesel',
    cylinders: 6,
    doors: 4,
    color: 'Fuji White',
    mileage: 0,
    type: 'SUV',
    location: ['Baghdad'],
    featured: false,
    hero: IMG.defender,
    thumb: IMG.defender,
    gallery: [],
    description: 'The 2024 Land Rover Defender 110 renews an off-road icon for modern drivers, combining excellent terrain ability with advanced technology and family-friendly practicality.',
    features: ['Pivi Pro','ClearSight Ground View','Terrain Response 2','Air suspension','Heated seats','Wireless charging','Wade sensing'],
    safety: ['ABS','Emergency Braking','Lane Keep Assist','Blind Spot Monitor','Park Assist 360'],
    contacts: { baghdad: '07833000038' },
  },

  // ── TOYOTA ────────────────────────────────
  {
    id: 22,
    slug: 'toyota-land-cruiser-300-2024',
    title: 'Toyota Land Cruiser 300',
    make: 'Toyota',
    model: 'Land Cruiser 300',
    year: 2024,
    condition: 'New',
    fuel: 'Petrol',
    drive: 'AWD/4WD',
    transmission: 'Automatic',
    engine: '3.5L Twin-Turbo V6',
    cylinders: 6,
    doors: 4,
    color: 'Precious White Pearl',
    mileage: 0,
    type: 'SUV',
    location: ['Baghdad'],
    featured: true,
    hero: IMG.landCruiser,
    thumb: IMG.landCruiser,
    gallery: [],
    description: 'The 2024 Toyota Land Cruiser 300 brings a more luxurious approach to off-road travel. Its twin-turbo V6 delivers strong power and efficiency, while the redesigned chassis improves comfort and capability.',
    features: ['Multi-terrain Select','Crawl Control','Toyota Audio Multimedia','JBL Premium Audio','Heated and ventilated seats','4 KDSS suspension','Digital rear-view mirror','Apple CarPlay'],
    safety: ['Pre-Collision System','Lane Departure Alert','Radar Cruise Control','Blind Spot Monitor','Rear Cross Traffic Alert'],
    contacts: { baghdad: '07833000038' },
  },

  // ── HYUNDAI ───────────────────────────────

  // ── KIA ───────────────────────────────────

  // ── JEEP ──────────────────────────────────

  // ── JAC ───────────────────────────────────
]

export const cars = rawCars.map(car => {
  const gallery = enrichGallery(car, rawCars)
  return {
    ...car,
    thumb: selectThumbnail({ ...car, gallery }),
    gallery,
  }
})

export const makes = [
  'Chevrolet','GMC','Cadillac','Mercedes-Benz','Range Rover','Toyota',
]

export const vehicleTypes = ['SUV','Sedan','Coupe','Pickup Truck']

export const locations = ['Baghdad']
