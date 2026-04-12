import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', business: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  return (
    <main>
      <section className="contact-hero">
        <div className="container">
          <span className="section-label">Contact</span>
          <h1 className="contact-hero__title">Book a Free Demo</h1>
          <p className="contact-hero__sub">30 minutes. We'll audit your online presence and show you exactly what we'd do — and what results to expect.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <div className="contact-info__block">
              <div className="contact-info__label">Email</div>
              <a href="mailto:kirill.s.anikin@gmail.com" className="contact-info__val">kirill.s.anikin@gmail.com</a>
            </div>
            <div className="contact-info__block">
              <div className="contact-info__label">Phone</div>
              <a href="tel:6479822545" className="contact-info__val">647-982-2545</a>
            </div>
            <div className="contact-info__block">
              <div className="contact-info__label">Location</div>
              <span className="contact-info__val">Etobicoke, Ontario</span>
            </div>
            <div className="contact-info__note">
              <p>We typically respond within a few hours during business hours. For urgent needs, call directly.</p>
            </div>
            <div className="contact-services">
              <div className="contact-info__label">Services</div>
              {['Web Design', 'Local SEO', 'Google Ads', 'GBP Optimization'].map(s => (
                <span key={s} className="badge" style={{ margin: '0 var(--space-2) var(--space-2) 0', display: 'inline-flex' }}>{s}</span>
              ))}
            </div>
          </div>

          {submitted ? (
            <div className="contact-success">
              <div className="contact-success__icon">✓</div>
              <h2>You're booked in.</h2>
              <p>We'll reach out within a few hours to confirm your demo time and send a calendar invite.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" name="name" type="text" placeholder="Jane Smith" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder="jane@yourbusiness.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="416-000-0000" value={form.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="business">Business Name</label>
                  <input id="business" name="business" type="text" placeholder="Your Business" value={form.business} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service">What are you looking for?</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select a service...</option>
                  <option value="seo">Local SEO</option>
                  <option value="web">Web Design</option>
                  <option value="ads">Google Ads</option>
                  <option value="gbp">Google Business Profile</option>
                  <option value="everything">Everything — I need a full plan</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Tell us about your business</label>
                <textarea id="message" name="message" rows="4" placeholder="What do you do, where are you located, and what's the goal?" value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%' }}>Book Your Free Demo</button>
              <p style={{ textAlign: 'center', fontSize: 'var(--text-xs)', color: 'var(--color-text-light)' }}>No commitment. No hard sell. Just a look at where you stand.</p>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
