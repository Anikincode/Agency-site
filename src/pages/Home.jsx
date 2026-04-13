import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './Home.css'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Anikin Technologies',
  url: 'https://www.anikin.ca',
  telephone: '+16479822545',
  email: 'kirill.s.anikin@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '451 The West Mall, Apt 620',
    addressLocality: 'Etobicoke',
    addressRegion: 'ON',
    postalCode: 'M9C 1G1',
    addressCountry: 'CA',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 43.6435, longitude: -79.5646 },
  areaServed: ['Etobicoke', 'Toronto', 'Mississauga', 'North York', 'Scarborough'],
  priceRange: '$$',
  openingHours: 'Mo-Fr 09:00-18:00',
  sameAs: [
    'https://www.linkedin.com/company/anikintechnologies',
    'https://www.instagram.com/anikintechnologies',
    'https://www.facebook.com/anikintechnologies',
  ],
  description: 'Digital marketing agency in Etobicoke specializing in local SEO, web design, and Google Ads for local service businesses across the GTA.',
}

/* ─── Icons ───────────────────────────────────────────────────────────── */
function ArrowRight() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
}

/* Service illustration icons — large, filled/duotone style */
function WebDesignIllu() {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Monitor body */}
      <rect x="10" y="14" width="76" height="50" rx="8" fill="#d4c9be" />
      <rect x="16" y="20" width="64" height="38" rx="4" fill="#f8f3f0" />
      {/* Screen content lines */}
      <rect x="22" y="27" width="28" height="5" rx="2.5" fill="#1a56ff" opacity="0.7"/>
      <rect x="22" y="36" width="52" height="3" rx="1.5" fill="#c8bfb5"/>
      <rect x="22" y="42" width="40" height="3" rx="1.5" fill="#c8bfb5"/>
      <rect x="22" y="48" width="48" height="3" rx="1.5" fill="#c8bfb5"/>
      {/* Stand */}
      <rect x="40" y="64" width="16" height="10" rx="2" fill="#c8bfb5"/>
      <rect x="30" y="74" width="36" height="6" rx="3" fill="#b8afa5"/>
      {/* Cursor */}
      <circle cx="66" cy="35" r="5" fill="#1a56ff" opacity="0.85"/>
      <circle cx="66" cy="35" r="3" fill="#fff"/>
    </svg>
  )
}

function SEOIllu() {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Phone body */}
      <rect x="26" y="8" width="44" height="74" rx="10" fill="#d4c9be"/>
      <rect x="30" y="14" width="36" height="60" rx="6" fill="#f8f3f0"/>
      {/* Search bar */}
      <rect x="34" y="20" width="28" height="8" rx="4" fill="#e8e0d8"/>
      <circle cx="38" cy="24" r="2.5" fill="#9a9188"/>
      {/* Chart bars */}
      <rect x="34" y="36" width="6" height="18" rx="2" fill="#c8bfb5"/>
      <rect x="43" y="30" width="6" height="24" rx="2" fill="#1a56ff" opacity="0.5"/>
      <rect x="52" y="34" width="6" height="20" rx="2" fill="#c8bfb5"/>
      <rect x="61" y="26" width="5" height="28" rx="2" fill="#1a56ff" opacity="0.85"/>
      {/* Home button */}
      <rect x="40" y="78" width="16" height="4" rx="2" fill="#b8afa5"/>
      {/* Magnifier overlay */}
      <circle cx="70" cy="22" r="10" fill="#1a56ff" opacity="0.12"/>
      <circle cx="70" cy="22" r="6" fill="none" stroke="#1a56ff" strokeWidth="2.5"/>
      <line x1="74.2" y1="26.2" x2="78" y2="30" stroke="#1a56ff" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}

function AdsIllu() {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Megaphone body */}
      <path d="M20 38 L20 58 L34 58 L54 72 L54 24 L34 38 Z" fill="#d4c9be"/>
      <rect x="14" y="38" width="22" height="20" rx="4" fill="#b8afa5"/>
      {/* Sound waves */}
      <path d="M60 36 Q68 48 60 60" stroke="#1a56ff" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6"/>
      <path d="M66 30 Q78 48 66 66" stroke="#1a56ff" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.35"/>
      {/* Coins */}
      <circle cx="76" cy="22" r="9" fill="#f0c040"/>
      <text x="76" y="26" textAnchor="middle" fontSize="11" fontWeight="700" fill="#a07800">$</text>
      <circle cx="82" cy="38" r="7" fill="#f0c040" opacity="0.8"/>
      <text x="82" y="42" textAnchor="middle" fontSize="9" fontWeight="700" fill="#a07800">$</text>
      <circle cx="68" cy="14" r="5" fill="#f0c040" opacity="0.6"/>
    </svg>
  )
}

