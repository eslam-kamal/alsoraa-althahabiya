# Laith Al Obaidi Motors — Website Rebuild

## Project Overview

Rebuild the full website for **Laith Al Obaidi Motors**, Iraq's top car dealer since 1968.
Branches in Baghdad, Erbil, Basra, Mosul, Sulaymaniyah, Dubai, and Jordan.

**Stack:** React + Vite + Tailwind CSS  
**Routing:** React Router v6  
**Language support:** English (default), Arabic (RTL), Kurdish  
**Contact forms:** Static (no backend needed — WhatsApp + mailto fallback)

---

## Brand & Design

| Token | Value |
|---|---|
| Primary (gold) | `#c8a96e` |
| Secondary (dark navy) | `#1a1a2e` |
| Accent (red) | `#e63946` |
| Text dark | `#1a1a1a` |
| Background light | `#f8f8f8` |
| Background dark | `#111111` |
| Font (EN) | Inter, sans-serif |
| Font (AR/KU) | Cairo, Tajawal, sans-serif |

**Logo dark:** `https://obaidigroup.com/wp-content/uploads/2022/06/logo-06-e1655131243501.png`  
**Logo light:** `https://obaidigroup.com/wp-content/uploads/2022/06/logo-05.png`  

RTL support required — wrap Arabic/Kurdish pages with `dir="rtl"`.

---

## Site Structure (Pages to Build)

```
/                     → Home
/about                → About Us
/history              → Our History (timeline)
/board                → Board Members
/services             → Services (booking form)
/contact              → Contact Us / Branches
/careers              → Careers (apply form)
/complaints           → Complaints (report form)
/vehicles             → All Listings (search + filter)
/vehicles/:slug       → Single Car Detail
/offers               → Offers (blog category)
/news                 → News (blog category)
/locations            → Locations (map embed)
```

---

## Navigation

### Primary Nav
- Home `/`
- Vehicles `/vehicles` — dropdown:
  - All Brands, Chevrolet, GMC, Mercedes-Benz, Cadillac, Range Rover, JEEP, JAC, Toyota, Hyundai, KIA
  - External: Dongfeng `https://dongfengiraq.com/search/`, Forthing `https://forthingiraq.com/`, ROX `https://roxiraq.com/`
- Offers `/offers`
- Global — dropdown: Dubai `https://alobaidi-cars.com/`, Jordan `http://obaidicarsjo.com/`
- Services `/services`
- Complaints `/complaints`
- Careers `/careers`
- News `/news`

### Footer Links
About Us · Contact Us · Board Members · Videos · Our History

### Utility Bar (sticky sidebar/floating)
- Locations
- Book Test Drive → `/services`
- Request Quotation → WhatsApp

---

## Page: Home (`/`)

### Hero Section
- Headline: **"Find Your Perfect Car"**
- Search bar with filters: Condition (All / New / Used), Location, Make, Model
- CTA button: Search

### Vehicle Type Grid (5 cards with icons)
| Label | Route |
|---|---|
| Sedan | `/vehicles?type=sedan` |
| Coupe | `/vehicles?type=coupe` |
| SUV | `/vehicles?type=suv` |
| Hatchback | `/vehicles?type=hatchback` |
| Convertible | `/vehicles?type=convertible` |

### Intro Text
> "Laith Al Obaidi for cars is the top car Dealer and Seller in Iraq, Branches Located in Dubai and Jordan. Dealing with Wide Range of Models. You can freely choose from our vast fleet of different makes and models with best offered cars prices and after sales car services."

### Featured Listings Section
- Title: "Featured Listings"
- Tabs: New / Used
- Show 6 car cards from `car_listings` data
- "View All" → `/vehicles`

### Popular Makes Section
- Show brand logos: GMC, Cadillac, Mercedes-Benz, Chevrolet, Range Rover
- Each links to filtered `/vehicles?make=X`

**Brand logo images:**
| Brand | Image URL |
|---|---|
| GMC | `https://obaidigroup.com/wp-content/uploads/2021/12/Gmc-alobaidi.png` |
| Cadillac | `https://obaidigroup.com/wp-content/uploads/2021/12/cadiliac-alobaidi.png` |
| Mercedes | `https://obaidigroup.com/wp-content/uploads/2021/12/mecedes-alobaidi.png` |
| Chevrolet | `https://obaidigroup.com/wp-content/uploads/2021/12/Chevrolet.png` |
| Range Rover | `https://obaidigroup.com/wp-content/uploads/2021/12/rang-rover-alobaidi.png` |

