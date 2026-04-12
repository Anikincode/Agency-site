import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import './Knowledge.css'

const categories = ['All', 'Local SEO', 'SEO', 'AI & Automation']

export default function Knowledge() {
  return (
    <main>
      <section className="kb-hero">
        <div className="container">
          <span className="section-label">Knowledge</span>
          <h1 className="kb-hero__title">SEO & Marketing Insights</h1>
          <p className="kb-hero__sub">Practical guides, case studies, and strategy breakdowns for local service businesses.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kb-posts-grid">
            {posts.map((p, i) => (
              <Link key={p.slug} to={`/post/${p.slug}`} className={`kb-card${i === 0 ? ' kb-card--featured' : ''}`}>
                <div className="kb-card__top">
                  <span className="badge badge--blue">{p.category}</span>
                  <span className="kb-card__read">{p.readTime}</span>
                </div>
                <h2 className="kb-card__title">{p.title}</h2>
                <p className="kb-card__excerpt">{p.excerpt}</p>
                <div className="kb-card__footer">
                  <span className="kb-card__date">{new Date(p.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="kb-card__cta">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section--soft section">
        <div className="container">
          <div style={{ maxWidth: '540px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', alignItems: 'center' }}>
            <h2 className="section-title">Want a free SEO audit?</h2>
            <p className="section-sub">We'll review your site, your rankings, and show you exactly what's holding you back.</p>
            <Link to="/contacts" className="btn btn--primary btn--lg">Book a Free Demo</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
