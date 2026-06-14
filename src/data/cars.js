// Unsplash images — global CDN, fast worldwide, resized via ?w= param
// Each photo ID is a specific car matching the model. Replace with real photos when available.
import cadillacCt5PremiumLuxury2024 from "../assets/Cadillac CT5 Premium Luxury2024.avif";
import cadillacEscaladeEsvSport2024 from "../assets/Cadillac Escalade ESV Sport2024.avif";
import cadillacEscaladeSportPlatinum from "../assets/Cadillac Escalade Sport Platinum.avif";
import cadillacXt6Sport2024 from "../assets/Cadillac XT6 Sport AWD2024.png";
import chevroletSilverado2024 from "../assets/Chevrolet Silverado 1500 LTZ 4WD2024.avif";
import chevroletTahoe2025 from "../assets/Chevrolet Tahoe Premier 4WD2025.jpg";
import chevroletTahoe2026 from "../assets/CHEVROLET TAHOE Premier AWD 5.3L V82026.webp";
import chevroletTrailblazer2024 from "../assets/Chevrolet Trailblazer RS2024.avif";
import chevroletTraverse2024 from "../assets/Chevrolet Traverse Premier AWD2024.avif";
import gmcSierraDenali2024 from "../assets/GMC Sierra 1500 Denali 4WD 2024.avif";
import gmcYukonElevation2025 from "../assets/GMC Yukon Elevation 2WD2025.avif";
import mercedesG350d2024 from "../assets/Mercedes-Benz G 350d AMG Line 2024.jpg";
import mercedesGlb2002024 from "../assets/Mercedes-Benz GLB 200 AMG2024.jpg";
import mercedesGle450Coupe2024 from "../assets/Mercedes-Benz GLE 450 4MATIC Coupe 2024.webp";
import mercedesS4502024 from "../assets/Mercedes-Benz S 450 4MATIC2024.avif";
import rangeRoverSportSvr2024 from "../assets/Range Rover Sport SVR2024.jpg";
import rangeRoverVelarD2402024 from "../assets/Range Rover Velar D2402024.avif";
import landRoverDefender1102024 from "../assets/Land Rover Defender 1102024.jpg";
import toyotaLandCruiser3002024 from "../assets/Toyota Land Cruiser 3002024.webp";
import dongfengAx7_1 from "../assets/Dongfeng-ax7-1.jpg";
import dongfengAx7_2 from "../assets/Dongfeng-ax7-2.jpg";
import dongfengAx7_3 from "../assets/Dongfeng-ax7-3.jpg";
import dongfengAx7_4 from "../assets/Dongfeng-ax7-4.jpg";
import dongfengAx7_5 from "../assets/Dongfeng-ax7-5.jpg";
import dongfengMage1 from "../assets/Dongfeng-mage-1.jpg";
import dongfengMage2 from "../assets/Dongfeng-mage-2.jpg";
import dongfengMage3 from "../assets/Dongfeng-mage-3.jpg";
import dongfengMage4 from "../assets/Dongfeng-mage-4.jpg";
import dongfengMage5 from "../assets/Dongfeng-mage-5.jpg";
import dongfengMage6 from "../assets/Dongfeng-mage-6.jpg";
import dongfengPassion1 from "../assets/Dongfeng-passion-1.jpg";
import dongfengPassion2 from "../assets/Dongfeng-passion-2.jpg";
import dongfengPassion3 from "../assets/Dongfeng-passion-3.jpg";
import dongfengPassion4 from "../assets/Dongfeng-passion-4.jpg";
import dongfengPassion5 from "../assets/Dongfeng-passion-5.jpg";
import forthingS7_1 from "../assets/Forthing S7-1.jpg";
import forthingS7_2 from "../assets/Forthing S7-2.jpg";
import forthingS7_3 from "../assets/Forthing S7-3.jpg";
import forthingS7_4 from "../assets/Forthing S7-4.jpg";
import forthingT5Evo1 from "../assets/Forthing T5 EVO-1.jpg";
import forthingT5Evo2 from "../assets/Forthing T5 EVO-2.jpg";
import forthingT5Evo3 from "../assets/Forthing T5 EVO-3.jpg";
import forthingT5Evo4 from "../assets/Forthing T5 EVO-4.jpg";
import forthingT5Evo5 from "../assets/Forthing T5 EVO-5.jpg";
import forthingUTour1 from "../assets/Forthing U-Tour-1.jpg";
import forthingUTour2 from "../assets/Forthing U-Tour-2.jpg";
import forthingUTour3 from "../assets/Forthing U-Tour-3.jpg";
import forthingUTour4 from "../assets/Forthing U-Tour-4.jpg";
import forthingUTour5 from "../assets/Forthing U-Tour-5.jpg";
import roxAdamas1 from "../assets/ROX Adamas-1.jpg";
import roxAdamas2 from "../assets/ROX Adamas-2.jpg";
import roxAdamas3 from "../assets/ROX Adamas-3.jpg";
import roxAdamas4 from "../assets/ROX Adamas-4.jpg";
import roxAdamas5 from "../assets/ROX Adamas-5.jpg";
import rox01_1 from "../assets/rox01-1.webp";
import rox01_2 from "../assets/rox01-2.jpg";
import rox01_3 from "../assets/rox01-3.jpg";
import rox01_4 from "../assets/rox01-4.jpg";