/* ─── Data ───────────────────────────────────────────────────────────── */
const clients = ['NOA Hospitality', 'Clima-Cool', 'Maple Leaf Inn', 'DrainRooter', 'Seacliff Capital']

const services = [
  { Icon: WebDesignIllu, title: 'Web Design', desc: 'Conversion-focused sites built for local businesses. Fast, beautiful, and SEO-ready from day one.', href: '/web-design-etobicoke' },
  { Icon: SEOIllu, title: 'Local SEO', desc: 'Rank on page one for searches in your city. We handle everything from keywords to technical fixes.', href: '/services/search-engine-optimization' },
  { Icon: AdsIllu, title: 'Google Ads', desc: 'Pay-per-click campaigns built for trades and service businesses. Maximum leads, minimum waste.', href: '/google-ads' },
]

const results = [
  { metric: '+340%', label: 'Organic traffic', client: 'DrainRooter Plumbing', period: '5 months' },
  { metric: '−60%', label: 'Cost per lead', client: 'DrainRooter Plumbing', period: 'Google Ads' },
  { metric: '+2.1×', label: 'Direct bookings', client: 'Maple Leaf Inn', period: 'Year over year' },
  { metric: '18', label: 'Page 1 rankings', client: 'Clima-Cool HVAC', period: 'Target keywords' },
]

const caseStudies = [
  {
    client: 'DrainRooter Plumbing',
    industry: 'Plumbing · Toronto',
    headline: '+340% organic traffic in 5 months',
    body: 'Full local SEO strategy targeting emergency plumbing keywords across the GTA. Combined with a Google Ads campaign that cut cost-per-lead by 60% in month three.',
    services: ['Local SEO', 'Google Ads', 'GBP'],
    featured: true,
  },
  {
    client: 'Maple Leaf Inn',
    industry: 'Hospitality · Ontario',
    headline: '2.1× direct bookings year-over-year',
    body: 'Website redesign, local SEO, and GBP optimization. Reduced OTA dependency and built a direct booking engine that now outperforms third-party channels.',
    services: ['Web Design', 'SEO'],
    featured: false,
  },
  {
    client: 'Clima-Cool HVAC',
    industry: 'HVAC · Etobicoke',
    headline: 'Page 1 for 18 target keywords',
    body: 'Content strategy around seasonal HVAC searches. Built topical authority in a competitive local market with consistent rankings now maintained for 14 months.',
    services: ['Local SEO', 'Content'],
    featured: false,
  },
]

const steps = [
  { n: '01', title: 'Discovery', desc: 'We audit your current presence and map your market — keywords, competitors, and gaps.' },
  { n: '02', title: 'Strategy', desc: 'Custom plan built around your goals, budget, and the fastest path to results.' },
  { n: '03', title: 'Execution', desc: 'We build, publish, and optimize. You get a dedicated account manager and clear reporting.' },
  { n: '04', title: 'Scale', desc: "We double down on what's working. Rankings compound. Leads grow. Costs drop." },
]

/* ─── Page ───────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <SEO
        title="SEO, Web Design &amp; Google Ads in Etobicoke"
        description="Anikin Technologies helps local businesses in Etobicoke &amp; Toronto rank on Google, run profitable ads, and build websites that convert. Free demo available."
        canonical="/"
        schema={localBusinessSchema}
      />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Results />
        <Process />
        <CaseStudies />
        <CtaBanner />
      </main>
    </>
  )
}

/* ─── Hero ───────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__label">
            <span className="hero__dot" />
            SEO &amp; Digital Marketing · Etobicoke, Ontario
          </div>
          <h1 className="hero__headline">
            Get Your Business<br />
            <em>Found Online</em>
          </h1>
          <p className="hero__sub">
            We help local service businesses rank on Google, run profitable ads, and turn website traffic into real customers — not just visits.
          </p>
          <div className="hero__actions">
            <Link to="/contacts" className="btn btn--primary btn--lg">
              Book a Free Demo <ArrowRight />
            </Link>
            <Link to="/work" className="btn btn--outline btn--lg">See Our Work</Link>
          </div>
          <div className="hero__proof">
            <div className="hero__proof-item"><strong>45</strong> websites built</div>
            <div className="hero__proof-sep" />
            <div className="hero__proof-item"><strong>25+</strong> active clients</div>
            <div className="hero__proof-sep" />
            <div className="hero__proof-item"><strong>1,000+</strong> daily users managed</div>
          </div>
        </div>
        <div className="hero__visual">
          <DashboardCard />
        </div>
      </div>
    </section>
  )
}

/* ─── Clients ────────────────────────────────────────────────────────── */
function Clients() {
  return (
    <div className="clients">
      <div className="container clients__inner">
        <span className="clients__label">Trusted by local businesses across the GTA</span>
        <div className="clients__logos">
          {clients.map(c => <span key={c} className="clients__name">{c}</span>)}
        </div>
      </div>
    </div>
  )
}

