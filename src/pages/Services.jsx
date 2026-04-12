import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './ServicePage.css'
import './Services.css'

const $ = (p) => 'From ' + String.fromCharCode(36) + p

const services = [
  { title: 'Web Design', slug: '/web-design-etobicoke', label: 'Web Design', headline: 'Fast, modern websites built to convert', desc: 'Custom websites for local service businesses. Clean, fast code that ranks and turns visitors into customers.', bullets: ['Custom design, no templates', 'Mobile-first, Core Web Vitals optimized', 'SEO-ready structure from day one', 'Conversion-focused CTAs'], price: $("2,500"), cta: 'Get a Quote' },
  { title: 'Local SEO', slug: '/services/search-engine-optimization', label: 'SEO', headline: 'Rank on Google in your city', desc: 'Full-service local SEO. Keyword strategy, on-page optimization, Google Business Profile, link building, and monthly reporting.', bullets: ['Keyword research and local intent mapping', 'On-page and technical SEO', 'Google Business Profile optimization', 'Transparent monthly reporting'], price: $("1,000/mo"), cta: 'Get a Free Audit' },
  { title: 'Google and Facebook Ads', slug: '/google-ads', label: 'Paid Ads', headline: 'Paid ads that drive real leads', desc: 'We build and manage Google Search, Display, and Facebook campaigns. Every dollar tracked, every lead attributed.', bullets: ['Google Search, Display and Retargeting', 'Facebook and Instagram Ads', 'Conversion tracking from day one', 'Full monthly performance reporting'], price: $("500/mo"), cta: 'Book a Strategy Session' },
  { title: 'Generative Engine Optimization', slug: '/services/generative-engine-optimization', label: 'GEO New', headline: 'Get found in AI-powered search', desc: 'We optimize your content and authority to appear in ChatGPT, Perplexity, and Google AI Overviews.', bullets: ['AI search visibility audit', 'Content structured for LLM citation', 'Authority signals for AI discovery', 'Ongoing GEO monitoring and reporting'], price: $("800/mo"), cta: 'Learn More' },
  { title: 'E-Commerce Marketing', slug: '/services/ecommerce-marketing', label: 'E-Commerce', headline: 'More traffic. More sales. Less wasted spend.', desc: 'End-to-end digital marketing for online stores. SEO, Google Shopping, Meta ads, and email automation focused on revenue.', bullets: ['Google Shopping and Performance Max', 'Meta product ads', 'E-commerce SEO and category pages', 'Email flows: abandoned cart, post-purchase'], price: $("1,200/mo"), cta: 'Get a Free Audit' },
]

const industries = [
  { name: 'Contractors and Trades' }, { name: 'Landscaping' }, { name: 'Interior Design' },
  { name: 'HVAC and Heating' }, { name: 'Plumbing' }, { name: 'Electricians' },
  { name: 'Hotels and Hospitality' }, { name: 'Restaurants and Cafes' },
  { name: 'Lawyers and Law Firms' }, { name: 'Dentists and Medical' },
]

export default function Services() {
  return (
    <>
      <SEO
        title="Digital Marketing Services Etobicoke and Toronto"
        description="Web design, local SEO, Google Ads, GEO, and e-commerce marketing for small businesses in Etobicoke and Toronto."
        canonical="/services"
      />
      <main>
        <section className="sp-hero" style={{ paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div className="container">
            <div style={{ maxWidth: '720px' }}>
              <span className="section-label">Our Services</span>
              <h1 className="sp-hero__headline" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>
                Digital marketing that<br /><em>actually moves the needle</em>
              </h1>
              <p className="sp-hero__sub">A focused set of services built to work together. Web, search, ads, and AI discovery to build a complete digital presence for your business.</p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="svc-list">
              {services.map((s, i) => (
                <div key={s.slug} className={i % 2 === 1 ? 'svc-card svc-card--flip' : 'svc-card'}>
                  <div className="svc-card__content">
                    <span className="section-label">{s.label}</span>
                    <h2 className="svc-card__title">{s.headline}</h2>
                    <p className="svc-card__desc">{s.desc}</p>
                    <ul className="svc-card__list">{s.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                    <div className="svc-card__footer">
                      <span className="svc-card__price">{s.price}</span>
                      <Link to={s.slug} className="btn btn--primary">{s.cta}</Link>
                    </div>
                  </div>
                  <div className="svc-card__visual"><span className="svc-card__name">{s.title}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section sp-section--alt">
          <div className="container">
            <div className="section-header section-header--center">
              <span className="section-label">Who We Serve</span>
              <h2 className="section-title">Built for local service businesses</h2>
              <p className="section-sub">We specialize in industries where reputation, local visibility, and lead generation are everything.</p>
            </div>
            <div className="svc-industries">
              {industries.map(ind => (
                <Link key={ind.name} to="/industries" className="svc-industry-chip">
                  <span>{ind.name}</span>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
              <Link to="/industries" className="btn btn--outline btn--lg">See All Industries</Link>
            </div>
          </div>
        </section>
        <section className="section--dark cta-section">
          <div className="container cta-section__inner">
            <div className="cta-section__content">
              <h2 className="section-title section-title--inv">Not sure where to start?</h2>
              <p className="section-sub section-sub--inv">Book a free strategy session. We will review your current situation and tell you exactly what would move the needle.</p>
              <div className="cta-section__actions">
                <Link to="/contacts" className="btn btn--primary btn--xl">Book a Free Session</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}