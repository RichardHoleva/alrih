import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang,     setLang]     = useState('EN')
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar__inner">

        <Link to="/" className="navbar__logo">ALRICH<span className="navbar_logo_dot">.</span></Link>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={`navbar__link ${location.pathname === link.href ? 'navbar__link--active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__right">
          <div className="navbar__lang">
            <button
              className={`navbar__lang-btn ${lang === 'SK' ? 'navbar__lang-btn--active' : ''}`}
              onClick={() => setLang('SK')}
            >
              SK
            </button>
            <span className="navbar__lang-sep">/</span>
            <button
              className={`navbar__lang-btn ${lang === 'EN' ? 'navbar__lang-btn--active' : ''}`}
              onClick={() => setLang('EN')}
            >
              EN
            </button>
          </div>

          <button
            className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="navbar__burger-line" />
            <span className="navbar__burger-line" />
            <span className="navbar__burger-line" />
          </button>
        </div>

      </div>
    </nav>
  )
}