/* ─── Services ───────────────────────────────────────────────────────── */
function Services() {
  return (
    <section className="section svc-section">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">Services</span>
          <h2 className="section-title svc-section__title">
            How we can<br />help you <em>grow</em>
          </h2>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <Link key={s.title} to={s.href} className="svc-card">
              <div className="svc-card__illu">
                <s.Icon />
              </div>
              <div className="svc-card__body">
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__desc">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Results ────────────────────────────────────────────────────────── */
function Results() {
  return (
    <section className="results-band">
      <div className="container results-band__inner">
        {results.map(r => (
          <div key={r.metric + r.label} className="result-stat">
            <span className="result-stat__metric">{r.metric}</span>
            <span className="result-stat__label">{r.label}</span>
            <span className="result-stat__client">{r.client}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Process ────────────────────────────────────────────────────────── */
function Process() {
  return (
    <section className="section section--soft">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">How We Work</span>
          <h2 className="section-title">A clear process.<br />Measurable results.</h2>
          <p className="section-sub">No retainers for nothing. No vague progress reports. We build systems that produce results you can see.</p>
        </div>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div key={s.n} className="step-card">
              <div className="step-card__num">{s.n}</div>
              {i < steps.length - 1 && <div className="step-card__connector" aria-hidden="true" />}
              <h3 className="step-card__title">{s.title}</h3>
              <p className="step-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Case Studies ───────────────────────────────────────────────────── */
function CaseStudies() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Results</span>
          <h2 className="section-title">Real clients.<br />Real numbers.</h2>
        </div>
        <div className="cases-grid">
          {caseStudies.map(c => (
            <article key={c.client} className={`case-card${c.featured ? ' case-card--dark' : ''}`}>
              <div className="case-card__meta">
                <span className={`badge${c.featured ? ' badge--dark' : ''}`}>{c.industry}</span>
                <div className="case-card__tags">
                  {c.services.map(s => <span key={s} className={`badge badge--sm${c.featured ? ' badge--dark' : ''}`}>{s}</span>)}
                </div>
              </div>
              <h3 className="case-card__client">{c.client}</h3>
              <p className="case-card__headline">{c.headline}</p>
              <p className="case-card__body">{c.body}</p>
            </article>
          ))}
        </div>
        <div className="cases-footer">
          <Link to="/work" className="btn btn--outline btn--lg">View All Case Studies</Link>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ────────────────────────────────────────────────────────────── */
function CtaBanner() {
  return (
    <section className="cta-section section--dark">
      <div className="container cta-section__inner">
        <div className="cta-section__content">
          <h2 className="section-title section-title--inv">Ready to start<br />getting found?</h2>
          <p className="section-sub section-sub--inv">Book a free 30-minute demo. We'll audit your current online presence and show you exactly what's holding you back.</p>
          <div className="cta-section__actions">
            <Link to="/contacts" className="btn btn--primary btn--xl">Book a Free Demo <ArrowRight /></Link>
            <Link to="/company" className="btn btn--outline-inv btn--lg">Meet the Team</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Dashboard visual ───────────────────────────────────────────────── */
function DashboardCard() {
  return (
    <div className="dashboard">
      <div className="dash-card dash-card--main">
        <div className="dash-card__label">Organic Traffic</div>
        <div className="dash-card__value">+284%</div>
        <svg className="dash-sparkline" viewBox="0 0 240 64" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a56ff" stopOpacity="0.18"/>
              <stop offset="100%" stopColor="#1a56ff" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,58 C30,54 60,48 90,40 C120,32 150,24 180,14 C205,6 225,4 240,2 L240,64 L0,64Z" fill="url(#g1)"/>
          <path d="M0,58 C30,54 60,48 90,40 C120,32 150,24 180,14 C205,6 225,4 240,2" fill="none" stroke="#1a56ff" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        <div className="dash-card__sub">6-month trend · DrainRooter Plumbing</div>
      </div>
      <div className="dash-row">
        <div className="dash-card dash-card--sm">
          <div className="dash-card__label">Page 1 Rankings</div>
          <div className="dash-card__value dash-card__value--sm">18 <span>keywords</span></div>
        </div>
        <div className="dash-card dash-card--sm">
          <div className="dash-card__label">Lead Cost</div>
          <div className="dash-card__value dash-card__value--sm">↓60%</div>
        </div>
      </div>
      <div className="dash-card">
        <div className="dash-rankings-header">Top Keywords</div>
        {[
          { kw: 'plumber etobicoke', pos: '#3' },
          { kw: 'drain cleaning etobicoke', pos: '#2' },
          { kw: 'emergency plumber near me', pos: '#3' },
        ].map(r => (
          <div key={r.kw} className="dash-rank-row">
            <span>{r.kw}</span>
            <strong>{r.pos}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}
