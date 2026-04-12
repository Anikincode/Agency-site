import { Link } from 'react-router-dom'
import './ServicePage.css'

const packages = [
  {
    name: 'Starter',
    price: '$1,000',
    period: '/month',
    desc: 'Best for small local businesses in low-to-medium competition markets.',
    features: ['Keyword research (up to 20 keywords)', 'On-page optimization (up to 5 pages)', 'Google Business Profile management', 'Monthly ranking report', 'Email support'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$1,750',
    period: '/month',
    desc: 'Best for local businesses in competitive markets or multiple service areas.',
    features: ['Keyword research (up to 50 keywords)', 'On-page optimization (up to 15 pages)', 'Google Business Profile management', 'Local citation building', '2 blog posts per month', 'Link building (5 links/month)', 'Monthly strategy call + report'],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Authority',
    price: '$3,000',
    period: '/month',
    desc: 'Best for businesses in highly competitive markets targeting multiple cities.',
    features: ['Unlimited keyword targeting', 'Full site optimization', 'GBP management + Posts', 'Citation building + cleanup', '4 blog posts per month', 'Aggressive link building', 'Weekly reporting + monthly call'],
    cta: 'Get Started',
    highlighted: false,
  },
]

export default function SEOPackages() {
  return (
    <main>
      <section className="sp-hero" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-6)' }}>
          <span className="section-label">SEO Packages</span>
          <h1 className="sp-hero__headline">Affordable SEO Packages<br /><em>for Local Businesses</em></h1>
          <p className="sp-hero__sub">Transparent pricing. No lock-in contracts. Every package includes a free audit before we start.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)', alignItems: 'start' }}>
            {packages.map(p => (
              <div key={p.name} style={{
                background: p.highlighted ? 'var(--color-text)' : 'var(--color-bg)',
                border: `1.5px solid ${p.highlighted ? 'var(--color-text)' : 'var(--color-border)'}`,
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-10) var(--space-8)',
                display: 'flex', flexDirection: 'column', gap: 'var(--space-5)',
              }}>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: p.highlighted ? 'rgba(255,255,255,0.4)' : 'var(--color-text-light)', marginBottom: 'var(--space-2)' }}>{p.name}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-1)' }}>
                    <span style={{ fontSize: 'var(--text-5xl)', fontWeight: 900, letterSpacing: '-0.05em', color: p.highlighted ? '#fff' : 'var(--color-text)' }}>{p.price}</span>
                    <span style={{ fontSize: 'var(--text-base)', color: p.highlighted ? 'rgba(255,255,255,0.4)' : 'var(--color-text-light)' }}>{p.period}</span>
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: p.highlighted ? 'rgba(255,255,255,0.55)' : 'var(--color-text-muted)', lineHeight: 1.7, marginTop: 'var(--space-3)' }}>{p.desc}</p>
                </div>
                <div style={{ borderTop: `1px solid ${p.highlighted ? 'rgba(255,255,255,0.1)' : 'var(--color-border)'}`, paddingTop: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {p.features.map(f => (
                    <div key={f} style={{ display: 'flex', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: p.highlighted ? 'rgba(255,255,255,0.7)' : 'var(--color-text-muted)', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>
                <Link to="/contacts" className={`btn btn--lg${p.highlighted ? ' btn--primary' : ' btn--outline'}`} style={{ marginTop: 'auto' }}>{p.cta}</Link>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 'var(--text-sm)', color: 'var(--color-text-light)', marginTop: 'var(--space-8)' }}>All packages include a free audit. No lock-in contracts. Cancel anytime with 30 days notice.</p>
        </div>
      </section>

      <section className="section--dark cta-section">
        <div className="container cta-section__inner">
          <div className="cta-section__content">
            <h2 className="section-title section-title--inv">Not sure which package?</h2>
            <p className="section-sub section-sub--inv">Book a free audit and we'll tell you exactly what you need based on your market and goals.</p>
            <div className="cta-section__actions">
              <Link to="/contacts" className="btn btn--primary btn--xl">Get a Free Audit</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