const IMG = {
  // Chevrolet Tahoe / full-size SUV (black SUV)
  tahoe2026: chevroletTahoe2026,
  tahoe2026t: chevroletTahoe2026,
  tahoe2025: chevroletTahoe2025,
  // Chevrolet Silverado pickup
  silverado: chevroletSilverado2024,
  // Chevrolet Trailblazer / compact crossover
  trailblazer: chevroletTrailblazer2024,
  // Chevrolet Traverse / 3-row SUV
  traverse: chevroletTraverse2024,

  // Cadillac Escalade — large luxury SUV
  escalade2025: cadillacEscaladeSportPlatinum,
  escalade2025t: cadillacEscaladeSportPlatinum,
  escaladeEsv: cadillacEscaladeEsvSport2024,
  // Cadillac XT6 — mid-size luxury SUV
  xt6: cadillacXt6Sport2024,
  // Cadillac CT5 — luxury sedan
  ct5: cadillacCt5PremiumLuxury2024,

  // GMC Yukon — full-size SUV
  yukon2025: gmcYukonElevation2025,
  // GMC Sierra — pickup truck
  sierra: gmcSierraDenali2024,
  // GMC Canyon — midsize pickup

  // Mercedes-Benz GLE Coupe
  gleCoupe: mercedesGle450Coupe2024,
  // Mercedes-Benz G-Class
  gClass: mercedesG350d2024,
  // Mercedes-Benz S-Class sedan
  sClass: mercedesS4502024,
  // Mercedes-Benz GLB
  glb: mercedesGlb2002024,

  // Range Rover Sport
  sport: rangeRoverSportSvr2024,
  // Range Rover Velar
  velar: rangeRoverVelarD2402024,
  // Land Rover Defender
  defender: landRoverDefender1102024,

  // Toyota Land Cruiser
  landCruiser: toyotaLandCruiser3002024,
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

  // Dongfeng
  dongfengAx7: [dongfengAx7_1, dongfengAx7_2, dongfengAx7_3, dongfengAx7_4, dongfengAx7_5],
  dongfengMage: [dongfengMage1, dongfengMage2, dongfengMage3, dongfengMage4, dongfengMage5, dongfengMage6],
  dongfengPassion: [dongfengPassion1, dongfengPassion2, dongfengPassion3, dongfengPassion4, dongfengPassion5],

  // Forthing
  forthingS7: [forthingS7_1, forthingS7_2, forthingS7_3, forthingS7_4],
  forthingT5Evo: [forthingT5Evo1, forthingT5Evo2, forthingT5Evo3, forthingT5Evo4, forthingT5Evo5],
  forthingUTour: [forthingUTour1, forthingUTour2, forthingUTour3, forthingUTour4, forthingUTour5],

  // ROX
  roxAdamas: [roxAdamas1, roxAdamas2, roxAdamas3, roxAdamas4, roxAdamas5],
  rox01: [rox01_1, rox01_2, rox01_3, rox01_4],
};

export const fallbackCarImage = IMG.tahoe2026;

const uniqueImages = (images) => [...new Set(images.filter(Boolean))];

const carModelKey = (car) => `${car.make}|${car.model}`.toLowerCase();

const enrichGallery = (car, allCars) => {
  const current = car.gallery || [];
  if (current.length >= 4) return current;

  const sameModelImages = allCars
    .filter(
      (other) => other.id !== car.id && carModelKey(other) === carModelKey(car),
    )
    .flatMap((other) => [other.hero, other.thumb, ...(other.gallery || [])]);

  return uniqueImages([...current, ...sameModelImages])
    .filter((img) => img !== car.hero && img !== car.thumb)
    .slice(0, 6);
};

const selectThumbnail = (car) =>
  car.hero || car.thumb || car.gallery?.[0] || IMG.tahoe2026;

