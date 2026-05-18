import { useState } from 'react'

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const [lang,       setLang]       = useState('EN')

  return (
    <nav className="navbar">
      <div className="navbar__inner">

        <a href="/" className="navbar__logo">ALRICH<a className='navbar_logo_dot'>.</a></a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`navbar__link ${activeLink === link.label ? 'navbar__link--active' : ''}`}
                onClick={() => { setActiveLink(link.label); setMenuOpen(false) }}
              >
                {link.label}
              </a>
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
