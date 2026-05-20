import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NAV_KEYS = [
  { key: 'home',     href: '/' },
  { key: 'projects', href: '/projects' },
  { key: 'about',    href: '/about' },
  { key: 'contact',  href: '/contact' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation('common')
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar__inner">

        <Link to="/" className="navbar__logo">ALRIH<span className="navbar_logo_dot">.</span></Link>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_KEYS.map((link) => (
            <li key={link.key}>
              <Link
                to={link.href}
                className={`navbar__link ${location.pathname === link.href ? 'navbar__link--active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {t(`nav.${link.key}`)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__right">
          <div className="navbar__lang">
            <button
              className={`navbar__lang-btn ${i18n.language === 'sk' ? 'navbar__lang-btn--active' : ''}`}
              onClick={() => i18n.changeLanguage('sk')}
            >
              SK
            </button>
            <span className="navbar__lang-sep">/</span>
            <button
              className={`navbar__lang-btn ${i18n.language === 'en' ? 'navbar__lang-btn--active' : ''}`}
              onClick={() => i18n.changeLanguage('en')}
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