const rawCars = [
  // ── CHEVROLET ─────────────────────────────
  {
    id: 1,
    offerId: 28367,
    slug: "chevrolet-tahoe-premier-awd-5-3l-v8-2026",
    title: "CHEVROLET TAHOE Premier AWD 5.3L V8",
    make: "Chevrolet",
    model: "Tahoe Premier",
    year: 2026,
    condition: "New",
    fuel: "Petrol",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "5.3L",
    cylinders: 8,
    doors: 4,
    color: "Black",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: true,
    hero: IMG.tahoe2026,
    thumb: IMG.tahoe2026t,
    gallery: [],
    description:
      "The 2026 Chevrolet Tahoe 4WD Premier is a full-size SUV built for strength, comfort, and confidence. Its four-wheel drive system supports dependable handling in different conditions, while the roomy cabin, premium materials, modern infotainment, and safety technologies make it a refined family choice.",
    features: [
      "Heated seats",
      "Cooled seats",
      "Navigation System",
      "Wireless Apple CarPlay",
      "Wireless Android Auto",
      "Bose Sound System",
      "Power Liftgate",
      "Tri-Zone Climate Control",
      "LED headlights",
    ],
    safety: [
      "ABS",
      "Traction Control",
      "Stability Control",
      "Forward Collision Alert",
      "Lane Keep Assist",
      "Rear Park Assist",
      "Surround Vision",
    ],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 2,
    slug: "chevrolet-tahoe-premier-2025-4wd",
    title: "Chevrolet Tahoe Premier 4WD",
    make: "Chevrolet",
    model: "Tahoe Premier",
    year: 2025,
    condition: "New",
    fuel: "Gasoline",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "5.3L",
    cylinders: 8,
    doors: 4,
    color: "White",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: true,
    hero: IMG.tahoe2025,
    thumb: IMG.tahoe2025,
    gallery: [],
    description:
      "The 2025 Chevrolet Tahoe Premier 4WD pairs strong capability with upscale comfort. Its 5.3L V8 engine and generous three-row cabin make it well suited for families, daily city driving, and weekend adventures.",
    features: [
      "360-degree camera",
      "AUX",
      "Bluetooth",
      "Heated seats",
      "Keyless start",
      "Leather seats",
      "LED headlights",
      "Navigation System",
      "Side airbags",
      "Sound system",
      "Traction Control",
    ],
    safety: ["ABS", "Side airbags", "Traction Control", "Lane Keep Assist"],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 3,
    slug: "chevrolet-silverado-1500-ltz-2024",
    title: "Chevrolet Silverado 1500 LTZ 4WD",
    make: "Chevrolet",
    model: "Silverado 1500",
    year: 2024,
    condition: "New",
    fuel: "Gasoline",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "5.3L",
    cylinders: 8,
    doors: 4,
    color: "Summit White",
    mileage: 0,
    type: "Pickup Truck",
    location: ["Baghdad"],
    featured: false,
    hero: IMG.silverado,
    thumb: IMG.silverado,
    gallery: [],
    description:
      "The 2024 Chevrolet Silverado 1500 LTZ delivers serious towing strength with a comfortable, polished interior. It is designed for demanding hauling while still feeling easy to live with every day.",
    features: [
      "Heated and cooled seats",
      "Navigation",
      "Apple CarPlay",
      "Bose Audio",
      "Leather interior",
      "Spray-in bedliner",
      "Trailer brake controller",
      "LED lighting",
    ],
    safety: [
      "ABS",
      "Traction Control",
      "Forward Collision Alert",
      "Lane Departure Warning",
      "Rear Cross Traffic Alert",
    ],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 4,
    slug: "chevrolet-traverse-premier-2024",
    title: "Chevrolet Traverse Premier AWD",
    make: "Chevrolet",
    model: "Traverse Premier",
    year: 2024,
    condition: "New",
    fuel: "Gasoline",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "3.6L",
    cylinders: 6,
    doors: 4,
    color: "Midnight Blue",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: false,
    hero: IMG.traverse,
    thumb: IMG.traverse,
    gallery: [],
    description:
      "The 2024 Chevrolet Traverse Premier is a three-row family SUV with plenty of cargo room, smooth V6 performance, and advanced safety features.",
    features: [
      "Panoramic sunroof",
      "Heated seats",
      "Apple CarPlay",
      "Android Auto",
      "Bose Audio",
      "Navigation",
      "Power liftgate",
    ],
    safety: [
      "ABS",
      "Traction Control",
      "Lane Keep Assist",
      "Forward Collision Alert",
      "Rear Park Assist",
    ],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 5,
    slug: "chevrolet-trailblazer-rs-2024",
    title: "Chevrolet Trailblazer RS",
    make: "Chevrolet",
    model: "Trailblazer RS",
    year: 2024,
    condition: "New",
    fuel: "Gasoline",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "1.3L Turbo",
    cylinders: 3,
    doors: 4,
    color: "Cayenne Orange",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: false,
    hero: IMG.trailblazer,
    thumb: IMG.trailblazer,
    gallery: [],
    description:
      "The 2024 Chevrolet Trailblazer RS brings sporty styling and turbocharged power to a compact crossover. It is practical for city use while still offering added confidence beyond paved roads.",
    features: [
      "Apple CarPlay",
      "Android Auto",
      "Wireless charging",
      "LED lighting",
      "Heated seats",
      "Sport suspension",
    ],
    safety: [
      "ABS",
      "Stability Control",
      "Traction Control",
      "Rear Park Assist",
    ],
    contacts: { baghdad: "07833000038" },
  },

  // ── CADILLAC ──────────────────────────────
  {
    id: 6,
    offerId: 28323,
    slug: "cadillac-escalade-sport-platinum-2025",
    title: "Cadillac Escalade Sport Platinum",
    make: "Cadillac",
    model: "Escalade Sport",
    year: 2025,
    condition: "New",
    fuel: "Gasoline",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "6.2L",
    cylinders: 8,
    doors: 4,
    color: "Black Raven",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: true,
    hero: IMG.escalade2025,
    thumb: IMG.escalade2025t,
    gallery: [],
    description:
      "The 2025 Cadillac Escalade Sport Platinum comes with a 6.2L V8 producing 420 horsepower and 460 Nm of torque. It also includes a 38-inch curved OLED display, 19-speaker AKG premium audio, heated and ventilated seats, panoramic sunroof, wireless charging, Apple CarPlay, Android Auto, and a high-resolution surround-view camera.",
    features: [
      "Adaptive cruise control",
      "AKG premium speakers",
      "Wireless Apple CarPlay/Android Auto",
      "Wireless charging",
      "38-inch curved OLED display",
      "Heated and ventilated seats",
      "Panoramic sunroof",
      "Surround-view camera",
      "Keyless entry",
      "Power Steering",
      "Leather steering wheel",
    ],
    safety: [
      "ABS",
      "Stability control",
      "Traction Control",
      "Adaptive Cruise Control",
      "Automatic Emergency Braking",
      "Lane Keep Assist",
      "Blind Spot Steering Assist",
    ],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 7,
    slug: "cadillac-escalade-sport-2026",
    title: "Cadillac Escalade Sport 2026",
    make: "Cadillac",
    model: "Escalade Sport",
    year: 2026,
    condition: "New",
    fuel: "Gasoline",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "6.2L",
    cylinders: 8,
    doors: 4,
    color: "Black",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: true,
    hero: IMG.escalade2025,
    thumb: IMG.escalade2025,
    gallery: [],
    description:
      "The 2026 Cadillac Escalade Sport combines premium luxury with confident performance through its 6.2L V8 engine and advanced AWD system. It is built to feel prestigious, capable, and refined.",
    features: [
      "Adaptive cruise control",
      "AKG premium speakers",
      "Wireless Apple CarPlay/Android Auto",
      "Wireless charging",
      "Keyless entry",
      "Leather steering wheel",
    ],
    safety: [
      "ABS",
      "Stability control",
      "Traction Control",
      "Adaptive Cruise Control",
    ],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 8,
    slug: "cadillac-escalade-esv-2024",
    title: "Cadillac Escalade ESV Sport",
    make: "Cadillac",
    model: "Escalade ESV",
    year: 2024,
    condition: "New",
    fuel: "Gasoline",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "6.2L",
    cylinders: 8,
    doors: 4,
    color: "Midnight Sky",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: false,
    hero: IMG.escaladeEsv,
    thumb: IMG.escaladeEsv,
    gallery: [],
    description:
      "The 2024 Cadillac Escalade ESV Sport uses an extended wheelbase to maximize passenger and cargo space while preserving Cadillac luxury and advanced technology.",
    features: [
      "AKG audio",
      "Panoramic sunroof",
      "Wireless charging",
      "Heated seats",
      "Navigation",
      "Surround-view camera",
    ],
    safety: [
      "ABS",
      "Traction Control",
      "Lane Keep Assist",
      "Blind Spot Alert",
      "Rear Park Assist",
    ],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 9,
    slug: "cadillac-xt6-sport-2024",
    title: "Cadillac XT6 Sport AWD",
    make: "Cadillac",
    model: "XT6 Sport",
    year: 2024,
    condition: "New",
    fuel: "Gasoline",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "3.6L",
    cylinders: 6,
    doors: 4,
    color: "Satin Steel",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: false,
    hero: IMG.xt6,
    thumb: IMG.xt6,
    gallery: [],
    description:
      "The 2024 Cadillac XT6 Sport AWD is a premium three-row SUV with athletic styling, smooth road manners, and the refined interior expected from Cadillac.",
    features: [
      "Panoramic sunroof",
      "Heated and ventilated seats",
      "Apple CarPlay",
      "Android Auto",
      "Navigation",
      "Bose Audio",
      "Power liftgate",
    ],
    safety: [
      "ABS",
      "Traction Control",
      "Automatic Emergency Braking",
      "Lane Departure Warning",
      "Rear Cross Traffic Alert",
    ],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 10,
    slug: "cadillac-ct5-premium-luxury-2024",
    title: "Cadillac CT5 Premium Luxury",
    make: "Cadillac",
    model: "CT5",
    year: 2024,
    condition: "New",
    fuel: "Gasoline",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "3.0L Twin-Turbo",
    cylinders: 6,
    doors: 4,
    color: "Rift Metallic",
    mileage: 0,
    type: "Sedan",
    location: ["Baghdad"],
    featured: false,
    hero: IMG.ct5,
    thumb: IMG.ct5,
    gallery: [],
    description:
      "The 2024 Cadillac CT5 Premium Luxury offers polished performance from a twin-turbo V6, supported by sport-tuned suspension and a finely finished cabin.",
    features: [
      "Super Cruise driver assistance",
      "Panoramic sunroof",
      "Heated and cooled seats",
      "Bose Performance Audio",
      "Navigation",
      "Wireless charging",
    ],
    safety: [
      "ABS",
      "Traction Control",
      "Automatic Emergency Braking",
      "Lane Keep Assist",
      "Adaptive Cruise Control",
    ],
    contacts: { baghdad: "07833000038" },
  },

  // ── GMC ──────────────────────────────────
  {
    id: 11,
    slug: "gmc-yukon-elevation-2025",
    title: "GMC Yukon Elevation 2WD",
    make: "GMC",
    model: "Yukon Elevation",
    year: 2025,
    condition: "New",
    fuel: "Gasoline",
    drive: "2WD",
    transmission: "Automatic",
    engine: "5.3L",
    cylinders: 8,
    doors: 4,
    color: "White",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: false,
    hero: IMG.yukon2025,
    thumb: IMG.yukon2025,
    gallery: [],
    description:
      "The 2025 GMC Yukon Elevation brings bold design, modern technology, and a comfortable ride together in a refined full-size SUV for family use and longer trips.",
    features: [
      "360-degree camera",
      "Bluetooth",
      "Heated seats",
      "Keyless start",
      "Leather seats",
      "LED headlights",
      "Navigation System",
      "Side airbags",
      "Sound system",
      "TPMS",
      "Traction Control",
      "USB port",
    ],
    safety: ["ABS", "Side airbags", "Traction Control", "TPMS"],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 13,
    slug: "gmc-sierra-1500-denali-2024",
    title: "GMC Sierra 1500 Denali 4WD",
    make: "GMC",
    model: "Sierra 1500",
    year: 2024,
    condition: "New",
    fuel: "Gasoline",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "6.2L",
    cylinders: 8,
    doors: 4,
    color: "Onyx Black",
    mileage: 0,
    type: "Pickup Truck",
    location: ["Baghdad"],
    featured: false,
    hero: IMG.sierra,
    thumb: IMG.sierra,
    gallery: [],
    description:
      "The 2024 GMC Sierra 1500 Denali blends serious capability with upscale craftsmanship. It features a powerful 6.2L V8, adaptive suspension, and a luxurious interior.",
    features: [
      "Heads-Up Display",
      "Heated and cooled seats",
      "Navigation",
      "Apple CarPlay",
      "Bose Audio",
      "Power running boards",
      "Spray-on bedliner",
    ],
    safety: [
      "ABS",
      "Traction Control",
      "Lane Departure Warning",
      "Rear Vision Camera",
      "Park Assist",
    ],
    contacts: { baghdad: "07833000038" },
  },

  // ── MERCEDES-BENZ ─────────────────────────
  {
    id: 15,
    slug: "mercedes-benz-gle-coupe-450-2024",
    title: "Mercedes-Benz GLE 450 4MATIC Coupe",
    make: "Mercedes-Benz",
    model: "GLE Coupe",
    year: 2024,
    condition: "New",
    fuel: "Petrol",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "3.0L Turbo",
    cylinders: 6,
    doors: 4,
    color: "Obsidian Black",
    mileage: 0,
    type: "Coupe",
    location: ["Baghdad"],
    featured: true,
    hero: IMG.gleCoupe,
    thumb: IMG.gleCoupe,
    gallery: [],
    description:
      "The 2024 Mercedes-Benz GLE 450 4MATIC Coupe combines coupe-inspired styling with SUV practicality. Its 3.0L inline-6 turbo produces 362 hp, giving it energetic performance and a composed ride.",
    features: [
      "MBUX infotainment",
      "Burmester 3D audio",
      "Heated and ventilated seats",
      "Panoramic sunroof",
      "Digital instrument cluster",
      "Wireless charging",
      "Apple CarPlay",
      "Air suspension",
    ],
    safety: [
      "ABS",
      "Traction Control",
      "Active Brake Assist",
      "Lane Keeping Assist",
      "Blind Spot Assist",
      "Parking Package",
    ],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 16,
    slug: "mercedes-benz-g-class-350d-2024",
    title: "Mercedes-Benz G 350d AMG Line",
    make: "Mercedes-Benz",
    model: "G-Class",
    year: 2024,
    condition: "New",
    fuel: "Diesel",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "3.0L Diesel",
    cylinders: 6,
    doors: 4,
    color: "Obsidian Black",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: true,
    hero: IMG.gClass,
    thumb: IMG.gClass,
    gallery: [],
    description:
      "The 2024 Mercedes-Benz G-Class is a luxury off-road icon. It brings together legendary four-wheel drive capability, AMG-inspired styling, and a premium cabin.",
    features: [
      "Nappa leather",
      "Burmester audio",
      "Digital cockpit",
      "Panoramic roof",
      "Three locking differentials",
      "Heated seats",
      "MBUX navigation",
    ],
    safety: [
      "ABS",
      "ESP",
      "Active Brake Assist",
      "Blind Spot Assist",
      "PRESAFE",
    ],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 17,
    slug: "mercedes-benz-s450-2024",
    title: "Mercedes-Benz S 450 4MATIC",
    make: "Mercedes-Benz",
    model: "S-Class",
    year: 2024,
    condition: "New",
    fuel: "Petrol",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "3.0L Turbo",
    cylinders: 6,
    doors: 4,
    color: "Selenite Grey",
    mileage: 0,
    type: "Sedan",
    location: ["Baghdad"],
    featured: false,
    hero: IMG.sClass,
    thumb: IMG.sClass,
    gallery: [],
    description:
      "The 2024 Mercedes-Benz S 450 4MATIC represents flagship-level luxury with advanced MBUX technology, an elegant interior, massaging seats, and leading safety systems.",
    features: [
      "MBUX Hyperscreen",
      "Burmester 4D surround audio",
      "Massaging seats",
      "Rear-axle steering",
      "Air body control",
      "Ambient lighting",
      "Wireless charging",
      "Augmented reality navigation",
    ],
    safety: [
      "ABS",
      "PRE-SAFE",
      "Active Steering Assist",
      "Active Lane Change Assist",
      "Traffic Sign Assist",
    ],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 18,
    slug: "mercedes-benz-glb-200-2024",
    title: "Mercedes-Benz GLB 200 AMG",
    make: "Mercedes-Benz",
    model: "GLB",
    year: 2024,
    condition: "New",
    fuel: "Petrol",
    drive: "FWD",
    transmission: "Automatic",
    engine: "1.3L Turbo",
    cylinders: 4,
    doors: 4,
    color: "Mountain Grey",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: false,
    hero: IMG.glb,
    thumb: IMG.glb,
    gallery: [],
    description:
      "The 2024 Mercedes-Benz GLB 200 AMG offers compact SUV convenience, available seven-seat practicality, and Mercedes-Benz comfort. It is a premium companion for city driving.",
    features: [
      "MBUX infotainment",
      "Heated seats",
      "Panoramic sunroof",
      "Apple CarPlay",
      "Android Auto",
      "LED headlights",
    ],
    safety: [
      "ABS",
      "Traction Control",
      "Crosswind Assist",
      "Lane Keeping Assist",
      "Active Brake Assist",
    ],
    contacts: { baghdad: "07833000038" },
  },

  // ── RANGE ROVER ───────────────────────────
  {
    id: 19,
    slug: "range-rover-sport-svr-2024",
    title: "Range Rover Sport SVR",
    make: "Range Rover",
    model: "Sport SVR",
    year: 2024,
    condition: "New",
    fuel: "Petrol",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "5.0L Supercharged",
    cylinders: 8,
    doors: 4,
    color: "Santorini Black",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: true,
    hero: IMG.sport,
    thumb: IMG.sport,
    gallery: [],
    description:
      "The 2024 Range Rover Sport SVR is a high-performance luxury SUV powered by a 575 hp supercharged V8. It can accelerate from 0 to 100 km/h in 4.5 seconds while staying comfortable on-road and off-road.",
    features: [
      "Terrain Response 2",
      "Meridian surround sound",
      "Pivi Pro infotainment",
      "Head-Up Display",
      "Massaging seats",
      "Air suspension",
      "Panoramic sunroof",
      "Adaptive dynamics",
    ],
    safety: [
      "ABS",
      "DSC",
      "Emergency Brake Assist",
      "Lane Keep Assist",
      "Blind Spot Monitor",
      "Park Assist",
    ],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 20,
    slug: "range-rover-velar-d240-2024",
    title: "Range Rover Velar D240",
    make: "Range Rover",
    model: "Velar",
    year: 2024,
    condition: "New",
    fuel: "Diesel",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "2.0L Diesel",
    cylinders: 4,
    doors: 4,
    color: "Silicon Silver",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: false,
    hero: IMG.velar,
    thumb: IMG.velar,
    gallery: [],
    description:
      "The 2024 Range Rover Velar D240 pairs clean, minimalist design with advanced luxury features. Flush door handles and smooth body surfaces give it a distinctive premium SUV look.",
    features: [
      "Touch Pro Duo infotainment",
      "Meridian 3D audio",
      "Air suspension",
      "Panoramic sunroof",
      "Heated seats",
      "Wireless charging",
      "Apple CarPlay",
    ],
    safety: [
      "ABS",
      "Emergency Braking",
      "Lane Keep Assist",
      "Blind Spot Monitor",
      "360-degree parking",
    ],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 21,
    slug: "land-rover-defender-110-2024",
    title: "Land Rover Defender 110",
    make: "Range Rover",
    model: "Defender 110",
    year: 2024,
    condition: "New",
    fuel: "Diesel",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "3.0L Diesel",
    cylinders: 6,
    doors: 4,
    color: "Fuji White",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: false,
    hero: IMG.defender,
    thumb: IMG.defender,
    gallery: [],
    description:
      "The 2024 Land Rover Defender 110 renews an off-road icon for modern drivers, combining excellent terrain ability with advanced technology and family-friendly practicality.",
    features: [
      "Pivi Pro",
      "ClearSight Ground View",
      "Terrain Response 2",
      "Air suspension",
      "Heated seats",
      "Wireless charging",
      "Wade sensing",
    ],
    safety: [
      "ABS",
      "Emergency Braking",
      "Lane Keep Assist",
      "Blind Spot Monitor",
      "Park Assist 360",
    ],
    contacts: { baghdad: "07833000038" },
  },

  // ── TOYOTA ────────────────────────────────
  {
    id: 22,
    slug: "toyota-land-cruiser-300-2024",
    title: "Toyota Land Cruiser 300",
    make: "Toyota",
    model: "Land Cruiser 300",
    year: 2024,
    condition: "New",
    fuel: "Petrol",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "3.5L Twin-Turbo V6",
    cylinders: 6,
    doors: 4,
    color: "Precious White Pearl",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: true,
    hero: IMG.landCruiser,
    thumb: IMG.landCruiser,
    gallery: [],
    description:
      "The 2024 Toyota Land Cruiser 300 brings a more luxurious approach to off-road travel. Its twin-turbo V6 delivers strong power and efficiency, while the redesigned chassis improves comfort and capability.",
    features: [
      "Multi-terrain Select",
      "Crawl Control",
      "Toyota Audio Multimedia",
      "JBL Premium Audio",
      "Heated and ventilated seats",
      "4 KDSS suspension",
      "Digital rear-view mirror",
      "Apple CarPlay",
    ],
    safety: [
      "Pre-Collision System",
      "Lane Departure Alert",
      "Radar Cruise Control",
      "Blind Spot Monitor",
      "Rear Cross Traffic Alert",
    ],
    contacts: { baghdad: "07833000038" },
  },

  // ── DONGFENG ──────────────────────────────
  {
    id: 23,
    slug: "dongfeng-ax7-2025",
    title: "Dongfeng AX7",
    make: "Dongfeng",
    model: "AX7",
    year: 2025,
    condition: "New",
    fuel: "Gasoline",
    drive: "FWD",
    transmission: "Automatic",
    engine: "1.6L Turbo",
    cylinders: 4,
    doors: 4,
    color: "Silver",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: false,
    hero: IMG.dongfengAx7[0],
    thumb: IMG.dongfengAx7[0],
    gallery: IMG.dongfengAx7.slice(1),
    description:
      "The Dongfeng AX7 is a practical family SUV with a turbocharged engine, a spacious cabin, and a comfortable driving position. Its modern infotainment and flexible rear seating make it well suited to daily driving and longer trips.",
    features: [
      "Panoramic sunroof",
      "Digital instrument display",
      "Touchscreen infotainment",
      "Leather seats",
      "Power-adjustable driver seat",
      "Keyless entry and start",
      "Rear air vents",
      "Alloy wheels",
    ],
    safety: [
      "ABS",
      "Electronic Stability Control",
      "Traction Control",
      "Rear parking camera",
      "Parking sensors",
      "Tire Pressure Monitoring System",
    ],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 24,
    slug: "dongfeng-aeolus-mage-2025",
    title: "Dongfeng Aeolus Mage",
    make: "Dongfeng",
    model: "Aeolus Mage",
    year: 2025,
    condition: "New",
    fuel: "Gasoline",
    drive: "FWD",
    transmission: "Automatic",
    engine: "1.5L Turbo",
    cylinders: 4,
    doors: 4,
    color: "Emerald Green",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: true,
    hero: IMG.dongfengMage[0],
    thumb: IMG.dongfengMage[0],
    gallery: IMG.dongfengMage.slice(1),
    description:
      "The Dongfeng Aeolus Mage is a sharply styled compact SUV with a turbocharged powertrain, coupe-inspired bodywork, and a technology-focused cabin. It combines useful passenger space with an energetic, contemporary design.",
    features: [
      "Large vertical touchscreen",
      "Digital instrument cluster",
      "Panoramic roof",
      "Leather seats",
      "Wireless phone charging",
      "Keyless entry and start",
      "Automatic climate control",
      "LED lighting",
    ],
    safety: [
      "ABS",
      "Electronic Stability Control",
      "Traction Control",
      "360-degree camera",
      "Blind Spot Monitoring",
      "Lane Departure Warning",
    ],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 25,
    slug: "dongfeng-voyah-passion-2025",
    title: "Dongfeng Voyah Passion",
    make: "Dongfeng",
    model: "Voyah Passion",
    year: 2025,
    condition: "New",
    fuel: "Electric",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "Dual Electric Motor",
    doors: 4,
    color: "Light Blue",
    mileage: 0,
    type: "Sedan",
    location: ["Baghdad"],
    featured: true,
    hero: IMG.dongfengPassion[0],
    thumb: IMG.dongfengPassion[0],
    gallery: IMG.dongfengPassion.slice(1),
    description:
      "The Dongfeng Voyah Passion is a premium electric sedan shaped around quiet performance, a spacious passenger compartment, and an immersive digital cockpit. Its sleek fastback profile and refined interior give it a distinctive executive character.",
    features: [
      "Full-width digital cockpit",
      "Panoramic glass roof",
      "Premium leather seating",
      "Wireless phone charging",
      "Multi-zone climate control",
      "Power-adjustable seats",
      "Ambient lighting",
      "Connected navigation",
    ],
    safety: [
      "ABS",
      "Electronic Stability Control",
      "Adaptive Cruise Control",
      "Automatic Emergency Braking",
      "Lane Keeping Assist",
      "Surround-view camera",
    ],
    contacts: { baghdad: "07833000038" },
  },

  // ── FORTHING ──────────────────────────────
  {
    id: 26,
    slug: "forthing-s7-2025",
    title: "Forthing S7",
    make: "Forthing",
    model: "S7",
    year: 2025,
    condition: "New",
    fuel: "Electric",
    drive: "RWD",
    transmission: "Automatic",
    engine: "Electric Motor",
    doors: 4,
    color: "Black",
    mileage: 0,
    type: "Sedan",
    location: ["Baghdad"],
    featured: true,
    hero: IMG.forthingS7[0],
    thumb: IMG.forthingS7[0],
    gallery: IMG.forthingS7.slice(1),
    description:
      "The Forthing S7 is a streamlined electric sedan with frameless styling, a bright minimalist interior, and a large central display. It is designed to deliver quiet everyday travel with generous cabin space and modern connectivity.",
    features: [
      "Large central touchscreen",
      "Digital driver display",
      "Panoramic glass roof",
      "Power-adjustable seats",
      "Wireless phone charging",
      "Automatic climate control",
      "Keyless entry and start",
      "LED lighting",
    ],
    safety: [
      "ABS",
      "Electronic Stability Control",
      "Adaptive Cruise Control",
      "Automatic Emergency Braking",
      "Lane Keeping Assist",
      "Parking camera",
    ],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 27,
    slug: "forthing-t5-evo-2025",
    title: "Forthing T5 EVO",
    make: "Forthing",
    model: "T5 EVO",
    year: 2025,
    condition: "New",
    fuel: "Gasoline",
    drive: "FWD",
    transmission: "Automatic",
    engine: "1.5L Turbo",
    cylinders: 4,
    doors: 4,
    color: "White",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: false,
    hero: IMG.forthingT5Evo[0],
    thumb: IMG.forthingT5Evo[0],
    gallery: IMG.forthingT5Evo.slice(1),
    description:
      "The Forthing T5 EVO is a sporty compact SUV with a bold front design, turbocharged performance, and a driver-focused interior. Its practical five-seat layout balances expressive styling with everyday usability.",
    features: [
      "Dual digital displays",
      "Panoramic sunroof",
      "Leather sport seats",
      "Power-adjustable driver seat",
      "Wireless phone charging",
      "Automatic climate control",
      "Keyless entry and start",
      "Rear air vents",
    ],
    safety: [
      "ABS",
      "Electronic Stability Control",
      "Traction Control",
      "360-degree camera",
      "Blind Spot Monitoring",
      "Lane Departure Warning",
    ],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 28,
    slug: "forthing-u-tour-2025",
    title: "Forthing U-Tour",
    make: "Forthing",
    model: "U-Tour",
    year: 2025,
    condition: "New",
    fuel: "Gasoline",
    drive: "FWD",
    transmission: "Automatic",
    engine: "1.5L Turbo",
    cylinders: 4,
    doors: 4,
    color: "Silver",
    mileage: 0,
    type: "MPV",
    location: ["Baghdad"],
    featured: true,
    hero: IMG.forthingUTour[0],
    thumb: IMG.forthingUTour[0],
    gallery: IMG.forthingUTour.slice(1),
    description:
      "The Forthing U-Tour is a spacious family MPV with three-row seating, a flexible cabin, and comfort-focused equipment. Its elevated seating position and generous passenger room make it a practical choice for families and group travel.",
    features: [
      "Three-row seating",
      "Panoramic sunroof",
      "Digital instrument display",
      "Touchscreen infotainment",
      "Leather seats",
      "Rear climate controls",
      "Keyless entry and start",
      "Multiple USB ports",
    ],
    safety: [
      "ABS",
      "Electronic Stability Control",
      "Traction Control",
      "360-degree camera",
      "Parking sensors",
      "Tire Pressure Monitoring System",
    ],
    contacts: { baghdad: "07833000038" },
  },

  // ── ROX ───────────────────────────────────
  {
    id: 29,
    slug: "rox-adamas-2026",
    title: "ROX Adamas",
    make: "Rox",
    model: "Adamas",
    year: 2026,
    condition: "New",
    fuel: "Hybrid",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "1.5L Range Extender",
    cylinders: 4,
    doors: 4,
    color: "White",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: true,
    hero: IMG.roxAdamas[0],
    thumb: IMG.roxAdamas[0],
    gallery: IMG.roxAdamas.slice(1),
    description:
      "The ROX Adamas is a large luxury range-extended SUV built for long-distance comfort and confident all-terrain travel. Its three-row cabin, premium seating, and advanced electrified drivetrain suit both family journeys and outdoor use.",
    features: [
      "Three-row seating",
      "Panoramic glass roof",
      "Premium leather seats",
      "Large central touchscreen",
      "Digital instrument display",
      "Wireless phone charging",
      "Multi-zone climate control",
      "Power tailgate",
    ],
    safety: [
      "ABS",
      "Electronic Stability Control",
      "Adaptive Cruise Control",
      "Automatic Emergency Braking",
      "Lane Keeping Assist",
      "Surround-view camera",
    ],
    contacts: { baghdad: "07833000038" },
  },
  {
    id: 30,
    slug: "rox-01-2025",
    title: "ROX 01",
    make: "Rox",
    model: "01",
    year: 2025,
    condition: "New",
    fuel: "Hybrid",
    drive: "AWD/4WD",
    transmission: "Automatic",
    engine: "1.5L Range Extender",
    cylinders: 4,
    doors: 4,
    color: "Gray",
    mileage: 0,
    type: "SUV",
    location: ["Baghdad"],
    featured: true,
    hero: IMG.rox01[0],
    thumb: IMG.rox01[0],
    gallery: IMG.rox01.slice(1),
    description:
      "The ROX 01 is a full-size range-extended SUV that combines electric driving with the reassurance of an onboard gasoline generator. Its upright design, roomy cabin, and capable all-wheel-drive system support family travel on city roads and rougher terrain.",
    features: [
      "Three-row seating",
      "Panoramic glass roof",
      "Premium leather seats",
      "Large central touchscreen",
      "Digital instrument display",
      "Wireless phone charging",
      "Multi-zone climate control",
      "Power tailgate",
    ],
    safety: [
      "ABS",
      "Electronic Stability Control",
      "Adaptive Cruise Control",
      "Automatic Emergency Braking",
      "Lane Keeping Assist",
      "Surround-view camera",
    ],
    contacts: { baghdad: "07833000038" },
  },

  // ── HYUNDAI ───────────────────────────────

  // ── KIA ───────────────────────────────────

  // ── JEEP ──────────────────────────────────

  // ── JAC ───────────────────────────────────
];

export const cars = rawCars.map((car) => {
  const gallery = enrichGallery(car, rawCars);
  return {
    ...car,
    thumb: selectThumbnail({ ...car, gallery }),
    gallery,
  };
});

export const makes = [
  "Rox",
  "Dongfeng",
  "Forthing",
  "GMC",
  "Cadillac",
  "Chevrolet",
  "Mercedes-Benz",
  "Range Rover",
  "Toyota",
  "Hyundai",
  "Kia",
  "Jeep",
  "JAC",
];

export const vehicleTypes = ["SUV", "Sedan", "Coupe", "MPV", "Pickup Truck"];

export const locations = ["Baghdad"];
