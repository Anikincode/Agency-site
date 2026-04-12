import { Link } from 'react-router-dom'
import './ServicePage.css'

const trends = [
  { year: '2026', title: 'AI Overviews in Search', desc: 'Google\'s AI-generated summaries at the top of search results are changing click-through rates. Pages that rank here need comprehensive, authoritative content.' },
  { year: '2026', title: 'Local Pack Dominance', desc: 'The map pack is getting more clicks than organic results for local searches. GBP optimization is now more important than ever.' },
  { year: '2026', title: 'Core Web Vitals as Ranking Signal', desc: 'Page speed and user experience metrics now directly impact your ranking. Slow sites are losing ground to faster competitors.' },
  { year: '2026', title: 'Review Signals Growing', desc: 'Google is placing increasing weight on review volume, recency, and response rate in local rankings.' },
  { year: '2026', title: 'Voice Search & Conversational Queries', desc: 'More searches are conversational. Content structured around questions and direct answers performs better.' },
  { year: '2026', title: 'E-E-A-T for Local Service Pages', desc: 'Experience, Expertise, Authoritativeness, and Trustworthiness signals are critical. Local service pages need proof — certifications, team bios, reviews, and case studies.' },
]

export default function SEOTrends() {
  return (
    <main>
      <section className="sp-hero" style={{ paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="section-label">SEO Trends · 2026</span>
          <h1 className="sp-hero__headline" style={{ marginTop: 'var(--space-4)' }}>SEO Trends That Matter<br /><em>for Local Businesses in 2026</em></h1>
          <p className="sp-hero__sub">What's actually changing in local SEO — and what you should do about it.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sp-features-grid">
            {trends.map(t => (
              <div key={t.title} className="sp-feat-card">
                <span className="badge badge--blue">{t.year}</span>
                <h3 className="sp-feat-card__title">{t.title}</h3>
                <p className="sp-feat-card__desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark cta-section">
        <div className="container cta-section__inner">
          <div className="cta-section__content">
            <h2 className="section-title section-title--inv">Stay ahead of the competition</h2>
            <p className="section-sub section-sub--inv">Get a free audit to see where your business stands against current SEO standards.</p>
            <div className="cta-section__actions">
              <Link to="/contacts" className="btn btn--primary btn--xl">Get a Free Audit</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
