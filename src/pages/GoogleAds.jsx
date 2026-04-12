import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './ServicePage.css'

const features = [
  { icon: '🔍', title: 'Search Campaigns', desc: 'Show up at the top of Google when someone searches for your exact service in your city. Intent-driven, high-conversion traffic.' },
  { icon: '🎯', title: 'Competitor Targeting', desc: 'Capture searches happening for your competitors. Show up when they search for your biggest rivals.' },
  { icon: '📱', title: 'Display & Retargeting', desc: 'Stay in front of people who\'ve already visited your site. Turn browsers into buyers with smart retargeting.' },
  { icon: '📘', title: 'Facebook & Instagram Ads', desc: 'Social ads that build awareness and drive leads for local service businesses. Strong creative + precise targeting.' },
  { icon: '📊', title: 'Conversion Tracking', desc: 'Every call, form fill, and booking tracked. You know exactly which ads are generating revenue.' },
  { icon: '📈', title: 'Monthly Reporting', desc: 'Clear, transparent reports — impressions, clicks, conversions, cost per lead. No vanity metrics.' },
]

const faqs = [
  { q: 'What\'s the minimum budget for Google Ads?', a: 'We recommend a minimum ad spend of $1,000–$1,500/month for local service businesses. This gives the campaigns enough data to optimize. Our management fee is separate.' },
  { q: 'How quickly can I see results?', a: 'Unlike SEO, ads can drive leads within days of launching. The first 2–4 weeks are a learning phase; after that, performance typically improves significantly.' },
  { q: 'Do you manage Facebook Ads too?', a: 'Yes. We manage Google Search, Google Display, Facebook, and Instagram ads. Many clients run both Google and Facebook together for maximum reach.' },
  { q: 'What\'s your management fee?', a: 'Our management fee starts at $500/month. Final pricing depends on the number of campaigns, platforms, and ad spend volume. We provide a full quote after a free strategy session.' },
  { q: 'Can you take over my existing campaigns?', a: 'Yes. We audit your current campaigns, identify waste and opportunities, and take over management. Most inherited campaigns have significant room for improvement.' },
]

export default function GoogleAds() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main>
      <section className="sp-hero">
        <div className="container sp-hero__inner">
          <div className="sp-hero__content">
            <span className="section-label">Google &amp; Facebook Ads · Etobicoke &amp; Toronto</span>
            <h1 className="sp-hero__headline">
              Paid Ads That Drive<br /><em>Real Leads</em>
            </h1>
            <p className="sp-hero__sub">
              We build and manage Google Ads and Facebook campaigns for local service businesses. Every dollar tracked, every lead attributed. No guesswork.
            </p>
            <div className="sp-hero__actions">
              <Link to="/contacts" className="btn btn--primary btn--lg">Get a Free Strategy Session</Link>
            </div>
            <div className="sp-hero__checklist">
              {['Google Search, Display, and Retargeting', 'Facebook and Instagram Ads', 'Full conversion tracking from day one', 'Transparent monthly reporting'].map(t => (
                <span key={t} className="sp-hero__check">{t}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="sp-hero__card">
              <h3>Free Strategy Session</h3>
              <p>We'll review your current campaigns (or build from scratch) and show you exactly where your budget should go for the best ROI.</p>
              <div className="sp-price">
                <span className="sp-price__from">Management from</span>
                <span className="sp-price__val">$500<span style={{ fontSize: 'var(--text-base)', fontWeight: 500 }}>/mo</span></span>
                <span className="sp-price__note">Ad spend billed separately</span>
              </div>
              <Link to="/contacts" className="btn btn--primary">Book Free Session</Link>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-light)', textAlign: 'center' }}>No commitment required</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section sp-section--alt">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">What We Manage</span>
            <h2 className="section-title">Full-service paid advertising</h2>
          </div>
          <div className="sp-features-grid">
            {features.map(f => (
              <div key={f.title} className="sp-feat-card">
                <div className="sp-feat-card__icon" style={{ fontSize: '1.3rem' }}>{f.icon}</div>
                <h3 className="sp-feat-card__title">{f.title}</h3>
                <p className="sp-feat-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section">
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
            <h2 className="section-title section-title--inv">Stop wasting ad spend</h2>
            <p className="section-sub section-sub--inv">Book a free strategy session. We'll audit your current campaigns and show you exactly what's working, what's wasting budget, and what we'd do differently.</p>
            <div className="cta-section__actions">
              <Link to="/contacts" className="btn btn--primary btn--xl">Book Free Session</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
