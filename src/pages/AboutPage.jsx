import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import heroImg from '/ALRICH/images/Main_hero_image.png'

export default function AboutPage() {
  const { t } = useTranslation('about')
  const processSteps = t('process.steps', { returnObjects: true })

  return (
    <>
      <Navbar />

      {/* ── Intro ── */}
      <section className="about-intro">
        <Reveal>
          <div className="about-intro__inner">
            <p className="about-intro__label">{t('intro.label')}</p>
            <h1 className="about-intro__heading">
              {t('intro.headingPre')} <em>{t('intro.headingEm1')}</em> {t('intro.headingMid')} <em>{t('intro.headingEm2')}</em> {t('intro.headingSuf')}
            </h1>
            <p className="about-intro__body">{t('intro.body')}</p>
          </div>
        </Reveal>
      </section>

      {/* ── Team ── */}
      <section className="about-team">
        <div className="about-team__inner">
          <Reveal>
            <div className="about-team__header">
              <p className="about-team__label">{t('team.label')}</p>
              <h2 className="about-team__heading">
                {t('team.headingPre')} <em>{t('team.headingEm1')}</em> {t('team.headingMid')} <em>{t('team.headingEm2')}</em> {t('team.headingSuf')}
              </h2>
              <p className="about-team__sub">{t('team.sub')}</p>
            </div>
          </Reveal>
          <div className="about-team__grid">
            <Reveal delay={0}>
              <div className="team-card">
                <div className="team-card__photo-wrap">
                  <img src={heroImg} alt="Miroslav Cavo" className="team-card__photo" />
                </div>
                <p className="team-card__role">{t('team.miroslav.role')}</p>
                <h3 className="team-card__name">Miroslav Cavo</h3>
                <p className="team-card__bio">{t('team.miroslav.bio')}</p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="team-card">
                <div className="team-card__photo-wrap">
                  <img src={heroImg} alt="Nina Cavo" className="team-card__photo" />
                </div>
                <p className="team-card__role">{t('team.nina.role')}</p>
                <h3 className="team-card__name">Nina Cavo</h3>
                <p className="team-card__bio">{t('team.nina.bio')}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="about-story">
        <div className="about-story__inner">
          <Reveal>
            <div className="about-story__left">
              <p className="about-story__label">{t('story.label')}</p>
              <h2 className="about-story__heading">
                {t('story.headingPre')} <em>{t('story.headingEm1')}</em> {t('story.headingMid')} <em>{t('story.headingEm2')}</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="about-story__right">
              <p className="about-story__body">{t('story.body1')}</p>
              <p className="about-story__body">{t('story.body2')}</p>
              <p className="about-story__body">{t('story.body3')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="about-process">
        <div className="about-process__inner">
          <Reveal>
            <div className="about-process__header">
              <p className="about-process__label">{t('process.label')}</p>
              <h2 className="about-process__heading"><em>{t('process.headingEm')}</em> {t('process.headingText')}</h2>
            </div>
          </Reveal>
          <div className="about-process__list">
            {processSteps.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="about-process__row">
                  <span className="about-process__num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="about-process__meta">
                    <p className="about-process__step">{s.step}</p>
                    <h3 className="about-process__title">{s.title}</h3>
                  </div>
                  <p className="about-process__body">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
