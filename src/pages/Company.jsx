import { Link } from 'react-router-dom'
import './Company.css'

const leadership = [
  { name: 'Kirill Anikin', role: 'Founder & CEO', initials: 'KA', bio: 'Founded Anikin Technologies to help local businesses compete online. Focused on systems that produce measurable results.' },
  { name: 'Halou Wang', role: 'CTO', initials: 'HW', bio: 'Leads technical strategy and development. Builds the infrastructure behind our clients\' digital presence.' },
  { name: 'Agnes Mickelson', role: 'Media & Product', initials: 'AM', bio: 'Leads media strategy and product development. Ensures every client deliverable meets our quality standards.' },
]

const team = [
  { name: 'Laurent DeAngelo', role: 'UX Designer', initials: 'LD' },
  { name: 'Danielle Marco', role: 'Automation Engineer', initials: 'DM' },
  { name: 'Richard White', role: 'Sales', initials: 'RW' },
  { name: 'Arlo Jenkins', role: 'Partnerships', initials: 'AJ' },
  { name: 'Artem Gurevich', role: 'C++ Developer', initials: 'AG' },
]

const values = [
  { title: 'Transparency', desc: 'You always know where your money is going and what results it\'s producing. No black boxes.' },
  { title: 'Results Over Activity', desc: 'We measure success by leads and revenue — not impressions, clicks, or other vanity metrics.' },
  { title: 'Local Focus', desc: 'We specialize in local service businesses. We know your market, your customers, and what works.' },
  { title: 'Long-Term Partnership', desc: 'We act like part of your team, not a vendor you manage. Your growth is our business.' },
]

const stats = [
  { val: '45', label: 'Websites Built' },
  { val: '25+', label: 'Active Clients' },
  { val: '20', label: 'Supported Platforms' },
  { val: '1,000+', label: 'Daily Users Managed' },
]

export default function Company() {
  return (
    <main>
      {/* Hero */}
      <section className="company-hero">
        <div className="container company-hero__inner">
          <div className="company-hero__content">
            <span className="section-label">About Us</span>
            <h1 className="company-hero__title">We're Anikin Technologies</h1>
            <p className="company-hero__sub">A digital marketing agency based in Etobicoke, Ontario. We help local service businesses — plumbers, HVAC, electricians, and more — get found on Google, run profitable ads, and build a digital presence that works.</p>
            <div className="company-hero__actions">
              <Link to="/contacts" className="btn btn--primary btn--lg">Work With Us</Link>
              <Link to="/work" className="btn btn--outline btn--lg">See Our Work</Link>
            </div>
          </div>
          <div className="company-stats">
            {stats.map(s => (
              <div key={s.label} className="company-stat">
                <span className="company-stat__val">{s.val}</span>
                <span className="company-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">How we work</h2>
          </div>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Leadership</span>
            <h2 className="section-title">Who leads the work</h2>
          </div>
          <div className="leadership-grid">
            {leadership.map(m => (
              <div key={m.name} className="leader-card">
                <div className="leader-card__avatar">{m.initials}</div>
                <div className="leader-card__info">
                  <h3 className="leader-card__name">{m.name}</h3>
                  <span className="leader-card__role">{m.role}</span>
                  <p className="leader-card__bio">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Team</span>
            <h2 className="section-title">The full team</h2>
          </div>
          <div className="team-row">
            {team.map(m => (
              <div key={m.name} className="team-chip">
                <div className="team-chip__avatar">{m.initials}</div>
                <div>
                  <div className="team-chip__name">{m.name}</div>
                  <div className="team-chip__role">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--dark cta-section">
        <div className="container cta-section__inner">
          <div className="cta-section__content">
            <h2 className="section-title section-title--inv">Ready to work together?</h2>
            <p className="section-sub section-sub--inv">Book a free 30-minute demo. We'll show you exactly what we'd do for your business and what results to expect.</p>
            <div className="cta-section__actions">
              <Link to="/contacts" className="btn btn--primary btn--xl">Book a Free Demo</Link>
              <Link to="/careers" className="btn btn--outline-inv btn--lg">We're Hiring</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
