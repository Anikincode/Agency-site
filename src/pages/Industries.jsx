import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './ServicePage.css'
import './Industries.css'

const industries = [
  { slug: 'contractors', name: 'Contractors and Trades', icon: 'T', headline: 'Marketing for Local Contractors and Trades', desc: 'Plumbers, electricians, roofers, HVAC techs. We build the digital presence that keeps your phone ringing. Local SEO, Google Ads, and websites built to generate service calls.', services: ['Local SEO and map pack rankings', 'Google Ads for service calls', 'Website built for conversions', 'Google Business Profile optimization'], result: 'Most trade businesses see a 2-3x increase in inbound leads within 90 days.' },
  { slug: 'hvac', name: 'HVAC and Heating', icon: 'H', headline: 'Digital Marketing for HVAC Companies', desc: 'Heating and cooling is seasonal, competitive, and search-driven. We help HVAC companies dominate local search, run profitable campaigns, and convert more visitors.', services: ['Emergency service keyword targeting', 'Seasonal Google Ads campaigns', 'Local SEO for multiple service areas', 'Review and reputation management'], result: 'Our HVAC clients average 40% more booked jobs during peak season.' },
  { slug: 'landscaping', name: 'Landscaping', icon: 'L', headline: 'Marketing for Landscaping Companies', desc: 'We help you rank in the neighbourhoods you serve, run seasonal ad campaigns, and build a brand people trust.', services: ['Neighbourhood-level local SEO', 'Before and after portfolio pages', 'Seasonal Google and Meta ads', 'Google Business Profile management'], result: 'Landscaping clients see strong lead growth heading into spring season.' },
  { slug: 'restaurants', name: 'Restaurants and Cafes', icon: 'R', headline: 'Digital Marketing for Restaurants and Cafes', desc: 'We optimize your Google presence, manage reviews, run social ads, and build websites that turn searches into reservations.', services: ['Google Business Profile and Maps optimization', 'Review generation and management', 'Instagram and Facebook ad campaigns', 'Local keyword targeting'], result: 'Restaurant clients have seen up to 40% more direct reservations.' },
  { slug: 'hotels', name: 'Hotels and Hospitality', icon: 'O', headline: 'Digital Marketing for Hotels and Hospitality', desc: 'We help independent hotels rank in direct search, run Google Hotel Ads, and convert more organic traffic to direct bookings.', services: ['Direct booking SEO strategy', 'Google Hotel Ads management', 'Local and travel keyword targeting', 'Conversion-focused website design'], result: 'Hotel clients have achieved 2x direct booking rates year over year.' },
  { slug: 'lawyers', name: 'Lawyers and Law Firms', icon: 'J', headline: 'Legal Marketing for Law Firms in Toronto', desc: 'We help law firms rank for the practice areas that matter, generate quality leads, and build authority online.', services: ['Practice area keyword targeting', 'Google Ads for legal services', 'E-E-A-T content and authority building', 'Google Business Profile for law firms'], result: 'Law firm clients see significant improvement in qualified lead volume.' },
  { slug: 'medical', name: 'Dentists and Medical Clinics', icon: 'D', headline: 'Digital Marketing for Dental and Medical Clinics', desc: 'We help dental and medical practices rank, generate new patient inquiries, and build trust through reviews and local SEO.', services: ['New patient acquisition SEO', 'Google Ads for dental procedures', 'Review strategy and reputation management', 'Local map pack optimization'], result: 'Dental clients consistently grow new patient bookings through organic search.' },
]

export default function Industries() {
  return (
    <>
      <SEO
        title='Marketing by Industry — Digital Marketing for Local Service Businesses'
        description='Specialized digital marketing for contractors, HVAC, landscaping, restaurants, hotels, law firms, and medical clinics in Toronto and Etobicoke.'
        canonical='/industries'
      />
      <main>
        <section className='sp-hero' style={{ paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div className='container'>
            <div style={{ maxWidth: '720px' }}>
              <span className='section-label'>Marketing by Industry</span>
              <h1 className='sp-hero__headline' style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>
                We know your industry.<br /><em>We know your customers.</em>
              </h1>
              <p className='sp-hero__sub'>We specialize in local service businesses. Every industry has different keywords, customer intent, and seasonality. We build strategies that account for all of it.</p>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <div className='ind-grid'>
              {industries.map(ind => (
                <div key={ind.slug} className='ind-card'>
                  <div className='ind-card__header'>
                    <div className='ind-card__icon'>{ind.icon}</div>
                    <span className='section-label'>{ind.name}</span>
                  </div>
                  <h2 className='ind-card__title'>{ind.headline}</h2>
                  <p className='ind-card__desc'>{ind.desc}</p>
                  <ul className='svc-card__list'>{ind.services.map(s => <li key={s}>{s}</li>)}</ul>
                  <div className='ind-card__result'><strong>Result: </strong>{ind.result}</div>
                  <Link to='/contacts' className='btn btn--primary'>Get a Free Audit</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className='section--dark cta-section'>
          <div className='container cta-section__inner'>
            <div className='cta-section__content'>
              <h2 className='section-title section-title--inv'>Do not see your industry?</h2>
              <p className='section-sub section-sub--inv'>We work with all local service businesses. Book a free session and we will put together a plan for your market.</p>
              <div className='cta-section__actions'>
                <Link to='/contacts' className='btn btn--primary btn--xl'>Book a Free Session</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
