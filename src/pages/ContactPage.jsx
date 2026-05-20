import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'

export default function ContactPage() {
  const { t } = useTranslation('contact')

  return (
    <>
      <Navbar />

      <section className="about-intro">
        <Reveal>
          <div className="about-intro__inner">
            <p className="about-intro__label">{t('page.label')}</p>
            <h1 className="about-intro__heading">
              {t('page.headingPre')} <em>{t('page.headingEm1')}</em> {t('page.headingMid')} <em>{t('page.headingEm2')}</em>
            </h1>
            <p className="about-intro__body">{t('page.body')}</p>
          </div>
        </Reveal>
      </section>

      <Reveal delay={100}>
        <ContactForm />
      </Reveal>

      <Footer />
    </>
  )
}
