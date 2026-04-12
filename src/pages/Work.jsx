import { Link } from 'react-router-dom'
import './Work.css'

const projects = [
  {
    client: 'DrainRooter Plumbing',
    industry: 'Plumbing',
    services: ['Local SEO', 'Google Ads', 'GBP'],
    headline: '+340% organic traffic in 5 months',
    body: 'Full local SEO overhaul targeting emergency plumbing and drain cleaning keywords across the GTA. Built a Google Ads campaign that reduced cost-per-lead by 60% in the first quarter.',
    results: [{ metric: '+340%', label: 'Organic Traffic' }, { metric: '−60%', label: 'Cost Per Lead' }, { metric: '#1', label: '"Plumber Etobicoke"' }],
    featured: true,
  },
  {
    client: 'Maple Leaf Inn',
    industry: 'Hospitality',
    services: ['Web Design', 'Local SEO', 'GBP'],
    headline: '2.1× direct bookings year-over-year',
    body: 'Complete website redesign with a direct booking engine, combined with local SEO and GBP optimization. Significantly reduced dependency on OTA platforms like Booking.com.',
    results: [{ metric: '2.1×', label: 'Direct Bookings' }, { metric: '−35%', label: 'OTA Dependency' }],
    featured: false,
  },
  {
    client: 'Clima-Cool HVAC',
    industry: 'HVAC',
    services: ['Local SEO', 'Content Strategy'],
    headline: 'Page 1 for 18 target keywords',
    body: 'Built topical authority around seasonal HVAC searches in Etobicoke and surrounding areas. Rankings maintained for 14+ months with consistent monthly content.',
    results: [{ metric: '18', label: 'Page 1 Rankings' }, { metric: '14mo', label: 'Rankings Maintained' }],
    featured: false,
  },
  {
    client: 'Ingenium Intuito Group',
    industry: 'HVAC / Gas',
    services: ['SEO', 'Web Design'],
    headline: 'Established trust and traffic in competitive market',
    body: 'New website and SEO strategy for a gas services company entering a competitive Etobicoke market. Built credibility through content and technical SEO.',
    results: [{ metric: '6mo', label: 'To Top Rankings' }],
    featured: false,
  },
]

export default function Work() {
  return (
    <main>
      <section className="work-hero">
        <div className="container">
          <span className="section-label">Our Work</span>
          <h1 className="work-hero__title">Results we've delivered</h1>
          <p className="work-hero__sub">A selection of client results. Real businesses, real numbers — no hypotheticals.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="work-grid">
            {projects.map(p => (
              <article key={p.client} className={`work-card${p.featured ? ' work-card--featured' : ''}`}>
                <div className="work-card__header">
                  <div className="work-card__meta">
                    <span className={`badge${p.featured ? ' badge--dark' : ''}`}>{p.industry}</span>
                    <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                      {p.services.map(s => <span key={s} className={`badge badge--sm${p.featured ? ' badge--dark' : ' badge--blue'}`}>{s}</span>)}
                    </div>
                  </div>
                  <h2 className="work-card__client">{p.client}</h2>
                  <p className="work-card__headline">{p.headline}</p>
                </div>
                <p className="work-card__body">{p.body}</p>
                <div className="work-card__results">
                  {p.results.map(r => (
                    <div key={r.label} className="work-card__stat">
                      <span className="work-card__stat-val">{r.metric}</span>
                      <span className="work-card__stat-label">{r.label}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark cta-section">
        <div className="container cta-section__inner">
          <div className="cta-section__content">
            <h2 className="section-title section-title--inv">Want results like these?</h2>
            <p className="section-sub section-sub--inv">Book a free demo. We'll audit your online presence and show you the fastest path to results.</p>
            <div className="cta-section__actions">
              <Link to="/contacts" className="btn btn--primary btn--xl">Book a Free Demo</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