### Why Choose Us (3 cards)
1. **After Sales Service** — Impeccable after-sale service that encompasses maintenance and spare parts.
2. **Wide Range of Models** — You can freely choose from our vast fleet of different makes and models.
3. **Affordable Auto Prices** — With our beyond-compare prices, you can finally get your dream car.

---

## Page: About Us (`/about`)

- **Page Title:** About Us — Laith Al Obaidi Cars
- **Hero image:** `https://obaidigroup.com/wp-content/uploads/2021/12/Ali-alobaidi2-removebg-preview.png`

### Body Text
> In 1968 we started the family Business Of Vehicle Trade From Baghdad that was founded by Al Obaidi family. The chairman of Laith Al Obaidi group is Mr. Laith Al Obaidi, the visionary automotive entrepreneur. Bringing in decades of immense automotive industrial knowledge, Since inception, Laith Al Obaidi Group has grown steadily through its loyal customer support and highly engaged associates to spread its wings globally. Laith Al Obaidi Group succeeded in setting quality standards that has been the benchmark of automotive industry in the Middle East. The reason why we attained success at a very early stage and have been able to constantly sustain in the same position is because of the strategic decisions we take which are always prioritized to the utmost satisfaction of our beloved customers.

### CEO Quote
> "Quality is never an accident; it is always the result of high intention."

### Stats Counter (animated numbers)
| Value | Label |
|---|---|
| 55+ | Years in Business |
| 200+ | Specialists |
| 10,000+ | Cars Sold |
| 8 | Localizations |

---

## Page: Our History (`/history`)

**Page Title:** Laith Al Obaidi Group History and Work Expansion

Render as a **vertical timeline** component.

| Year | Label | Description |
|---|---|---|
| 1968 | The Start | We Initiated our family business of vehicle trade from Iraq-Baghdad. |
| 1997 | Jordan | Expanded our family business of vehicle trade in Jordan. |
| 2003 | UAE & Kuwait | Further expanded our business by moving our headquarter to Dubai-UAE & at the same time started operations in Kuwait. |
| 2009 | Europe | Started auto market operation in Europe with setting up an office in Germany. |
| 2014 | Erbil-Iraq | Launched our Erbil multi franchise showroom. |
| 2015 | Business Expansion | Opened representative office in Poland, Hungary, Austria & Saudi. |
| 2018 | General Distributor | In 2018 we were appointed as "General distributor" of FCA brand for Iraq. |
| 2022 | Dongfeng (DFM & DFSK) | For 2022 we are excited & looking forward to boosting Dongfeng brand sales in Jordan and Iraq market. |

---

## Page: Board Members (`/board`)

**Page Title:** Our Board Members  
**Intro:** Laith Al Obaidi is a leading specialist in regional and international automotive re-export and supply chain solutions.

### Chairman Statement
> "Among our accomplishments over the years, our most valuable one is the relationships we have established with our clients. Every day we work to strengthen these relationships. We achieved this by maintaining our ethical-commitments towards our business associates. We strongly believe that successful, longer lasting business stands on principles and ethics. Through our creative and professional business approaches, we've enhanced the equation of our business constrains (Cost, Quality and Time) by improving our quality while reducing both cost and delivery time. Our own real life experience clearly shows that nothing stands impossible against bright brains and strong-wills. I'm confident of Laith Al Obaidi Management; we have not only survived, but has succeeded in controlling the quality standards among all the competitors in the entire Middle East Region."
> — Mr. Laith Al Obaidi

### Members Grid

| Name | Title | Photo |
|---|---|---|
| Laith Al Obaidi | Chairman | `https://obaidigroup.com/wp-content/uploads/2021/12/laith-al-obaidi-259x300.png` |
| Ali Al Obaidi | CEO & Board Member | `https://obaidigroup.com/wp-content/uploads/2021/12/Ali-alobaidi2-223x300.jpg` |
| Ahmed Al Obaidi | Jordan General Manager & Board Member | `https://obaidigroup.com/wp-content/uploads/2021/12/3aada051-7ca2-470f-a7ec-8c456171fdf2-228x300.jpg` |
| Mohamed Al Obaidi | Board Member | `https://obaidigroup.com/wp-content/uploads/2021/12/muhammad-al-obaidi-259x300.jpg` |

---

## Page: Services (`/services`)

**Intro:** Booking a service appointment online is simple and convenient. You can schedule your appointment at home through the Certified Laith Al Obaidi Motors Service booking page.

