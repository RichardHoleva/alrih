export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__logo">ALRICH<span className="footer__dot">.</span></p>
          <p className="footer__tagline">
            Independent architecture studio. Residential,
            cultural and small commercial work across
            Slovakia and Central Europe.
          </p>
        </div>

        <div className="footer__col">
          <p className="footer__col-label">Studio</p>
          <ul className="footer__col-list">
            <li>Štúrova 14</li>
            <li>811 02 Bratislava</li>
            <li>Slovakia</li>
          </ul>
        </div>

        <div className="footer__col">
          <p className="footer__col-label">Navigation</p>
          <ul className="footer__col-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <p className="footer__col-label">Follow</p>
          <ul className="footer__col-list">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">© 2026 Alrich Studio. All rights reserved.</p>
        <button className="footer__back-top" onClick={scrollToTop}>
          Back to top
          <span className="footer__back-top-icon">&#8593;</span>
        </button>
      </div>
    </footer>
  )
}
