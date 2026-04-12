import { Link } from 'react-router-dom'
import './Footer.css'

const columns = [
  {
    title: 'Services',
    links: [
      { label: 'Web Design', href: '/web-design-etobicoke' },
      { label: 'Local SEO', href: '/services/search-engine-optimization' },
      { label: 'Google Ads', href: '/google-ads' },
      { label: 'Free Website', href: '/free-website' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/company' },
      { label: 'Our Work', href: '/work' },
      { label: 'Knowledge', href: '/knowledge' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'SEO Packages', href: '/affordable-seo-packages' },
      { label: 'Small Business SEO', href: '/small-business-seo-packages' },
      { label: 'SEO Trends', href: '/seo-trends' },
      { label: 'Book a Demo', href: '/contacts' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <AnikinMark />
              <span>Anikin Technologies</span>
            </Link>
            <p className="footer__tagline">
              We help local businesses get found on Google through SEO, web design, and paid advertising that drives real results.
            </p>
            <div className="footer__social">
              <a href="https://instagram.com/anikintechnologies" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IgIcon /></a>
              <a href="https://linkedin.com/company/anikintechnologies" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LiIcon /></a>
              <a href="https://facebook.com/anikintechnologies" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FbIcon /></a>
              <a href="https://x.com/anikintechnologies" target="_blank" rel="noopener noreferrer" aria-label="X"><XIcon /></a>
            </div>
          </div>

          {columns.map(col => (
            <div key={col.title} className="footer__col">
              <span className="footer__col-title">{col.title}</span>
              {col.links.map(l => <Link key={l.href} to={l.href}>{l.label}</Link>)}
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© {new Date().getFullYear()} Anikin Technologies. All rights reserved.</p>
          <nav className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms</Link>
            <Link to="/accessibility-statement">Accessibility</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

function AnikinMark() {
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#1a56ff"/>
      <path d="M8 24L16 8L24 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 19.5H21.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}
function IgIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg> }
function LiIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4V9h4v2a6 6 0 014-3z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> }
function FbIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> }
function XIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.254 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg> }
