import { Link } from 'react-router-dom'
import './ServicePage.css'

const services = [
  {
    title: 'Web Design',
    slug: 'web-design',
    icon: '🖥',
    desc: 'Fast, modern websites built to rank and convert. We design for local service businesses that need results, not just a pretty page.',
    bullets: ['Custom design — no templates', 'Mobile-first, blazing fast', 'SEO-ready from day one', 'Conversion-optimized layout'],
  },
  {
    title: 'Local SEO',
    slug: 'seo',
    icon: '📈',
    desc: 'Rank on the first page of Google in your city. We handle keywords, content, technical fixes, and local citations.',
    bullets: ['Keyword research & strategy', 'On-page + local optimization', 'Google Business Profile', 'Monthly reporting'],
  },
  {
    title: 'Google Ads',
    slug: 'google-ads',
    icon: '🎯',
    desc: 'Pay-per-click ads that bring in real leads. We build and manage campaigns that maximize ROI for service businesses.',
    bullets: ['Search + display campaigns', 'Competitor targeting', 'Landing page optimization', 'Transparent spend reporting'],
  },
]

export default function Services() {
  return (
    <main className="placeholder-page">
      <section className="placeholder-hero">
        <div className="container">
          <span className="badge">Services</span>
          <h1>Let us do the work</h1>
          <p>We offer a focused set of services that work together — web, search, and ads — to build a complete digital presence for local businesses.</p>
        </div>
      </section>

      <section className="container services-list">
        {services.map(s => (
          <div key={s.slug} className="service-full-card">
            <div className="service-full-card__content">
              <div className="service-full-card__icon">{s.icon}</div>
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
              <ul>
                {s.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/contact" className="btn btn--primary">Get Started</Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
