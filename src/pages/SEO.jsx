import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './ServicePage.css'

const pillars = [
  { icon: '🔧', title: 'Technical SEO', desc: 'Site speed, crawlability, Core Web Vitals, structured data, XML sitemaps, and mobile optimization.' },
  { icon: '🔑', title: 'Keyword Strategy', desc: 'Local intent keywords mapped to your services and cities. Bottom-of-funnel first — the searches that convert.' },
  { icon: '✍️', title: 'On-Page Optimization', desc: 'Titles, meta descriptions, header hierarchy, internal linking, and content that earns rankings.' },
  { icon: '📍', title: 'Local SEO', desc: 'Google Business Profile, local citations, map pack rankings. The stuff that gets you calls, not just traffic.' },
  { icon: '🔗', title: 'Link Building', desc: 'Quality backlinks from relevant local and industry sources. We don\'t do spam — we earn real authority.' },
  { icon: '📈', title: 'Reporting', desc: 'Monthly reports showing keyword rankings, traffic, leads, and exactly where your investment is going.' },
]

const faqs = [
  { q: 'How much do SEO services cost?', a: 'Our local SEO packages start at $1,000/month. The investment depends on your market competitiveness and how many services/locations you want to rank for. We provide a custom quote after a free audit.' },
  { q: 'How long does SEO take to work?', a: 'Most clients see meaningful movement in 6–10 weeks. Strong, competitive rankings typically take 3–6 months. SEO is an investment that compounds over time — unlike ads, the results don\'t stop when you pause.' },
  { q: 'Do you work with small budgets?', a: 'Yes. We have packages designed specifically for small local businesses. We focus on the highest-impact work first so you get results even with a modest budget.' },
  { q: 'What makes local SEO different?', a: 'Local SEO targets customers searching in a specific geographic area. It includes Google Business Profile optimization, local citations, and map pack rankings — not just website rankings.' },
  { q: 'Can you guarantee rankings?', a: 'No one can guarantee specific rankings — and any agency that does is lying. What we guarantee is transparent work, clear reporting, and strategies based on what actually works for local businesses.' },
]

const targets = ['Plumbers & Drain Services', 'HVAC & Heating', 'Electricians', 'Roofers', 'Restaurants & Cafes', 'Hospitality & Hotels', 'Lawyers & Law Firms', 'Dentists & Medical', 'Landscaping', 'Cleaning Services']

export default function SEOPage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <SEO
        title="SEO Services Etobicoke & Toronto — Local SEO for Small Business"
        description="Local SEO services in Etobicoke and Toronto. We help service businesses rank on Google's first page with keyword strategy, on-page SEO, GBP, and link building. From $1,000/mo."
        canonical="/services/search-engine-optimization"
      />
      <main>
      <section className="sp-hero">
        <div className="container sp-hero__inner">
          <div className="sp-hero__content">
            <span className="section-label">SEO Services · Etobicoke &amp; Toronto</span>
            <h1 className="sp-hero__headline">
              SEO Services for<br /><em>Local Businesses</em>
            </h1>
            <p className="sp-hero__sub">
              We help local service businesses rank on the first page of Google. Full-service local SEO — from technical fixes to content strategy to Google Business Profile optimization.
            </p>
            <div className="sp-hero__actions">
              <Link to="/contacts" className="btn btn--primary btn--lg">Get a Free Audit</Link>
              <Link to="/affordable-seo-packages" className="btn btn--outline btn--lg">View Packages</Link>
            </div>
            <div className="sp-hero__checklist">
              {['60% of local searches lead to a direct call or visit', 'Most local businesses have major fixable SEO gaps', 'Results typically begin within 6–10 weeks', 'Monthly transparent reporting — no black box'].map(t => (
                <span key={t} className="sp-hero__check">{t}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="sp-hero__card">
              <h3>Free SEO Audit</h3>
              <p>We'll analyze your current rankings, identify the gaps, and show you exactly what it would take to outrank your competitors.</p>
              <div className="sp-price">
                <span className="sp-price__from">SEO packages from</span>
                <span className="sp-price__val">$1,000<span style={{ fontSize: 'var(--text-base)', fontWeight: 500 }}>/mo</span></span>
                <span className="sp-price__note">Custom pricing after free audit</span>
              </div>
              <Link to="/contacts" className="btn btn--primary">Get a Free Audit</Link>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-light)', textAlign: 'center' }}>No commitment required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="sp-section sp-section--alt">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">What's Included</span>
            <h2 className="section-title">Full-service local SEO</h2>
            <p className="section-sub">We don't do one-off audits. We manage your entire SEO presence month over month.</p>
          </div>
          <div className="sp-features-grid">
            {pillars.map(p => (
              <div key={p.title} className="sp-feat-card">
                <div className="sp-feat-card__icon" style={{ fontSize: '1.3rem' }}>{p.icon}</div>
                <h3 className="sp-feat-card__title">{p.title}</h3>
                <p className="sp-feat-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="sp-section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Who We Serve</span>
            <h2 className="section-title">We specialize in local service businesses</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', justifyContent: 'center' }}>
            {targets.map(t => <span key={t} className="badge" style={{ fontSize: 'var(--text-sm)', padding: '0.5rem 1rem' }}>{t}</span>)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sp-section sp-section--alt">
        <div className="container container--sm">
          <div className="section-header section-header--center">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Common questions</h2>
          </div>
          <div className="sp-faq">
            {faqs.map((f, i) => (
              <div key={i} className={`sp-faq-item${openFaq === i ? ' sp-faq-item--open' : ''}`}>
                <button className="sp-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}
                  <span className="sp-faq-q__icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                  </span>
                </button>
                {openFaq === i && <div className="sp-faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark cta-section">
        <div className="container cta-section__inner">
          <div className="cta-section__content">
            <h2 className="section-title section-title--inv">See where you stand</h2>
            <p className="section-sub section-sub--inv">Get a free SEO audit. We'll show you your current rankings, what your competitors are doing, and what it would take to outrank them.</p>
            <div className="cta-section__actions">
              <Link to="/contacts" className="btn btn--primary btn--xl">Get a Free Audit</Link>
              <Link to="/affordable-seo-packages" className="btn btn--outline-inv btn--lg">View Packages</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
