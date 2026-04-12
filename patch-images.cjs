const fs = require('fs')
const base = 'c:/Users/pon55/Desktop/anikin-technologies/website/src/pages/'

const imgs = {
  webdesign:   { url: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',   alt: 'Designer working on a modern website' },
  seo:         { url: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',   alt: 'Analytics and Google search rankings on screen' },
  ads:         { url: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800',   alt: 'Digital advertising campaign on laptop' },
  geo:         { url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'AI technology interface' },
  ecom:        { url: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',   alt: 'E-commerce and online shopping' },
  contractors: { url: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Contractor at work on a job site' },
  hvac:        { url: 'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'HVAC technician servicing equipment' },
  landscaping: { url: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Beautiful landscaped garden' },
  restaurant:  { url: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',   alt: 'Restaurant interior with warm lighting' },
  hotel:       { url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',   alt: 'Elegant hotel lobby' },
  law:         { url: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Law office professional setting' },
  medical:     { url: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Clean medical clinic reception' },
  portfolio1:  { url: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800',   alt: 'Restaurant with warm ambiance' },
  portfolio2:  { url: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',   alt: 'Hotel exterior at dusk' },
  portfolio3:  { url: 'https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Cozy inn exterior in autumn' },
}

// ── 1. Patch Services.jsx ─────────────────────────────────────────────────
let svc = fs.readFileSync(base + 'Services.jsx', 'utf8')

svc = svc.replace(
  "{ title: 'Web Design', slug: '/web-design-etobicoke', label: 'Web Design',",
  "{ title: 'Web Design', slug: '/web-design-etobicoke', label: 'Web Design', img: '" + imgs.webdesign.url + "', alt: '" + imgs.webdesign.alt + "',"
)
svc = svc.replace(
  "{ title: 'Local SEO', slug: '/services/search-engine-optimization', label: 'SEO',",
  "{ title: 'Local SEO', slug: '/services/search-engine-optimization', label: 'SEO', img: '" + imgs.seo.url + "', alt: '" + imgs.seo.alt + "',"
)
svc = svc.replace(
  "{ title: 'Google and Facebook Ads', slug: '/google-ads', label: 'Paid Ads',",
  "{ title: 'Google and Facebook Ads', slug: '/google-ads', label: 'Paid Ads', img: '" + imgs.ads.url + "', alt: '" + imgs.ads.alt + "',"
)
svc = svc.replace(
  "{ title: 'Generative Engine Optimization', slug: '/services/generative-engine-optimization', label: 'GEO New',",
  "{ title: 'Generative Engine Optimization', slug: '/services/generative-engine-optimization', label: 'GEO New', img: '" + imgs.geo.url + "', alt: '" + imgs.geo.alt + "',"
)
svc = svc.replace(
  "{ title: 'E-Commerce Marketing', slug: '/services/ecommerce-marketing', label: 'E-Commerce',",
  "{ title: 'E-Commerce Marketing', slug: '/services/ecommerce-marketing', label: 'E-Commerce', img: '" + imgs.ecom.url + "', alt: '" + imgs.ecom.alt + "',"
)
fs.writeFileSync(base + 'Services.jsx', svc)
console.log('Services.jsx patched, img count:', (svc.match(/pexels/g) || []).length)

// ── 2. Patch Industries.jsx ───────────────────────────────────────────────
let ind = fs.readFileSync(base + 'Industries.jsx', 'utf8')
ind = ind.replace("{ slug: 'contractors',",  "{ slug: 'contractors', img: '" + imgs.contractors.url + "', alt: '" + imgs.contractors.alt + "',")
ind = ind.replace("{ slug: 'hvac',",          "{ slug: 'hvac', img: '" + imgs.hvac.url + "', alt: '" + imgs.hvac.alt + "',")
ind = ind.replace("{ slug: 'landscaping',",   "{ slug: 'landscaping', img: '" + imgs.landscaping.url + "', alt: '" + imgs.landscaping.alt + "',")
ind = ind.replace("{ slug: 'restaurants',",   "{ slug: 'restaurants', img: '" + imgs.restaurant.url + "', alt: '" + imgs.restaurant.alt + "',")
ind = ind.replace("{ slug: 'hotels',",        "{ slug: 'hotels', img: '" + imgs.hotel.url + "', alt: '" + imgs.hotel.alt + "',")
ind = ind.replace("{ slug: 'lawyers',",       "{ slug: 'lawyers', img: '" + imgs.law.url + "', alt: '" + imgs.law.alt + "',")
ind = ind.replace("{ slug: 'medical',",       "{ slug: 'medical', img: '" + imgs.medical.url + "', alt: '" + imgs.medical.alt + "',")

// Add image rendering to card header
ind = ind.replace(
  "<div className='ind-card__header'>",
  "<div className='ind-card__header'>"
)
// Add img tag before the icon div in the card
ind = ind.replace(
  "                  <div className='ind-card__header'>\n                    <div className='ind-card__icon'>{ind.icon}</div>",
  "                  {ind.img && <img src={ind.img} alt={ind.alt} className='ind-card__img' />}\n                  <div className='ind-card__header'>\n                    <div className='ind-card__icon'>{ind.icon}</div>"
)
fs.writeFileSync(base + 'Industries.jsx', ind)
console.log('Industries.jsx patched, img count:', (ind.match(/pexels/g) || []).length)

// ── 3. Patch WebDesign.jsx portfolio thumbnails ───────────────────────────
let wd = fs.readFileSync(base + 'WebDesign.jsx', 'utf8')
wd = wd.replace(
  "{ name: 'Shelly Tap and Grill', industry: 'Restaurant', result: 'New site + 40% more reservations' },",
  "{ name: 'Shelly Tap and Grill', industry: 'Restaurant', result: 'New site + 40% more reservations', img: '" + imgs.portfolio1.url + "', alt: '" + imgs.portfolio1.alt + "' },"
)
wd = wd.replace(
  "{ name: 'Larita Hotel', industry: 'Hospitality', result: 'Full redesign + direct booking system' },",
  "{ name: 'Larita Hotel', industry: 'Hospitality', result: 'Full redesign + direct booking system', img: '" + imgs.portfolio2.url + "', alt: '" + imgs.portfolio2.alt + "' },"
)
wd = wd.replace(
  "{ name: 'Maple Leaf Inn', industry: 'Hospitality', result: '2.1\u00d7 direct bookings year-over-year' },",
  "{ name: 'Maple Leaf Inn', industry: 'Hospitality', result: '2.1\u00d7 direct bookings year-over-year', img: '" + imgs.portfolio3.url + "', alt: '" + imgs.portfolio3.alt + "' },"
)
// Replace the emoji placeholder div with an actual img
const oldEmoji = "<div style={{ height: '140px', background: 'var(--color-bg-warm)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--text-2xl)' }}>\uD83D\uDDA5</div>"
const newImg = "<img src={p.img} alt={p.alt} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />"
wd = wd.replace(oldEmoji, newImg)
fs.writeFileSync(base + 'WebDesign.jsx', wd)
console.log('WebDesign.jsx patched, img count:', (wd.match(/pexels/g) || []).length)

console.log('All done.')
