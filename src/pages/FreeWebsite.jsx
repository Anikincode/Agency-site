import { Link } from 'react-router-dom'
import './ServicePage.css'

export default function FreeWebsite() {
  return (
    <main>
      <section className="sp-hero">
        <div className="container sp-hero__inner">
          <div className="sp-hero__content">
            <span className="section-label">Special Offer</span>
            <h1 className="sp-hero__headline">Free Website for<br /><em>New Clients</em></h1>
            <p className="sp-hero__sub">
              Sign up for any SEO or Google Ads package and get a professionally designed website at no additional cost. We build your site, you own it.
            </p>
            <div className="sp-hero__actions">
              <Link to="/contacts" className="btn btn--primary btn--lg">Claim Your Free Website</Link>
            </div>
            <div className="sp-hero__checklist">
              {['Custom-designed website — no templates', 'SEO-optimized from day one', 'Mobile-responsive and fast-loading', 'Included with any monthly retainer'].map(t => (
                <span key={t} className="sp-hero__check">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="sp-hero__card">
              <h3>How It Works</h3>
              <p>Sign up for our SEO or Ads management service, and we'll build your website as part of the onboarding process.</p>
              <div className="sp-price">
                <span className="sp-price__from">Website value</span>
                <span className="sp-price__val">$2,500+</span>
                <span className="sp-price__note">Included with monthly retainer</span>
              </div>
              <Link to="/contacts" className="btn btn--primary">Book a Call</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section--dark cta-section">
        <div className="container cta-section__inner">
          <div className="cta-section__content">
            <h2 className="section-title section-title--inv">Ready to get your free website?</h2>
            <p className="section-sub section-sub--inv">Book a call and we'll walk you through the process. No commitment required.</p>
            <div className="cta-section__actions">
              <Link to="/contacts" className="btn btn--primary btn--xl">Book a Free Call</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