**Banner image:** `https://obaidigroup.com/wp-content/uploads/2022/07/mopar-services.webp`

### Booking Form Fields
- Date of Service: Day / Month / Year (selects)
- Time: Hours / Minutes / AM-PM
- Branch: `Erbil Branch` | `Baghdad Branch`
- Submit button: **"Book Service"**

---

## Page: Contact Us / Branches (`/contact`)

**Primary contacts:**
- Baghdad: `07822000028`
- Erbil: `07516668000`
- Email: `Contact@alobaidi-cars.com`
- Google Maps: `https://maps.google.com/?q=Baghdad%2C+Erbil`

### Showroom Cards

**Baghdad Al Nahda 1**
- Address: Al-Nahdha, Muhamad Al Qasim Road, Baghdad, Iraq
- Showroom: `07822000028`
- Service Center: `07826664000`

**Baghdad Al Nahda 2**
- Address: Al-Nahdha, Muhamad Al Qasim Road, Baghdad, Iraq
- Showroom: `07833000038`

**Erbil Branch**
- Address: 100 Meter Street, near Erbil Custom, Erbil, Iraq
- Showroom: `07516665000` / `07516663000`
- Service Center: `07516664000`
- Customer Service: `07516668000`

**Al-Bayaa Branch (Baghdad)**
- Address: Al-Bayaa, Baghdad, Iraq
- Showroom: `07833000048`
- Photo: `https://obaidigroup.com/wp-content/uploads/elementor/thumbs/Albaya-phcsisxhf4teejo4fr1u93yc4314loi6ks4kcybq34.jpeg`

### Contact Form
- Fields: Name (required), Message (required)
- Checkbox: I accept the privacy policy
- Submit → `mailto:Contact@alobaidi-cars.com`

### WhatsApp Quick Contact Buttons (per branch)
| Branch | Number |
|---|---|
| Baghdad | `96407822000028` |
| Erbil | `96407728890022` |
| Mosul | `96407766787077` |
| Basra | `96407755129446` |
| Sulaymaniyah | `964007701401700` |
| Airport | `96407812220000` |

---

## Page: Careers (`/careers`)

**Intro:** Kindly fill the form below to join Laith Al Obaidi Group team.

### Application Form Fields
- First Name (required)
- Last Name (required)
- WhatsApp No. (required)
- Phone
- Email
- Age
- Job Title
- Years of Experience
- Upload CV (required) — file input
- Checkbox: I accept contacting me
- Submit: **"Send"**

---

## Page: Complaints (`/complaints`)

**Intro:** Please fill out the following form with your complaint. We will review your request and follow up with you as soon as possible.

### Complaint Form Fields
- Date of Incident: Day / Month / Year (selects)
- Time: Hours / Minutes / AM-PM
- Branch: `Erbil Branch` | `Baghdad Branch`
- Describe the incident (textarea, required)
- How would you like this resolved? (textarea)
- Employer Name
- Upload file (optional)
- Submit: **"Submit"**

---

## Page: Vehicles (`/vehicles`)

### Filter Sidebar/Bar
| Filter | Options |
|---|---|
| Condition | All, New, Used |
| Make | All makes (see list below) |
| Type | SUV, Sedan, Coupe, Hatchback, Convertible, Pickup Truck, Cargo Truck |
| Fuel Type | Petrol, Gasoline, Diesel |
| Drive Type | AWD/4WD, 2WD, FWD, RWD |
| Transmission | Automatic, Manual |
| Location | Baghdad, Erbil, Basra, Mosul, Sulaymaniyah |
| Sort | Newest, Oldest |

URL params: `?condition=new&make=chevrolet&type=suv` etc.

### Car Card Component
Each card shows: thumbnail, title, year, mileage, transmission, fuel type, drive type, location badge, "Contact for a price" + "Request Price" button.

---

## Page: Car Detail (`/vehicles/:slug`)

### Layout
- Image gallery (hero + thumbnails strip)
- Title, year, condition badge
- Price: "Contact for a price"
- CTA buttons: **Request Car Price** (→ WhatsApp) | **Call Baghdad** | **Call Erbil**
- Specs grid: Make, Model, Year, Drive Type, Transmission, Condition, Mileage, Fuel Type, Engine Size, Doors, Cylinders, Color, Location
- Description (full text)
- Features list (bulleted)
- Safety features list
- Share buttons: Facebook, Twitter, WhatsApp, LinkedIn, Telegram

