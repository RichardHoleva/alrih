import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import ServiceCard from '../components/ServiceCard'
import ReviewCard from '../components/ReviewCard'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'
import interiorImg from '/ALRICH/images/interier.png'
import backImg from '/ALRICH/images/back.png'
import SideImg from '/ALRICH/images/side_photo.png'
import homeicon from '/ALRICH/images/icons/mi_home.png'
import interior from '/ALRICH/images/icons/Vector.png'
import visualizationIcon from '/ALRICH/images/icons/cil_3d.png'

export default function HomePage() {
  const { t } = useTranslation('home')
  const processSteps = t('process.steps', { returnObjects: true })

  return (
    <>
      <Navbar />
      <Hero />

      <section className="about">
        <div className="about__inner">
          <Reveal>
            <div className="about__left">
              <p className="about__label">{t('about.label')}</p>
              <h2 className="about__heading">
                {t('about.headingPre')} <em>{t('about.headingEm1')}</em> {t('about.headingMid')} <em>{t('about.headingEm2')}</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="about__right">
              <p className="about__body">{t('about.body1')}</p>
              <p className="about__body">{t('about.body2')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="featured">
        <div className="featured__inner">
          <Reveal>
            <div className="featured__header">
              <div>
                <p className="featured__label">{t('featured.label')}</p>
                <h2 className="featured__heading">{t('featured.headingPre')} <em>{t('featured.headingEm')}</em></h2>
              </div>
              <Link to="/projects" className="featured__view-all">{t('featured.viewAll')}</Link>
            </div>
          </Reveal>
          <div className="featured__grid">
            <Reveal delay={0}>
              <ProjectCard category="Cottage" year="2024" title="Family Cottage" image={SideImg} />
            </Reveal>
            <Reveal delay={100}>
              <ProjectCard category="Interior" year="2024" title="Family House" image={interiorImg} />
            </Reveal>
            <Reveal delay={200}>
              <ProjectCard category="Exterior" year="2024" title="Family House" image={backImg} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services__inner">
          <Reveal>
            <div className="services__header">
              <p className="services__label">{t('services.label')}</p>
              <h2 className="services__heading">{t('services.heading')}</h2>
              <p className="services__sub">{t('services.sub')}</p>
            </div>
          </Reveal>
          <div className="services__grid">
            <Reveal delay={0}>
              <ServiceCard number="01" icon={homeicon} title={t('services.arch.title')} description={t('services.arch.desc')} />
            </Reveal>
            <Reveal delay={100}>
              <ServiceCard number="02" icon={interior} title={t('services.interior.title')} description={t('services.interior.desc')} />
            </Reveal>
            <Reveal delay={200}>
              <ServiceCard number="03" icon={visualizationIcon} title={t('services.viz.title')} description={t('services.viz.desc')} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="process__inner">
          <Reveal>
            <p className="process__label">{t('process.label')}</p>
            <h2 className="process__heading"><em>{t('process.headingEm')}</em> {t('process.headingText')}</h2>
          </Reveal>
          <div className="process__timeline">
            {processSteps.map((step, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="process__step">
                  <div className="process__circle">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="process__step-title">{step.title}</h3>
                  <p className="process__step-body">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="reviews__inner">
          <Reveal>
            <p className="reviews__label">{t('reviews.label')}</p>
            <h2 className="reviews__heading">
              <strong>{t('reviews.headingStrong1')}</strong> <em>{t('reviews.headingEm')}</em> <strong>{t('reviews.headingStrong2')}</strong>
            </h2>
          </Reveal>
          <div className="reviews__grid">
            <Reveal delay={0}>
              <ReviewCard
                initials="JG"
                name="Jančo Gadžo"
                project="Private home · Bratislava"
                quote="They listened more than they drew, which is rare. The house we ended up with feels like ours, not a portfolio piece dropped on our plot."
              />
            </Reveal>
            <Reveal delay={100}>
              <ReviewCard
                initials="MN"
                name="Mária Nováková"
                project="Private cabin · Horná Stubňa"
                quote="We wanted something that felt like it had always been there. They understood that immediately."
              />
            </Reveal>
            <Reveal delay={200}>
              <ReviewCard
                initials="JG"
                name="Jančo Gadžo"
                project="Private home · Bratislava"
                quote="They listened more than they drew, which is rare. The house we ended up with feels like ours, not a portfolio piece dropped on our plot."
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
