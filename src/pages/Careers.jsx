import { Link } from 'react-router-dom'
import './SimplePage.css'

const roles = [
  { title: 'Digital Marketing Specialist', type: 'Full-time · Remote', desc: 'Manage SEO campaigns, paid ads, and web content for local service business clients. 2+ years experience required.' },
  { title: 'Content Writer / Copywriter', type: 'Part-time · Remote', desc: 'Write landing pages, blog posts, and case studies for our clients and internal content engine. Strong SEO understanding required.' },
  { title: 'UI/UX Designer', type: 'Contract · Remote', desc: 'Design conversion-focused websites and landing pages. Proficiency in Figma required. Portfolio of web design work essential.' },
  { title: 'Social Media Manager', type: 'Part-time · Remote', desc: 'Manage LinkedIn, Instagram, TikTok, and YouTube for agency and clients. Experience with local service businesses a plus.' },
  { title: 'Data Analyst', type: 'Full-time · Remote', desc: 'Build reporting dashboards and analyze campaign performance across SEO, paid ads, and web analytics.' },
  { title: 'DevSecOps Engineer', type: 'Full-time · Remote', desc: 'Manage CI/CD pipelines, compliance, and infrastructure for client websites and internal tools.' },
]

export default function Careers() {
  return (
    <main>
      <section className="sp-hero" style={{ paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="section-label">Careers</span>
          <h1 className="sp-hero__headline" style={{ marginTop: 'var(--space-4)' }}>Work with us</h1>
          <p className="sp-hero__sub">We're a small, focused team building digital marketing systems for local businesses. We're always looking for sharp people who do great work.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Open Roles</span>
            <h2 className="section-title">Current openings</h2>
          </div>
          <div className="roles-grid">
            {roles.map(r => (
              <div key={r.title} className="role-card">
                <div className="role-card__header">
                  <h3 className="role-card__title">{r.title}</h3>
                  <span className="badge">{r.type}</span>
                </div>
                <p className="role-card__desc">{r.desc}</p>
                <a href="mailto:kirill.s.anikin@gmail.com?subject=Application: " className="btn btn--outline btn--sm">Apply Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--soft section">
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-5)' }}>
          <h2 className="section-title">Don't see a fit?</h2>
          <p className="section-sub">If you think you'd be a great addition to the team, send us a note. We're always open to exceptional people.</p>
          <a href="mailto:kirill.s.anikin@gmail.com?subject=General Application" className="btn btn--primary btn--lg">Send a Note</a>
        </div>
      </section>
    </main>
  )
}