---

## Car Listings Data

All 11 listings. Use this as your static data source (`src/data/cars.js`):

### 1. CHEVROLET TAHOE Premier AWD 5.3L V8 - 2026
- **Slug:** `chevrolet-tahoe-premier-awd-5-3l-v8-2025`
- **Offer ID:** 28367 | **Make:** Chevrolet | **Model:** Tahoe Premier | **Year:** 2026
- **Condition:** New | **Fuel:** Petrol | **Drive:** AWD/4WD | **Trans:** Automatic
- **Engine:** 5.3L | **Cylinders:** 8 | **Doors:** 4 | **Color:** Black | **Mileage:** 0
- **Location:** Baghdad, Erbil
- **Hero:** `https://obaidigroup.com/wp-content/uploads/2026/02/DSC07144-1024x683.jpg`
- **Thumb:** `https://obaidigroup.com/wp-content/uploads/2026/02/DSC07144-167x93.jpg`
- **Gallery (27 images):** `DSC07144` through `DSC07212` at `https://obaidigroup.com/wp-content/uploads/2026/02/` with `-167x93.jpg` suffix
  - DSC07144, DSC07147, DSC07150, DSC07153, DSC07156, DSC07159, DSC07162, DSC07167, DSC07171, DSC07173, DSC07177, DSC07180, DSC07183, DSC07185, DSC07187, DSC07191, DSC07194, DSC07195, DSC07197, DSC07199, DSC07201, DSC07203, DSC07204, DSC07205, DSC07206, DSC07209, DSC07212
- **Description:** The 2026 Chevrolet Tahoe 4WD Premier is a full-size SUV that combines powerful performance with premium comfort. Equipped with four-wheel drive for confident handling in all conditions, it offers a spacious cabin, high-end materials, advanced infotainment, and comprehensive safety features. A perfect choice for families seeking luxury, space, and capability in one refined package.
- **Contacts:** Baghdad `07833000038`, Erbil `07516668000`

---

### 2. Cadillac Escalade Sport Platinum 2025
- **Slug:** `cadillac-escalade-sport-platinum-2025`
- **Offer ID:** 28323 | **Make:** Cadillac | **Model:** Escalade Sport | **Year:** 2025
- **Condition:** New | **Fuel:** Gasoline | **Drive:** AWD/4WD | **Trans:** Automatic
- **Engine:** 6.2L | **Cylinders:** 8 | **Doors:** 4 | **Color:** Black Raven | **Mileage:** 0
- **Location:** Baghdad, Erbil | **Featured:** true
- **Hero:** `https://obaidigroup.com/wp-content/uploads/2025/07/Cadillac-Escalade-Sport-Platinum-2025-2-1024x683.jpg`
- **Thumb:** `https://obaidigroup.com/wp-content/uploads/2025/07/Cadillac-Escalade-Sport-Platinum-2025-2-167x93.jpg`
- **Gallery (26 images):** `https://obaidigroup.com/wp-content/uploads/2025/07/Cadillac-Escalade-Sport-Platinum-2025-{N}-167x93.jpg` where N = 1,2,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28
- **Description:** Own the Cadillac Escalade Sport Platinum 2025 in Iraq from Laith Al Obaidi Motors. Features a 6.2L V8 engine producing 420 horsepower and 460 Nm of torque, paired with a 10-speed automatic transmission and advanced AWD. Includes a 38-inch curved OLED display, 19-speaker AKG premium audio system, leather heated and ventilated seats, panoramic sunroof, wireless charging, Apple CarPlay, Android Auto, and a high-resolution surround-view camera.
- **Features:** Adaptive cruise control, AKG premium brand speakers, Audio and cruise controls on steering wheel, Compass, External temperature display, Keyless Entry, Leather steering wheel, Power Steering, Trip computer, Wireless Android Auto/Apple CarPlay, Wireless charging, 38-inch curved OLED display, Heated and ventilated seats, Panoramic sunroof, Surround-view camera
- **Safety:** ABS, Stability control, Traction Control, Adaptive Cruise Control, Automatic Emergency Braking, Lane Keep Assist, Blind Spot Steering Assist
- **Contacts:** Baghdad `07833000038`, Erbil `07516668000`

---

