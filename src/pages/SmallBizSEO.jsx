import { Link } from 'react-router-dom'
import './ServicePage.css'

export default function SmallBizSEO() {
  return (
    <main>
      <section className="sp-hero">
        <div className="container sp-hero__inner">
          <div className="sp-hero__content">
            <span className="section-label">SEO for Small Business</span>
            <h1 className="sp-hero__headline">Small Business SEO<br /><em>Packages That Work</em></h1>
            <p className="sp-hero__sub">Affordable SEO built specifically for local service businesses. We focus on the keywords that bring in customers — not just traffic.</p>
            <div className="sp-hero__actions">
              <Link to="/contacts" className="btn btn--primary btn--lg">Get a Free Audit</Link>
              <Link to="/affordable-seo-packages" className="btn btn--outline btn--lg">View Pricing</Link>
            </div>
            <div className="sp-hero__checklist">
              {['No long-term contracts required', 'Results in 6–10 weeks for most clients', 'Transparent monthly reporting', 'Dedicated account manager'].map(t => (
                <span key={t} className="sp-hero__check">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="sp-hero__card">
              <h3>Is SEO Worth It for Small Business?</h3>
              <p>Yes — if you're targeting local customers. SEO brings in high-intent leads who are already searching for what you offer. Unlike ads, the results compound over time.</p>
              <div className="sp-price">
                <span className="sp-price__from">Packages from</span>
                <span className="sp-price__val">$1,000<span style={{ fontSize: 'var(--text-base)', fontWeight: 500 }}>/mo</span></span>
                <span className="sp-price__note">Free audit before we start</span>
              </div>
              <Link to="/contacts" className="btn btn--primary">Get a Free Audit</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section--dark cta-section">
        <div className="container cta-section__inner">
          <div className="cta-section__content">
            <h2 className="section-title section-title--inv">See where you stand</h2>
            <p className="section-sub section-sub--inv">Get a free SEO audit. We'll show you your current rankings and what your competitors are doing right that you're not.</p>
            <div className="cta-section__actions">
              <Link to="/contacts" className="btn btn--primary btn--xl">Get a Free Audit</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
