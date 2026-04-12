import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Company', href: '/company' },
  { label: 'Knowledge', href: '/knowledge' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <AnikinMark />
          <span>Anikin Technologies</span>
        </Link>

        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map(l => (
            <Link
              key={l.href}
              to={l.href}
              className={`navbar__link${location.pathname.startsWith(l.href) ? ' navbar__link--active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="navbar__cta">
          <Link to="/contacts" className="btn btn--primary btn--sm">Book a Demo</Link>
        </div>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        <div className="navbar__mobile-inner">
          {navLinks.map(l => (
            <Link key={l.href} to={l.href} className="navbar__mobile-link">{l.label}</Link>
          ))}
          <div className="navbar__mobile-cta">
            <Link to="/contacts" className="btn btn--primary">Book a Demo</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function AnikinMark() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#1a56ff"/>
      <path d="M8 24L16 8L24 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 19.5H21.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}