### 3. Cadillac Escalade Sport 2026
- **Slug:** `cadillac-escalade-sport-with-uw9-2025`
- **Make:** Cadillac | **Model:** Escalade Sport | **Year:** 2026 | **Condition:** New
- **Fuel:** Gasoline | **Drive:** AWD/4WD | **Trans:** Automatic | **Engine:** 6.2L | **Cylinders:** 8
- **Location:** Baghdad, Erbil | **Featured:** true
- **Features:** Adaptive cruise control, AKG premium brand speakers, Audio and cruise controls on steering wheel, Compass, External temperature display, Keyless Entry, Leather steering wheel, Power Steering, Trip computer, Wireless Android Auto/Apple CarPlay, Wireless charging
- **Contacts:** Baghdad `07833000038`, Erbil `07516668000`

---

### 4. Chevrolet Tahoe Premier 2025 4WD
- **Slug:** `chevrolet-tahoe-premier-2025-4wd-for-sale`
- **Make:** Chevrolet | **Model:** Tahoe Premier | **Year:** 2025 | **Condition:** New
- **Fuel:** Gasoline | **Drive:** AWD/4WD | **Trans:** Automatic | **Doors:** 4 | **Mileage:** 0
- **Location:** Baghdad, Erbil | **Featured:** true
- **Features:** 360-degree camera, AUX, Bluetooth, Heated seats, Keyless start, Leather seats, LED headlights, Navigation System, Side airbags, Sound system, Traction Control
- **Contacts:** Baghdad `07833000038`, Erbil `07516668000`

---

### 5. GMC Yukon Elevation 2WD 2025
- **Slug:** `gmc-yukon-elevation-2wd-2025-for-sale`
- **Make:** GMC | **Model:** Yukon Elevation | **Year:** 2025 | **Condition:** New
- **Fuel:** Gasoline | **Drive:** 2WD | **Trans:** Automatic | **Doors:** 4 | **Mileage:** 0
- **Location:** Baghdad, Erbil
- **Features:** 360-degree camera, Bluetooth, Heated seats, Keyless start, Leather seats, LED headlights, Navigation System, Side airbags, Sound system, Tire Pressure Monitoring System, Traction Control, USB port
- **Contacts:** Baghdad `07833000038`, Erbil `07516668000`

---

### 6. Jeep Gladiator Rubicon 2020
- **Slug:** `jeep-gladiator-rubicon-2020`
- **Make:** Jeep | **Model:** Gladiator Rubicon | **Year:** 2020 | **Condition:** New
- **Fuel:** Gasoline | **Drive:** AWD/4WD | **Trans:** Automatic | **Mileage:** 0
- **Location:** Baghdad
- **Features:** AUX, Bluetooth, Leather seats, LED headlights, Side airbags, Traction Control
- **Contacts:** Baghdad `07833000038`

---

### 7. GMC Yukon Denali 4WD 2021
- **Slug:** `gmc-yukon-denali-4wd-2021`
- **Make:** GMC | **Model:** Yukon Denali | **Year:** 2021 | **Condition:** Used
- **Fuel:** Gasoline | **Drive:** AWD/4WD | **Trans:** Automatic | **Mileage:** 22,000 miles
- **Location:** Erbil
- **Features:** 360-degree camera, Bluetooth, Heated seats, Keyless start, Leather seats, LED headlights, Navigation System, Side airbags, Sound system, Traction Control, USB port
- **Contacts:** Erbil `07516668000`

---

### 8. JAC HFC3052K1 N-Series Pickup Truck with Box 2022
- **Slug:** `jac-hfc3052k1-n-series-pickup-truck-with-box-2022`
- **Make:** JAC | **Model:** HFC3052K1 N-Series | **Year:** 2022 | **Condition:** New
- **Fuel:** Diesel | **Drive:** Front Wheel Drive | **Trans:** Automatic | **Doors:** 2 | **Mileage:** 0
- **Type:** Pickup Truck / Commercial | **Location:** Baghdad, Erbil | **Featured:** true
- **Features:** AUX, Side airbags
- **Contacts:** Baghdad `07833000038`, Erbil `07516668000`

---

### 9. JAC HFC3052K1 N-Series Pickup Truck with Freezer Box 2022
- **Slug:** `jac-hfc3052k1-n-series-pickup-truck-with-freezer-box-2022`
- **Make:** JAC | **Model:** HFC3052K1 N-Series | **Year:** 2022 | **Condition:** New
- **Fuel:** Diesel | **Drive:** Rear Wheel Drive | **Trans:** Automatic | **Doors:** 2 | **Mileage:** 0
- **Type:** Pickup Truck / Commercial | **Location:** Baghdad, Erbil | **Featured:** true
- **Contacts:** Baghdad `07833000038`, Erbil `07516668000`

