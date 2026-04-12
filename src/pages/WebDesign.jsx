import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './ServicePage.css'

const features = [
  { icon: '⚡', title: 'Blazing Fast', desc: 'We build with performance in mind. Core Web Vitals optimized. Fast load times directly impact your Google rankings.' },
  { icon: '📱', title: 'Mobile-First', desc: 'Over 70% of local searches happen on mobile. Your site will look and perform flawlessly on every device.' },
  { icon: '🔍', title: 'SEO-Ready', desc: 'Structured data, clean code, proper heading hierarchy — everything Google needs to understand and rank your site.' },
  { icon: '🎯', title: 'Conversion-Focused', desc: 'Every page is designed to turn visitors into leads. Strategic CTAs, trust signals, and clear service descriptions.' },
  { icon: '🔒', title: 'Secure & Reliable', desc: 'SSL certificates, reliable hosting, and regular backups. We keep your site running and your customers\' data safe.' },
  { icon: '📊', title: 'Analytics Ready', desc: 'Google Analytics 4, Search Console, and conversion tracking — installed and configured from day one.' },
]

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We learn your business, goals, and ideal customers. 30 minutes is usually enough.' },
  { step: '02', title: 'Strategy & Wireframe', desc: 'We map out every page, the user flow, and the content structure before a single pixel is designed.' },
  { step: '03', title: 'Design & Build', desc: 'Custom design (no templates), built clean and fast. You review and approve before launch.' },
  { step: '04', title: 'Launch & Optimize', desc: 'We launch, submit to Google, and monitor the first 30 days to make sure everything performs.' },
]

const faqs = [
  { q: 'How much does a website cost?', a: 'Most local business websites run between $2,500–$6,000 depending on the number of pages and features needed. We provide a fixed quote upfront — no surprises.' },
  { q: 'How long does it take?', a: 'Typically 3–5 weeks from kick-off to launch. We work efficiently and keep you updated throughout.' },
  { q: 'Will my site rank on Google?', a: 'We build with SEO baked in from the start. Your site will be properly structured, fast, and ready for local SEO campaigns. Ranking results depend on ongoing SEO work.' },
  { q: 'Can you redesign my existing site?', a: 'Yes. Redesigns are one of our most common projects. We migrate your content, improve the structure, and modernize the design without losing your existing rankings.' },
  { q: 'What if I need changes after launch?', a: 'We offer ongoing maintenance plans and are available for updates. Most clients stay on a monthly plan so they\'re never stuck.' },
]

const portfolio = [
  { name: 'Shelly Tap and Grill', industry: 'Restaurant', result: 'New site + 40% more reservations' },
  { name: 'Larita Hotel', industry: 'Hospitality', result: 'Full redesign + direct booking system' },
  { name: 'Maple Leaf Inn', industry: 'Hospitality', result: '2.1× direct bookings year-over-year' },
]

export default function WebDesign() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <SEO
        title="Web Design Etobicoke — Custom Websites for Local Businesses"
        description="Professional web design in Etobicoke, Ontario. We build fast, mobile-first websites for local service businesses starting at $2,500. SEO-ready from day one."
        canonical="/web-design-etobicoke"
      />
      <main>
      {/* Hero */}
      <section className="sp-hero">
        <div className="container sp-hero__inner">
          <div className="sp-hero__content">
            <span className="section-label">Web Design · Etobicoke, Ontario</span>
            <h1 className="sp-hero__headline">
              Website Design in<br /><em>Etobicoke, Ontario</em>
            </h1>
            <p className="sp-hero__sub">
              We design and build fast, conversion-focused websites for local service businesses. Every site we build is custom, SEO-ready, and designed to turn visitors into customers.
            </p>
            <div className="sp-hero__actions">
              <Link to="/contacts" className="btn btn--primary btn--lg">Get a Free Quote</Link>
              <Link to="/work" className="btn btn--outline btn--lg">See Our Work</Link>
            </div>
            <div className="sp-hero__checklist">
              {['Custom design — no page builders or templates', 'Mobile-first, Google Core Web Vitals optimized', 'SEO and conversion strategy included', '3–5 week delivery timeline'].map(t => (
                <span key={t} className="sp-hero__check">{t}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="sp-hero__card">
              <h3>Get a Quote</h3>
              <p>Most local business websites start at $2,500. Tell us about your project and we'll give you a fixed price with no surprises.</p>
              <div className="sp-price">
                <span className="sp-price__from">Starting from</span>
                <span className="sp-price__val">$2,500</span>
                <span className="sp-price__note">Fixed price — no hourly billing</span>
              </div>
              <Link to="/contacts" className="btn btn--primary">Get a Free Quote</Link>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-light)', textAlign: 'center' }}>No commitment required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="sp-section sp-section--alt">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">What's Included</span>
            <h2 className="section-title">Built to perform from day one</h2>
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

      {/* Process */}
      <section className="sp-section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Our Process</span>
            <h2 className="section-title">How we build your site</h2>
          </div>
          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)' }}>
            {process.map(p => (
              <div key={p.step} className="step-card">
                <div className="step-card__num">{p.step}</div>
                <h3 className="step-card__title">{p.title}</h3>
                <p className="step-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="sp-section sp-section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Recent Work</span>
            <h2 className="section-title">Some of our builds</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
            {portfolio.map(p => (
              <div key={p.name} className="sp-feat-card" style={{ gap: 'var(--space-3)' }}>
                <div style={{ height: '140px', background: 'var(--color-bg-warm)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--text-2xl)' }}>🖥</div>
                <h3 className="sp-feat-card__title">{p.name}</h3>
                <span className="badge">{p.industry}</span>
                <p className="sp-feat-card__desc">{p.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* CTA */}
      <section className="section--dark cta-section">
        <div className="container cta-section__inner">
          <div className="cta-section__content">
            <h2 className="section-title section-title--inv">Ready for a site that actually works?</h2>
            <p className="section-sub section-sub--inv">Get a free quote. We'll review your current site and show you exactly what we'd build and why.</p>
            <div className="cta-section__actions">
              <Link to="/contacts" className="btn btn--primary btn--xl">Get a Free Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
