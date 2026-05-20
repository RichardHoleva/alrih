import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation('common')
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__logo">ALRIH<span className="footer__dot">.</span></p>
          <p className="footer__tagline">{t('footer.tagline')}</p>
        </div>

        <div className="footer__col">
          <p className="footer__col-label">{t('footer.studioLabel')}</p>
          <ul className="footer__col-list">
            <li>Štúrova 14</li>
            <li>811 02 Bratislava</li>
            <li>Slovakia</li>
          </ul>
        </div>

        <div className="footer__col">
          <p className="footer__col-label">{t('footer.navLabel')}</p>
          <ul className="footer__col-list">
            <li><Link to="/">{t('nav.home')}</Link></li>
            <li><Link to="/projects">{t('nav.projects')}</Link></li>
            <li><Link to="/about">{t('nav.about')}</Link></li>
            <li><Link to="/contact">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <p className="footer__col-label">{t('footer.followLabel')}</p>
          <ul className="footer__col-list">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">{t('footer.copyright')}</p>
        <button className="footer__back-top" onClick={scrollToTop}>
          {t('footer.backToTop')}
          <span className="footer__back-top-icon">&#8593;</span>
        </button>
      </div>
    </footer>
  )
}