---

### 10. JAC HFC3052K1 N-Series Double Cabin Cargo Truck 2022
- **Slug:** `jac-hfc3052k1-n-series-double-cabin-cargo-truck-2022-diesel`
- **Make:** JAC | **Model:** HFC3052K1 N-Series | **Year:** 2022 | **Condition:** New
- **Fuel:** Diesel | **Drive:** Rear Wheel Drive | **Trans:** Automatic | **Doors:** 4 | **Mileage:** 0
- **Type:** Cargo Truck / Commercial | **Location:** Baghdad, Erbil | **Featured:** true
- **Features:** Bluetooth, Side airbags
- **Contacts:** Baghdad `07833000038`, Erbil `07516668000`

---

### 11. JAC HFC3052K1 N-Series Single Cabin Tipper Truck 2022
- **Slug:** `jac-hfc3052k1-n-series-single-cabin-tipper-truck-2022`
- **Make:** JAC | **Model:** HFC3052K1 N-Series | **Year:** 2022 | **Condition:** New
- **Fuel:** Diesel | **Drive:** Rear Wheel Drive | **Trans:** Automatic | **Doors:** 2 | **Mileage:** 0
- **Type:** Tipper Truck / Commercial | **Location:** Baghdad, Erbil | **Featured:** true
- **Features:** Side airbags, Traction Control, USB port
- **Contacts:** Baghdad `07833000038`, Erbil `07516668000`

---

## Global Components

### Top Bar (floating, visible on all pages)
6 branch quick-contact buttons with WhatsApp links:
- Baghdad `96407822000028`
- Erbil `96407728890022`
- Mosul `96407766787077`
- Basra `96407755129446`
- Airport (Almuthana) `96407812220000`
- Sulaymaniyah `964007701401700`

Each opens a panel showing: Branch name, WhatsApp number, "Message" link → `https://api.whatsapp.com/send/?phone={NUMBER}`

### Header
- Logo (dark on light / light on dark)
- Primary nav with dropdowns
- Language switcher: EN / AR / KU
- Phone: `07822000028` (Baghdad) | `07516668000` (Erbil)

### Footer
- Logo
- Description text
- Footer nav links
- Contact: `07822000028`, `Contact@alobaidi-cars.com`, Baghdad / Erbil
- Social icons: Facebook, Instagram, LinkedIn, Twitter, YouTube, TikTok
- Branch quick list (Basra, Mosul, Sulaymaniyah, Baghdad x3, Erbil x3)
- Copyright: © 2025. obaidigroup – All rights reserved

### Floating WhatsApp Button
- Link: `https://web.whatsapp.com/send?phone=9647516668000`
- Fixed bottom-right on all pages

### Newsletter Popup
- Trigger: on first visit
- Image: `https://obaidigroup.com/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-29-at-5.18.16-PM.jpeg`
- Fields: Name, Email, Phone, Country (dropdown), Branch (Baghdad/Erbil), Service offers checkbox
- CTA: Subscribe

---

## Available Makes (for filters)
Chevrolet, GMC, Cadillac, Mercedes-Benz, Range Rover, Jeep, JAC, Toyota, Hyundai, KIA, Dongfeng, Forthing, ROX

## Iraq Governorates (for forms — Arabic)
الأنبار، بابل، بغداد، البصرة، ذي قار، ديالى، دهوك، أربيل، كربلاء، كركوك، ميسان، المثنى، النجف، نينوى، القادسية، صلاح الدين، السليمانية، واسط

---

## SEO
- Title pattern: `{Page} | Laith Alobaidi Motors`
- Meta description: Laith Al Obaidi is the top car Dealer and Seller in Iraq. Branches in Baghdad, Erbil, Basra, Mosul, Sulaymaniyah, Dubai and Jordan.
- Schema: `AutoDealer`
- og:locale: `en_US`

---

## Implementation Notes
- All forms are static — no backend. Use `mailto:` or WhatsApp links as fallback.
- Car data lives in `src/data/cars.js` as a plain JS array export.
- Filter/search is client-side only (no API).
- Images are all external URLs from `obaidigroup.com` — use `<img>` tags directly, no download needed.
- Use `React Router` `<Link>` for all internal navigation.
- Tailwind for all styling — no separate CSS files except for RTL overrides.
- Keep components in `src/components/` and pages in `src/pages/`.
